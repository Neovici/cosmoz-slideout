import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-BLzy1uNf.js";import{b as i,v as a,y as o}from"./use-imperative-api-Cao6xKEw.js";import{t as s}from"./cosmoz-button-DgQU59TQ.js";import{t as c}from"./cosmoz-modal-slideout-vzGxxioy.js";import{t as l}from"./cosmoz-slideout-panel-BrZClh72.js";import{n as u,r as d}from"./story-docs-CVcPOcP0.js";import{n as f,t as p}from"./trusted-6AwRJoKi.js";var m,h,g=e((()=>{i(),a(),m=(e,t)=>r`
	<cosmoz-modal-slideout
		class=${o(e.class)}
		style=${o(e.style)}
		.opened=${e.opened??!1}
		?full-screen=${e.fullScreen}
		aria-label=${o(e.ariaLabel)}
		@opened-changed=${e.onOpenedChanged}
		@full-screen-changed=${e.onFullScreenChanged}
	>
		${t}
	</cosmoz-modal-slideout>
`,h=(e,t)=>r`
	<cosmoz-slideout-panel
		class=${o(e.class)}
		style=${o(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),_,v,y,b,x,S;e((()=>{s(),n(),c(),l(),g(),u(),p(),{expect:_,waitFor:v}=__STORYBOOK_MODULE_TEST__,y={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`]},b={parameters:d("The modal drawer: an autonomous wrapper around a native `dialog` promoted with `showModal()` - the page behind is inert, focus is trapped, and the scrim backdrop absorbs its clicks. Esc arrives as the dialog `cancel` (cancelable, bridged through `opened-changed`; the veto holds) and the flip is recorded by the dialog `close`. Programmatic `close()` and slotted `request-close` use the same funnel."),args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>t(m({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},h({},r`
							<div slot="header">
								<h2 class="demo-heading">Modal slideout</h2>
							</div>
							<p>
								<strong>Esc</strong>, the <strong>backdrop</strong>, or the
								header's close control dismiss it natively. The scrim is
								<code>--cosmoz-slideout-backdrop</code>.
							</p>
						`)),n);return i(),r`
			<cosmoz-button
				variant="primary"
				@click=${()=>{e.opened=!0,i()}}
			>
				Open modal slideout
			</cosmoz-button>
			${n}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`),a=i.shadowRoot.querySelector(`dialog`);await n(`opens with the scrim and modal typing`,async()=>{await v(()=>_(a.open).toBe(!0)),_(a.matches(`:modal`)).toBe(!0),_(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await f(n);e&&(await e.keyboard(`{Escape}`),await v(()=>_(a.open).toBe(!1)))})}},x={parameters:d("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens as the surface. It is the dialog's `::backdrop`: a click on it closes the drawer and is absorbed - the page behind never sees it."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-modal-slideout
						.opened=${n}
						@opened-changed=${e=>{n=e.detail.value,i()}}
						style="--cosmoz-slideout-backdrop: rgb(0 90 156 / 40%)"
					>
						<cosmoz-slideout-panel>
							<p>The scrim is overridden: brand-blue at 40%.</p>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
				Open (brand-blue scrim)
			</cosmoz-button>
			${e}
		`}},S=[`Playground`,`Backdrop`]}))();export{x as Backdrop,b as Playground,S as __namedExportsOrder,y as default};