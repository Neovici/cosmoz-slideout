import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-D1k0Osf9.js";import{t as i}from"./cosmoz-button-ObI7Pexd.js";import{n as a,t as o}from"./trusted-6AwRJoKi.js";import{n as s,r as c,t as l}from"./story-docs-CVcPOcP0.js";import{t as u}from"./cosmoz-slideout-panel-BwP5709u.js";import{n as d,r as f}from"./chrome-hcIC7QVf.js";import{t as p}from"./cosmoz-modal-slideout-f4htJ9vf.js";var m,h,g,_,v,y;e((()=>{i(),n(),p(),u(),f(),s(),o(),{expect:m,waitFor:h}=__STORYBOOK_MODULE_TEST__,g=e=>e.shadowRoot.querySelector(`dialog`),_={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:l("The modal drawer: an autonomous wrapper around a native `dialog` promoted with `showModal()` - the page behind is inert, focus is trapped, and the scrim backdrop absorbs its clicks. Esc arrives as the dialog `cancel` (cancelable, bridged through `opened-changed`; the veto holds) and the flip is recorded by the dialog `close`. Programmatic `close()` and slotted `request-close` use the same funnel.")},v={parameters:c("Modal drawers stack: opening one does not close another (there is no light-dismiss among dialogs). One Esc closes every open modal drawer - the platform `cancel` broadcast reaches each dialog, each recording through its own funnel."),render:()=>{let e=document.createElement(`div`),n=document.createElement(`div`),i=!1,a=!1,o=()=>t(r`
					<cosmoz-modal-slideout
						aria-label="First drawer"
						.opened=${i}
						@opened-changed=${e=>{i=e.detail.value,o()}}
					>
						<cosmoz-slideout-panel>
							${d(`First drawer`,{subtitle:`Opened first; sits underneath`})}
							<p>
								Dialogs do not light-dismiss one another: the second drawer
								stacks on top, and this one stays open underneath.
							</p>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
				`,e),s=()=>t(r`
					<cosmoz-modal-slideout
						aria-label="Second drawer"
						.opened=${a}
						@opened-changed=${e=>{a=e.detail.value,s()}}
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
				`,n);return o(),s(),r`
			<cosmoz-button variant="primary" @click=${()=>{i=!0,o()}}>
				Open first
			</cosmoz-button>
			<cosmoz-button variant="secondary" @click=${()=>{a=!0,s()}}>
				Open second
			</cosmoz-button>
			${e}${n}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let[i,o]=[...t.querySelectorAll(`cosmoz-modal-slideout`)];await n(`both drawers stack, A beneath inert`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await h(()=>m(g(i).open).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/open second/iu})),await h(()=>m(g(o).open).toBe(!0)),m(g(i).open).toBe(!0),m(g(i).matches(`:modal`)).toBe(!0),m(g(o).matches(`:modal`)).toBe(!0)}),await n(`one Esc closes both, each through its own funnel`,async()=>{let e=await a(n);e&&(await e.keyboard(`{Escape}`),await h(()=>m(g(o).open).toBe(!1)),await h(()=>m(g(i).open).toBe(!1)))})}},y=[`Stacking`]}))();export{v as Stacking,y as __namedExportsOrder,_ as default};