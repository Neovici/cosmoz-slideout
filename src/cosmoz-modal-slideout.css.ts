import { tagged as css } from '@neovici/cosmoz-utils';

/**
 * A top-layer backdrop rendered by the platform for `popover="auto"`;
 * fades with the surface's duration/easing tokens.
 *
 * `::backdrop` inherits custom properties from the originating
 * element, so `--cosmoz-slideout-backdrop` resolves there.
 */
export default css`
	:host::backdrop {
		background: transparent;
		transition:
			display var(--_dur) allow-discrete,
			overlay var(--_dur) allow-discrete,
			background-color var(--_dur) var(--_ease);
	}

	:host(:popover-open)::backdrop {
		background: var(
			--cosmoz-slideout-backdrop,
			color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)
		);

		@starting-style {
			background: transparent;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:host::backdrop {
			transition: none;
		}
	}
`;
