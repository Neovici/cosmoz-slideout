import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-CIRWWJHW.js";import{t as i}from"./cosmoz-button-B9Zoldxi.js";import{t as a}from"./cosmoz-modal-slideout-Doabd_RT.js";import{t as o}from"./cosmoz-slideout-panel-CRKQDjad.js";import{n as s,r as c,t as l}from"./story-docs-CVcPOcP0.js";import{n as u,t as d}from"./trusted-6AwRJoKi.js";import{n as f,r as p}from"./chrome-WgmRkc-F.js";var m,h,g,_,v,y;e((()=>{i(),n(),a(),o(),p(),s(),d(),{expect:m,waitFor:h}=__STORYBOOK_MODULE_TEST__,g=e=>e.shadowRoot.querySelector(`dialog`),_={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:l("The modal drawer: an autonomous wrapper around a native `dialog` promoted with `showModal()` - the page behind is inert, focus is trapped, and the scrim backdrop absorbs its clicks. Esc arrives as the dialog `cancel` (cancelable, bridged through `opened-changed`; the veto holds) and the flip is recorded by the dialog `close`. Programmatic `close()` and slotted `request-close` use the same funnel.")},v={parameters:c("Modal drawers stack: opening one does not close another (there is no light-dismiss among dialogs). One Esc closes every open modal drawer - the platform `cancel` broadcast reaches each dialog, each recording through its own funnel."),render:()=>{let e=document.createElement(`div`),n=document.createElement(`div`),i=!1,a=!1,o=()=>t(r`
					<cosmoz-modal-slideout
						aria-label="First drawer"
						.opened=${i}
						@opened-changed=${e=>{i=e.detail.value,o()}}
					>
						<cosmoz-slideout-panel>
							${f(`First drawer`,{subtitle:`Opened first; sits underneath`})}
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
							${f(`Second drawer`,{subtitle:`Opened second; on top`})}
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
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let[i,a]=[...t.querySelectorAll(`cosmoz-modal-slideout`)];await n(`both drawers stack, A beneath inert`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await h(()=>m(g(i).open).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/open second/iu})),await h(()=>m(g(a).open).toBe(!0)),m(g(i).open).toBe(!0),m(g(i).matches(`:modal`)).toBe(!0),m(g(a).matches(`:modal`)).toBe(!0)}),await n(`one Esc closes both, each through its own funnel`,async()=>{let e=await u(n);e&&(await e.keyboard(`{Escape}`),await h(()=>m(g(a).open).toBe(!1)),await h(()=>m(g(i).open).toBe(!1)))})}},y=[`Stacking`]}))();export{v as Stacking,y as __namedExportsOrder,_ as default};