import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect } from '@pionjs/pion';

/**
 * Esc-to-close fallback on engines without `CloseWatcher` (e.g.
 * Safari); `CloseWatcher` engines are served by `useCloseWatcher`.
 */
export const useCloseFallback = ({
	opened,
	noEscape,
	close,
}: {
	opened: boolean;
	noEscape: boolean;
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
			return;
		}
		document.addEventListener('keydown', onEscape);
		return () => document.removeEventListener('keydown', onEscape);
	}, [onEscape]);
};
