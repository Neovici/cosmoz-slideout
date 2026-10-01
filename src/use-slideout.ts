import { useCallback, useEffect, useHost } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { useCloseFallback } from './use-close-fallback';
import { useCloseWatcher } from './use-close-watcher';
import { useEggTimer } from './use-egg-timer';
import { useFocusRestorer } from './use-focus-restorer';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';
import { useStateMachine } from './use-state-machine';

type State = 'closed' | 'opening' | 'open' | 'closing';
type Action = 'OPEN' | 'CLOSE' | 'SETTLE';

/**
 * The slideout's lifecycle: open()/close() funnel every close source
 * through the cancelable `opened-changed` contract; the settle machine
 * is `useReducer` inverted - it runs this surface's phase effects
 * (popover promotion/demotion, the settle cap, the settled `open`/
 * `close` announce, focus restoration) synchronously instead of
 * rendering, as a cleanup ledger; `opened` (the reactive attribute
 * read) dispatches the flips and the reconnect resume.
 */
export const useSlideout = ({ noEscape = false }: SlideoutElement) => {
	const [opened, setOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });
	useCloseWatcher({ opened, noEscape, close });
	useCloseFallback({ opened, noEscape, close });

	const host = useHost<HTMLElement>();
	const focus = useFocusRestorer();
	const timer = useEggTimer();

	const machine = useStateMachine<State, Action>('closed', {
		closed: {
			setup: [
				() => {
					host.dispatchEvent(new Event('close', { bubbles: true }));
					focus.restore();
				},
			],
			transitions: {
				OPEN: {
					to: 'opening',
					guard: [() => !host.matches(':popover-open')],
				},
			},
		},
		opening: {
			// focus.capture precedes showPopover: the browser's popover
			// focusing steps read it synchronously
			setup: [
				focus.capture,
				() => host.showPopover(),
				({ send }) => timer.arm(() => send('SETTLE')),
			],
			teardown: [timer.clear],
			transitions: {
				// self-heal: detached mid-flight, re-appended per the
				// attribute's truth - the resume re-runs this setup
				OPEN: { to: 'opening' },
				CLOSE: { to: 'closing' },
				SETTLE: { to: 'open' },
			},
		},
		open: {
			setup: [
				() => {
					host.dispatchEvent(new Event('open', { bubbles: true }));
					focus.restore();
				},
			],
			transitions: {
				CLOSE: {
					to: 'closing',
					guard: [() => host.matches(':popover-open')],
				},
			},
		},
		closing: {
			setup: [
				focus.arm,
				() => host.hidePopover(),
				({ send }) => timer.arm(() => send('SETTLE')),
			],
			teardown: [timer.clear],
			transitions: {
				// self-heal, mirror of opening.OPEN
				CLOSE: { to: 'closing' },
				OPEN: { to: 'opening' },
				SETTLE: { to: 'closed' },
			},
		},
	});

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
