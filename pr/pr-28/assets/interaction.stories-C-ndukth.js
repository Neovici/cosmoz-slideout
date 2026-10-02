import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,dt as n,ft as r,lt as i,mt as a,pt as o,st as s,ut as c}from"./iframe--l4BPQoM.js";import{B as l,C as u,D as d,E as f,H as p,I as m,K as h,M as g,O as _,R as ee,T as v,V as y,b,h as x,p as te,v as ne,w as re,x as ie,y as S}from"./use-imperative-api-Qk8bnT4b.js";import{t as ae}from"./cosmoz-button-DZQWNXk9.js";import{a as C,i as oe}from"./untitled-DcZP0RuT.js";import{n as w,t as se}from"./trusted-6AwRJoKi.js";import{t as ce}from"./cosmoz-slideout-BRQhz0zO.js";import{n as le,r as T,t as ue}from"./story-docs-CVcPOcP0.js";import{t as de}from"./cosmoz-slideout-panel-DCxAgDCd.js";import{i as E,n as D,r as fe}from"./chrome-Ctjw9Xc4.js";var O,pe=e((()=>{a(),d(),s(),O=v(class extends f{constructor(e){if(super(e),e.type!==_.PROPERTY&&e.type!==_.ATTRIBUTE&&e.type!==_.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!i(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[n]){if(n===r||n===c)return n;let i=e.element,a=e.name;if(e.type===_.PROPERTY){if(n===i[a])return r}else if(e.type===_.BOOLEAN_ATTRIBUTE){if(!!n===i.hasAttribute(a))return r}else if(e.type===_.ATTRIBUTE&&i.getAttribute(a)===n+``)return r;return t(e),n}})})),k,A,me=e((()=>{a(),re(),d(),k=new WeakMap,A=v(class extends u{render(e){return c}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),c}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=k.get(t);n===void 0&&(n=new WeakMap,k.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?k.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),j,M,he=e((()=>{a(),oe(),j=(e,{label:t,invalid:n,errorMessage:r})=>o`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${C(t,()=>o`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${C(n&&r,()=>o`<div class="error" part="error">${r}</div>`)}
	`,M=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`,`no-label-float`,`always-float-label`]})),N,P,ge=e((()=>{te(),N=x`
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
`,P=x`
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
		${N}
	}
	@container style(--focused: focused) {
		${N}
	}
`})),F,_e=e((()=>{b(),F=e=>ee(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),I,ve=e((()=>{b(),I=p(class extends y{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),ye=e((()=>{b(),p(class extends y{update(){return this.state.host}})})),L,R,be=e((()=>{b(),ye(),L=/([A-Z])/gu,R=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(L,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))}})),z,xe=e((()=>{ve(),be(),b(),z=e=>{let t=g(void 0),n=m(e=>t.current=e,[]),r=e.shadowRoot,i=m(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=m(t=>R(e,`value`,t.target.value),[]),o=m(t=>R(e,`focused`,t.type===`focus`),[]),s=m(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return I({validate:s},[s]),l(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea, label`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),B,V,Se=e((()=>{B=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,V=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),H,U,Ce=e((()=>{b(),a(),ne(),pe(),me(),he(),ge(),_e(),xe(),Se(),H=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...M],U=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:s,disabled:c,min:l,max:u,step:d,maxlength:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=z(e),_=F(r);return j(o`
			<input
				${A(g)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${S(n)}
				autocomplete=${S(i)}
				placeholder=${B(e)}
				?readonly=${s}
				?aria-disabled=${c}
				?disabled=${c}
				.value=${O(a??``)}
				maxlength=${S(f)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${S(l)}
				max=${S(V(t,u))}
				step=${S(d)}
			/>
		`,e)},customElements.define(`cosmoz-input`,ie(U,{observedAttributes:H,styleSheets:[h(P)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ae(),Ce(),a(),ce(),de(),fe(),le(),se(),{expect:W,waitFor:G}=__STORYBOOK_MODULE_TEST__,K=(e,t,r)=>()=>{let i=document.createElement(`div`),a=!1,s=()=>n(o`
					<cosmoz-slideout
						?no-escape=${t}
						.opened=${a}
						@opened-changed=${e=>{a=e.detail.value,s()}}
					>
						${r}
					</cosmoz-slideout>
				`,i);return s(),o`
			<cosmoz-button
				variant="primary"
				@click=${()=>{a=!0,s()}}
			>
				${e}
			</cosmoz-button>
			${i}
		`},q={title:`CosmozSlideout/Interaction`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:ue(`Interaction & focus: non-modal, focus, dismissal, stacking.`)},J={parameters:T(`Non-modal: the page behind stays interactive while open.`),render:()=>{let e=document.createElement(`div`),t=document.createElement(`p`);t.dataset.testid=`bg-count`,t.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary);`;let r=0;t.textContent=`Background clicks: 0`;let i=()=>{t.textContent=`Background clicks: ${++r}`},a=!1,s=()=>n(o`
					<cosmoz-slideout
						.opened=${a}
						@opened-changed=${e=>{a=e.detail.value,s()}}
					>
						<cosmoz-slideout-panel>
							${D(`Supplier`,{subtitle:`Quick preview`})}
							<p style="margin: 0; color: var(--cz-color-text-tertiary);">
								The page behind remains interactive. This is useful for
								quick-glance panels that should not block the current workflow.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end;"
							>
								<cosmoz-button variant="secondary" @click=${E}>
									Close
								</cosmoz-button>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);return s(),o`
			<div
				style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
			>
				<cosmoz-button variant="primary" @click=${()=>{a=!0,s()}}>
					Open panel
				</cosmoz-button>
				<cosmoz-button variant="secondary" @click=${i}>
					Background action
				</cosmoz-button>
			</div>
			${t}${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`background controls remain clickable while open`,async()=>{await G(()=>W(i.matches(`:popover-open`)).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/background action/iu})),W(t.querySelector(`[data-testid="bg-count"]`).textContent).toMatch(/Background clicks: 1/u)})}},Y={parameters:T(`Focus moves into the first marked field on open, back to the opener on close.`),render:K(`Edit profile`,!1,o`
			<cosmoz-slideout-panel>
				${D(`Edit profile`,{subtitle:`Focus returns to the opener on close`})}
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
		`),play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit profile/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`focus is delegated to the first focusable content`,async()=>{await G(()=>W(i.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-input`);await G(()=>W(document.activeElement).toBe(e))}),await n(`returns focus to the opener after close`,async()=>{t.querySelector(`cosmoz-slideout-panel`).querySelector(`cosmoz-button[aria-label="Close"]`).click(),await G(()=>W(i.matches(`:popover-open`)).toBe(!1)),await G(()=>W(document.activeElement).toBe(t.querySelector(`cosmoz-button`)),{timeout:3e3})})}},X={parameters:T("`no-escape`: opt out of Escape-to-close."),render:K(`Open guarded draft`,!0,o`
			<cosmoz-slideout-panel>
				${D(`Guarded draft`,{subtitle:`Escape disabled`})}
				<p>
					Use <code>no-escape</code> when accidental dismissal would be
					destructive.
				</p>
				<div slot="footer" style="display: flex; justify-content: flex-end;">
					<cosmoz-button variant="primary" @click=${E}>
						Close explicitly
					</cosmoz-button>
				</div>
			</cosmoz-slideout-panel>
		`),play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open guarded draft/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`opens and focuses the default target`,async()=>{await G(()=>W(i.matches(`:popover-open`)).toBe(!0)),W(i.matches(`:popover-open`)).toBe(!0)}),await n(`Escape does not close the guarded panel`,async()=>{let e=await w(n);e&&(await e.keyboard(`{Escape}`),await new Promise(e=>window.setTimeout(e,100)),W(i.matches(`:popover-open`)).toBe(!0))})}},Z=(e,t)=>o`
	<div style="display: flex; flex-direction: column; height: 100%;">
		<cosmoz-button
			variant="tertiary"
			size="sm"
			aria-label="Close"
			style="position: absolute; top: 8px; right: 8px; z-index: 3;"
			@click=${E}
		>
			✕
		</cosmoz-button>
		<h2
			style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
		>
			${e}
		</h2>
		<div style="padding: 12px 24px; color: var(--cz-color-text-tertiary);">
			${t}
		</div>
	</div>
`,Q={parameters:T(`Multiple slideouts stack; Escape closes only the top-most.`),render:()=>{let e=document.createElement(`div`),t=document.createElement(`div`),r=!1,i=!1,a=()=>n(o`
					<cosmoz-slideout
						aria-label="Second"
						.opened=${i}
						style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
						@opened-changed=${e=>{i=e.detail.value,a()}}
					>
						${Z(`Second`,`The top-most slideout. Press Esc to close just this one.`)}
					</cosmoz-slideout>
				`,t),s=()=>{i=!0,a()},c=()=>n(o`
					<cosmoz-slideout
						aria-label="First"
						.opened=${r}
						@opened-changed=${e=>{r=e.detail.value,c()}}
					>
						${Z(`First`,o`
								<p style="margin: 0 0 12px;">The underlying slideout.</p>
								<cosmoz-button variant="secondary" size="sm" @click=${s}>
									Open a second slideout
								</cosmoz-button>
							`)}
					</cosmoz-slideout>
				`,e);return c(),a(),o`
			<cosmoz-button variant="primary" @click=${()=>{r=!0,c()}}>
				Open first
			</cosmoz-button>
			${e}${t}
		`},play:async({canvas:e,canvasElement:t,step:n})=>{let r=()=>[...t.querySelectorAll(`cosmoz-slideout`)].filter(e=>e.matches(`:popover-open`)),i=()=>r().map(e=>e.getAttribute(`aria-label`)),a=await w(n);a&&(await a.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await n(`opens a second slideout above the first`,async()=>{await G(()=>W(r().length).toBe(1)),await a.click(await e.findByShadowRole(`button`,{name:/open a second slideout/iu})),await G(()=>W(r().length).toBe(2))}),await n(`Escape closes the most recent slideout first`,async()=>{await a.keyboard(`{Escape}`),await G(()=>W(i()).toEqual([`First`]))}))}},$=[`NonModal`,`FocusRestore`,`DismissalOptions`,`Stacking`]}))();export{X as DismissalOptions,Y as FocusRestore,J as NonModal,Q as Stacking,$ as __namedExportsOrder,q as default};