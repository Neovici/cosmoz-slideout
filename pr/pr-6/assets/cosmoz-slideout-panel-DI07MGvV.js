import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r}from"./iframe-C-Wxb5QC.js";import{D as i,T as a,a as o,c as s,d as c,f as l,l as u,m as d,p as f,s as p,u as m}from"./cosmoz-slideout-BQP69ErK.js";import{a as h,i as g,r as _,t as v}from"./untitled-DgUPJjek.js";var y,b=e((()=>{o(),y=p`
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
`})),x,S=e((()=>{f(),x=()=>t`<style>
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
</style>`,customElements.define(`cz-spinner`,d(x))})),C,w,T,E=e((()=>{f(),C=e=>e.target.assignedElements().length>0,w=(e,t)=>e.querySelector(`:scope > [slot="${t}"]`)!==null,T=e=>{let[t,n]=a(w(e,`header`)),[r,o]=a(w(e,`footer`));return{hasHeaderContent:t,hasFooterContent:r,onHeaderSlot:i(e=>n(C(e)),[]),onFooterSlot:i(e=>o(C(e)),[])}}})),D,O,k,A,j=e((()=>{s(),v(),S(),f(),r(),u(),g(),E(),D=e=>e.dispatchEvent(new Event(`request-close`,{bubbles:!0,composed:!0,cancelable:!0})),O=e=>t`
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
`,A=e=>{let{hasHeaderContent:r,hasFooterContent:i,onHeaderSlot:a,onFooterSlot:o}=T(e),{heading:s,subtitle:c}=e,l=!!e.closeable,u=!!e.loading;return t`
		<header part="header" class="header" ?hidden=${!(s||c||l||r)}>
			<slot name="header" @slotchange=${a}>
				${k(s,c)}
			</slot>
			${l?O(e):n}
		</header>
		<div
			part="body"
			class="body"
			aria-busy=${m(u?`true`:void 0)}
		>
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
	`}})),M=e((()=>{c(),f(),b(),j(),customElements.define(`cosmoz-slideout-panel`,d(e=>A(e),{observedAttributes:[`heading`,`subtitle`,`closeable`,`loading`],styleSheets:[l,y]}))}));export{M as t};