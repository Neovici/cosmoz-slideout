import { useHost, useMemo } from '@pionjs/pion';
import type { PartialControls } from './types';

/**
 * Assigns the controls onto the base element's `controls` bag, so
 * prototype methods (`open()`, `close()`, `toggleFullScreen()`)
 * delegate to live hook closures.
 */
export const useImperativeApi = (controls: PartialControls) => {
	const host = useHost<HTMLElement>();
	const current = ((
		host as HTMLElement & { controls?: PartialControls }
	).controls ??= {});
	return useMemo(() => Object.assign(current, controls), [controls]);
};
