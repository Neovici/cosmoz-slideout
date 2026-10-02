import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-D1k0Osf9.js";import{t as i}from"./cosmoz-button-ObI7Pexd.js";import{t as a}from"./cosmoz-slideout-vOYaNQ9T.js";import{n as o,r as s}from"./story-docs-CVcPOcP0.js";import{t as c}from"./cosmoz-slideout-panel-BwP5709u.js";import{n as l,r as u}from"./chrome-hcIC7QVf.js";var d,f,p,m,h;e((()=>{i(),n(),a(),c(),u(),o(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`CosmozSlideout/Events`,component:`cosmoz-slideout`,tags:[`autodocs`]},m={parameters:s("The surface event lifecycle: `opened-changed` (the cancelable intent) / `full-screen-changed` / `toggle` (the platform record). The element persists in the DOM across open/close cycles."),render:()=>{let e=document.createElement(`div`),n=document.createElement(`ol`);n.dataset.testid=`event-log`,n.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let i=e=>{let t=document.createElement(`li`);t.textContent=e,n.append(t)},a=e=>e.currentTarget.closest(`cosmoz-slideout`),o=!1,s=()=>t(r`
					<cosmoz-slideout
						aria-label="Lifecycle"
						.opened=${o}
						@opened-changed=${e=>{o=e.detail.value,o&&i(`opened`),s()}}
						@full-screen-changed=${e=>i(`full-screen: ${String(e.detail.value)}`)}
						@toggle=${e=>i(`toggle: ${e.newState}`)}
					>
						<cosmoz-slideout-panel>
							${l(`Lifecycle`,{subtitle:`Events and imperative methods`})}
							<p>
								The element persists in the DOM. It emits <code>opened-changed</code>
								(cancelable intent) as it opens, and the platform's <code>toggle</code>
								as the recorded flip.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end; gap: 8px;"
							>
								<cosmoz-button
									variant="secondary"
									@click=${e=>a(e)?.toggleFullScreen()}
								>
									Toggle full screen
								</cosmoz-button>
								<cosmoz-button
									variant="primary"
									@click=${e=>a(e)?.close()}
								>
									Close
								</cosmoz-button>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);s();let c=e.querySelector(`cosmoz-slideout`);return r`
			<cosmoz-button variant="primary" @click=${()=>{n.replaceChildren(),c.open()}}>
				Open lifecycle panel
			</cosmoz-button>
			${n}${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout`);await n(`logs opened when the surface opens`,async()=>{await f(()=>d(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await f(()=>d(i()).toContain(`full-screen: true`))}),await n(`records the flip through the platform toggle`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await f(()=>d(a.matches(`:popover-open`)).toBe(!1)),await f(()=>d(i()).toContain(`toggle: closed`))})}},h=[`Events`]}))();export{m as Events,h as __namedExportsOrder,p as default};