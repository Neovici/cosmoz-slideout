import { useEffect, useHost } from '@pionjs/pion';

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
