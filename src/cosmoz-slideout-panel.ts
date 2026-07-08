import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useEffect } from '@pionjs/pion';
import { nothing } from 'lit-html';
import panelStyles from './cosmoz-slideout-panel.css';
import coreStyles from './cosmoz-slideout.css';
import { regions, renderSlideout, useSlideout } from './index';
import type { SlideoutElement } from './types';
import { usePanel } from './use-panel';

const closeButton = (host: SlideoutElement) => html`
	<cosmoz-button
		class="close"
		part="close"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${() => host.close?.()}
	>
		${xCloseIcon({ slot: 'prefix' })}
	</cosmoz-button>
`;

const defaultTitle = (heading: string | null, subtitle: string | null) => html`
	${heading ? html`<h2 class="heading">${heading}</h2>` : nothing}
	${subtitle ? html`<p class="subtitle">${subtitle}</p>` : nothing}
`;

const Panel = (host: SlideoutElement) => {
	useSlideout(host);
	const { hasHeaderContent, hasFooterContent, onHeaderSlot, onFooterSlot } =
		usePanel(host);

	const heading = host.getAttribute('heading');
	const subtitle = host.getAttribute('subtitle');
	const closeable = host.hasAttribute('closeable');
	const showHeader = Boolean(
		heading || subtitle || closeable || hasHeaderContent
	);

	useEffect(() => {
		if (heading && !host.hasAttribute('aria-label')) {
			host.setAttribute('aria-label', heading);
		}
	}, [heading]);

	return renderSlideout(
		host,
		regions({
			header: html`
				<header part="header" class="header" ?hidden=${!showHeader}>
					<slot name="header" @slotchange=${onHeaderSlot}>
						${defaultTitle(heading, subtitle)}
					</slot>
					${closeable ? closeButton(host) : nothing}
				</header>
			`,
			content: html`<div part="body" class="body"><slot></slot></div>`,
			footer: html`
				<footer part="footer" class="footer" ?hidden=${!hasFooterContent}>
					<slot name="footer" @slotchange=${onFooterSlot}></slot>
				</footer>
			`,
		})
	);
};

customElements.define(
	'cosmoz-slideout-panel',
	component(Panel as (host: HTMLElement) => unknown, {
		observedAttributes: [
			'heading',
			'subtitle',
			'closeable',
			'aria-label',
			'aria-labelledby',
			'full-screen',
			'loading',
			'no-autofocus',
			'no-escape',
		],
		styleSheets: [normalize, coreStyles, panelStyles],
	})
);
