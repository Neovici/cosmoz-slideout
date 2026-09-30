import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import styles from './cosmoz-slideout.css';
import type { SlideoutElement } from './types';
import { useClose } from './use-close';
import { useFullScreen } from './use-full-screen';

export { slideout, slideoutPanel } from './helpers';
export type {
	PanelElement,
	PanelProps,
	Props,
	SlideoutElement,
	SlideoutProps,
} from './types';
export { useAttribute } from './use-attribute';
export { useClose } from './use-close';
export { useFullScreen } from './use-full-screen';

export const useSlideout = (host: SlideoutElement) => {
	const { close, open } = useClose(host);
	const { fullScreen, toggle } = useFullScreen(host);

	return { close, open, fullScreen, toggleFullScreen: toggle };
};

export const renderSlideout = (
	host: SlideoutElement,
	body: unknown
): unknown => html`
	<div
		part="surface"
		popover="manual"
		role="dialog"
		aria-modal="false"
		tabindex="-1"
		aria-label=${ifDefined(host.getAttribute('aria-label') ?? undefined)}
		aria-labelledby=${ifDefined(
			host.getAttribute('aria-labelledby') ?? undefined
		)}
	>
		${body}
	</div>
`;

export const surfaceStyleSheets = [normalize, styles];

export const surfaceObservedAttributes = [
	'opened',
	'aria-label',
	'aria-labelledby',
	'full-screen',
	'no-autofocus',
	'no-escape',
] as const;
