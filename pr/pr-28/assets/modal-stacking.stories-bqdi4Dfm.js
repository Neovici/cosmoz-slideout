import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-ZQZcm3_E.js";import{t as i,y as a}from"./cosmoz-slideout-panel-Dfq-x_xt.js";import{t as o}from"./cosmoz-modal-slideout-CBGktES0.js";import{n as s,r as c}from"./story-docs-CVcPOcP0.js";import{n as l,t as u}from"./trusted-6AwRJoKi.js";import{n as d,r as f}from"./chrome-BycPpYic.js";var p,m,h,g,_,v;e((()=>{a(),n(),o(),i(),f(),s(),u(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h=e=>e.shadowRoot.querySelector(`dialog`),g={title:`CosmozModalSlideout`,component:`cosmoz-modal-slideout`,tags:[`autodocs`]},_={parameters:c("Modal drawers stack: opening one does not close another (there is no light-dismiss among dialogs). One Esc closes every open modal drawer - the platform `cancel` broadcast reaches each dialog, each recording through its own funnel."),render:()=>{let e=document.createElement(`div`),n=document.createElement(`div`),i=!1,a=!1,o=()=>t(r`
					<cosmoz-modal-slideout
						aria-label="Second drawer"
						.opened=${a}
						@opened-changed=${e=>{a=e.detail.value,o()}}
					>
						<cosmoz-slideout-panel>
							${d(`Second drawer`,{subtitle:`Opened second; on top`})}
							<p>
								The newest drawer is the interactive one; the first is inert
								beneath it. One Esc closes both - the platform broadcasts cancel
								to every open dialog.
							</p>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
				`,n),s=()=>{a=!0,o()},c=()=>t(r`
					<cosmoz-modal-slideout
						aria-label="First drawer"
						.opened=${i}
						@opened-changed=${e=>{i=e.detail.value,c()}}
					>
						<cosmoz-slideout-panel>
							${d(`First drawer`,{subtitle:`Opened first; sits underneath`})}
							<p>
								Dialogs do not light-dismiss one another: the second drawer
								stacks on top, and this one stays open underneath.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end;"
							>
								<cosmoz-button variant="secondary" @click=${s}>
									Open second
								</cosmoz-button>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
				`,e);return c(),o(),r`
			<cosmoz-button variant="primary" @click=${()=>{i=!0,c()}}>
				Open first
			</cosmoz-button>
			${e}${n}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let[i,a]=[...t.querySelectorAll(`cosmoz-modal-slideout`)];await n(`both drawers stack, A beneath inert`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await m(()=>p(h(i).open).toBe(!0));let t=await e.findByShadowRole(`button`,{name:/open second/iu});await r.click(t),await m(()=>p(h(a).open).toBe(!0)),p(h(i).open).toBe(!0),p(h(i).matches(`:modal`)).toBe(!0),p(h(a).matches(`:modal`)).toBe(!0)}),await n(`one Esc closes both, each through its own funnel`,async()=>{let e=await l(n);e&&(await e.keyboard(`{Escape}`),await m(()=>p(h(a).open).toBe(!1)),await m(()=>p(h(i).open).toBe(!1)))})}},v=[`Stacking`]}))();export{_ as Stacking,v as __namedExportsOrder,g as default};