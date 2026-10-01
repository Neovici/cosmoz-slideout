import { useCallback } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';

export const useFullScreen = (host: SlideoutElement) => {
	const [fullScreen, setFullScreen] = useAttribute(host, 'full-screen');

	const toggle = useCallback(() => {
		setFullScreen((prev) => !prev);
	}, [setFullScreen]);

	return { fullScreen, toggle };
};
