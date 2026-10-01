import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useHost } from '@pionjs/pion';

/**
 * Slotted content asks the surface to close through the bubbling,
 * cancelable `request-close` event (`preventDefault()` vetoes).
 */
export const useHandleRequestClose = ({
	opened,
	close,
}: {
	/** The reactive read, gating the handler. */
	opened: boolean;
	/** The close funnel (cancelable `opened-changed`); `false` vetoes. */
	close: () => boolean;
}) => {
	const meta = useMeta({ opened, close });
	const onRequestClose = useCallback((e: Event) => {
		if (meta.opened && !e.defaultPrevented) {
			e.stopPropagation();
			meta.close();
		}
	}, []);

	const host = useHost();
	useEffect(() => {
		host.addEventListener('request-close', onRequestClose);
		return () => host.removeEventListener('request-close', onRequestClose);
	}, []);
};
