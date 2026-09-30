import { html } from '@pionjs/pion';

/**
 * `<cosmoz-slideout-panel>` - the layout chrome for slideout content.
 *
 * Purely structural, in the spirit of `cz-card`: the three slots (`header`,
 * default body, `footer`) are **completely invisible when empty** - the regions
 * have no box of their own, all spacing/borders/dividers are painted on the
 * slotted elements (via `::slotted(*)`), exactly like `cz-card`. It holds
 * **no properties** and closes only via a bubbling `request-close` event
 * dispatched by whatever the author slots in (e.g. a `cz-header` with a close
 * control in its suffix slot).
 *
 * ```html
 * <cosmoz-slideout opened>
 *   <cosmoz-slideout-panel>
 *     <cz-header slot="header">Supplier</cz-header>
 *     <p>…body…</p>
 *   </cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
export const renderPanel = () => html`
	<div class="region" part="header">
		<slot name="header"></slot>
	</div>
	<div class="body" part="body">
		<slot></slot>
	</div>
	<div class="region" part="footer">
		<slot name="footer"></slot>
	</div>
`;
