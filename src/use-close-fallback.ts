import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect } from '@pionjs/pion';

/**
 * Esc-to-close fallback on engines without `CloseWatcher` (e.g. Safari
 * - not Baseline). `CloseWatcher` engines are served by
 * `useCloseWatcher`.
 */
export const useCloseFallback = ({
	opened,
	noEscape,
	close,
}: {
	/** The reactive read, gating the keydown handler. */
	opened: boolean;
	/** When true, Escape is ignored. */
	noEscape: boolean;
	/** The close funnel (cancelable `opened-changed`); `false` vetoes. */
	close: () => boolean;
}) => {
	const meta = useMeta({ opened, noEscape, close });

	const onEscape = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape' && !meta.noEscape && meta.opened) {
			e.preventDefault();
			meta.close();
		}
	}, []);

	useEffect(() => {
		if ('CloseWatcher' in window) {
			return; // the native session serves this engine
		}
		document.addEventListener('keydown', onEscape);
		return () => document.removeEventListener('keydown', onEscape);
	}, [onEscape]);
};
