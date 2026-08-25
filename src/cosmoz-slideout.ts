import { html } from '@pionjs/pion';
import { slideout } from './index';

/**
 * `<cosmoz-slideout>` - the low-level slideout shell.
 *
 * It renders in the browser top-layer via the native Popover API, is non-modal
 * (the page behind stays interactive), and slides in from the right when its
 * reactive `opened` property becomes true - it does NOT open merely by being in
 * the DOM. Bind the property (`.opened=${x}`) and listen for `opened-changed`
 * (two-way); it self-closes on Escape and `close()`, then dispatches `close` once
 * the slide-out settles. The element stays connected and can be re-opened.
 *
 * This is the bare shell: it projects light-DOM children through the `controls` /
 * `header` / default / `footer` slots and adds no UI of its own. For the
 * design-system preset (styled header/body/footer, heading/subtitle, built-in
 * close button) use `<cosmoz-slideout-panel>` instead.
 */
customElements.define(
	'cosmoz-slideout',
	slideout(() => html`<slot></slot>`)
);
