import { html } from '@pionjs/pion';
import { slideout } from './index';

/**
 * `<cosmoz-slideout>` — the dumb, drop-in shell.
 *
 * It slides in from the right the moment it is added to the DOM and projects
 * light-DOM children through the `controls` / `header` / default / `footer` slots.
 * The parent owns lifecycle: call `el.close()` to play the slide-out, then remove it on the `close` event.
 *
 * For styled chrome out of the box, see `cosmoz-slideout-panel`.
 */
customElements.define(
	'cosmoz-slideout',
	slideout(() => html`<slot></slot>`)
);
