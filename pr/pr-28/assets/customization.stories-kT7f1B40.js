import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-CYc6Q14N.js";import{t as i}from"./cosmoz-button-BgqWqaWl.js";import{t as a}from"./cosmoz-slideout-B2SKNDkS.js";import{n as o,r as s}from"./story-docs-CVcPOcP0.js";var c,l,u,d,f,p,m;e((()=>{i(),n(),a(),o(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),d=r`
	<cosmoz-button
		style="position: absolute; top: 8px; right: 8px; z-index: 1;"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${u}
	>
		✕
	</cosmoz-button>
`,f={title:`CosmozSlideout/Shell/Customization`,component:`cosmoz-slideout`,tags:[`autodocs`]},p={parameters:s("Size and tune the surface with the `--cosmoz-slideout-*` custom properties (here `--cosmoz-slideout-width`). Point them at `@neovici/cosmoz-tokens` `--cz-*` tokens to track the design system and dark mode."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-slideout
						aria-label="Wide panel"
						.opened=${n}
						@opened-changed=${e=>{n=e.detail.value,i()}}
						style="--cosmoz-slideout-width: 640px;"
					>
						<div
							style="position: relative; display: flex; flex-direction: column; height: 100%;"
						>
							${d}
							<h2
								style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								Wide panel
							</h2>
							<div
								style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
							>
								The width is 640px until the viewport becomes narrower.
							</div>
						</div>
					</cosmoz-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>Open wide</cosmoz-button>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open wide/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`honors the width custom property`,async()=>{await l(()=>c(i.matches(`:popover-open`)).toBe(!0)),await l(()=>c(Math.round(i.getBoundingClientRect().width)).toBe(Math.min(640,window.innerWidth)))})}},m=[`Width`]}))();export{p as Width,m as __namedExportsOrder,f as default};