import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';

export const useFullScreen = (host: SlideoutElement) => {
	const fullScreen = host.hasAttribute('full-screen');

	const toggle = useCallback(() => {
		host.toggleAttribute('full-screen');
	}, []);
	host.toggleFullScreen = toggle;

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
