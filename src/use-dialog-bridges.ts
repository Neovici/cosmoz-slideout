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
