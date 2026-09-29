import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component } from '@pionjs/pion';
import panelStyles from './cosmoz-slideout-panel.css';
import { renderPanel } from './panel';

/**
 * `<cosmoz-slideout-panel>` - the layout chrome for slideout content.
 *
 * Purely structural, in the spirit of `cz-card`: a `header` region, a scrollable
 * padded `body`, and a `footer` with a divider. No properties; all three regions
 * are always rendered and it's up to the author (typically a slotted `cz-header`)
 * to fill the `header` slot and to provide a close control (dispatching a bubbling
 * `request-close` to ask the surrounding surface to close).
 *
 * ```html
 * <cosmoz-slideout opened>
 *   <cosmoz-slideout-panel>
 *     <div slot="header"><h2>Supplier #4021</h2></div>
 *     …content…
 *     <div slot="footer">…actions…</div>
 *   </cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
customElements.define(
	'cosmoz-slideout-panel',
	component(renderPanel, {
		styleSheets: [normalize, panelStyles],
	})
);
