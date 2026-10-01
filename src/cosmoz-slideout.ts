import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import styles from './cosmoz-slideout.css';
import type { Props, SlideoutControls, SlideoutElement } from './types';
import { useFullScreen } from './use-full-screen';
import { useImperativeApi } from './use-imperative-api';
import { useOpenClose } from './use-open-close';

export const useSlideout = (host: SlideoutElement) => {
	const { close, open } = useOpenClose(host);
	const { fullScreen, toggle } = useFullScreen(host);
	useImperativeApi(host, { open, close, toggleFullScreen: toggle });

	return { close, open, fullScreen, toggleFullScreen: toggle };
};

export const CosmozSlideout = (host: SlideoutElement) => {
	useSlideout(host);

	return html`<slot></slot>`;
};

export class SlideoutBase extends HTMLElement {
	controls?: SlideoutControls;

	connectedCallback() {
		if (!this.hasAttribute('popover')) {
			this.setAttribute('popover', 'manual');
		}
		if (!this.hasAttribute('role')) {
			this.setAttribute('role', 'dialog');
		}
		if (!this.hasAttribute('aria-modal')) {
			this.setAttribute('aria-modal', 'false');
		}
		if (!this.hasAttribute('tabindex')) {
			this.setAttribute('tabindex', '-1');
		}
	}

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

customElements.define(
	'cosmoz-slideout',
	component<Props>(CosmozSlideout, {
		baseElement: SlideoutBase,
		observedAttributes: ['opened', 'full-screen', 'no-escape'],
		styleSheets: [normalize, styles],
	}),
);
