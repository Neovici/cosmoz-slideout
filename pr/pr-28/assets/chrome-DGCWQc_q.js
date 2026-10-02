import{i as e}from"./preload-helper-B45gAKPr.js";import{mt as t,pt as n,ut as r}from"./iframe-jugMzLju.js";import{t as i}from"./cosmoz-button-DoZz-ifT.js";import{r as a,t as o}from"./untitled-DhejpYDV.js";var s,c,l,u,d,f=e((()=>{i(),o(),t(),s=e=>e.currentTarget.dispatchEvent(new Event(`request-close`,{bubbles:!0,composed:!0,cancelable:!0})),c=`margin: 0; font-size: var(--cz-text-lg, 1.125rem); line-height: var(--cz-text-lg-line-height, 1.5rem); font-weight: var(--cz-font-weight-medium, 500); color: var(--cz-color-text-primary, #181d27);`,l=`margin: 0; font-size: var(--cz-text-sm, 0.875rem); line-height: var(--cz-text-sm-line-height, 1.25rem); color: var(--cz-color-text-secondary, #535862);`,u=e=>n`<div
		slot="footer"
		style="display: flex; justify-content: flex-end; gap: 8px; margin-left: auto;"
	>
		${e}
	</div>`,d=(e,{subtitle:t}={})=>n`<div
		slot="header"
		style="display: flex; align-items: flex-start; justify-content: space-between; gap: calc(var(--cz-spacing) * 3); min-width: 0;"
	>
		<div
			style="display: flex; flex-direction: column; gap: calc(var(--cz-spacing) * 1); min-width: 0;"
		>
			<h2 style=${c}>${e}</h2>
			${t?n`<p style=${l}>${t}</p>`:r}
		</div>
		<cosmoz-button
			variant="tertiary"
			size="sm"
			aria-label="Close"
			@click=${s}
		>
			${a({slot:`prefix`})}
		</cosmoz-button>
	</div>`}));export{s as i,d as n,f as r,u as t};