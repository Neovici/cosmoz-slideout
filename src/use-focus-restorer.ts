import { useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';

type FocusRestorer = {
	opener: HTMLElement | null;
	shouldRestore: boolean;
	onBeforeShow(): void;
	onBeforeHide(): void;
	onSettle(open: boolean): void;
};

/**
 * Focus restorer: bookkeeping around the open/close lifecycle - remembers
 * the opener when the surface opens, and restores focus to it when the
 * surface closes with focus still inside.
 *
 * Focus *into* the content on open is the Popover API's job (the browser's
 * popover focusing steps honor `[autofocus]` in the slotted content, and
 * authors can target the surface itself); this hook only deals with the
 * way back - `popover="manual"` never captures the previously focused
 * element, so the restore on close cannot be native. Everything, callbacks
 * included, lives in one ref: the returned object has a stable identity,
 * so it can be handed to a lifecycle hook without memoization.
 */
export const useFocusRestorer = (host: SlideoutElement): FocusRestorer =>
	useRef<FocusRestorer>({
		opener: null,
		shouldRestore: false,
		onBeforeShow() {
			this.opener = document.activeElement as HTMLElement | null;
			this.shouldRestore = false;
		},
		onBeforeHide() {
			this.shouldRestore = host.contains(document.activeElement);
		},
		onSettle(open: boolean) {
			if (open) {
				return;
			}
			const { opener, shouldRestore } = this;
			this.shouldRestore = false;
			if (shouldRestore && opener?.isConnected) {
				opener.focus({ preventScroll: true });
			}
		},
	}).current as FocusRestorer;
