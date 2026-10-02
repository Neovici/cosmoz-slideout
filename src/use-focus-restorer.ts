import { useHost, useRef } from '@pionjs/pion';

export type Focus = {
	host: HTMLElement;
	opener: HTMLElement | null;
	armed: boolean;
	/** Remembers the currently focused element as the opener, and disarms any pending restore. */
	capture(): void;
	/** Arms the pending restore when focus is inside the surface. */
	arm(): void;
	/** Walks focus back to the opener (after the close flip). */
	restore(): void;
};

/**
 * Focus restorer: remembers the opener when the surface opens, and
 * restores focus to it when the surface closes with focus still inside.
 *
 * Focus *into* the content on open is the Popover API's job (the
 * browser's popover focusing steps honor `[autofocus]` in the slotted
 * content); this hook only deals with the way back - `popover="manual"`
 * never captures the previously focused element, so the restore on
 * close cannot be native.
 */
export const useFocusRestorer = (): Focus => {
	const self = useRef<Focus>({
		host: useHost(),
		opener: null,
		armed: false,
		capture() {
			self.opener = document.activeElement as HTMLElement | null;
			self.armed = false;
		},
		arm() {
			self.armed = self.host.contains(document.activeElement);
		},
		restore() {
			const { opener, armed } = self;
			self.armed = false;
			if (!armed || !opener?.isConnected) {
				return;
			}
			// another surface is open and holds focus: keep it there
			const top = document.activeElement?.closest?.(':popover-open');
			if (top && top !== self.host) {
				return;
			}
			opener.focus({ preventScroll: true });
		},
	}).current as Focus;
	return self;
};
