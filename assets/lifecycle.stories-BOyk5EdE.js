import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-DgIR1Z41.js";import{n as i}from"./cosmoz-slideout-Dq4ZDEru.js";import{t as a}from"./cosmoz-button-C77Od3jb.js";import{n as o,r as s}from"./story-docs-CVcPOcP0.js";import{t as c}from"./cosmoz-slideout-panel-D9m1FsOa.js";import{n as l,r as u}from"./chrome-mQwnEa0m.js";var d,f,p,m,h;e((()=>{a(),n(),i(),c(),u(),o(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`CosmozSlideout/Events`,component:`cosmoz-slideout`,tags:[`autodocs`]},m={parameters:s("The surface event lifecycle: `open` / `opened-changed` / `full-screen-changed` / `close`. The element persists in the DOM across open/close cycles."),render:()=>{let e=document.createElement(`div`),n=document.createElement(`ol`);n.dataset.testid=`event-log`,n.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let i=e=>{let t=document.createElement(`li`);t.textContent=e,n.append(t)},a=e=>e.currentTarget.closest(`cosmoz-slideout`),o=!1,s=()=>t(r`
					<cosmoz-slideout
						aria-label="Lifecycle"
						.opened=${o}
						@opened-changed=${e=>{o=e.detail.value,o&&i(`opened`),s()}}
						@full-screen-changed=${e=>i(`full-screen: ${String(e.detail.value)}`)}
						@close=${()=>i(`close event`)}
					>
						<cosmoz-slideout-panel>
							${l(`Lifecycle`,{subtitle:`Events and imperative methods`})}
							<p>
								The element persists in the DOM. It emits <code>opened-changed</code>
								and, on close, <code>close</code> once the slide-out animation
								completes.
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
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout`);await n(`logs opened when the surface opens`,async()=>{await f(()=>d(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await f(()=>d(i()).toContain(`full-screen: true`))}),await n(`fires close when the animation finishes`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await f(()=>d(a.matches(`:popover-open`)).toBe(!1)),await f(()=>d(i()).toContain(`close event`))})}},h=[`Events`]}))();export{m as Events,h as __namedExportsOrder,p as default};