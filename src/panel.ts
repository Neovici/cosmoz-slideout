import { html } from '@pionjs/pion';

/**
 * `<cosmoz-slideout-panel>` - the layout chrome for slideout content.
 *
 * Purely structural, in the spirit of `cz-card`: content-conditional regions are
 * the author's business - all three slots are always rendered, and the panel adds
 * only the design-system layout: a `header` region, a scrollable padded `body`,
 * and a `footer` with a divider. It holds **no properties** and closes only via
 * a bubbling `request-close` event dispatched by whatever the author slots in
 * (e.g. a `cz-header` with a close control in its suffix slot).
 *
 * ```html
 * <cosmoz-slideout opened>
 *   <cosmoz-slideout-panel>
 *     <div slot="header">
 *       <h2>Supplier #4021</h2>
 *     </div>
 *     <p>…body…</p>
 *     <div slot="footer">…actions…</div>
 *   </cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
export const renderPanel = () => html`
	<header part="header" class="header">
		<slot name="header"></slot>
	</header>
	<div part="body" class="body">
		<slot></slot>
	</div>
	<footer part="footer" class="footer">
		<slot name="footer"></slot>
	</footer>
`;
