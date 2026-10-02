import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-ZQZcm3_E.js";import{S as i,b as a,t as o,x as s,y as c}from"./cosmoz-slideout-panel-Dfq-x_xt.js";import{t as l}from"./cosmoz-modal-slideout-CBGktES0.js";import{n as u,r as d,t as f}from"./story-docs-CVcPOcP0.js";import{n as p,t as m}from"./trusted-6AwRJoKi.js";var h,g,_=e((()=>{i(),a(),h=(e,t)=>r`
	<cosmoz-modal-slideout
		class=${s(e.class)}
		style=${s(e.style)}
		.opened=${e.opened??!1}
		?full-screen=${e.fullScreen}
		aria-label=${s(e.ariaLabel)}
		@opened-changed=${e.onOpenedChanged}
		@full-screen-changed=${e.onFullScreenChanged}
	>
		${t}
	</cosmoz-modal-slideout>
`,g=(e,t)=>r`
	<cosmoz-slideout-panel
		class=${s(e.class)}
		style=${s(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),v,y,b,x,S;e((()=>{c(),n(),l(),o(),_(),u(),m(),{expect:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`CosmozModalSlideout`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:f("The modal drawer: an autonomous wrapper around a native `dialog` promoted with `showModal()` - the page behind is inert, focus is trapped, and the scrim backdrop absorbs its clicks (tune the scrim with the `--cosmoz-slideout-backdrop` control). Esc arrives as the dialog `cancel` (cancelable, bridged through `opened-changed`; the veto holds) and the flip is recorded by the dialog `close`. Programmatic `close()` and slotted `request-close` use the same funnel.")},x={parameters:d("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens. A click on it closes the drawer and is absorbed - the page behind never sees it."),args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>t(h({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},g({},r`
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
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`),a=i.shadowRoot.querySelector(`dialog`);await n(`opens with the scrim and modal typing`,async()=>{await y(()=>v(a.open).toBe(!0)),v(a.matches(`:modal`)).toBe(!0),v(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await p(n);e&&(await e.keyboard(`{Escape}`),await y(()=>v(a.open).toBe(!1)))}),await n(`a backdrop click closes the drawer, absorbed`,async()=>{i.open(),await y(()=>v(a.open).toBe(!0)),a.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,composed:!0})),await y(()=>v(a.open).toBe(!1))})}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};