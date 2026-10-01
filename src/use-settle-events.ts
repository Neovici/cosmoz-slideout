import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useStateMachine } from './use-state-machine';
import { settleCapMs } from './utils';

/**
 * Surface lifecycle phase table (shared, immutable): `idle` until a
 * phase flip assigns one, one settle (`translate` transitionend, or the
 * `settleCapMs` safety net) puts it back. `SETTLE` from `idle` is
 * ignored - the stale guard, e.g. a late transitionend after the flip.
 * The machine itself is instantiated per hook call in `useSettleEvents`;
 * only the table is shared.
 */
const transitionTable = {
	idle: {
		OPEN: 'opening',
		CLOSE: 'closing',
	},
	opening: {
		OPEN: 'opening',
		CLOSE: 'closing',
		SETTLE: 'idle',
	},
	closing: {
		CLOSE: 'closing',
		OPEN: 'opening',
		SETTLE: 'idle',
	},
} as const;

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
	const { send, is } = useStateMachine('idle', transitionTable);
	const timer = useRef(0);

	const finish = useCallback(() => {
		const wasClosing = is('closing');
		if (send('SETTLE') === null) {
			return; // stale settle (already idle): nothing in flight
		}
		window.clearTimeout(timer.current);
		host.dispatchEvent(
			new Event(wasClosing ? 'close' : 'open', { bubbles: true }),
		);
		if (wasClosing) {
			host.onClose?.();
		}
		hooks?.onSettle?.(!wasClosing);
	}, [host, is, send, hooks]);

	const onTransitionEnd = useCallback(
		(e: TransitionEvent) => {
			if (e.target !== host || e.propertyName !== 'translate') {
				return;
			}
			// settle what is in flight; a settle during a flip race (e.g.
			// transitionend after re-open) settles the NEW phase
			finish();
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
		send(opened ? 'OPEN' : 'CLOSE');
		window.clearTimeout(timer.current);
		timer.current = window.setTimeout(() => finish(), settleCapMs);

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
