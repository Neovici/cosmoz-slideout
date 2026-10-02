import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import modalStyles from './cosmoz-modal-slideout.css';
import styles from './cosmoz-slideout.css';
import type { Props, SlideoutControls } from './types';
import { useMirrorLabel } from './use-mirror-label';
import { useModalSlideout } from './use-modal-slideout';

const ModalSlideout = () => {
	useModalSlideout();
	useMirrorLabel();

	// the dialog is the top-layer surface: showModal() owns inertness,
	// the focus trap and the absorbing ::backdrop - none of which an
	// autonomous element can reach without being a wrapping host
	return html`<dialog part="dialog"><slot></slot></dialog>`;
};

export class ModalSlideoutBase extends HTMLElement {
	controls?: SlideoutControls;

	connectedCallback() {
		this.setAttribute('aria-modal', 'true');
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
	'cosmoz-modal-slideout',
	component<Props>(ModalSlideout, {
		baseElement: ModalSlideoutBase,
		observedAttributes: ['opened', 'full-screen', 'aria-label'],
		styleSheets: [normalize, styles, modalStyles],
	}),
);
