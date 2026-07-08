import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	[popover] {
		--_px: var(--cosmoz-slideout-panel-padding-x, calc(var(--cz-spacing) * 4));
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 6) var(--_px) calc(var(--cz-spacing) * 4);
	}
	.header[hidden] {
		display: none;
	}

	.heading {
		margin: 0;
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-lg);
		line-height: var(--cz-text-lg-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(
			--cosmoz-slideout-panel-heading-color,
			var(--cz-color-text-primary)
		);
	}
	.subtitle {
		margin: 0;
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-tertiary);
	}

	.close {
		position: absolute;
		top: calc(var(--cz-spacing) * 3);
		right: calc(var(--cz-spacing) * 3);
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-slideout-panel-gap, calc(var(--cz-spacing) * 6));
		padding: 0 var(--_px);
	}

	.footer {
		padding: calc(var(--cz-spacing) * 4) var(--_px);
		box-shadow: inset 0 1px 0 0
			var(--cosmoz-slideout-panel-divider, var(--cz-color-border-secondary));
	}
	.footer[hidden] {
		display: none;
	}
`;
