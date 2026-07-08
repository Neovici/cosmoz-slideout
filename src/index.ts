import '@neovici/cosmoz-utils/elements/cz-spinner';
import { component, ComponentOptions, html } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import styles from './cosmoz-slideout.css';
import type { Props, SlideoutElement } from './types';
import { useClose } from './use-close';
import { useFullScreen } from './use-full-screen';

export { useClose } from './use-close';
export { useFullScreen } from './use-full-screen';
export type { Props, SlideoutElement };

export const useSlideout = (host: SlideoutElement) => {
	const { close } = useClose(host);
	const { fullScreen, toggle } = useFullScreen(host);
	return { close, fullScreen, toggleFullScreen: toggle };
};

export type SlideoutRegions = {
	controls?: unknown;
	header?: unknown;
	content?: unknown;
	footer?: unknown;
};

const REGIONS = Symbol('cosmoz-slideout-regions');

/**
 * Tag a regions object so {@link renderSlideout} renders each key into its region
 * (a bare `<slot name=…>` is used for any region left `undefined`).
 *
 * Use it from a `slideout()` render fn to render non-scrolling header/footer chrome.
 * A plain lit template is rendered as the body instead. The marker keeps region detection off
 * lit-html internals.
 */
export const regions = (r: SlideoutRegions): SlideoutRegions =>
	Object.assign({ [REGIONS]: true }, r);

const isRegions = (x: unknown): x is SlideoutRegions =>
	typeof x === 'object' && x !== null && REGIONS in x;

export const renderSlideout = (
	host: SlideoutElement,
	body: unknown
): unknown => {
	const loading = host.hasAttribute('loading');
	const parts: SlideoutRegions = isRegions(body) ? body : { content: body };

	return html`
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
			${parts.controls !== undefined
				? parts.controls
				: html`<slot name="controls" part="controls"></slot>`}
			${parts.header !== undefined
				? parts.header
				: html`<slot name="header"></slot>`}
			<div class="content" part="content">
				${parts.content ?? nothing}
				${when(
					loading,
					() => html`
						<div class="loading" part="loading">
							<cz-spinner></cz-spinner>
						</div>
					`
				)}
			</div>
			${parts.footer !== undefined
				? parts.footer
				: html`<slot name="footer"></slot>`}
		</div>
	`;
};

type Opts<P extends object> = ComponentOptions<P> & { styles?: unknown };

export const slideout = <T extends Props = Props>(
	renderer: (host: HTMLElement & T) => unknown,
	{ observedAttributes, styles: extraStyles, ...opts }: Opts<T> = {}
) =>
	component<T>(
		(host) => {
			useSlideout(host as SlideoutElement);

			return html`
				${when(
					extraStyles,
					() =>
						html`<style>
							${extraStyles}
						</style>`
				)}
				${renderSlideout(host as SlideoutElement, renderer(host))}
			`;
		},
		{
			observedAttributes: [
				'aria-label',
				'aria-labelledby',
				'full-screen',
				'loading',
				'no-autofocus',
				'no-escape',
				...(observedAttributes ?? []),
			] as ComponentOptions<T>['observedAttributes'],
			styleSheets: [styles],
			...opts,
		}
	);
