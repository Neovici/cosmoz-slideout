import { useCallback, useEffect, useLayoutEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';

export const useFullScreen = (host: SlideoutElement) => {
	const fullScreen = Boolean(host.fullScreen);

	const toggle = useCallback(() => {
		host.toggleAttribute('full-screen');
	}, []);
	host.toggleFullScreen = toggle;

	useLayoutEffect(() => {
		host.toggleAttribute('full-screen', fullScreen);
	}, [fullScreen]);

	const mounted = useRef(false);
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		host.dispatchEvent(
			new CustomEvent('full-screen-changed', {
				detail: { fullScreen },
				bubbles: true,
			})
		);
	}, [fullScreen]);

	return { fullScreen, toggle };
};
