import { useEffect, useHost } from '@pionjs/pion';

/**
 * The dialog's platform dismissal paths, bridged onto the funnel: Esc
 * `cancel` (cancelable - the veto holds the drawer open), the dialog's
 * `close` record, and the backdrop click (only the backdrop hits the
 * bare dialog). Every close source ends in the cancelable
 * `opened-changed`.
 */
export const useDialogBridges = (
	close: () => boolean,
	reflectOpened: (next: boolean) => void,
) => {
	const host = useHost<HTMLElement>();

	useEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		const onCancel = (e: Event) => {
			if (close() === false) {
				e.preventDefault();
			}
		};
		const onClose = () => reflectOpened(false);
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
};

/**
 * The flip: `opened` reconciles against `dialog.open` -
 * `showModal()` owns inertness, the focus trap and focus restoration.
 */
export const useDialogReconcile = (opened: boolean) => {
	const host = useHost<HTMLElement>();

	useEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		if (opened && !dialog.open) {
			dialog.showModal();
		} else if (!opened && dialog.open) {
			// recorded by the dialog's `close`
			dialog.close();
		}
	}, [opened]); // host: the element's own, never reassigned
};
