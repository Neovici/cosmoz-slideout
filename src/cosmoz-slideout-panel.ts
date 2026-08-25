import panelStyles from './cosmoz-slideout-panel.css';
import { slideout } from './index';
import { usePanelView } from './panel';
import type { PanelElement, PanelProps } from './types';

/**
 * `<cosmoz-slideout-panel>` - the batteries-included preset.
 *
 * A `<cosmoz-slideout>` (same top-layer surface, `opened` lifecycle, events, Escape
 * stack, and focus behavior) with the design-system chrome added: a styled
 * header/body/footer, a `heading`/`subtitle`, and a built-in close button
 * (`closeable`). Built on `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`, and
 * `@neovici/cosmoz-tokens`. Every region is overridable by slotting; for a fully raw
 * surface use the bare `<cosmoz-slideout>`.
 */
customElements.define(
	'cosmoz-slideout-panel',
	slideout<PanelProps>((host: PanelElement) => usePanelView(host), {
		observedAttributes: ['heading', 'subtitle', 'closeable'],
		styleSheets: [panelStyles],
	})
);
