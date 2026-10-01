import { useCallback } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { useEscapeClose } from './use-escape-close';
import { useFocusRestorer } from './use-focus-restorer';
import { useSettleEvents } from './use-settle-events';

/**
 * The surface's open/close lifecycle, composed from independent hooks.
 *
 * - `useAttributeControls` owns the reactive `opened` state; `open()`/
 *   `close()` funnel every close source through the cancelable
 *   `opened-changed` contract.
 * - `useSettleEvents` promotes/hides the popover and fires the settled
 *   `open`/`close` events when the slide transition completes.
 * - `useEscapeClose` holds the per-instance `CloseWatcher` session
 *   (Escape + Android back; newest first) and the `request-close`/keydown
 *   plumbing.
 * - `useFocusRestorer` remembers the opener on open and restores focus on
 *   close (focus *into* the content is the browser's popover focusing
 *   steps; only the way back can't be native for `popover="manual"`).
 */
export const useAttributeControls = (host: SlideoutElement) => {
	const [opened, setOpened] = useAttribute(host, 'opened');

	const open = useCallback(() => {
		if (!host.opened) setOpened(true);
	}, []);
	const close = useCallback(() => {
		if (host.opened) setOpened(false);
	}, []);

	return { opened, open, close };
};

export const useOpenClose = (host: SlideoutElement) => {
	const { opened, open, close } = useAttributeControls(host);
	const focusRestorer = useFocusRestorer(host);
	useEscapeClose(host, close);

	// the restore-eligibility check is a pre-hide commitment: it must run
	// while the popover is still showing; the opener capture must precede
	// showPopover, whose focusing steps move focus synchronously;
	// `focus` carries the commit callbacks under the settle hook's names
	// and has a stable ref identity - no memoization needed
	useSettleEvents(host, focusRestorer);

	return { opened, open, close };
};

export type OpenCloseControls = ReturnType<typeof useOpenClose>;
