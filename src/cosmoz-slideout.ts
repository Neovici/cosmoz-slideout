import { html } from '@pionjs/pion';
import { slideout } from './index';

/**
 * `<cosmoz-slideout>` - the slideout surface.
 *
 * It renders in the browser top-layer via the native Popover API, is non-modal
 * (the page behind stays interactive), and slides in from the right when its
 * reactive `opened` property becomes true - it does NOT open merely by being in
 * the DOM. Bind the property (`.opened=${x}`) and listen for `opened-changed`
 * (two-way); it self-closes on Escape and `close()`, then dispatches `close` once
 * the slide-out settles. The element stays connected and can be re-opened.
 *
 * It handles everything *around* the content - the surface, the `opened` /
 * `full-screen` lifecycle, the Escape stack and focus management - and exposes a
 * single blank slot. It adds no UI of its own; a slotted child that dispatches
 * a bubbling `request-close` closes it. For the design-system UI (styled
 * header/body/footer, heading/subtitle, built-in close button, loading overlay)
 * nest a `<cosmoz-slideout-panel>` inside it:
 *
 * ```html
 * <cosmoz-slideout opened full-screen>
 *   <cosmoz-slideout-panel heading="Details" closeable>…</cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
customElements.define(
	'cosmoz-slideout',
	slideout(() => html`<slot></slot>`)
);
