export interface Props {
	onClose?: () => void;
	close?: () => void;
	toggleFullScreen?: () => void;
}

export type SlideoutElement = HTMLElement & Props;
