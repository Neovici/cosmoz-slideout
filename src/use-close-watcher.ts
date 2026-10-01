import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useEffect } from '@pionjs/pion';

/**
 * `CloseWatcher` session (Escape + Android back), one per open phase.
 * Engines without `CloseWatcher` are served by `useCloseFallback`.
 */
export const useCloseWatcher = ({
	opened,
	noEscape,
	close,
}: {
	/** The reactive read, driving the session lifecycle. */
	opened: boolean;
	/** When true, the session stays retired. */
	noEscape: boolean;
	/** The close funnel (cancelable `opened-changed`); `false` vetoes. */
	close: () => boolean;
}) => {
	const meta = useMeta({ close });

	// re-runs per open phase - this is what keeps the session's UA stack
	// position in open order, so Esc routes to the newest open surface
	useEffect(() => {
		if (!opened || noEscape || !('CloseWatcher' in window)) {
			return;
		}
		const w = new CloseWatcher();
		w.oncancel = (e) => {
			// a vetoed `opened-changed` prevents the native close request
			if (meta.close() === false) {
				e.preventDefault();
			}
		};
		return () => {
			w.destroy();
		};
	}, [opened, noEscape]);
};
