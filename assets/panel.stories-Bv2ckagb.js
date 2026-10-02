import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r,ut as i}from"./iframe-ZQZcm3_E.js";import{b as a,t as o,x as s,y as c}from"./cosmoz-slideout-panel-Dfq-x_xt.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";import{i as f,n as p,r as m,t as h}from"./chrome-BycPpYic.js";import{t as g}from"./cosmoz-slideout-BQOLIm6Z.js";import{i as _,r as v,t as y}from"./arg-types-BmyTjPTH.js";var b,x,S,C,w,T,E;e((()=>{c(),n(),a(),g(),o(),v(),m(),l(),{expect:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S=(e,t,n)=>{let a=Number(e.rows??0);return r`
		<cosmoz-slideout
			.opened=${t}
			aria-label=${s(e[`aria-label`])}
			?full-screen=${e[`full-screen`]}
			?no-escape=${e[`no-escape`]}
			style=${`--cosmoz-slideout-width: ${e.width};`}
			@opened-changed=${e=>n(e.detail.value)}
		>
			<cosmoz-slideout-panel>
				${e.heading?p(e.heading,{subtitle:e.subtitle}):i}
				${a?r`${Array.from({length:a},(e,t)=>t+1).map(e=>r`
									<p style="margin: 0; color: var(--cz-color-text-tertiary);">
										<strong style="color: var(--cz-color-text-primary);">
											Event ${e}
										</strong>
										· Invoice ${4200+e} matched automatically.
									</p>
								`)}
							${h(r`<cosmoz-button variant="secondary" @click=${f}>
									Close
								</cosmoz-button>`)}`:r`
								<p>
									Adjust the Controls: heading slotted into the header, rows for
									scrollable body content, full-screen, the width custom
									property.
								</p>
								<div
									slot="footer"
									style="display: flex; justify-content: flex-end;"
								>
									<cosmoz-button variant="primary" @click=${f}>
										Done
									</cosmoz-button>
								</div>
							`}
			</cosmoz-slideout-panel>
		</cosmoz-slideout>
	`},C=(e,t,n)=>r`
	<cosmoz-button variant="primary" @click=${t}>${e}</cosmoz-button>
	${n}
`,w={title:`CosmozSlideoutPanel`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],argTypes:_,args:y,parameters:d("Layout chrome nested inside a `<cosmoz-slideout>`: header/body/footer regions with token-backed spacing - no properties. Slot your header (with a close control dispatching `request-close`) into `header`, content into the default slot, and actions into `footer`. The Playground drives it from the Controls - empty `heading` shows the invisible empty-header region, `rows` fills a scrollable body.")},T={parameters:u("Everything is a control: `heading`/`subtitle` slot the header (empty `heading` = header region present but invisible), `rows` fills a scrollable body with header and footer fixed, `full-screen` covers the viewport, `width` sets the `--cosmoz-slideout-width` custom property."),render:e=>{let n=document.createElement(`div`),r=e.opened??!1,i=()=>t(S(e,r,t=>{r=t,e.opened=t,i()}),n);return i(),C(`Open panel`,()=>{r=!0,e.opened=!0,i()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`);await n(`opens with the slotted header and footer actions`,async()=>{await x(()=>b(i.matches(`:popover-open`)).toBe(!0)),await e.findByShadowText(/Supplier preview/u)}),await n(`the slotted close control dismisses the panel`,async()=>{a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`).assignedElements()[0].querySelector(`cosmoz-button[aria-label="Close"]`).click(),await x(()=>b(i.matches(`:popover-open`)).toBe(!1))})}},E=[`Playground`]}))();export{T as Playground,E as __namedExportsOrder,w as default};