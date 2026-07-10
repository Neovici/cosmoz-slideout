import { html } from '@pionjs/pion';
import panelStyles from './cosmoz-slideout-panel.css';
import { slideout } from './index';
import { usePanelView } from './panel';
import type { SlideoutElement } from './types';

/**
 * `<cosmoz-slideout>` - the low-level slideout shell.
 *
 * It slides in from the right the moment it is added to the DOM and projects
 * light-DOM children through the `controls` / `header` / default / `footer` slots.
 * The parent owns lifecycle: call `el.close()` to play the slide-out, then remove it on
 * the `close` event.
 *
 * Default mode is the bare shell - no UI beyond the slots above.
 * Set `variant="panel"` to opt into the design-system preset instead: a styled header/body/
 * footer, a `heading`/`subtitle`, and a built-in close button (`closeable`). Only `panel`
 * is currently a defined `variant`; omit the attribute for the shell.
 */
customElements.define(
	'cosmoz-slideout',
	slideout(
		(host: SlideoutElement) => {
			const panel = usePanelView(host);
			return host.variant === 'panel' ? panel : html`<slot></slot>`;
		},
		{
			observedAttributes: ['variant', 'heading', 'subtitle', 'closeable'],
			styleSheets: [panelStyles],
		}
	)
);
