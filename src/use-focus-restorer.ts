import { useHost, useRef } from '@pionjs/pion';

type FocusRestorer = {
	host: HTMLElement;
	opener: HTMLElement | null;
	shouldRestore: boolean;
	onBeforeShow(): void;
	onBeforeHide(): void;
	onSettle(open: boolean): void;
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
export const useFocusRestorer = (): FocusRestorer => {
	const self = useRef<FocusRestorer>({
		host: useHost(),
		opener: null,
		shouldRestore: false,
		onBeforeShow() {
			self.opener = document.activeElement as HTMLElement | null;
			self.shouldRestore = false;
		},
		onBeforeHide() {
			self.shouldRestore = self.host.contains(document.activeElement);
		},
		onSettle(open: boolean) {
			if (open) {
				return;
			}
			const { opener, shouldRestore } = self;
			self.shouldRestore = false;
			if (shouldRestore && opener?.isConnected) {
				opener.focus({ preventScroll: true });
			}
		},
	}).current as FocusRestorer;
	return self;
};
