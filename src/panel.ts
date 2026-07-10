import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { html, useEffect, useRef } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { regions, type SlideoutRegions } from './index';
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

const defaultTitle = (
	heading: string | null | undefined,
	subtitle: string | null | undefined
) => html`
	${heading ? html`<h2 class="heading">${heading}</h2>` : nothing}
	${subtitle ? html`<p class="subtitle">${subtitle}</p>` : nothing}
`;

export const usePanelView = (host: SlideoutElement): SlideoutRegions => {
	const { hasHeaderContent, hasFooterContent, onHeaderSlot, onFooterSlot } =
		usePanel(host);

	const { heading, subtitle } = host;
	const closeable = Boolean(host.closeable);
	const showHeader = Boolean(
		heading || subtitle || closeable || hasHeaderContent
	);

	const effectiveHeading = host.variant === 'panel' ? heading : undefined;
	const ariaLabel = host.getAttribute('aria-label');
	const autoAriaLabel = useRef<string | null>(null);

	useEffect(() => {
		if (!effectiveHeading) {
			if (ariaLabel && ariaLabel === autoAriaLabel.current) {
				host.removeAttribute('aria-label');
			}
			autoAriaLabel.current = null;
			return;
		}

		if (
			(!ariaLabel || ariaLabel === autoAriaLabel.current) &&
			ariaLabel !== effectiveHeading
		) {
			host.setAttribute('aria-label', effectiveHeading);
			autoAriaLabel.current = effectiveHeading;
		}
	}, [ariaLabel, effectiveHeading]);

	return regions({
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
	});
};
