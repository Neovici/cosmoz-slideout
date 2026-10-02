import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-CIRWWJHW.js";import{b as i,v as a,y as o}from"./use-imperative-api-DO5vi0Ul.js";import{t as s}from"./cosmoz-button-B9Zoldxi.js";import{t as c}from"./cosmoz-modal-slideout-Doabd_RT.js";import{t as l}from"./cosmoz-slideout-panel-CRKQDjad.js";import{n as u,r as d,t as f}from"./story-docs-CVcPOcP0.js";import{n as p,t as m}from"./trusted-6AwRJoKi.js";var h,g,_=e((()=>{i(),a(),h=(e,t)=>r`
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
`,g=(e,t)=>r`
	<cosmoz-slideout-panel
		class=${o(e.class)}
		style=${o(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),v,y,b,x,S,C;e((()=>{s(),n(),c(),l(),_(),u(),m(),{expect:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:f("The modal drawer: an autonomous wrapper around a native `dialog` promoted with `showModal()` - the page behind is inert, focus is trapped, and the scrim backdrop absorbs its clicks. Esc arrives as the dialog `cancel` (cancelable, bridged through `opened-changed`; the veto holds) and the flip is recorded by the dialog `close`. Programmatic `close()` and slotted `request-close` use the same funnel.")},x={args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>t(h({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},g({},r`
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
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`),a=i.shadowRoot.querySelector(`dialog`);await n(`opens with the scrim and modal typing`,async()=>{await y(()=>v(a.open).toBe(!0)),v(a.matches(`:modal`)).toBe(!0),v(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await p(n);e&&(await e.keyboard(`{Escape}`),await y(()=>v(a.open).toBe(!1)))})}},S={parameters:d("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens as the surface."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
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
		`}},C=[`Playground`,`Backdrop`]}))();export{S as Backdrop,x as Playground,C as __namedExportsOrder,b as default};