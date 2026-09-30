import { component, ComponentOptions, html } from '@pionjs/pion';
import {
	CosmozSlideout,
	surfaceObservedAttributes,
	surfaceStyleSheets,
	useSlideout,
} from './index';
import type { PanelProps, Props, SlideoutElement } from './types';

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
 * `full-screen` lifecycle, the Escape stack, and focus management - and exposes a
 * single blank slot. It adds no UI of its own; set `aria-label` on it to name the
 * dialog. For the design-system layout (header / body / footer regions) nest a
 * `<cosmoz-slideout-panel>` inside it and slot in your header (e.g. `cz-header`
 * with a close control dispatching `request-close`):
 *
 * ```html
 * <cosmoz-slideout opened full-screen aria-label="Details">
 *   <cosmoz-slideout-panel>
 *     <div slot="header"><h2>Details</h2></div>
 *     …content…
 *   </cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
/**
 * Typed DOM lookups: `querySelector('cosmoz-slideout')` returns a fully
 * typed element (props like `opened`, `fullScreen`, methods `open` /
 * `close`, ... readable in JS), same for the panel.
 */
declare global {
	interface HTMLElementTagNameMap {
		'cosmoz-slideout': HTMLElement & Props;
		'cosmoz-slideout-panel': HTMLElement & PanelProps;
	}
}

customElements.define(
	'cosmoz-slideout',
	component<Props>(
		(host: SlideoutElement) => {
			useSlideout(host);
			return CosmozSlideout(host, html`<slot></slot>`);
		},
		{
			observedAttributes: [
				...surfaceObservedAttributes,
			] as ComponentOptions<Props>['observedAttributes'],
			styleSheets: surfaceStyleSheets,
		}
	)
);
