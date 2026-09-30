import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { animationTimeoutMs } from './utils';

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
 * - a browser-held `CloseWatcher` session is opened for every open slideout (unless
 *   `no-escape`): the UA routes Escape (and the Android back button) to the most
 *   recently opened watcher - newest-first across multiple slideouts, regardless of
 *   where focus is. `preventDefault()` on the cancelable `opened-changed` vetoes;
 *   engines without `CloseWatcher` fall back to a per-instance document keydown;
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
		watcher: null as CloseWatcher | null,
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
		s.watcher?.destroy();
		s.watcher = null;

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

	// Browser-held close-request session (one per open slideout): the UA routes
	// Escape / back-button to the most recently opened watcher - newest-first
	// across multiple slideouts, regardless of where focus is. The veto contract
	// is the same as every close source: the app preventDefault()s the cancelable
	// `opened-changed`, and bailing here keeps the session alive for the next try.
	const attachWatcher = useCallback(
		(watcher: CloseWatcher | null) => {
			const s = lc.current!;
			s.watcher?.destroy();
			if (!watcher) {
				s.watcher = null;
				return;
			}
			watcher.oncancel = (e) => {
				// the ONLY dispatch for UA-initiated closes (Escape / back button):
				// attempt the real mutation here - vetoed -> watcher stays alive for
				// the next press; applied -> the attribute flips and the lifecycle
				// effect drives hidePopover (which ends the session)
				if (!setOpened(false)) e.preventDefault();
			};
			s.watcher = watcher;
		},
		[setOpened]
	);

	const activate = useCallback((surface: HTMLElement) => {
		const s = lc.current!;
		s.opener = document.activeElement as HTMLElement | null;
		s.closing = false; // cancel a stale close cycle...
		window.clearTimeout(s.closeTimer); // ...and its fallback timer

		if (!surface.matches(':popover-open')) {
			surface.showPopover(); // @starting-style plays the slide-in
		}
		attachWatcher(
			!host.noEscape && 'CloseWatcher' in window ? new CloseWatcher() : null
		);

		if (!host.noAutofocus) {
			surface.focus({ preventScroll: true });
		}

		s.opening = true;
		window.clearTimeout(s.openTimer);
		s.openTimer = window.setTimeout(settleOpen, animationTimeoutMs(surface));
	}, [attachWatcher]);

	const deactivate = useCallback((surface: HTMLElement) => {
		const s = lc.current!;
		s.opening = false;
		window.clearTimeout(s.openTimer);

		if (!surface.matches(':popover-open')) {
			return;
		}

		s.shouldRestore = host.contains(document.activeElement);
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
			// fallback for engines without CloseWatcher: single-instance friendly,
			// no arbitration (the UA-held watcher stack covers the multi-open case)
			if (e.key === 'Escape' && !host.noEscape && host.opened) {
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
		if (!('CloseWatcher' in window)) {
			document.addEventListener('keydown', onKeydown);
		}
		host.addEventListener('request-close', onRequestClose);

	return () => {
		window.clearTimeout(lc.current!.closeTimer);
		window.clearTimeout(lc.current!.openTimer);
		attachWatcher(null);
		surface.removeEventListener(
			'transitionend',
			onTransitionEnd as EventListener
		);
		if (!('CloseWatcher' in window)) {
			document.removeEventListener('keydown', onKeydown);
		}
		host.removeEventListener('request-close', onRequestClose);
	};
}, [attachWatcher]);

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
