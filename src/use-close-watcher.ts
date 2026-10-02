import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useEffect } from '@pionjs/pion';

/**
 * `CloseWatcher` session (Escape + Android back), one per open surface.
 * Engines without `CloseWatcher` are served by `useCloseFallback`.
 */
export const useCloseWatcher = ({
	opened,
	noEscape,
	close,
}: {
	opened: boolean;
	noEscape: boolean;
	close: () => boolean;
}) => {
	const meta = useMeta({ close });

	// the newest session receives the close request, so Esc routes to
	// the newest open surface
	useEffect(() => {
		if (!opened || noEscape || !('CloseWatcher' in window)) {
			return;
		}
		const w = new CloseWatcher();
		w.oncancel = (e) => {
			if (meta.close() === false) {
				e.preventDefault();
			}
		};
		return () => {
			w.destroy();
		};
	}, [opened, noEscape]);
};
