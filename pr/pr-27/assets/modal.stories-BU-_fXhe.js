import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-B2LRaMcR.js";import{B as i,C as a,I as o,M as s,S as c,_ as l,a as u,b as d,c as f,d as p,f as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E,x as D,y as O}from"./cosmoz-slideout-SJJjs-jk.js";import{t as k}from"./cosmoz-button-fJEwiBqc.js";import{n as A,t as j}from"./trusted-6AwRJoKi.js";import{n as M,r as N,t as P}from"./story-docs-CVcPOcP0.js";import{t as F}from"./cosmoz-slideout-panel-BnC-PcB0.js";var I,L=e((()=>{h(),I=l`
	:host::backdrop {
		background: transparent;
		transition:
			display var(--_dur) allow-discrete,
			overlay var(--_dur) allow-discrete,
			background-color var(--_dur) var(--_ease);
	}

	:host(:popover-open)::backdrop {
		background: var(
			--cosmoz-slideout-backdrop,
			color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)
		);

		@starting-style {
			background: transparent;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:host::backdrop {
			transition: none;
		}
	}
`})),R,z=e((()=>{c(),p(),_(),C(),u(),S(),R=()=>{let[e,t,n]=m(`opened`),r=o(()=>t(!0),[t]),a=o(()=>t(!1),[t]);b({opened:e,close:a});let c=s(),l=T();i(()=>{let t=c.matches(`:popover-open`);e&&!t?(l.capture(),c.showPopover()):!e&&t&&(l.arm(),c.hidePopover(),l.restore())},[e,c,l]),i(()=>{let e=e=>{e.newState===`closed`&&n(!1)};return c.addEventListener(`toggle`,e),()=>c.removeEventListener(`toggle`,e)},[n]);let{fullScreen:u,toggle:d}=f();return g({open:r,close:a,toggleFullScreen:d}),{opened:e,open:r,close:a,fullScreen:u,toggleFullScreen:d}}})),B,V,H=e((()=>{E(),c(),L(),y(),v(),z(),B=()=>(R(),r`<slot></slot>`),V=class extends w{connectedCallback(){super.connectedCallback(),this.setAttribute(`popover`,`auto`),this.setAttribute(`aria-modal`,`true`)}},customElements.define(`cosmoz-modal-slideout`,a(B,{baseElement:V,observedAttributes:[`opened`,`full-screen`],styleSheets:[O,x,I]}))})),U,W,G=e((()=>{c(),d(),U=(e,t)=>r`
	<cosmoz-modal-slideout
		class=${D(e.class)}
		style=${D(e.style)}
		.opened=${e.opened??!1}
		?full-screen=${e.fullScreen}
		aria-label=${D(e.ariaLabel)}
		aria-labelledby=${D(e.ariaLabelledby)}
		@opened-changed=${e.onOpenedChanged}
		@full-screen-changed=${e.onFullScreenChanged}
	>
		${t}
	</cosmoz-modal-slideout>
`,W=(e,t)=>r`
	<cosmoz-slideout-panel
		class=${D(e.class)}
		style=${D(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),K,q,J,Y,X,Z;e((()=>{k(),n(),H(),F(),G(),M(),j(),{expect:K,waitFor:q}=__STORYBOOK_MODULE_TEST__,J={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:P('The modal drawer: rendered with `popover="auto"` and `aria-modal="true"`, a scrim backdrop, and UA-owned dismissal - Esc, the hardware back button and clicks on the backdrop close the surface natively (final; the platform `toggle` records it). Programmatic `close()` and slotted `request-close` keep the vetoable funnel.')},Y={args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>t(U({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},W({},r`
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
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`);await n(`opens with the scrim and modal typing`,async()=>{await q(()=>K(i.matches(`:popover-open`)).toBe(!0)),K(i.getAttribute(`popover`)).toBe(`auto`),K(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await A(n);e&&(await e.keyboard(`{Escape}`),await q(()=>K(i.matches(`:popover-open`)).toBe(!1)))})}},X={parameters:N("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens as the surface."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
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
		`}},Z=[`Playground`,`Backdrop`]}))();export{X as Backdrop,Y as Playground,Z as __namedExportsOrder,J as default};