import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useHost, useRef } from '@pionjs/pion';
import { type EdgeCtx, useStateMachine } from './use-state-machine';
import { settleCapMs } from './utils';

type State = 'closed' | 'opening' | 'open' | 'closing';
type Action = 'OPEN' | 'CLOSE' | 'SETTLE';

/** The settle hook's edge context: the surface and the settle-cap slot. */
type SettleCtx = {
	host: HTMLElement;
	timer: { current: number | undefined };
};

/**
 * Surface lifecycle with the four phase states:
 *
 * - `closed` - inert; open requests only
 * - `opening` - slide-in in flight (popover promoted, settle cap armed)
 * - `open` - visible and settled: the `open`.announce
 * - `closing` - slide-out in flight
 *
 * Rows own their establishment and undo: `setup` runs on every entry
 * (so the settle announcements ride entering `open`/`closed`, and a
 * re-appended element's resume re-establishes via the self-heal
 * edges), `teardown` runs on exit via any edge and on disconnect (an
 * armed settle never fires detached). Guards bind the idle edges to
 * the DOM's `:popover-open` truth (a closed mount commits nothing);
 * the stale case is structural - `SETTLE` has no edge from open or
 * closed. `opened` is the reactive read driving the machine.
 */
export const useSettleEvents = ({
	opened,
	onBeforeShow,
	onBeforeHide,
	onSettle,
}: {
	/** The reactive read, driving the phase machine. */
	opened: boolean;
	/** Runs before the popover is shown. */
	onBeforeShow?: () => void;
	/** Runs before the popover hides (still showing). */
	onBeforeHide?: () => void;
	/** Runs on transition settle (arg: `true` for slide-in). */
	onSettle?: (open: boolean) => void;
}) => {
	const host = useHost<HTMLElement>();
	const meta = useMeta({ onBeforeShow, onBeforeHide, onSettle });
	const timer = useRef(0);

	// named refs with live bodies - they read the stable `meta` bag at
	// run time, so caller-passed inline callbacks stay latest-wins
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
};
