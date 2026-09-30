export const FALLBACK_BUFFER_MS = 80;

import type { SlideoutElement } from './types';

/**
 * Ensure the Popover API has an `autofocus` focus target on open.
 *
 * The browser's popover focusing steps honor an `autofocus` attribute on the
 * first focusable element of the popover's flattened subtree - either one the
 * author marked in the slotted content, or the surface itself as the fallback
 * (requires the surface's `tabindex="-1"`). The surface is first in tree order,
 * so it may only be marked when the author has marked nothing; marking must
 * also respect the `no-autofocus` opt-out.
 */
export const markAutofocus = (surface: SlideoutElement) => {
	if (
		surface.noAutofocus ||
		surface.hasAttribute('autofocus') ||
		surface.querySelector('[autofocus]')
	) {
		return;
	}
	surface.setAttribute('autofocus', '');
};

export const animationTimeoutMs = (
	surface: HTMLElement,
	buffer = FALLBACK_BUFFER_MS,
) => {
	const cs = getComputedStyle(surface);
	const toMs = (v: string) =>
		v.split(',').map((s) => parseFloat(s) * 1000 || 0);
	const durations = toMs(cs.transitionDuration);
	const delays = toMs(cs.transitionDelay);
	const longest = durations.reduce(
		(max, d, i) => Math.max(max, d + (delays[i] ?? 0)),
		0,
	);
	return longest + buffer;
};
