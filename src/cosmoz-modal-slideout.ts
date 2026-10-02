import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import modalStyles from './cosmoz-modal-slideout.css';
import { SlideoutBase } from './cosmoz-slideout';
import styles from './cosmoz-slideout.css';
import type { Props } from './types';
import { useModalSlideout } from './use-modal-slideout';

const ModalSlideout = () => {
	useModalSlideout();
	return html`<slot></slot>`;
};

export class ModalSlideoutBase extends SlideoutBase {
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute('popover', 'auto');
		this.setAttribute('aria-modal', 'true');
	}
}

customElements.define(
	'cosmoz-modal-slideout',
	component<Props>(ModalSlideout, {
		baseElement: ModalSlideoutBase,
		observedAttributes: ['opened', 'full-screen'],
		styleSheets: [normalize, styles, modalStyles],
	}),
);
