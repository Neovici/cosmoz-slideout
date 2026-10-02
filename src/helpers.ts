import { html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import type { SlideoutProps } from './types';

/** The modal drawer's props (no `no-escape`; Escape is platform semantics there). */
export type ModalSlideoutProps = Omit<SlideoutProps, 'noEscape'>;

export const slideout = (props: SlideoutProps, content: unknown) => html`
	<cosmoz-slideout
		class=${ifDefined(props.class)}
		style=${ifDefined(props.style)}
		.opened=${props.opened ?? false}
		?full-screen=${props.fullScreen}
		?no-escape=${props.noEscape}
		aria-label=${ifDefined(props.ariaLabel)}
		aria-labelledby=${ifDefined(props.ariaLabelledby)}
		@opened-changed=${props.onOpenedChanged}
		@full-screen-changed=${props.onFullScreenChanged}
	>
		${content}
	</cosmoz-slideout>
`;

export const modalSlideout = (
	props: ModalSlideoutProps,
	content: unknown,
) => html`
	<cosmoz-modal-slideout
		class=${ifDefined(props.class)}
		style=${ifDefined(props.style)}
		.opened=${props.opened ?? false}
		?full-screen=${props.fullScreen}
		aria-label=${ifDefined(props.ariaLabel)}
		aria-labelledby=${ifDefined(props.ariaLabelledby)}
		@opened-changed=${props.onOpenedChanged}
		@full-screen-changed=${props.onFullScreenChanged}
	>
		${content}
	</cosmoz-modal-slideout>
`;

export const slideoutPanel = (
	props: { class?: string; style?: string },
	content: unknown,
) => html`
	<cosmoz-slideout-panel
		class=${ifDefined(props.class)}
		style=${ifDefined(props.style)}
	>
		${content}
	</cosmoz-slideout-panel>
`;
