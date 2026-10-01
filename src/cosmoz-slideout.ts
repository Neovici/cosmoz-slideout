import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import styles from './cosmoz-slideout.css';
import type { Props, SlideoutControls, SlideoutElement } from './types';
import { useSlideout } from './use-slideout';

const CosmozSlideout = (host: SlideoutElement) => {
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
