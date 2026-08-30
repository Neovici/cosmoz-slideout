import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: contents;
	}

	[popover] {
		box-sizing: border-box;
		position: fixed;
		inset: 0 0 0 auto;
		height: 100%;
		max-height: 100%;
		width: var(--cosmoz-slideout-width, min(400px, 100vw));
		max-width: 100vw;
		margin: 0;
		padding: 0;
		border: none;
		border-left: var(
			--cosmoz-slideout-border,
			1px solid var(--cz-color-border-secondary, #e9eaeb)
		);
		background: var(--cosmoz-slideout-bg, var(--cz-color-bg-primary, #fff));
		color: var(--cosmoz-slideout-color, var(--cz-color-text-primary, #181d27));
		box-shadow: var(
			--cosmoz-slideout-shadow,
			var(--cz-shadow-xl, -8px 0 24px rgb(10 13 18 / 18%))
		);
		flex-direction: column;
		overflow: hidden;

		translate: 0 0;
		--_dur: var(
			--cosmoz-slideout-exit-duration,
			var(--cosmoz-slideout-duration, 0.3s)
		);
		--_ease: var(--cosmoz-slideout-easing, cubic-bezier(0.4, 0, 0.2, 1));
		transition: translate var(--_dur) var(--_ease),
			overlay var(--_dur) var(--_ease) allow-discrete,
			display var(--_dur) var(--_ease) allow-discrete, width 0.2s var(--_ease);
	}

	[popover]:popover-open {
		display: flex;
		--_dur: var(--cosmoz-slideout-duration, 0.3s); /* enter duration */
	}

	[popover]:not(:popover-open) {
		translate: 100% 0;
	}

	@starting-style {
		[popover]:popover-open {
			translate: 100% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}

	:host([full-screen]) [popover] {
		width: var(--cosmoz-slideout-full-screen-width, 100vw);
	}

	[popover] > ::slotted(*) {
		flex: 1;
		min-height: 0;
	}
`;
