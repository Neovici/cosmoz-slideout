import { useMemo } from '@pionjs/pion';
import type { SlideoutElement, PartialControls } from './types';

/**
 * Assigns the controls returned by the lifecycle hooks onto the base
 * element (`SlideoutBase`), so prototype methods (`open()`, `close()`,
 * `toggleFullScreen()`) delegate to live hook closures.
 */
export const useImperativeApi = (
	host: SlideoutElement,
	controls: PartialControls
) => {
	const current = host.controls ??= {};
	return useMemo(() => Object.assign(current, controls), [controls]);
};