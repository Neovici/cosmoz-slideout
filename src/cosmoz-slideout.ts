import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useCallback } from '@pionjs/pion';
import styles from './cosmoz-slideout.css';
import type { Props, SlideoutControls, SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { useCloseFallback } from './use-close-fallback';
import { useCloseWatcher } from './use-close-watcher';
import { useFocusRestorer } from './use-focus-restorer';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';
import { useSettleEvents } from './use-settle-events';

/**
 * The slideout's lifecycle, composed from independent hooks:
 *
 * - `opened` is the reactive attribute state (`useAttribute('opened')`);
 *   `open()`/`close()` funnel every close source through the cancelable
 *   `opened-changed` contract.
 * - `useSettleEvents` promotes/hides the popover and fires the settled
 *   `open`/`close` events when the slide transition completes.
 * - `useHandleRequestClose` - slotted content's cancelable
 *   `request-close` asks the surface to close.
 * - `useCloseWatcher` - the per-instance `CloseWatcher` session (Escape
 *   + Android back).
 * - `useCloseFallback` - Escape on engines without `CloseWatcher`.
 * - `useFocusRestorer` restores focus to the opener on close.
 * - `useFullScreen` owns the reactive `full-screen` attribute.
 * - `useImperativeApi` assigns the controls onto the base element's
 *   `controls` bag, so prototype methods delegate to live closures.
 */
const useSlideout = ({ noEscape = false }: SlideoutElement) => {
	const [opened, setOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });
	useCloseWatcher({ opened, noEscape, close });
	useCloseFallback({ opened, noEscape, close });

	const focusRestorer = useFocusRestorer();
	useSettleEvents({
		...focusRestorer,
		opened,
	});

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};

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
