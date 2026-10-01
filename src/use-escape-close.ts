import { useCallback, useEffect, useHost, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';

/**
 * Escape and close-request plumbing, fully reusable (no arguments): takes
 * the host from `useHost()`; the reactive reads are destructured per
 * render; every close funnels through the cancelable `opened-changed`
 * contract.
 *
 * Per open surface a `CloseWatcher` session is held (Escape + Android
 * back; newest-first across stacked slideouts as the user agent routes
 * close requests) and destroyed on close; the keydown fallback keeps
 * Escape working on engines without `CloseWatcher` (e.g. Safari - not
 * Baseline); slotted content closes the surface through the cancelable
 * `request-close` event.
 */
export const useEscapeClose = () => {
	const host = useHost<SlideoutElement>();
	const { noEscape, opened } = host;
	const [, setOpened] = useAttribute('opened');

	const closer = useCallback((): boolean | void => {
		if (!opened) return;
		return setOpened(false);
	}, [opened, setOpened]);
	const close = useCallback(closer, [closer]);

	const watcher = useRef<CloseWatcher | null>(null);

	const onEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape' && !noEscape && opened) {
				e.preventDefault();
				close();
			}
		},
		[noEscape, opened, close],
	);

	const onRequestClose = useCallback(
		(e: Event) => {
			if (opened && !e.defaultPrevented) {
				e.stopPropagation();
				close();
			}
		},
		[opened, close],
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
		if (opened && !noEscape && 'CloseWatcher' in window) {
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
	}, [opened, noEscape, host, close]);
};
