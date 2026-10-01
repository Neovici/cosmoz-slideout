import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useHost, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { useCloseFallback } from './use-close-fallback';
import { useCloseWatcher } from './use-close-watcher';
import { useFocusRestorer } from './use-focus-restorer';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';
import { type EdgeCtx, useStateMachine } from './use-state-machine';
import { settleCapMs } from './utils';

type State = 'closed' | 'opening' | 'open' | 'closing';
type Action = 'OPEN' | 'CLOSE' | 'SETTLE';

/** The lifecycle's edge context: the surface and the settle-cap slot. */
type SettleCtx = {
	host: HTMLElement;
	timer: { current: number | undefined };
};

/**
 * The slideout's lifecycle, composed from independent hooks:
 *
 * - `opened` is the reactive attribute state (`useAttribute('opened')`);
 *   `open()`/`close()` funnel every close source through the cancelable
 *   `opened-changed` contract.
 * - the settle machine (below) promotes/hides the popover and fires
 *   the settled `open`/`close` events when the slide transition
 *   completes.
 * - `useHandleRequestClose` - slotted content's cancelable
 *   `request-close` asks the surface to close.
 * - `useCloseWatcher` - the per-instance `CloseWatcher` session (Escape
 *   + Android back).
 * - `useCloseFallback` - Escape on engines without `CloseWatcher`.
 * - `useFocusRestorer` restores focus to the opener on close.
 * - `useFullScreen` owns the reactive `full-screen` attribute.
 * - `useImperativeApi` assigns the controls onto the base element's
 *   `controls` bag, so prototype methods delegate to live closures.
 *
 * The settle lifecycle, as a four-phase machine:
 *
 * - `closed` - inert; open requests only
 * - `opening` - slide-in in flight (popover promoted, settle cap armed)
 * - `open` - visible and settled: the `open` announce
 * - `closing` - slide-out in flight
 *
 * Rows own their establishment and undo: `setup` runs on every entry
 * (so the settle announcements ride entering `open`/`closed`, and a
 * re-appended element's resume re-establishes via the self-heal
 * edges), `teardown` runs on exit via any edge and on disconnect (an
 * armed settle never fires detached). Guards bind the flight-entry
 * edges to the DOM's `:popover-open` truth (a closed mount opens
 * nothing); the stale case is structural - `SETTLE` has no edge from
 * `open`/`closed`. `opened` is the reactive read driving the machine.
 */
export const useSlideout = ({ noEscape = false }: SlideoutElement) => {
	const [opened, setOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });
	useCloseWatcher({ opened, noEscape, close });
	useCloseFallback({ opened, noEscape, close });

	const host = useHost<HTMLElement>();
	const focusRestorer = useFocusRestorer();
	const meta = useMeta({
		onBeforeShow: focusRestorer.onBeforeShow,
		onBeforeHide: focusRestorer.onBeforeHide,
		onSettle: focusRestorer.onSettle,
	});
	const timer = useRef(0);

	// named refs with live bodies - they read the stable `meta` bag at
	// run time, so the restorer's methods stay latest-wins
	const beginShow = useCallback(() => meta.onBeforeShow?.(), []);
	const beginHide = useCallback(() => meta.onBeforeHide?.(), []);

	const settleOpened = useCallback(() => {
		host.dispatchEvent(new Event('open', { bubbles: true }));
		meta.onSettle?.(true);
	}, []);

	const settleClosed = useCallback(() => {
		host.dispatchEvent(new Event('close', { bubbles: true }));
		meta.onSettle?.(false);
	}, []);

	const showPopover = useCallback(() => host.showPopover(), []);
	const hidePopover = useCallback(() => host.hidePopover(), []);

	const armCap = useCallback(
		({ send, timer }: EdgeCtx<State, Action, SettleCtx>) => {
			timer.current = window.setTimeout(() => send('SETTLE'), settleCapMs);
		},
		[],
	);

	// the flight rows' teardown: retire the cap (an armed settle must
	// not fire detached or after the phase resolved some other way)
	const clearCap = useCallback(
		({ timer }: EdgeCtx<State, Action, SettleCtx>) => {
			window.clearTimeout(timer.current);
		},
		[],
	);

	const machine = useStateMachine<State, Action, SettleCtx>(
		'closed',
		{
			closed: {
				setup: [settleClosed],
				transitions: {
					// opener capture (onBeforeShow) precedes showPopover: the
					// popover's focusing steps read it synchronously
					OPEN: {
						to: 'opening',
						guard: [({ host }) => !host.matches(':popover-open')],
					},
				},
			},
			opening: {
				setup: [beginShow, showPopover, armCap],
				teardown: [clearCap],
				transitions: {
					// self-heal: detached mid-flight, re-appended per the
					// attribute's truth - the resume re-runs this setup
					OPEN: { to: 'opening' },
					CLOSE: { to: 'closing' },
					SETTLE: { to: 'open' },
				},
			},
			open: {
				setup: [settleOpened],
				transitions: {
					CLOSE: {
						to: 'closing',
						guard: [({ host }) => host.matches(':popover-open')],
					},
				},
			},
			closing: {
				setup: [beginHide, hidePopover, armCap],
				teardown: [clearCap],
				transitions: {
					// self-heal, mirror of opening.OPEN
					CLOSE: { to: 'closing' },
					OPEN: { to: 'opening' },
					SETTLE: { to: 'closed' },
				},
			},
		},
		{ host, timer },
	);

	useEffect(
		() =>
			host.addEventListener('transitionend', (e) => {
				if (e.target !== host || e.propertyName !== 'translate') {
					return;
				}
				// settle what is in flight; a settle during a flip race (e.g.
				// transitionend after re-open) settles the NEW phase
				machine.send('SETTLE');
			}),
		[],
	);

	// the flip: fires on mount, `opened` flips and reconnects (the
	// resume); churn re-runs hit guards and no-op
	useEffect(() => {
		machine.send(opened ? 'OPEN' : 'CLOSE');
	}, [opened]);

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};
