import { useCallback } from '@pionjs/pion';
import { useAttribute } from './use-attribute';
import { useDialogBridges, useDialogReconcile } from './use-dialog';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';

/**
 * The modal slideout's lifecycle: `opened` reconciles against
 * `dialog.open`; the dialog's dismissal paths are bridged onto the
 * funnel.
 */
export const useModalSlideout = () => {
	const [opened, setOpened, reflectOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });

	useDialogBridges(close, reflectOpened);
	useDialogReconcile(opened);

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};
