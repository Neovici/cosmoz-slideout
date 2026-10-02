import { useCallback, useEffect, useHost } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { useCloseFallback } from './use-close-fallback';
import { useCloseWatcher } from './use-close-watcher';
import { useFocusRestorer } from './use-focus-restorer';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';

/**
 * The slideout's lifecycle: `opened` (the reactive attribute read,
 * reconciled from DOM truth) drives an idempotent popover flip - show
 * when the attribute says so and the platform disagrees, hide in the
 * other mismatch, no-op on agreement. Focus capture precedes
 * `showPopover` (the browser's focusing steps read it synchronously);
 * restore follows `hidePopover`. No phase bookkeeping: nothing here is
 * asynchronous, races are impossible, and a flip is visible to
 * consumers through the platform's own `toggle` event.
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

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};
