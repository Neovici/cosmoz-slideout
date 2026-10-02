import { useHost, useLayoutEffect } from '@pionjs/pion';

/**
 * Mirrors the host's `aria-label` onto the dialog: the dialog is the
 * focused, top-layer element, and `aria-labelledby` cannot resolve
 * slotted light-DOM ids across the shadow boundary.
 */
export const useMirrorLabel = () => {
	const host = useHost<HTMLElement>();
	useLayoutEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		const label = host.getAttribute('aria-label');
		if (label) {
			dialog.setAttribute('aria-label', label);
		} else {
			dialog.removeAttribute('aria-label');
		}
	});
};
