import { useCallback, useEffect, useHost } from '@pionjs/pion';
import { useAttribute } from './use-attribute';
import { useFocusRestorer } from './use-focus-restorer';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';

/**
 * The modal slideout's lifecycle. The UA owns dismissal (`popover="auto"`
 * - Esc, light dismiss, a sibling auto popover): the platform flips
 * `:popover-open` without touching the attribute, so the `toggle` event
 * is the bridge that records the dismissal into `opened` (a silent
 * write - the platform's own `toggle` is the record-and-timing channel,
 * there is no veto for what already happened). Programmatic closes keep
 * the cancelable funnel. The flip itself is the same idempotent
 * reconcile as the non-modal surface.
 */
export const useModalSlideout = () => {
	const [opened, setOpened, reflectOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });

	const host = useHost<HTMLElement>();
	const focus = useFocusRestorer();

	useEffect(() => {
		const isOpen = host.matches(':popover-open');
		if (opened && !isOpen) {
			focus.capture(); // precedes showPopover: the focusing steps read it
			host.showPopover();
		} else if (!opened && isOpen) {
			focus.arm();
			host.hidePopover();
			focus.restore();
		}
	}, [opened, host, focus]);

	// UA dismissal bridge: `toggle` is the only observable (the
	// attribute is untouched); the silent write re-renders, whose
	// reconcile finds agreement - the platform did the flip
	useEffect(() => {
		const onToggle = (e: Event) => {
			if ((e as ToggleEvent).newState === 'closed') {
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
