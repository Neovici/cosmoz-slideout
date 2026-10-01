import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';

export const useFullScreen = (host: SlideoutElement) => {
	// useAttribute owns reflecting the attribute; the effect below only
	// emits the flip event (for external writes too, unlike `opened-changed`
	// which is mutation-driven only).
	const [fullScreen, setFullScreen] = useAttribute(host, 'full-screen');

	const toggle = useCallback(() => {
		setFullScreen((prev) => !prev);
	}, [setFullScreen]);

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
			}),
		);
	}, [fullScreen]);

	return { fullScreen, toggle };
};
