import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t}from"./iframe-ZQZcm3_E.js";import{C as n,H as r,I as i,M as a,R as o,S as s,_ as c,a as l,c as u,d,f,g as p,i as m,l as h,m as g,n as _,p as v,r as y,u as b,v as x}from"./cosmoz-slideout-panel-Dfq-x_xt.js";var S,C=e((()=>{g(),S=p`
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
`})),w,T=e((()=>{s(),w=()=>{let e=a();i(()=>{let t=e.shadowRoot?.querySelector(`dialog`);if(!t)return;let n=e.getAttribute(`aria-label`);n?t.setAttribute(`aria-label`,n):t.removeAttribute(`aria-label`)})}})),E,D=e((()=>{s(),E=(e,t)=>{let n=a();r(()=>{let r=n.shadowRoot?.querySelector(`dialog`);if(!r)return;let i=t=>{e()===!1&&t.preventDefault()},a=()=>t(!1),o=t=>{t.target===r&&e()};return r.addEventListener(`cancel`,i),r.addEventListener(`close`,a),r.addEventListener(`click`,o),()=>{r.removeEventListener(`cancel`,i),r.removeEventListener(`close`,a),r.removeEventListener(`click`,o)}},[])}})),O,k=e((()=>{s(),O=e=>{let t=a();r(()=>{let n=t.shadowRoot?.querySelector(`dialog`);n&&(e&&!n.open?n.showModal():!e&&n.open&&n.close())},[e])}})),A,j=e((()=>{s(),b(),D(),k(),u(),m(),_(),A=()=>{let[e,t,n]=d(`opened`),r=o(()=>t(!0),[t]),i=o(()=>t(!1),[t]);l({opened:e,close:i}),E(i,n),O(e);let{fullScreen:a,toggle:s}=h();return y({open:r,close:i,toggleFullScreen:s}),{opened:e,open:r,close:i,fullScreen:a,toggleFullScreen:s}}})),M,N,P=e((()=>{c(),s(),C(),v(),T(),j(),M=()=>(A(),w(),t`<dialog part="dialog"><slot></slot></dialog>`),N=class extends HTMLElement{controls;connectedCallback(){this.setAttribute(`aria-modal`,`true`)}open(){this.controls?.open()}close(){this.controls?.close()}toggleFullScreen(){this.controls?.toggleFullScreen()}},customElements.define(`cosmoz-modal-slideout`,n(M,{baseElement:N,observedAttributes:[`opened`,`full-screen`,`aria-label`],styleSheets:[x,f,S]}))}));export{P as t};