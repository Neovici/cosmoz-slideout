import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t}from"./iframe-BVmKcyIg.js";import{A as n,B as r,I as i,P as a,_ as o,b as s,c,d as l,f as u,g as d,h as f,i as p,l as m,n as h,p as g,r as _,s as v,t as y,u as b,x}from"./use-imperative-api-CN67rVYJ.js";var S,C=e((()=>{g(),S=f`
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
`})),w,T=e((()=>{s(),w=()=>{let e=n();a(()=>{let t=e.shadowRoot?.querySelector(`dialog`);if(!t)return;let n=e.getAttribute(`aria-label`);n?t.setAttribute(`aria-label`,n):t.removeAttribute(`aria-label`)})}})),E,D=e((()=>{s(),E=(e,t)=>{let i=n();r(()=>{let n=i.shadowRoot?.querySelector(`dialog`);if(!n)return;let r=t=>{e()===!1&&t.preventDefault()},a=()=>t(!1),o=t=>{t.target===n&&e()};return n.addEventListener(`cancel`,r),n.addEventListener(`close`,a),n.addEventListener(`click`,o),()=>{n.removeEventListener(`cancel`,r),n.removeEventListener(`close`,a),n.removeEventListener(`click`,o)}},[])}})),O,k=e((()=>{s(),O=e=>{let t=n();r(()=>{let n=t.shadowRoot?.querySelector(`dialog`);n&&(e&&!n.open?n.showModal():!e&&n.open&&n.close())},[e])}})),A,j=e((()=>{s(),m(),D(),k(),v(),_(),y(),A=()=>{let[e,t,n]=b(`opened`),r=i(()=>t(!0),[t]),a=i(()=>t(!1),[t]);p({opened:e,close:a}),E(a,n),O(e);let{fullScreen:o,toggle:s}=c();return h({open:r,close:a,toggleFullScreen:s}),{opened:e,open:r,close:a,fullScreen:o,toggleFullScreen:s}}})),M,N,P=e((()=>{d(),s(),C(),u(),T(),j(),M=()=>(A(),w(),t`<dialog part="dialog"><slot></slot></dialog>`),N=class extends HTMLElement{controls;connectedCallback(){this.setAttribute(`aria-modal`,`true`)}open(){this.controls?.open()}close(){this.controls?.close()}toggleFullScreen(){this.controls?.toggleFullScreen()}},customElements.define(`cosmoz-modal-slideout`,x(M,{baseElement:N,observedAttributes:[`opened`,`full-screen`,`aria-label`],styleSheets:[o,l,S]}))}));export{P as t};