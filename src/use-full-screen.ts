import { useCallback } from '@pionjs/pion';
import { useAttribute } from './use-attribute';

export const useFullScreen = () => {
	const [fullScreen, setFullScreen] = useAttribute('full-screen');

	const toggle = useCallback(() => {
		setFullScreen((prev) => !prev);
	}, [setFullScreen]);

	return { fullScreen, toggle };
};
