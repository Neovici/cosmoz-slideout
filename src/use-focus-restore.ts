import { useCallback, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';

/**
 * Focus bookkeeping around the open/close lifecycle: remembers the opener
 * when the surface opens, and restores focus to it when the surface closes
 * with focus still inside.
 *
 * Focus *into* the content on open is the Popover API's job (the browser's
 * popover focusing steps honor `[autofocus]` in the slotted content, and
 * authors can target the surface itself); this hook only deals with the
 * way back - `popover="manual"` never captures the previously focused
 * element, so the restore on close cannot be native.
 */
export const useFocusRestore = (host: SlideoutElement) => {
	const state = useRef({
		opener: null as HTMLElement | null,
		shouldRestore: false,
	});

	const capture = useCallback(() => {
		state.current!.opener = document.activeElement as HTMLElement | null;
		state.current!.shouldRestore = false;
	}, []);

	const markInside = useCallback(() => {
		state.current!.shouldRestore = host.contains(document.activeElement);
	}, []);

	const restore = useCallback(() => {
		const { opener, shouldRestore } = state.current!;
		state.current!.shouldRestore = false;
		if (shouldRestore && opener?.isConnected) {
			opener.focus({ preventScroll: true });
		}
	}, []);

	return { capture, markInside, restore };
};
