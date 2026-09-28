import { component, ComponentOptions, html } from '@pionjs/pion';
import {
	renderSlideout,
	surfaceObservedAttributes,
	surfaceStyleSheets,
	useSlideout,
} from './index';
import type { Props, SlideoutElement } from './types';

/**
 * `<cosmoz-slideout>` - the slideout surface.
 *
 * It renders in the browser top-layer via the native Popover API, is non-modal
 * (the page behind stays interactive), and slides in from the right when its
 * reactive `opened` state becomes true - it does NOT open merely by being in the
 * DOM. `opened` is a real attribute: bind it as a property (`.opened=${x}`) or an
 * attribute (`?opened`), listen for the cancelable `opened-changed` (two-way), and
 * removing the `opened` attribute (e.g. from devtools) closes it. It dispatches
 * `open` once the slide-in settles and `close` once the slide-out settles; it
 * self-closes on Escape and `close()`, and a slotted child's bubbling
 * `request-close` closes it too (cancelable - `preventDefault()` to veto). The
 * element stays connected and can be re-opened.
 *
 * It handles everything *around* the content - the surface, the `opened` /
 * `full-screen` lifecycle, the Escape stack, focus management, and its own
 * `aria-label` (read from a slotted panel's `heading`) - and exposes a single blank
 * slot. It adds no UI of its own. For the design-system UI (styled header/body/
 * footer, heading/subtitle, built-in close button, loading overlay) nest a
 * `<cosmoz-slideout-panel>` inside it:
 *
 * ```html
 * <cosmoz-slideout opened full-screen>
 *   <cosmoz-slideout-panel heading="Details" closeable>…</cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
customElements.define(
	'cosmoz-slideout',
	component<Props>(
		(host: SlideoutElement) => {
			useSlideout(host);
			return renderSlideout(host, html`<slot></slot>`);
		},
		{
			observedAttributes: [
				...surfaceObservedAttributes,
			] as ComponentOptions<Props>['observedAttributes'],
			styleSheets: surfaceStyleSheets,
		}
	)
);
