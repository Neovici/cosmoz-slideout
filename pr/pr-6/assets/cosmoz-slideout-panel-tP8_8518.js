import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r}from"./iframe-B2weqZig.js";import{D as i,T as a,a as o,c as s,d as c,f as l,m as u,p as d,s as f}from"./cosmoz-slideout-6fMMxWgr.js";import{a as p,i as m,r as h,t as g}from"./untitled-eL0iVtmC.js";var _,v=e((()=>{o(),_=f`
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
`})),y,b=e((()=>{d(),y=()=>t`<style>
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
</style>`,customElements.define(`cz-spinner`,u(y))})),x,S,C,w=e((()=>{d(),x=e=>e.target.assignedElements().length>0,S=(e,t)=>e.querySelector(`:scope > [slot="${t}"]`)!==null,C=e=>{let[t,n]=a(S(e,`header`)),[r,o]=a(S(e,`footer`));return{hasHeaderContent:t,hasFooterContent:r,onHeaderSlot:i(e=>n(x(e)),[]),onFooterSlot:i(e=>o(x(e)),[])}}})),T,E,D,O,k=e((()=>{s(),g(),b(),d(),r(),m(),w(),T=e=>e.dispatchEvent(new Event(`request-close`,{bubbles:!0,composed:!0,cancelable:!0})),E=e=>t`
	<cosmoz-button
		class="close"
		part="close"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${()=>T(e)}
	>
		${h({slot:`prefix`})}
	</cosmoz-button>
`,D=(e,r)=>t`
	${e?t`<h2 class="heading">${e}</h2>`:n}
	${r?t`<p class="subtitle">${r}</p>`:n}
`,O=e=>{let{hasHeaderContent:r,hasFooterContent:i,onHeaderSlot:a,onFooterSlot:o}=C(e),{heading:s,subtitle:c}=e,l=!!e.closeable,u=!!e.loading;return t`
		<header part="header" class="header" ?hidden=${!(s||c||l||r)}>
			<slot name="header" @slotchange=${a}>
				${D(s,c)}
			</slot>
			${l?E(e):n}
		</header>
		<div part="body" class="body" aria-busy=${u}>
			<slot></slot>
			${p(u,()=>t`
					<div class="loading" part="loading">
						<cz-spinner></cz-spinner>
					</div>
				`)}
		</div>
		<footer part="footer" class="footer" ?hidden=${!i}>
			<slot name="footer" @slotchange=${o}></slot>
		</footer>
	`}})),A=e((()=>{c(),d(),v(),k(),customElements.define(`cosmoz-slideout-panel`,u(e=>O(e),{observedAttributes:[`heading`,`subtitle`,`closeable`,`loading`],styleSheets:[l,_]}))}));export{A as t};