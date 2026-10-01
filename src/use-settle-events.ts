import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { settleCapMs } from './utils';

/**
 * Surface lifecycle: promotes the popover to the top layer when `opened`
 * flips on and hides it when it flips off, then fires the settled
 * `open`/`close` events once the slide transition is over -
 * `transitionend` for the surface's `translate` is the primary signal,
 * `settleCapMs` a safety net for reduced motion and other no-transition
 * cases (see utils). `onSettle` runs once the respective transition
 * settles (used by the open/close hook to commit phase-side effects such
 * as focus restoration).
 */
export const useSettleEvents = (
	host: SlideoutElement,
	hooks?: {
		/** Runs before the popover is shown. */
		onBeforeShow?: () => void;
		/** Runs before the popover hides (still showing). */
		onBeforeHide?: () => void;
		/** Runs when the slide-in/out transition settles. */
		onSettle?: (open: boolean) => void;
	},
) => {
	const closing = useRef(false);
	const timer = useRef(0);

	const finish = useCallback(
		(open: boolean) => {
			closing.current = false;
			window.clearTimeout(timer.current);
			host.dispatchEvent(new Event(open ? 'open' : 'close', { bubbles: true }));
			if (!open) host.onClose?.();
			hooks?.onSettle?.(open);
		},
		[host, hooks],
	);

	const onTransitionEnd = useCallback(
		(e: TransitionEvent) => {
			if (e.target !== host || e.propertyName !== 'translate') {
				return;
			}
			finish(!closing.current);
		},
		[host, finish],
	);

	useEffect(() => {
		host.addEventListener('transitionend', onTransitionEnd as EventListener);
		return () => {
			window.clearTimeout(timer.current);
			host.removeEventListener(
				'transitionend',
				onTransitionEnd as EventListener,
			);
		};
	}, [host, onTransitionEnd]);

	const opened = Boolean(host.opened);
	useEffect(() => {
		closing.current = !opened;
		window.clearTimeout(timer.current);
		timer.current = window.setTimeout(() => finish(opened), settleCapMs);

		if (opened) {
			// the opener capture must precede showPopover: its focusing steps
			// move focus into the `[autofocus]` content synchronously
			hooks?.onBeforeShow?.();
			if (!host.matches(':popover-open')) {
				host.showPopover();
			}
		} else if (host.matches(':popover-open')) {
			// the restore-eligibility check is a pre-hide commitment: it must
			// run while the popover is still showing
			hooks?.onBeforeHide?.();
			host.hidePopover();
		}
	}, [opened, hooks]);
};
