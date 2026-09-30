import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n}from"./iframe-CfM4LbFx.js";import{t as r}from"./cosmoz-button-1YI0GYsL.js";import{r as i,t as a}from"./untitled-CmNuXfuZ.js";var o,s,c,l,u,d=e((()=>{r(),a(),n(),o=e=>e.currentTarget.dispatchEvent(new Event(`request-close`,{bubbles:!0,composed:!0,cancelable:!0})),s=`margin: 0; font-size: var(--cz-text-lg, 1.125rem); line-height: var(--cz-text-lg-line-height, 1.5rem); font-weight: var(--cz-font-weight-medium, 500); color: var(--cz-color-text-primary, #181d27);`,c=`margin: 0; font-size: var(--cz-text-sm, 0.875rem); line-height: var(--cz-text-sm-line-height, 1.25rem); color: var(--cz-color-text-secondary, #535862);`,l=e=>t`<div
		slot="footer"
		style="display: flex; justify-content: flex-end; gap: 8px; margin-left: auto;"
	>
		${e}
	</div>`,u=(e,{subtitle:n}={})=>t`<div
		slot="header"
		style="display: flex; align-items: flex-start; justify-content: space-between; gap: calc(var(--cz-spacing) * 3); min-width: 0;"
	>
		<div
			style="display: flex; flex-direction: column; gap: calc(var(--cz-spacing) * 1); min-width: 0;"
		>
			<h2 style=${s}>${e}</h2>
			${n!==void 0&&t`<p style=${c}>${n}</p>`}
		</div>
		<cosmoz-button
			variant="tertiary"
			size="sm"
			aria-label="Close"
			@click=${o}
		>
			${i({slot:`prefix`})}
		</cosmoz-button>
	</div>`}));export{o as i,u as n,d as r,l as t};