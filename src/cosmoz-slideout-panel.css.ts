import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		overflow: hidden;
	}

	.header,
	.body,
	.footer {
		--_px: var(
			--cosmoz-slideout-panel-padding-x,
			calc(var(--cz-spacing, 4px) * 4)
		);
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing, 4px) * 1);
		padding: calc(var(--cz-spacing, 4px) * 6) var(--_px)
			calc(var(--cz-spacing, 4px) * 4);
	}
	.header[hidden] {
		display: none;
	}

	.heading {
		margin: 0;
		font-family: var(--cz-font-body, system-ui, sans-serif);
		font-size: var(--cz-text-lg, 1.125rem);
		line-height: var(--cz-text-lg-line-height, 1.5rem);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(
			--cosmoz-slideout-panel-heading-color,
			var(--cz-color-text-primary, #181d27)
		);
	}
	.subtitle {
		margin: 0;
		font-family: var(--cz-font-body, system-ui, sans-serif);
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.25rem);
		color: var(--cz-color-text-tertiary, #535862);
	}

	.close {
		position: absolute;
		top: calc(var(--cz-spacing, 4px) * 3);
		right: calc(var(--cz-spacing, 4px) * 3);
	}

	.body {
		position: relative;
		flex: 1;
		min-height: 0;
		overflow: auto;
		overscroll-behavior: contain;
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-slideout-panel-gap, calc(var(--cz-spacing, 4px) * 6));
		padding: 0 var(--_px);
	}

	.loading {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(
			--cosmoz-slideout-loading-color,
			color-mix(in srgb, var(--cz-color-bg-primary, #fff) 70%, transparent)
		);
		z-index: 2;
	}

	.footer {
		padding: calc(var(--cz-spacing, 4px) * 4) var(--_px);
		box-shadow: inset 0 1px 0 0
			var(
				--cosmoz-slideout-panel-divider,
				var(--cz-color-border-secondary, #e9eaeb)
			);
	}
	.footer[hidden] {
		display: none;
	}
`;
