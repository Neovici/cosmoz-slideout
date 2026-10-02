import { useCallback, useEffect, useHost } from '@pionjs/pion';
import { useAttribute } from './use-attribute';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';

/**
 * The modal slideout's lifecycle: an idempotent reconcile against
 * `dialog.open` - `showModal()` owns inertness, the focus trap and
 * focus restoration. The platform dismissal paths (Esc `cancel`,
 * backdrop click, the dialog's `close` record) are bridged onto the
 * funnel: every close source funnels through the cancelable
 * `opened-changed`.
 */
export const useModalSlideout = () => {
	const [opened, setOpened, reflectOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });

	const host = useHost<HTMLElement>();

	useEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		const isOpen = dialog.open;
		if (opened && !isOpen) {
			dialog.showModal();
		} else if (!opened && isOpen) {
			dialog.close(); // recorded by the dialog's `close`
		}
	}, [opened]); // host: the element's own, never reassigned

	// the dialog's platform paths: the listeners' lifetime is the
	// dialog's (a shadow child)
	useEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		// the cancelable dismissal veto: a preventDefault aborts the
		// platform's close
		const onCancel = (e: Event) => {
			if (close() === false) {
				e.preventDefault();
			}
		};
		// the record of the flip, whatever the closer
		const onClose = () => reflectOpened(false);
		// only the backdrop hits the bare dialog: an outside click
		const onClick = (e: Event) => {
			if (e.target === dialog) {
				close();
			}
		};
		dialog.addEventListener('cancel', onCancel);
		dialog.addEventListener('close', onClose);
		dialog.addEventListener('click', onClick);
		return () => {
			dialog.removeEventListener('cancel', onCancel);
			dialog.removeEventListener('close', onClose);
			dialog.removeEventListener('click', onClick);
		};
	}, []);

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};
