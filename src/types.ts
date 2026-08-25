export interface Props {
	opened?: boolean;
	fullScreen?: boolean;
	loading?: boolean;
	noAutofocus?: boolean;
	noEscape?: boolean;
	onClose?: () => void;
	open?: () => void;
	close?: () => void;
	toggleFullScreen?: () => void;
}

export type SlideoutElement = HTMLElement & Props;

export interface PanelProps extends Props {
	heading?: string;
	subtitle?: string;
	closeable?: boolean;
}

export type PanelElement = HTMLElement & PanelProps;
