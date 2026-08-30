import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component } from '@pionjs/pion';
import panelStyles from './cosmoz-slideout-panel.css';
import { renderPanel } from './panel';
import type { PanelElement, PanelProps } from './types';

/**
 * `<cosmoz-slideout-panel>` - the batteries-included content preset.
 *
 * Presentational only: it renders the design-system UI (styled header/body/
 * footer, `heading`/`subtitle`, a built-in close button via `closeable`, and a
 * `loading` overlay) and is meant to be slotted into a `<cosmoz-slideout>`, which
 * owns the surface and the open/close lifecycle. The close button asks the
 * surrounding surface to close by dispatching a bubbling `request-close` event -
 * it holds no reference to the slideout. Built on `@neovici/cosmoz-button`,
 * `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens`.
 *
 * ```html
 * <cosmoz-slideout opened>
 *   <cosmoz-slideout-panel heading="Details" subtitle="Read-only" closeable>
 *     …content…
 *   </cosmoz-slideout-panel>
 * </cosmoz-slideout>
 * ```
 */
customElements.define(
	'cosmoz-slideout-panel',
	component<PanelProps>((host: PanelElement) => renderPanel(host), {
		observedAttributes: ['heading', 'subtitle', 'closeable', 'loading'],
		styleSheets: [normalize, panelStyles],
	})
);
