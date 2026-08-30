import { normalize } from '@neovici/cosmoz-tokens/normalize';
import {
	component,
	ComponentOptions,
	html,
	useLayoutEffect,
} from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import styles from './cosmoz-slideout.css';
import type { Props, SlideoutElement } from './types';
import { useClose } from './use-close';
import { useFullScreen } from './use-full-screen';

export { useClose } from './use-close';
export { useFullScreen } from './use-full-screen';
export type { Props, SlideoutElement };

export const useSlideout = (host: SlideoutElement) => {
	const { close, open } = useClose(host);
	const { fullScreen, toggle } = useFullScreen(host);

	useLayoutEffect(() => {
		host.toggleAttribute('opened', !!host.opened);
	}, [host.opened]);

	return { close, open, fullScreen, toggleFullScreen: toggle };
};

export const renderSlideout = (
	host: SlideoutElement,
	body: unknown
): unknown => html`
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
		${body}
	</div>
`;

type Opts<P extends object> = ComponentOptions<P>;

export const slideout = <T extends Props = Props>(
	renderer: (host: HTMLElement & T) => unknown,
	{ observedAttributes, styleSheets, ...opts }: Opts<T> = {}
) =>
	component<T>(
		(host) => {
			useSlideout(host as SlideoutElement);
			return renderSlideout(host as SlideoutElement, renderer(host));
		},
		{
			observedAttributes: [
				'aria-label',
				'aria-labelledby',
				'full-screen',
				'no-autofocus',
				'no-escape',
				...(observedAttributes ?? []),
			] as ComponentOptions<T>['observedAttributes'],
			styleSheets: [normalize, styles, ...(styleSheets ?? [])],
			...opts,
		}
	);
