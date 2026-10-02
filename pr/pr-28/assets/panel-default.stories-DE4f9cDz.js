import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r,ut as i}from"./iframe-CIRWWJHW.js";import{v as a,y as o}from"./use-imperative-api-DO5vi0Ul.js";import{t as s}from"./cosmoz-button-B9Zoldxi.js";import{t as c}from"./cosmoz-slideout-panel-CRKQDjad.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";import{i as f,n as p,r as m,t as h}from"./chrome-WgmRkc-F.js";import{t as g}from"./cosmoz-slideout-D1nVv1N_.js";import{n as _,r as v,t as y}from"./arg-types-CXxcK3Un.js";var b,x,S,C,w,T,E,D,O,k;e((()=>{s(),n(),a(),g(),c(),_(),m(),l(),{expect:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S=(e,t,n,a)=>r`
	<cosmoz-slideout
		.opened=${t}
		aria-label=${o(e[`aria-label`])}
		?full-screen=${e[`full-screen`]}
		?no-escape=${e[`no-escape`]}
		style=${`--cosmoz-slideout-width: ${e.width};`}
		@opened-changed=${e=>n(e.detail.value)}
	>
		<cosmoz-slideout-panel>
			${a.header?p(a.header.title,{subtitle:a.header.subtitle}):i}
			${a.body}
		</cosmoz-slideout-panel>
	</cosmoz-slideout>
`,C=(e,t,n)=>r`
	<cosmoz-button variant="primary" @click=${t}>${e}</cosmoz-button>
	${n}
`,w={title:`CosmozSlideoutPanel`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],argTypes:v,args:y,parameters:d("Layout chrome nested inside a `<cosmoz-slideout>`: header/body/footer regions with token-backed spacing - no properties. Slot your header (with a close control dispatching `request-close`) into `header`, content into the default slot, and actions into `footer`.")},T={parameters:u(`The canonical pairing: slotted header, body, footer actions.`),args:{heading:`Acme Industries`,subtitle:`Supplier #4021 · Stockholm, SE`},render:e=>{let n=document.createElement(`div`),i=!1,a=()=>t(S(e,i,e=>{i=e,a()},{header:{title:e.heading,subtitle:e.subtitle},body:r`
							<p>
								Preferred vendor for packaging materials since 2019. Net 30
								terms, VAT SE556677889901.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end; gap: 8px;"
							>
								<cosmoz-button variant="secondary" @click=${f}>
									Cancel
								</cosmoz-button>
								<cosmoz-button variant="primary" @click=${f}>
									Save
								</cosmoz-button>
							</div>
						`}),n);return a(),C(`Open panel`,()=>{i=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`);await n(`opens with the slotted header and footer actions`,async()=>{await x(()=>b(i.matches(`:popover-open`)).toBe(!0)),await e.findByShadowText(/Acme Industries/u),b(a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`)).not.toBeNull(),await x(()=>b(a.shadowRoot.querySelector(`[part="footer"]`).querySelector(`slot[name="footer"]`).assignedElements().length).toBeGreaterThan(0))}),await n(`the slotted close control dismisses the panel`,async()=>{a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`).assignedElements()[0].querySelector(`cosmoz-button[aria-label="Close"]`).click(),await x(()=>b(i.matches(`:popover-open`)).toBe(!1))})}},E={parameters:u(`The header is whatever you slot in.`),args:{heading:`Customer health`,subtitle:`Renewal risk · Q3`,"aria-label":`Customer health`},render:e=>{let n=document.createElement(`div`),i=!1,a=()=>t(S(e,i,e=>{i=e,a()},{header:{title:e.heading,subtitle:e.subtitle},body:r`
							<p>
								The header region projects whatever you slot in - a header with
								its own close control.
							</p>
						`}),n);return a(),C(`Open custom header`,()=>{i=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open custom header/iu}));let i=t.querySelector(`cosmoz-slideout-panel`).shadowRoot.querySelector(`[part="header"] > slot`);await n(`projects slotted header content`,async()=>{await x(()=>b(i.assignedElements().length).toBeGreaterThan(0)),await e.findByShadowText(/Customer health/u)})}},D={parameters:u(`Body-only: empty header slot; the panel just gives its body padding and gap.`),args:{heading:void 0,subtitle:void 0,"aria-label":`Notes`},render:e=>{let n=document.createElement(`div`),i=!1,a=()=>t(S(e,i,e=>{i=e,a()},{header:void 0,body:r`
							<p>
								A panel can be just a right-hand reading surface. With the
								header slot empty and nothing in the footer, the regions stay
								out of the way - <code>&lt;cosmoz-slideout-panel&gt;</code>
								alone is what gives the body its padding and gap, independent of
								any other affordance.
							</p>
							<p>Press <kbd>Esc</kbd> to dismiss it.</p>
						`}),n);return a(),C(`Open notes`,()=>{i=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open notes/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`);await n(`header region stays present but empty`,async()=>{await x(()=>b(i.matches(`:popover-open`)).toBe(!0)),b(a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`).assignedElements().length).toBe(0),b(a.shadowRoot.querySelector(`.body`)).not.toBeNull()})}},O={parameters:u(`Long content scrolls within the body. Header and footer stay fixed.`),args:{heading:`Activity`,subtitle:`Latest supplier events`,width:`min(520px, 100vw)`},render:e=>{let n=document.createElement(`div`),i=Array.from({length:50},(e,t)=>t+1),a=!1,o=()=>t(S(e,a,e=>{a=e,o()},{header:{title:e.heading,subtitle:e.subtitle},body:r`
							${i.map(e=>r`
									<p style="margin: 0; color: var(--cz-color-text-tertiary);">
										<strong style="color: var(--cz-color-text-primary);">
											Event ${e}
										</strong>
										· Invoice ${4200+e} matched automatically.
									</p>
								`)}
							${h(r`<cosmoz-button variant="secondary" @click=${f}>
									Close
								</cosmoz-button>`)}
						`}),n);return o(),C(`Open activity`,()=>{a=!0,o()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open activity/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`.body`),o=i.shadowRoot.querySelector(`[part="header"]`),s=i.shadowRoot.querySelector(`[part="footer"]`);await n(`scrolls the body; header/footer stay outside it`,async()=>{await x(()=>b(a.scrollHeight).toBeGreaterThan(0)),b(o.closest(`.body`)).toBeNull(),b(s.closest(`.body`)).toBeNull()})}},k=[`Default`,`CustomHeader`,`BodyOnly`,`ScrollableContent`]}))();export{D as BodyOnly,E as CustomHeader,T as Default,O as ScrollableContent,k as __namedExportsOrder,w as default};