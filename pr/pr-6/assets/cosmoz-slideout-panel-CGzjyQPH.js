import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r}from"./iframe-DWBJWh4P.js";import{O as i,S as a,a as o,b as s,c,d as l,i as u,l as d,n as f,u as p,w as m}from"./cosmoz-slideout-C7zBUPKs.js";import{a as h,i as g,r as _,t as v}from"./untitled-Bizlt9el.js";var y,b=e((()=>{f(),y=u`
	:host {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		overflow: hidden;
	}

	.header,
	.body,
	.footer {
		--_px: var(
			--cosmoz-slideout-panel-padding-x,
			calc(var(--cz-spacing, 4px) * 4)
		);
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing, 4px) * 1);
		padding: calc(var(--cz-spacing, 4px) * 6) var(--_px)
			calc(var(--cz-spacing, 4px) * 4);
	}
	.header[hidden] {
		display: none;
	}

	.heading {
		margin: 0;
		font-family: var(--cz-font-body, system-ui, sans-serif);
		font-size: var(--cz-text-lg, 1.125rem);
		line-height: var(--cz-text-lg-line-height, 1.5rem);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(
			--cosmoz-slideout-panel-heading-color,
			var(--cz-color-text-primary, #181d27)
		);
	}
	.subtitle {
		margin: 0;
		font-family: var(--cz-font-body, system-ui, sans-serif);
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.25rem);
		color: var(--cz-color-text-tertiary, #535862);
	}

	.close {
		position: absolute;
		top: calc(var(--cz-spacing, 4px) * 3);
		right: calc(var(--cz-spacing, 4px) * 3);
	}

	.body {
		position: relative;
		flex: 1;
		min-height: 0;
		overflow: auto;
		overscroll-behavior: contain;
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-slideout-panel-gap, calc(var(--cz-spacing, 4px) * 6));
		padding: 0 var(--_px);
	}

	.loading {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(
			--cosmoz-slideout-loading-color,
			color-mix(in srgb, var(--cz-color-bg-primary, #fff) 70%, transparent)
		);
		z-index: 2;
	}

	.footer {
		padding: calc(var(--cz-spacing, 4px) * 4) var(--_px);
		box-shadow: inset 0 1px 0 0
			var(
				--cosmoz-slideout-panel-divider,
				var(--cz-color-border-secondary, #e9eaeb)
			);
	}
	.footer[hidden] {
		display: none;
	}
`})),x,S=e((()=>{p(),x=()=>t`<style>
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
	}
</style>`,customElements.define(`cz-spinner`,l(x))})),C,w,T,E=e((()=>{p(),C=e=>e.target.assignedElements().length>0,w=(e,t)=>e.querySelector(`:scope > [slot="${t}"]`)!==null,T=e=>{let[t,n]=a(w(e,`header`)),[r,i]=a(w(e,`footer`));return{hasHeaderContent:t,hasFooterContent:r,onHeaderSlot:m(e=>n(C(e)),[]),onFooterSlot:m(e=>i(C(e)),[])}}})),D,O,k,A,j,M=e((()=>{o(),v(),S(),p(),r(),g(),E(),D=e=>e.dispatchEvent(new Event(`request-close`,{bubbles:!0,composed:!0})),O=e=>t`
	<cosmoz-button
		class="close"
		part="close"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${()=>D(e)}
	>
		${_({slot:`prefix`})}
	</cosmoz-button>
`,k=(e,r)=>t`
	${e?t`<h2 class="heading">${e}</h2>`:n}
	${r?t`<p class="subtitle">${r}</p>`:n}
`,A=(e,t)=>{let n=s(null);i(()=>{let r=e.closest(`cosmoz-slideout`);if(!r||r.hasAttribute(`aria-labelledby`))return;let i=r.getAttribute(`aria-label`);if(!(i!==null&&i!==n.current))return t?(r.setAttribute(`aria-label`,t),n.current=t):i!==null&&(r.removeAttribute(`aria-label`),n.current=null),()=>{r.getAttribute(`aria-label`)===n.current&&(r.removeAttribute(`aria-label`),n.current=null)}},[t])},j=e=>{let{hasHeaderContent:r,hasFooterContent:i,onHeaderSlot:a,onFooterSlot:o}=T(e),{heading:s,subtitle:c}=e,l=!!e.closeable,u=!!e.loading,d=!!(s||c||l||r);return A(e,s),t`
		<header part="header" class="header" ?hidden=${!d}>
			<slot name="header" @slotchange=${a}>
				${k(s,c)}
			</slot>
			${l?O(e):n}
		</header>
		<div part="body" class="body">
			<slot></slot>
			${h(u,()=>t`
					<div class="loading" part="loading">
						<cz-spinner></cz-spinner>
					</div>
				`)}
		</div>
		<footer part="footer" class="footer" ?hidden=${!i}>
			<slot name="footer" @slotchange=${o}></slot>
		</footer>
	`}})),N=e((()=>{c(),p(),b(),M(),customElements.define(`cosmoz-slideout-panel`,l(e=>j(e),{observedAttributes:[`heading`,`subtitle`,`closeable`,`loading`],styleSheets:[d,y]}))}));export{N as t};