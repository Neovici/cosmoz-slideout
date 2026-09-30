import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t}from"./iframe-7YYipE_4.js";import{a as n,i as r,l as i,n as a,o,u as s}from"./cosmoz-slideout-0dT-aTa9.js";var c,l=e((()=>{a(),c=r`
	:host {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		overflow: hidden;
	}

	/* cz-card pattern: the region wrappers are zero-cost shells (no padding,
	   no border of their own); all chrome is painted on the slotted elements
	   via ::slotted(*), so empty slots are completely invisible. */

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
`})),u,d=e((()=>{n(),i(),l(),u=()=>t`
	<div class="region" part="header">
		<slot name="header"></slot>
	</div>
	<div class="body" part="body">
		<slot></slot>
	</div>
	<div class="region" part="footer">
		<slot name="footer"></slot>
	</div>
`,customElements.define(`cosmoz-slideout-panel`,s(u,{styleSheets:[o,c]}))}));export{d as t};