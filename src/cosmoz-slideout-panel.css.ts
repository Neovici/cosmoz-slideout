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
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 4px) * 3);
		padding: calc(var(--cz-spacing, 4px) * 6) var(--_px)
			calc(var(--cz-spacing, 4px) * 4);
	}

	.body {
		flex: 1;
		min-height: 0;
		overflow: auto;
		overscroll-behavior: contain;
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-slideout-panel-gap, calc(var(--cz-spacing, 4px) * 6));
		padding: 0 var(--_px);
	}

	.footer {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 4px) * 3);
		padding: calc(var(--cz-spacing, 4px) * 4) var(--_px);
		box-shadow: inset 0 1px 0 0
			var(
				--cosmoz-slideout-panel-divider,
				var(--cz-color-border-secondary, #e9eaeb)
			);
	}
`;
