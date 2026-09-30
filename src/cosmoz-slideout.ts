import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import styles from './cosmoz-slideout.css';
import type {
	PanelProps,
	Props,
	SlideoutControls,
	SlideoutElement,
} from './types';
import { useClose } from './use-close';
import { useFullScreen } from './use-full-screen';
import { useImperativeApi } from './use-imperative-api';

export const useSlideout = (host: SlideoutElement) => {
	const { close, open } = useClose(host);
	const { fullScreen, toggle } = useFullScreen(host);
	useImperativeApi(host, { open, close, toggleFullScreen: toggle });

	return {
		close,
		open,
		fullScreen,
		toggleFullScreen: toggle,
		ariaLabel: host.getAttribute('aria-label') ?? undefined,
		ariaLabelledby: host.getAttribute('aria-labelledby') ?? undefined,
	};
};

/**
 * The `<cosmoz-slideout>` surface template: the top-layer popover
 * (`part="surface"`), labelled from the host's `aria-*` attributes, exposing
 * the host's single blank slot.
 */
export const renderSlideout = ({
	ariaLabel,
	ariaLabelledby,
}: {
	ariaLabel?: string;
	ariaLabelledby?: string;
}): unknown =>
	html`
		<div
			part="surface"
			popover="manual"
			role="dialog"
			aria-modal="false"
			tabindex="-1"
			aria-label=${ifDefined(ariaLabel)}
			aria-labelledby=${ifDefined(ariaLabelledby)}
		>
			<slot></slot>
		</div>
	`;

export const CosmozSlideout = (host: SlideoutElement) =>
	renderSlideout(useSlideout(host));

export class SlideoutBase extends HTMLElement {
	/** Imperative controls registered by the lifecycle hooks at render time. */
	controls?: SlideoutControls;

	open() {
		this.controls?.open();
	}
	close() {
		this.controls?.close();
	}
	toggleFullScreen() {
		this.controls?.toggleFullScreen();
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'cosmoz-slideout': SlideoutBase & Props;
		'cosmoz-slideout-panel': HTMLElement & PanelProps;
	}
}

customElements.define(
	'cosmoz-slideout',
	component<Props>(CosmozSlideout, {
		baseElement: SlideoutBase,
		observedAttributes: [
			'opened',
			'aria-label',
			'aria-labelledby',
			'full-screen',
			'no-autofocus',
			'no-escape',
		],
		styleSheets: [normalize, styles],
	})
);
