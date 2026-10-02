import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-BbjzEM5R.js";import{A as i,B as a,I as o,P as s,_ as c,a as ee,b as l,d as u,f as d,g as f,h as p,i as m,l as h,n as g,o as _,p as v,r as y,t as b,u as x,v as S,x as C,y as w}from"./use-imperative-api-CmlOl-La.js";import{t as T}from"./cosmoz-button-CtkBdSYu.js";import{n as E,t as D}from"./trusted-6AwRJoKi.js";import{n as O,r as k,t as A}from"./story-docs-CVcPOcP0.js";import{t as j}from"./cosmoz-slideout-panel-vaKugmTZ.js";var M,N=e((()=>{v(),M=p`
	:host {
		display: block;
	}

	dialog {
		box-sizing: border-box;
		position: fixed;
		inset: 0 0 0 auto;
		height: 100%;
		max-height: 100%;
		width: var(--cosmoz-slideout-width, min(400px, 100vw));
		max-width: 100vw;
		margin: 0;
		padding: 0;
		border: none;
		border-left: var(
			--cosmoz-slideout-border,
			1px solid var(--cz-color-border-secondary, #e9eaeb)
		);
		background: var(--cosmoz-slideout-bg, var(--cz-color-bg-primary, #fff));
		color: var(--cosmoz-slideout-color, var(--cz-color-text-primary, #181d27));
		box-shadow: var(
			--cosmoz-slideout-shadow,
			var(--cz-shadow-xl, -8px 0 24px rgb(10 13 18 / 18%))
		);
		flex-direction: column;
		overflow: hidden;

		translate: 0 0;
		--_dur: var(
			--cosmoz-slideout-exit-duration,
			var(--cosmoz-slideout-duration, 0.3s)
		);
		--_ease: var(--cosmoz-slideout-easing, cubic-bezier(0.4, 0, 0.2, 1));
		transition:
			translate var(--_dur) var(--_ease),
			overlay var(--_dur) var(--_ease) allow-discrete,
			display var(--_dur) var(--_ease) allow-discrete,
			width 0.2s var(--_ease);
	}

	dialog[open] {
		display: flex;
		--_dur: var(--cosmoz-slideout-duration, 0.3s);
	}

	dialog:not([open]) {
		translate: 100% 0;
	}

	@starting-style {
		dialog[open] {
			translate: 100% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		dialog {
			transition: none;
		}
	}

	:host([full-screen]) dialog {
		width: var(--cosmoz-slideout-full-screen-width, 100vw);
	}

	dialog slot {
		flex: 1;
		min-height: 0;
	}

	dialog::backdrop {
		background: transparent;
		transition:
			display var(--_dur) allow-discrete,
			overlay var(--_dur) allow-discrete,
			background-color var(--_dur) var(--_ease);
	}

	dialog[open]::backdrop {
		background: var(
			--cosmoz-slideout-backdrop,
			color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)
		);

		@starting-style {
			background: transparent;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		dialog::backdrop {
			transition: none;
		}
	}
`})),P,F=e((()=>{l(),P=()=>{let e=i();s(()=>{let t=e.shadowRoot?.querySelector(`dialog`);if(!t)return;let n=e.getAttribute(`aria-label`);n?t.setAttribute(`aria-label`,n):t.removeAttribute(`aria-label`)})}})),I,L=e((()=>{l(),I=(e,t)=>{let n=i();a(()=>{let r=n.shadowRoot?.querySelector(`dialog`);if(!r)return;let i=t=>{e()===!1&&t.preventDefault()},a=()=>t(!1),o=t=>{t.target===r&&e()};return r.addEventListener(`cancel`,i),r.addEventListener(`close`,a),r.addEventListener(`click`,o),()=>{r.removeEventListener(`cancel`,i),r.removeEventListener(`close`,a),r.removeEventListener(`click`,o)}},[])}})),R,z=e((()=>{l(),R=e=>{let t=i();a(()=>{let n=t.shadowRoot?.querySelector(`dialog`);n&&(e&&!n.open?n.showModal():!e&&n.open&&n.close())},[e])}})),B,V=e((()=>{l(),h(),L(),z(),ee(),y(),b(),B=()=>{let[e,t,n]=x(`opened`),r=o(()=>t(!0),[t]),i=o(()=>t(!1),[t]);m({opened:e,close:i}),I(i,n),R(e);let{fullScreen:a,toggle:s}=_();return g({open:r,close:i,toggleFullScreen:s}),{opened:e,open:r,close:i,fullScreen:a,toggleFullScreen:s}}})),H,U,W=e((()=>{f(),l(),N(),d(),F(),V(),H=()=>(B(),P(),r`<dialog part="dialog"><slot></slot></dialog>`),U=class extends HTMLElement{controls;connectedCallback(){this.setAttribute(`aria-modal`,`true`)}open(){this.controls?.open()}close(){this.controls?.close()}toggleFullScreen(){this.controls?.toggleFullScreen()}},customElements.define(`cosmoz-modal-slideout`,C(H,{baseElement:U,observedAttributes:[`opened`,`full-screen`,`aria-label`],styleSheets:[c,u,M]}))})),G,K,q=e((()=>{l(),S(),G=(e,t)=>r`
	<cosmoz-modal-slideout
		class=${w(e.class)}
		style=${w(e.style)}
		.opened=${e.opened??!1}
		?full-screen=${e.fullScreen}
		aria-label=${w(e.ariaLabel)}
		@opened-changed=${e.onOpenedChanged}
		@full-screen-changed=${e.onFullScreenChanged}
	>
		${t}
	</cosmoz-modal-slideout>
`,K=(e,t)=>r`
	<cosmoz-slideout-panel
		class=${w(e.class)}
		style=${w(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),J,Y,X,Z,Q,$;e((()=>{T(),n(),W(),j(),q(),O(),D(),{expect:J,waitFor:Y}=__STORYBOOK_MODULE_TEST__,X={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:A("The modal drawer: an autonomous wrapper around a native `dialog` promoted with `showModal()` - the page behind is inert, focus is trapped, and the scrim backdrop absorbs its clicks. Esc arrives as the dialog `cancel` (cancelable, bridged through `opened-changed`; the veto holds) and the flip is recorded by the dialog `close`. Programmatic `close()` and slotted `request-close` use the same funnel.")},Z={args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>t(G({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},K({},r`
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
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`),a=i.shadowRoot.querySelector(`dialog`);await n(`opens with the scrim and modal typing`,async()=>{await Y(()=>J(a.open).toBe(!0)),J(a.matches(`:modal`)).toBe(!0),J(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await E(n);e&&(await e.keyboard(`{Escape}`),await Y(()=>J(a.open).toBe(!1)))})}},Q={parameters:k("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens as the surface."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
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
		`}},$=[`Playground`,`Backdrop`]}))();export{Q as Backdrop,Z as Playground,$ as __namedExportsOrder,X as default};