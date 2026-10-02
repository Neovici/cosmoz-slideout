import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t}from"./iframe-COvrAId8.js";import{_ as n,b as r,g as i,h as a,p as o,x as s}from"./use-imperative-api-BJ6xCXAr.js";var c,l=e((()=>{o(),c=a`
	:host {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		overflow: hidden;
	}

	.region {
		display: contents;
	}

	.body {
		flex: 1;
		min-height: 0;
		overflow: auto;
		overscroll-behavior: contain;
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-slideout-panel-gap, calc(var(--cz-spacing, 4px) * 6));
		padding: 0
			var(--cosmoz-slideout-panel-padding-x, calc(var(--cz-spacing, 4px) * 4));
	}

	slot[name='header']::slotted(*),
	slot[name='footer']::slotted(*) {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 4px) * 3);
		flex: none;
		min-width: 0;
		padding-inline: var(
			--cosmoz-slideout-panel-padding-x,
			calc(var(--cz-spacing, 4px) * 4)
		);
		padding-block: calc(var(--cz-spacing, 4px) * 4);
	}

	slot[name='footer']::slotted(*) {
		border-block-start: 1px solid
			var(
				--cosmoz-slideout-panel-divider,
				var(--cz-color-border-secondary, #e9eaeb)
			);
	}
`})),u,d=e((()=>{i(),r(),l(),u=()=>t`
	<div class="region" part="header">
		<slot name="header"></slot>
	</div>
	<div class="body" part="body">
		<slot></slot>
	</div>
	<div class="region" part="footer">
		<slot name="footer"></slot>
	</div>
`,customElements.define(`cosmoz-slideout-panel`,s(u,{styleSheets:[n,c]}))}));export{d as t};