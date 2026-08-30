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
