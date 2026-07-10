export interface Props {
	variant?: 'panel';
	heading?: string;
	subtitle?: string;
	closeable?: boolean;
	fullScreen?: boolean;
	loading?: boolean;
	noAutofocus?: boolean;
	noEscape?: boolean;
	onClose?: () => void;
	close?: () => void;
	toggleFullScreen?: () => void;
}

export type SlideoutElement = HTMLElement & Props;
