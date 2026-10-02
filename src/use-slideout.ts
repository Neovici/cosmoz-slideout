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
 * The slideout's lifecycle: `opened` reconciles against
 * `:popover-open`; the truth check and the platform call share one
 * synchronous block, so the throwing popover states cannot arise.
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
			// the popover focusing steps read it synchronously
			focus.capture();
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
