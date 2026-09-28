import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
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
 * `opened` **attribute** (two-way, via `useAttribute` - consumers bind `.opened` /
 * `?opened` and listen for the cancelable `opened-changed`). The element persists in
 * the DOM across open/close cycles.
 *
 * - `opened` false -> true shows the popover (slide-in), moves focus into it, and
 *   dispatches a bubbling `open` once the enter transition settles;
 * - `opened` true -> false plays the slide-out, then dispatches a bubbling `close`
 *   event, restores focus to the opener, and calls `onClose` - the element is NOT
 *   removed; it stays connected and can be re-opened;
 * - Escape closes the top-most slideout (unless `no-escape`) by flipping `opened`;
 * - a bubbling `request-close` from a slotted child closes it too, unless a listener
 *   calls `preventDefault()` (an "unsaved changes" veto). Removing the `opened`
 *   attribute (e.g. from devtools) closes it as well, since `opened` is observed.
 *
 * The surface is `popover="manual"` (no light-dismiss); enter/exit are detected via
 * `transitionend`, each with an `animationTimeoutMs` fallback (reduced-motion /
 * detached surfaces).
 */
export const useClose = (host: SlideoutElement) => {
	const [opened, setOpened] = useAttribute(host, 'opened');

	const lc = useRef({
		opener: null as HTMLElement | null,
		shouldRestore: false,
		closing: false,
		opening: false,
		closeTimer: 0,
		openTimer: 0,
	});

	const settleOpen = useCallback(() => {
		const s = lc.current!;
		if (!s.opening) return;
		s.opening = false;
		window.clearTimeout(s.openTimer);
		host.dispatchEvent(new Event('open', { bubbles: true }));
	}, []);

	const finish = useCallback(() => {
		const s = lc.current!;
		if (!s.closing) return;
		s.closing = false;
		window.clearTimeout(s.closeTimer);

		const surface = surfaceOf(host);
		if (surface) dropFromStack(surface);
		if (s.shouldRestore) restoreFocus(s.opener);

		host.dispatchEvent(new Event('close', { bubbles: true }));
		host.onClose?.();
	}, []);

	const open = useCallback(() => {
		if (!host.opened) setOpened(true);
	}, []);
	const close = useCallback(() => {
		if (host.opened) setOpened(false);
	}, []);
	Object.assign(host, { open, close });

	const activate = useCallback((surface: HTMLElement) => {
		const s = lc.current!;
		s.opener = document.activeElement as HTMLElement | null;
		s.closing = false; // cancel a stale close cycle...
		window.clearTimeout(s.closeTimer); // ...and its fallback timer

		if (!surface.matches(':popover-open')) {
			surface.showPopover(); // @starting-style plays the slide-in
		}
		if (openSurfaces.indexOf(surface) === -1) {
			openSurfaces.push(surface);
		}
		if (!host.noAutofocus) {
			surface.focus({ preventScroll: true });
		}

		s.opening = true;
		window.clearTimeout(s.openTimer);
		s.openTimer = window.setTimeout(settleOpen, animationTimeoutMs(surface));
	}, []);

	const deactivate = useCallback((surface: HTMLElement) => {
		const s = lc.current!;
		s.opening = false;
		window.clearTimeout(s.openTimer);

		if (!surface.matches(':popover-open')) {
			return;
		}

		s.shouldRestore = host.contains(document.activeElement);
		dropFromStack(surface);
		s.closing = true;
		window.clearTimeout(s.closeTimer);
		s.closeTimer = window.setTimeout(finish, animationTimeoutMs(surface));
		surface.hidePopover(); // plays the slide-out -> transitionend -> finish
	}, []);

	// mount-only: persistent listeners
	useEffect(() => {
		const surface = surfaceOf(host);
		if (!surface) {
			return;
		}

		const onTransitionEnd = (e: TransitionEvent) => {
			if (e.target !== surface || e.propertyName !== 'translate') {
				return;
			}
			if (lc.current!.closing) {
				finish();
			} else {
				settleOpen();
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
			if (host.opened && !e.defaultPrevented) {
				e.stopPropagation();
				close();
			}
		};

		surface.addEventListener('transitionend', onTransitionEnd as EventListener);
		document.addEventListener('keydown', onKeydown);
		host.addEventListener('request-close', onRequestClose);

		return () => {
			window.clearTimeout(lc.current!.closeTimer);
			window.clearTimeout(lc.current!.openTimer);
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
