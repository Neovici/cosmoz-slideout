import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r}from"./iframe-C9FwPToW.js";import{D as i,N as a,T as o,f as s,h as c,i as l,k as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./src-DKiyH0AA.js";var _,v=e((()=>{l(),_=p`
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
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-slideout-panel-gap, calc(var(--cz-spacing, 4px) * 6));
		padding: 0 var(--_px);
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
`})),y,b,x,S=e((()=>{c(),y=e=>e.target.assignedElements().length>0,b=(e,t)=>e.querySelector(`:scope > [slot="${t}"]`)!==null,x=e=>{let[t,n]=i(b(e,`header`)),[r,a]=i(b(e,`footer`));return{hasHeaderContent:t,hasFooterContent:r,onHeaderSlot:u(e=>n(y(e)),[]),onFooterSlot:u(e=>a(y(e)),[])}}})),C,w,T,E=e((()=>{s(),h(),c(),r(),g(),S(),C=e=>t`
	<cosmoz-button
		class="close"
		part="close"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${()=>e.close?.()}
	>
		${d({slot:`prefix`})}
	</cosmoz-button>
`,w=(e,r)=>t`
	${e?t`<h2 class="heading">${e}</h2>`:n}
	${r?t`<p class="subtitle">${r}</p>`:n}
`,T=e=>{let{hasHeaderContent:r,hasFooterContent:i,onHeaderSlot:s,onFooterSlot:c}=x(e),{heading:l,subtitle:u}=e,d=!!e.closeable,p=!!(l||u||d||r),m=e.variant===`panel`?l:void 0,h=e.getAttribute(`aria-label`),g=o(null);return a(()=>{if(!m){h&&h===g.current&&e.removeAttribute(`aria-label`),g.current=null;return}(!h||h===g.current)&&h!==m&&(e.setAttribute(`aria-label`,m),g.current=m)},[h,m]),f({header:t`
			<header part="header" class="header" ?hidden=${!p}>
				<slot name="header" @slotchange=${s}>
					${w(l,u)}
				</slot>
				${d?C(e):n}
			</header>
		`,content:t`<div part="body" class="body"><slot></slot></div>`,footer:t`
			<footer part="footer" class="footer" ?hidden=${!i}>
				<slot name="footer" @slotchange=${c}></slot>
			</footer>
		`})}})),D=e((()=>{c(),v(),g(),E(),customElements.define(`cosmoz-slideout`,m(e=>{let n=T(e);return e.variant===`panel`?n:t`<slot></slot>`},{observedAttributes:[`variant`,`heading`,`subtitle`,`closeable`],styleSheets:[_]}))}));export{D as t};