import { useEffect, useHost } from '@pionjs/pion';
import type { Focus } from './use-focus-restorer';

/**
 * The flip: `opened` reconciles against `:popover-open`. The truth
 * check and the platform call share one synchronous block, so the
 * throwing popover states cannot arise. Capture precedes
 * `showPopover` - the focusing steps read it synchronously.
 */
export const usePopoverReconcile = (opened: boolean, focus: Focus) => {
	const host = useHost<HTMLElement>();

	useEffect(() => {
		const isOpen = host.matches(':popover-open');
		if (opened && !isOpen) {
			focus.capture();
			host.showPopover();
		} else if (!opened && isOpen) {
			focus.arm();
			host.hidePopover();
			focus.restore();
		}
	}, [opened]); // host and focus: the element's own, never reassigned
};
