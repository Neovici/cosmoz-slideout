import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';

/**
 * Escape and close-request plumbing.
 *
 * Per open surface a `CloseWatcher` session is held (Escape + Android
 * back; newest-first across stacked slideouts as the user agent routes
 * close requests) and destroyed on close; the keydown fallback keeps
 * Escape working on engines without `CloseWatcher` (e.g. Safari - not
 * Baseline); slotted content closes the surface through the cancelable
 * `request-close` event.
 *
 * Every close funnels through the `close` control, i.e. the cancelable
 * `opened-changed` contract (watcher `cancel` / `request-close`
 * `preventDefault()`).
 */
export const useEscapeClose = (
	host: SlideoutElement,
	close: () => void | boolean,
) => {
	const watcher = useRef<CloseWatcher | null>(null);

	const onEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape' && !host.noEscape && host.opened) {
				e.preventDefault();
				close();
			}
		},
		[host, close],
	);

	const onRequestClose = useCallback(
		(e: Event) => {
			if (host.opened && !e.defaultPrevented) {
				e.stopPropagation();
				close();
			}
		},
		[host, close],
	);

	useEffect(() => {
		host.addEventListener('request-close', onRequestClose);
		if (!('CloseWatcher' in window)) {
			document.addEventListener('keydown', onEscape);
		}
		return () => {
			watcher.current?.destroy();
			watcher.current = null;
			host.removeEventListener('request-close', onRequestClose);
			if (!('CloseWatcher' in window)) {
				document.removeEventListener('keydown', onEscape);
			}
		};
	}, [host, onEscape, onRequestClose]);

	// one session per open phase; the user agent stacks close requests
	// newest-first across surfaces
	useEffect(() => {
		if (host.opened && !host.noEscape && 'CloseWatcher' in window) {
			watcher.current?.destroy();
			const w = new CloseWatcher();
			w.oncancel = (e) => {
				// a vetoed `opened-changed` prevents the native close request
				if (close() === false) {
					e.preventDefault();
				}
			};
			watcher.current = w;
		} else {
			watcher.current?.destroy();
			watcher.current = null;
		}
	}, [host.opened, host.noEscape, host, close]);
};
