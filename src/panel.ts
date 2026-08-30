import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-utils/elements/cz-spinner';
import { html, useEffect, useRef } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import type { PanelElement } from './types';
import { usePanel } from './use-panel';

const requestClose = (host: PanelElement) =>
	host.dispatchEvent(
		new Event('request-close', { bubbles: true, composed: true })
	);

const closeButton = (host: PanelElement) => html`
	<cosmoz-button
		class="close"
		part="close"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${() => requestClose(host)}
	>
		${xCloseIcon({ slot: 'prefix' })}
	</cosmoz-button>
`;

const defaultTitle = (
	heading: string | null | undefined,
	subtitle: string | null | undefined
) => html`
	${heading ? html`<h2 class="heading">${heading}</h2>` : nothing}
	${subtitle ? html`<p class="subtitle">${subtitle}</p>` : nothing}
`;

const useSurfaceLabel = (host: PanelElement, heading: string | undefined) => {
	const ours = useRef<string | null>(null);

	useEffect(() => {
		const surface = host.closest('cosmoz-slideout');
		if (!surface || surface.hasAttribute('aria-labelledby')) return;

		const current = surface.getAttribute('aria-label');
		const authored = current !== null && current !== ours.current;
		if (authored) return;

		if (heading) {
			surface.setAttribute('aria-label', heading);
			ours.current = heading;
		} else if (current !== null) {
			surface.removeAttribute('aria-label');
			ours.current = null;
		}

		return () => {
			if (surface.getAttribute('aria-label') === ours.current) {
				surface.removeAttribute('aria-label');
				ours.current = null;
			}
		};
	}, [heading]);
};

export const renderPanel = (host: PanelElement) => {
	const { hasHeaderContent, hasFooterContent, onHeaderSlot, onFooterSlot } =
		usePanel(host);

	const { heading, subtitle } = host;
	const closeable = Boolean(host.closeable);
	const loading = Boolean(host.loading);
	const showHeader = Boolean(
		heading || subtitle || closeable || hasHeaderContent
	);

	useSurfaceLabel(host, heading);

	return html`
		<header part="header" class="header" ?hidden=${!showHeader}>
			<slot name="header" @slotchange=${onHeaderSlot}>
				${defaultTitle(heading, subtitle)}
			</slot>
			${closeable ? closeButton(host) : nothing}
		</header>
		<div part="body" class="body">
			<slot></slot>
			${when(
				loading,
				() => html`
					<div class="loading" part="loading">
						<cz-spinner></cz-spinner>
					</div>
				`
			)}
		</div>
		<footer part="footer" class="footer" ?hidden=${!hasFooterContent}>
			<slot name="footer" @slotchange=${onFooterSlot}></slot>
		</footer>
	`;
};
