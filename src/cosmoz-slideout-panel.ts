import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import panelStyles from './cosmoz-slideout-panel.css';

export const CosmozSlideoutPanel = () => html`
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

customElements.define(
	'cosmoz-slideout-panel',
	component(CosmozSlideoutPanel, {
		styleSheets: [normalize, panelStyles],
	}),
);
