import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,dt as n,ft as r,lt as i,mt as a,pt as o,st as s,ut as c}from"./iframe-ZQZcm3_E.js";import{A as l,B as u,C as d,D as f,E as p,H as m,O as h,P as g,R as _,S as v,T as ee,U as y,W as b,b as x,g as S,k as C,m as te,q as ne,t as re,x as w,y as ie}from"./cosmoz-slideout-panel-Dfq-x_xt.js";import{n as ae,r as T,t as oe}from"./story-docs-CVcPOcP0.js";import{n as E,t as se}from"./trusted-6AwRJoKi.js";import{a as ce,c as le,l as D,n as O,r as ue,s as de}from"./chrome-BycPpYic.js";import{t as fe}from"./cosmoz-slideout-BQOLIm6Z.js";import{a as pe,n as me,r as he}from"./arg-types-BmyTjPTH.js";var k,ge=e((()=>{a(),C(),s(),k=f(class extends h{constructor(e){if(super(e),e.type!==l.PROPERTY&&e.type!==l.ATTRIBUTE&&e.type!==l.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!i(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[n]){if(n===r||n===c)return n;let i=e.element,a=e.name;if(e.type===l.PROPERTY){if(n===i[a])return r}else if(e.type===l.BOOLEAN_ATTRIBUTE){if(!!n===i.hasAttribute(a))return r}else if(e.type===l.ATTRIBUTE&&i.getAttribute(a)===n+``)return r;return t(e),n}})})),A,j,_e=e((()=>{a(),p(),C(),A=new WeakMap,j=f(class extends ee{render(e){return c}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),c}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=A.get(t);n===void 0&&(n=new WeakMap,A.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?A.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),M,N,ve=e((()=>{a(),le(),M=(e,{label:t,invalid:n,errorMessage:r})=>o`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${D(t,()=>o`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${D(n&&r,()=>o`<div class="error" part="error">${r}</div>`)}
	`,N=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`,`no-label-float`,`always-float-label`]})),P,F,ye=e((()=>{te(),P=S`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,F=S`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
		cursor: text;
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
		cursor: text;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}

	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}

	:host(:focus-within) {
		${P}
	}
	@container style(--focused: focused) {
		${P}
	}
`})),I,be=e((()=>{v(),I=e=>u(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),L,xe=e((()=>{v(),L=b(class extends y{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),Se=e((()=>{v(),b(class extends y{update(){return this.state.host}})})),R,z,Ce=e((()=>{v(),Se(),R=/([A-Z])/gu,z=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(R,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))}})),B,we=e((()=>{xe(),Ce(),v(),B=e=>{let t=g(void 0),n=_(e=>t.current=e,[]),r=e.shadowRoot,i=_(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=_(t=>z(e,`value`,t.target.value),[]),o=_(t=>z(e,`focused`,t.type===`focus`),[]),s=_(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return L({validate:s},[s]),m(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea, label`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),V,H,Te=e((()=>{V=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,H=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),U,W,Ee=e((()=>{v(),a(),x(),ge(),_e(),ve(),ye(),be(),we(),Te(),U=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...N],W=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:s,disabled:c,min:l,max:u,step:d,maxlength:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=B(e),_=I(r);return M(o`
			<input
				${j(g)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${w(n)}
				autocomplete=${w(i)}
				placeholder=${V(e)}
				?readonly=${s}
				?aria-disabled=${c}
				?disabled=${c}
				.value=${k(a??``)}
				maxlength=${w(f)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${w(l)}
				max=${w(H(t,u))}
				step=${w(d)}
			/>
		`,e)},customElements.define(`cosmoz-input`,d(W,{observedAttributes:U,styleSheets:[ne(F)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),G,K,q,J,Y,X,Z,Q,$;e((()=>{ie(),ce(),Ee(),a(),x(),fe(),re(),he(),ue(),ae(),se(),{expect:G,waitFor:K}=__STORYBOOK_MODULE_TEST__,q=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),J={title:`CosmozSlideout`,component:`cosmoz-slideout`,tags:[`autodocs`],argTypes:{...pe,panel:{control:`boolean`,description:"Use `<cosmoz-slideout-panel>` chrome (off: hand-composed chrome).",table:{category:`Content`,defaultValue:{summary:`true`}}},heading:{control:`text`,description:`Slotted panel header title (panel chrome).`,table:{category:`Content`}}},args:{...me,panel:!0,heading:`Supplier`},parameters:oe("The low-level surface: it owns the popover, the `opened` lifecycle, focus and Escape, and exposes a **single blank slot** - no UI of its own. The Playground drives everything from the Controls: `opened`, `full-screen`, `no-escape`, the width, the `aria-label` and the slotted chrome (panel vs hand-composed).")},Y={parameters:T('Drive `opened` from the Controls or the buttons - the element is non-modal, so the page behind stays interactive (the counter proves it). `no-escape` holds against Esc; `full-screen` covers the viewport; the width and label are the `--cosmoz-slideout-*` / `aria-label` knobs. "Panel chrome" swaps hand-composed chrome for `<cosmoz-slideout-panel>`.'),render:e=>{let t=document.createElement(`div`),r=document.createElement(`p`);r.dataset.testid=`bg-count`,r.style.cssText=`margin: 0; color: var(--cz-color-text-tertiary);`;let i=0;r.textContent=`Background clicks: 0`;let a=()=>n(o`
					<cosmoz-slideout
						aria-label=${w(e[`aria-label`])}
						.opened=${e.opened??!1}
						?full-screen=${e[`full-screen`]}
						?no-escape=${e[`no-escape`]}
						style=${`--cosmoz-slideout-width: ${e.width};`}
						@opened-changed=${t=>{e.opened=t.detail.value,a()}}
					>
						${e.panel?o`
										<cosmoz-slideout-panel>
											${O(e.heading??`Supplier`,{subtitle:`Supplier #4021 · Malmö, SE`})}
											<p style="color: var(--cz-color-text-tertiary);">
												Slotted into the single blank slot.
											</p>
											<div
												slot="footer"
												style="display: flex; justify-content: flex-end;"
											>
												<cosmoz-button variant="primary" @click=${q}>
													Done
												</cosmoz-button>
											</div>
										</cosmoz-slideout-panel>
									`:o`
										<div
											style="display: flex; flex-direction: column; height: 100%;"
										>
											<header
												style="position: relative; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
											>
												Edit supplier
												<cosmoz-button
													style="position: absolute; top: 8px; right: 8px;"
													variant="tertiary"
													size="sm"
													aria-label="Close"
													@click=${q}
												>
													${de({slot:`prefix`})}
												</cosmoz-button>
											</header>
											<div
												style="flex: 1; min-height: 0; overflow: auto; padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
											>
												<p style="margin: 0 0 8px;">
													Acme Industries · Supplier #4021
												</p>
												<p style="margin: 0;">
													Net 30 terms · VAT SE556677889901.
												</p>
											</div>
											<footer
												style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
											>
												<cosmoz-button variant="secondary" @click=${q}>
													Cancel
												</cosmoz-button>
												<cosmoz-button variant="primary" @click=${q}
													>Save</cosmoz-button
												>
											</footer>
										</div>
									`}
					</cosmoz-slideout>
				`,t);return a(),o`
			<div
				style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
			>
				<cosmoz-button
					variant="primary"
					@click=${()=>{e.opened=!0,a()}}
				>
					Open
				</cosmoz-button>
				<cosmoz-button
					variant="secondary"
					@click=${()=>{e.opened=!1,a()}}
				>
					Close
				</cosmoz-button>
				<cosmoz-button variant="secondary" @click=${()=>{r.textContent=`Background clicks: ${++i}`}}>
					Background action
				</cosmoz-button>
				${r}
			</div>
			${t}
		`},play:async({args:e,canvas:t,canvasElement:n,step:r,userEvent:i})=>{await r(`opens from the args / the Open button`,async()=>{let e=n.querySelector(`cosmoz-slideout`);await i.click(await t.findByShadowRole(`button`,{name:/^open$/iu})),await K(()=>G(e.matches(`:popover-open`)).toBe(!0))}),await r(`the page behind stays interactive (non-modal)`,async()=>{await i.click(await t.findByShadowRole(`button`,{name:/background action/iu})),G(n.querySelector(`[data-testid="bg-count"]`).textContent).toBe(`Background clicks: 1`)}),await r("Esc honors the `no-escape` control",async()=>{let t=await E(r);if(!t)return;let i=n.querySelector(`cosmoz-slideout`);await t.keyboard(`{Escape}`),await new Promise(e=>window.setTimeout(e,100)),G(i.matches(`:popover-open`)).toBe(e[`no-escape`]??!1),e[`no-escape`]||await K(()=>G(i.matches(`:popover-open`)).toBe(!1))})}},X={parameters:T(`Focus moves into the first marked field on open, back to the opener on close.`),render:()=>{let e=document.createElement(`div`),t=!1,r=()=>n(o`
					<cosmoz-slideout
						aria-label="Edit profile"
						.opened=${t}
						@opened-changed=${e=>{t=e.detail.value,r()}}
					>
						<cosmoz-slideout-panel>
							${O(`Edit profile`,{subtitle:`Focus returns to the opener on close`})}
							<div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
								<cosmoz-input
									autofocus
									.label=${`Full name`}
									.value=${`Alex Karlsson`}
								></cosmoz-input>
								<cosmoz-input
									.label=${`Email`}
									.value=${`alex@acme.se`}
								></cosmoz-input>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);return r(),o`
			<cosmoz-button
				variant="primary"
				@click=${()=>{t=!0,r()}}
			>
				Edit profile
			</cosmoz-button>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit profile/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`focus is delegated to the first focusable content`,async()=>{await K(()=>G(i.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-input`);await K(()=>G(document.activeElement).toBe(e))}),await n(`returns focus to the opener after close`,async()=>{t.querySelector(`cosmoz-slideout-panel`).querySelector(`cosmoz-button[aria-label="Close"]`).click(),await K(()=>G(i.matches(`:popover-open`)).toBe(!1)),await K(()=>G(document.activeElement).toBe(t.querySelector(`cosmoz-button`)),{timeout:3e3})})}},Z={parameters:T(`Multiple slideouts stack; Escape closes only the top-most.`),render:()=>{let e=document.createElement(`div`),t=document.createElement(`div`),r=!1,i=!1,a=()=>n(o`
					<cosmoz-slideout
						aria-label="Second"
						.opened=${i}
						style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
						@opened-changed=${e=>{i=e.detail.value,a()}}
					>
						<div style="display: flex; flex-direction: column; height: 100%;">
							<cosmoz-button
								variant="tertiary"
								size="sm"
								aria-label="Close"
								style="position: absolute; top: 8px; right: 8px; z-index: 3;"
								@click=${q}
							>
								✕
							</cosmoz-button>
							<h2
								style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								Second
							</h2>
							<div
								style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
							>
								The top-most slideout. Press Esc to close just this one.
							</div>
						</div>
					</cosmoz-slideout>
				`,t),s=()=>{i=!0,a()},c=()=>n(o`
					<cosmoz-slideout
						aria-label="First"
						.opened=${r}
						@opened-changed=${e=>{r=e.detail.value,c()}}
					>
						<div style="display: flex; flex-direction: column; height: 100%;">
							<cosmoz-button
								variant="tertiary"
								size="sm"
								aria-label="Close"
								style="position: absolute; top: 8px; right: 8px; z-index: 3;"
								@click=${q}
							>
								✕
							</cosmoz-button>
							<h2
								style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								First
							</h2>
							<div
								style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
							>
								<p style="margin: 0 0 12px;">The underlying slideout.</p>
								<cosmoz-button variant="secondary" size="sm" @click=${s}>
									Open a second slideout
								</cosmoz-button>
							</div>
						</div>
					</cosmoz-slideout>
				`,e);return c(),a(),o`
			<cosmoz-button
				variant="primary"
				@click=${()=>{r=!0,c()}}
			>
				Open first
			</cosmoz-button>
			${e}${t}
		`},play:async({canvas:e,canvasElement:t,step:n})=>{let r=()=>[...t.querySelectorAll(`cosmoz-slideout`)].filter(e=>e.matches(`:popover-open`)),i=()=>r().map(e=>e.getAttribute(`aria-label`)),a=await E(n);a&&(await a.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await n(`opens a second slideout above the first`,async()=>{await K(()=>G(r().length).toBe(1)),await a.click(await e.findByShadowRole(`button`,{name:/open a second slideout/iu})),await K(()=>G(r().length).toBe(2))}),await n(`Escape closes the most recent slideout first`,async()=>{await a.keyboard(`{Escape}`),await K(()=>G(i()).toEqual([`First`]))}))}},Q={parameters:T("The surface event lifecycle: `opened-changed` (the cancelable intent) / `full-screen-changed` / `toggle` (the platform record). The element persists in the DOM across open/close cycles."),render:()=>{let e=document.createElement(`div`),t=document.createElement(`ol`);t.dataset.testid=`event-log`,t.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let r=e=>{let n=document.createElement(`li`);n.textContent=e,t.append(n)},i=e=>e.currentTarget.closest(`cosmoz-slideout`),a=!1,s=()=>n(o`
					<cosmoz-slideout
						aria-label="Lifecycle"
						.opened=${a}
						@opened-changed=${e=>{a=e.detail.value,a&&r(`opened`),s()}}
						@full-screen-changed=${e=>r(`full-screen: ${String(e.detail.value)}`)}
						@toggle=${e=>r(`toggle: ${e.newState}`)}
					>
						<cosmoz-slideout-panel>
							${O(`Lifecycle`,{subtitle:`Events and imperative methods`})}
							<p>
								The element persists in the DOM. It emits
								<code>opened-changed</code> (cancelable intent) as it opens, and
								the platform's <code>toggle</code> as the recorded flip.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end; gap: 8px;"
							>
								<cosmoz-button
									variant="secondary"
									@click=${e=>i(e)?.toggleFullScreen()}
								>
									Toggle full screen
								</cosmoz-button>
								<cosmoz-button
									variant="primary"
									@click=${e=>i(e)?.close()}
								>
									Close
								</cosmoz-button>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);s();let c=e.querySelector(`cosmoz-slideout`);return o`
			<cosmoz-button variant="primary" @click=${()=>{t.replaceChildren(),c.open()}}>
				Open lifecycle panel
			</cosmoz-button>
			${t}${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout`);await n(`logs opened when the surface opens`,async()=>{await K(()=>G(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await K(()=>G(i()).toContain(`full-screen: true`))}),await n(`records the flip through the platform toggle`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await K(()=>G(a.matches(`:popover-open`)).toBe(!1)),await K(()=>G(i()).toContain(`toggle: closed`))})}},$=[`Playground`,`FocusRestore`,`Stacking`,`Events`]}))();export{Q as Events,X as FocusRestore,Y as Playground,Z as Stacking,$ as __namedExportsOrder,J as default};