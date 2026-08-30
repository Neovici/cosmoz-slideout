import { useCallback, useEffect, useProperty, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { animationTimeoutMs, dropFrom } from './utils';

const openSurfaces: HTMLElement[] = [];
const dropFromStack = (surface: HTMLElement) => dropFrom(openSurfaces, surface);

const surfaceOf = (host: HTMLElement) =>
	host.shadowRoot?.querySelector<HTMLElement>('[popover]') ?? undefined;

const restoreFocus = (opener: HTMLElement | null | undefined) => {
	if (opener?.isConnected) opener.focus({ preventScroll: true });
};

/**
 * Wire the open/close lifecycle onto the popover surface, driven by the reactive
 * `opened` property (two-way, via `useProperty` - consumers bind `.opened` and
 * `@opened-changed`). The element persists in the DOM across open/close cycles.
 *
 * - `opened` false -> true shows the popover (slide-in) and moves focus into it;
 * - `opened` true -> false plays the slide-out, then dispatches a bubbling `close`
 *   event, restores focus to the opener, and calls `onClose` - the element is NOT
 *   removed; it stays connected and can be re-opened;
 * - escape closes the top-most slideout (unless `no-escape` is set) by flipping
 *   `opened` to false.
 *
 * The surface is `popover="manual"` (no light-dismiss), so it only opens/closes via
 * our own show/hide - close detection keys off `transitionend`, with an
 * `animationTimeoutMs` fallback for reduced-motion / detached surfaces.
 */
export const useClose = (host: SlideoutElement) => {
	const [opened, setOpened] = useProperty<boolean>('opened', false);

	const opener = useRef<HTMLElement | null>(null); // captured at open time
	const shouldRestore = useRef(false); // captured at close time
	const closing = useRef(false);
	const closeTimer = useRef(0);

	const finish = useCallback(() => {
		if (!closing.current) {
			return;
		}

		closing.current = false;
		window.clearTimeout(closeTimer.current);

		const surface = surfaceOf(host);
		if (surface) dropFromStack(surface);

		if (shouldRestore.current) {
			restoreFocus(opener.current);
		}

		host.dispatchEvent(new Event('close', { bubbles: true }));
		host.onClose?.();
	}, []);

	const open = useCallback(() => {
		if (!host.opened) setOpened(true);
	}, []);
	const close = useCallback(() => {
		if (host.opened) setOpened(false);
	}, []);
	host.open = open;
	host.close = close;

	const activate = useCallback((surface: HTMLElement) => {
		opener.current = document.activeElement as HTMLElement | null;
		closing.current = false; // cancel a stale close cycle...
		window.clearTimeout(closeTimer.current); // ...and its fallback timer

		if (!surface.matches(':popover-open')) {
			surface.showPopover(); // @starting-style plays the slide-in
		}
		if (openSurfaces.indexOf(surface) === -1) {
			openSurfaces.push(surface);
		}
		if (!host.noAutofocus) {
			surface.focus({ preventScroll: true });
		}
	}, []);

	const deactivate = useCallback((surface: HTMLElement) => {
		if (!surface.matches(':popover-open')) {
			return; // initial mount / never opened - nothing to close
		}

		shouldRestore.current = host.contains(document.activeElement);
		dropFromStack(surface);
		closing.current = true;
		window.clearTimeout(closeTimer.current);
		closeTimer.current = window.setTimeout(finish, animationTimeoutMs(surface));
		surface.hidePopover(); // plays the slide-out -> transitionend -> finish
	}, []);

	// mount-only: persistent listeners
	useEffect(() => {
		const surface = surfaceOf(host);
		if (!surface) {
			return;
		}

		const onTransitionEnd = (e: TransitionEvent) => {
			if (
				e.target === surface &&
				e.propertyName === 'translate' &&
				closing.current
			) {
				finish();
			}
		};

		const onKeydown = (e: KeyboardEvent) => {
			if (
				e.key === 'Escape' &&
				!host.noEscape &&
				openSurfaces[openSurfaces.length - 1] === surface
			) {
				e.preventDefault();
				close();
			}
		};

		const onRequestClose = (e: Event) => {
			if (host.opened) {
				e.stopPropagation();
				close();
			}
		};

		surface.addEventListener('transitionend', onTransitionEnd as EventListener);
		document.addEventListener('keydown', onKeydown);
		host.addEventListener('request-close', onRequestClose);

		return () => {
			window.clearTimeout(closeTimer.current);
			dropFromStack(surface);
			surface.removeEventListener(
				'transitionend',
				onTransitionEnd as EventListener
			);
			document.removeEventListener('keydown', onKeydown);
			host.removeEventListener('request-close', onRequestClose);
		};
	}, []);

	useEffect(() => {
		const surface = surfaceOf(host);
		if (!surface) {
			return;
		}
		if (opened) {
			activate(surface);
		} else {
			deactivate(surface);
		}
	}, [opened]);

	return { close, open };
};
