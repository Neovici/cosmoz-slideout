import { useHost, useLayoutEffect } from '@pionjs/pion';

/**
 * Mirrors the host's label onto the inner dialog: the dialog is the
 * focused, top-layer element, and `aria-labelledby` into slotted
 * light-DOM content cannot resolve across the shadow boundary - the
 * string label on the dialog is the reliable name.
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
