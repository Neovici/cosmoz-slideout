/** Props of `<cosmoz-slideout>`; all attributes/properties are optional. */
export interface Props {
	/** Show/hide the slideout (reactive, two-way; removing the attribute closes it). */
	opened?: boolean;
	/** Cover the whole document (attribute `full-screen`). */
	fullScreen?: boolean;
	/** Disable Escape-to-close (attribute `no-escape`). */
	noEscape?: boolean;
	/** Called right after the `close` event fires. */
	onClose?: () => void;
	/** Slide-in (guarded no-op when already open). */
	open: () => void;
	/** Slide-out (guarded no-op when already closed). */
	close: () => void;
	/** Toggle the `full-screen` state. */
	toggleFullScreen: () => void;
	/** Label for the dialog (observed + mirrored onto the surface). */
	'aria-label'?: string;
	/** IDREF label for the dialog (observed + mirrored onto the surface). */
	'aria-labelledby'?: string;
}

/** Imperative controls the hooks register on the base element. */
export interface SlideoutControls {
	open(): void;
	close(): void;
	toggleFullScreen(): void;
}

/** Partially-filled controls during hook wiring (each hook adds its part). */
export type PartialControls = {
	[K in keyof SlideoutControls]?: SlideoutControls[K];
};

/** The `<cosmoz-slideout>` element. */
export type SlideoutElement = HTMLElement & Props;

/** Props of `<cosmoz-slideout-panel>` (property-free by design). */
export type PanelProps = Record<never, never>;

/** The `<cosmoz-slideout-panel>` element. */
export type PanelElement = HTMLElement & PanelProps;

/** Props accepted by the `slideout()` render helper. */
export interface SlideoutProps {
	/** Whether the slideout is open. */
	opened?: boolean;
	/** Cover the whole document. */
	fullScreen?: boolean;
	/** Disable Escape-to-close. */
	noEscape?: boolean;
	/** Label for the dialog. */
	ariaLabel?: string;
	/** IDREF label for the dialog. */
	ariaLabelledby?: string;
	/** Class attribute for the host element. */
	class?: string;
	/** Inline style for the host element. */
	style?: string;
	/** Two-way binding handler for `opened`. */
	onOpenedChanged?: (e: CustomEvent<{ value: boolean }>) => void;
	/** Slide-in settled handler. */
	onOpen?: (e: Event) => void;
	/** Slide-out settled handler. */
	onClose?: (e: Event) => void;
	/** Full-screen flip handler. */
	onFullScreenChanged?: (e: CustomEvent) => void;
}
