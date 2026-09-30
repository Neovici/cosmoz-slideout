import { useMemo } from '@pionjs/pion';
import type { PartialControls } from './types';

/**
 * Assigns the controls returned by the lifecycle hooks onto the base
 * element (`SlideoutBase`), so prototype methods (`open()`, `close()`,
 * `toggleFullScreen()`) delegate to live hook closures.
 */
export const useImperativeApi = (
	host: HTMLElement,
	controls: PartialControls
) => {
	const current = ((host as HTMLElement & { controls?: PartialControls })
		.controls ??= {});
	return useMemo(() => Object.assign(current, controls), [controls]);
};