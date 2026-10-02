import { useCallback, useEffect, useHost } from '@pionjs/pion';
import { useAttribute } from './use-attribute';
import { useEggTimer } from './use-egg-timer';
import { useFocusRestorer } from './use-focus-restorer';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';
import { useStateMachine } from './use-state-machine';

type State = 'closed' | 'opening' | 'open' | 'closing';
type Action = 'OPEN' | 'CLOSE' | 'SETTLE';

/**
 * The modal slideout's lifecycle: the UA owns dismissal (Esc, light
 * dismiss, a sibling auto popover) - the dismissal already happened,
 * so `toggle(closed)` syncs `opened` through `useAttribute`'s
 * `reflect()`. Programmatic closes keep the cancelable funnel.
 */
export const useModalSlideout = () => {
	const [opened, setOpened, reflectOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });

	const host = useHost<HTMLElement>();
	const focus = useFocusRestorer();
	const timer = useEggTimer();

	const machine = useStateMachine<State, Action>('closed', {
		closed: {
			enter: [
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
			enter: [
				focus.capture,
				() => host.showPopover(),
				({ send }) => timer.arm(() => send('SETTLE')),
			],
			exit: [timer.clear],
			transitions: {
				OPEN: { to: 'opening' },
				CLOSE: { to: 'closing' },
				SETTLE: { to: 'open' },
			},
		},
		open: {
			enter: [
				() => {
					host.dispatchEvent(new Event('open', { bubbles: true }));
					focus.restore();
				},
			],
			transitions: {
				CLOSE: { to: 'closing' },
			},
		},
		closing: {
			enter: [
				focus.arm,
				() => {
					if (host.matches(':popover-open')) {
						host.hidePopover();
					}
				},
				({ send }) => timer.arm(() => send('SETTLE')),
			],
			exit: [timer.clear],
			transitions: {
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
				machine.send('SETTLE');
			}),
		[],
	);

	useEffect(() => {
		machine.send(opened ? 'OPEN' : 'CLOSE');
	}, [opened]);

	useEffect(() => {
		const onToggle = (e: Event) => {
			if (
				(e as ToggleEvent).newState === 'closed' &&
				host.hasAttribute('opened')
			) {
				reflectOpened(false);
			}
		};
		host.addEventListener('toggle', onToggle);
		return () => host.removeEventListener('toggle', onToggle);
	}, [reflectOpened]);

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};
