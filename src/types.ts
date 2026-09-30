export interface Props {
	opened?: boolean;
	fullScreen?: boolean;
	noAutofocus?: boolean;
	noEscape?: boolean;
	onClose?: () => void;
	open?: () => void;
	close?: () => void;
	toggleFullScreen?: () => void;
}

export type SlideoutElement = HTMLElement & Props;

/**
 * Props of `<cosmoz-slideout-panel>`; the panel is property-free by design
 * (all content, including the header title and close control, is slotted in).
 * Present for the `HTMLElementTagNameMap` augmentation so typed lookups of
 * the tag still work, and so future accepted props have a home.
 */
export type PanelProps = Record<never, never>;

export type PanelElement = HTMLElement & PanelProps;

/**
 * Props of `<cosmoz-slideout>`; implemented by the element (see the
 * `HTMLElementTagNameMap` augmentation in `cosmoz-slideout.ts` for typed
 * lookups). Also consumed by the `slideout()` render helper.
 */
export interface SlideoutProps {
	opened?: boolean;
	fullScreen?: boolean;
	noEscape?: boolean;
	noAutofocus?: boolean;
	ariaLabel?: string;
	ariaLabelledby?: string;
	class?: string;
	style?: string;
	onOpenedChanged?: (e: CustomEvent<{ value: boolean }>) => void;
	onOpen?: (e: Event) => void;
	onClose?: (e: Event) => void;
	onFullScreenChanged?: (e: CustomEvent) => void;
}
