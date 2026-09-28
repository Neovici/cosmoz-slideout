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

export interface PanelProps {
	heading?: string;
	subtitle?: string;
	closeable?: boolean;
	loading?: boolean;
}

export type PanelElement = HTMLElement & PanelProps;

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
