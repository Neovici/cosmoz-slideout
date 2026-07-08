import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { animationTimeoutMs, dropFrom } from './utils';

// Stack of currently-open surfaces so Escape only closes the top-most one.
const openSurfaces: HTMLElement[] = [];
const dropFromStack = (surface: HTMLElement) => dropFrom(openSurfaces, surface);

const surfaceOf = (host: HTMLElement) =>
	host.shadowRoot?.querySelector<HTMLElement>('[popover]') ?? undefined;

/** Show the popover and move focus into it; returns whether focus was moved. */
const activate = (host: SlideoutElement, surface: HTMLElement) => {
	if (!surface.matches(':popover-open')) surface.showPopover();
	openSurfaces.push(surface);
	if (host.hasAttribute('no-autofocus')) return false;
	surface.focus({ preventScroll: true });
	return true;
};

/** Return focus to the opener if it is still in the document. */
const restoreFocus = (opener: HTMLElement | null) => {
	if (opener?.isConnected) opener.focus({ preventScroll: true });
};

/**
 * Wire open/close lifecycle onto the popover surface. Returns a cleanup fn.
 * - shows the popover on connect (slide-in) and moves focus into it;
 * - Escape closes the top-most slideout (unless `no-escape` is set);
 * - `opened` is dispatched once the slide-in settles;
 * - on close, the slide-out plays, then a bubbling `close` event fires, focus
 *   returns to the opener, and `onClose` is called — the element is NOT removed;
 *   the parent owns that.
 */
const wireLifecycle = (
	host: SlideoutElement,
	surface: HTMLElement,
	close: () => void,
	shouldRestore: { current: boolean | undefined }
) => {
	const opener = document.activeElement as HTMLElement | null;
	let closing = false,
		opened = false,
		finished = false,
		movedFocus = false,
		closeTimer = 0;

	const dispatchOpened = () => {
		if (opened || closing) return;
		opened = true;
		host.dispatchEvent(new Event('opened', { bubbles: true }));
	};
	const finish = () => {
		if (finished) return;
		finished = true;
		dropFromStack(surface);

		if (movedFocus && shouldRestore.current) {
			restoreFocus(opener);
		}

		host.dispatchEvent(new Event('close', { bubbles: true }));
		host.onClose?.();
	};

	const onTransitionEnd = (e: TransitionEvent) => {
		if (e.target !== surface || e.propertyName !== 'translate') {
			return;
		}
		if (closing) {
			finish();
		} else {
			dispatchOpened();
		}
	};
	const onToggle = (e: Event) => {
		if ((e as ToggleEvent).newState !== 'closed') return;
		closing = true;
		closeTimer = window.setTimeout(finish, animationTimeoutMs(surface));
	};
	const onKeydown = (e: KeyboardEvent) => {
		if (
			e.key === 'Escape' &&
			!host.hasAttribute('no-escape') &&
			openSurfaces[openSurfaces.length - 1] === surface
		) {
			e.preventDefault();
			close();
		}
	};

	surface.addEventListener('transitionend', onTransitionEnd as EventListener);
	surface.addEventListener('toggle', onToggle);
	document.addEventListener('keydown', onKeydown);
	movedFocus = activate(host, surface);
	const openTimer = window.setTimeout(
		dispatchOpened,
		animationTimeoutMs(surface)
	);

	return () => {
		window.clearTimeout(openTimer);
		window.clearTimeout(closeTimer);
		dropFromStack(surface);
		surface.removeEventListener(
			'transitionend',
			onTransitionEnd as EventListener
		);
		surface.removeEventListener('toggle', onToggle);
		document.removeEventListener('keydown', onKeydown);
	};
};

export const useClose = (host: SlideoutElement) => {
	const shouldRestore = useRef(false);
	const close = useCallback(() => {
		const surface = surfaceOf(host);
		if (surface?.matches(':popover-open')) {
			shouldRestore.current = host.contains(document.activeElement);
			surface.hidePopover();
		}
	}, []);
	host.close = close;

	useEffect(() => {
		const surface = surfaceOf(host);
		if (!surface) return;
		return wireLifecycle(host, surface, close, shouldRestore);
	}, []);

	return { close };
};
