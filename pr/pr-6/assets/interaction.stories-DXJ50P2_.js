import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,dt as n,ft as r,lt as i,ot as a,pt as o,st as s,ut as c}from"./iframe-DWBJWh4P.js";import{A as l,E as u,N as d,O as f,_ as p,a as m,b as h,d as g,g as _,h as v,i as y,k as b,m as ee,n as te,o as ne,p as re,s as x,t as ie,u as S,v as C,w}from"./cosmoz-slideout-C7zBUPKs.js";import{a as T,i as ae}from"./untitled-Bizlt9el.js";import{t as oe}from"./cosmoz-slideout-panel-CGzjyQPH.js";var E,se=e((()=>{o(),p(),a(),E=v(class extends _{constructor(e){if(super(e),e.type!==C.PROPERTY&&e.type!==C.ATTRIBUTE&&e.type!==C.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!t(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n||t===i)return t;let r=e.element,a=e.name;if(e.type===C.PROPERTY){if(t===r[a])return n}else if(e.type===C.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return n}else if(e.type===C.ATTRIBUTE&&r.getAttribute(a)===t+``)return n;return s(e),t}})})),D,O,ce=e((()=>{o(),ee(),p(),D=new WeakMap,O=v(class extends re{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=D.get(t);n===void 0&&(n=new WeakMap,D.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?D.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),k,A,le=e((()=>{o(),ae(),k=(e,{label:t,invalid:n,errorMessage:i})=>r`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${T(t,()=>r`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${T(n&&i,()=>r`<div class="error" part="error">${i}</div>`)}
	`,A=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`,`no-label-float`,`always-float-label`]})),j,M,ue=e((()=>{te(),j=y`
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
`,M=y`
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
		${j}
	}
	@container style(--focused: focused) {
		${j}
	}
`})),N,de=e((()=>{S(),N=e=>u(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),P,fe=e((()=>{S(),P=l(class extends b{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),pe=e((()=>{S(),l(class extends b{update(){return this.state.host}})})),F,I,me=e((()=>{S(),pe(),F=/([A-Z])/gu,I=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(F,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))}})),L,he=e((()=>{fe(),me(),S(),L=e=>{let t=h(void 0),n=w(e=>t.current=e,[]),r=e.shadowRoot,i=w(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=w(t=>I(e,`value`,t.target.value),[]),o=w(t=>I(e,`focused`,t.type===`focus`),[]),s=w(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return P({validate:s},[s]),f(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),R,z,ge=e((()=>{R=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,z=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),B,V,_e=e((()=>{S(),o(),ne(),se(),ce(),le(),ue(),de(),he(),ge(),B=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...A],V=e=>{let{type:t=`text`,pattern:n,allowedPattern:i,autocomplete:a,value:o,readonly:s,disabled:c,min:l,max:u,step:d,maxlength:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=L(e),_=N(i);return k(r`
			<input
				${O(g)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${x(n)}
				autocomplete=${x(a)}
				placeholder=${R(e)}
				?readonly=${s}
				?aria-disabled=${c}
				?disabled=${c}
				.value=${E(o??``)}
				maxlength=${x(f)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${x(l)}
				max=${x(z(t,u))}
				step=${x(d)}
			/>
		`,e)},customElements.define(`cosmoz-input`,g(V,{observedAttributes:B,styleSheets:[d(M)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_e(),o(),ie(),oe(),{expect:H,waitFor:U}=__STORYBOOK_MODULE_TEST__,W=e=>e.currentTarget.closest(`cosmoz-slideout`)?.close(),G=e=>{let t=e.querySelector(`cosmoz-slideout`);return{el:t,surface:t.shadowRoot.querySelector(`[popover]`)}},K=(e,t,n)=>()=>{let i=document.createElement(`div`),a=!1,o=()=>c(r`
                    <cosmoz-slideout
                        ?no-escape=${t}
                        ?no-autofocus=${t}
                        .opened=${a}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        ${n}
                    </cosmoz-slideout>
                `,i);return o(),r`
            <cosmoz-button
                variant="primary"
                @click=${()=>{a=!0,o()}}
            >
                ${e}
            </cosmoz-button>
            ${i}
        `},q={title:`CosmozSlideout/Interaction`,component:`cosmoz-slideout`,tags:[`autodocs`]},J={render:()=>{let e=document.createElement(`div`),t=document.createElement(`p`);t.dataset.testid=`bg-count`,t.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let n=0;t.textContent=`Background clicks: 0`;let i=()=>{n+=1,t.textContent=`Background clicks: ${n}`},a=!1,o=()=>c(r`
                    <cosmoz-slideout
                        .opened=${a}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        <cosmoz-slideout-panel
                            heading="Supplier"
                            subtitle="Quick preview"
                            closeable
                        >
                            <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                The page behind remains interactive. This is useful for
                                quick-glance panels that should not block the current workflow.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="secondary" @click=${W}>
                                    Close
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return o(),r`
            <div
                style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
            >
                <cosmoz-button variant="primary" @click=${()=>{a=!0,o()}}>
                    Open panel
                </cosmoz-button>
                <cosmoz-button variant="secondary" @click=${i}>
                    Background action
                </cosmoz-button>
            </div>
            ${t}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let{surface:i}=G(t);await n(`background controls remain clickable while open`,async()=>{await U(()=>H(i.matches(`:popover-open`)).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/background action/iu})),H(t.querySelector(`[data-testid="bg-count"]`).textContent).toMatch(/Background clicks: 1/u)})}},Y={render:K(`Edit profile`,!1,r`
            <cosmoz-slideout-panel
                heading="Edit profile"
                subtitle="Focus returns to the opener on close"
                closeable
            >
                <div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
                    <cosmoz-input
                        .label=${`Full name`}
                        .value=${`Alex Karlsson`}
                    ></cosmoz-input>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`alex@acme.se`}
                    ></cosmoz-input>
                </div>
            </cosmoz-slideout-panel>
        `),play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit profile/iu}));let{el:i,surface:a}=G(t);await n(`moves focus into the dialog surface`,async()=>{await U(()=>H(a.matches(`:popover-open`)).toBe(!0)),await U(()=>H(i.shadowRoot.activeElement).toBe(a))}),await n(`returns focus to the opener after close`,async()=>{t.querySelector(`cosmoz-slideout-panel`).shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await U(()=>H(a.matches(`:popover-open`)).toBe(!1)),await U(()=>H(document.activeElement).toBe(t.querySelector(`cosmoz-button`)))})}},X={render:K(`Open guarded draft`,!0,r`
            <cosmoz-slideout-panel
                heading="Guarded draft"
                subtitle="Escape disabled, autofocus disabled"
                closeable
            >
                <p>
                    Use <code>no-escape</code> when accidental dismissal would be
                    destructive. Use <code>no-autofocus</code> when the opener should keep
                    focus until the user explicitly moves it.
                </p>
                <div slot="footer" style="display: flex; justify-content: flex-end;">
                    <cosmoz-button variant="primary" @click=${W}>
                        Close explicitly
                    </cosmoz-button>
                </div>
            </cosmoz-slideout-panel>
        `),play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open guarded draft/iu}));let{el:i,surface:a}=G(t);await n(`opens without stealing focus from the trigger`,async()=>{await U(()=>H(a.matches(`:popover-open`)).toBe(!0)),H(i.shadowRoot.activeElement).not.toBe(a),H(document.activeElement).not.toBe(i)}),await n(`Escape does not close the guarded panel`,async()=>{await r.keyboard(`{Escape}`),H(a.matches(`:popover-open`)).toBe(!0)})}},Z=(e,t)=>r`
    <div style="display: flex; flex-direction: column; height: 100%;">
        <cosmoz-button
            variant="tertiary"
            size="sm"
            aria-label="Close"
            style="position: absolute; top: 8px; right: 8px; z-index: 3;"
            @click=${W}
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
`,Q={render:()=>{let e=document.createElement(`div`),t=document.createElement(`div`),n=!1,i=!1,a=()=>c(r`
                    <cosmoz-slideout
                        aria-label="Second"
                        .opened=${i}
                        style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
                        @opened-changed=${e=>{i=e.detail.value,a()}}
                    >
                        ${Z(`Second`,`The top-most slideout. Press Esc to close just this one.`)}
                    </cosmoz-slideout>
                `,t),o=()=>{i=!0,a()},s=()=>c(r`
                    <cosmoz-slideout
                        aria-label="First"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,s()}}
                    >
                        ${Z(`First`,r`
                                <p style="margin: 0 0 12px;">The underlying slideout.</p>
                                <cosmoz-button variant="secondary" size="sm" @click=${o}>
                                    Open a second slideout
                                </cosmoz-button>
                            `)}
                    </cosmoz-slideout>
                `,e);return s(),a(),r`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,s()}}>
                Open first
            </cosmoz-button>
            ${e}${t}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`cosmoz-slideout`)].filter(e=>e.shadowRoot.querySelector(`[popover]`).matches(`:popover-open`)),a=()=>i().length,o=()=>i().map(e=>e.getAttribute(`aria-label`));await r.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await n(`opens a second slideout above the first`,async()=>{await U(()=>H(a()).toBe(1)),await r.click(await e.findByShadowRole(`button`,{name:/open a second slideout/iu})),await U(()=>H(a()).toBe(2))}),await n(`Escape closes the most recent slideout first`,async()=>{await r.keyboard(`{Escape}`),await U(()=>H(o()).toEqual([`First`]))})}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const status = document.createElement('p');
    status.dataset.testid = 'bg-count';
    status.style.cssText = 'margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);';
    let count = 0;
    status.textContent = 'Background clicks: 0';
    const bump = () => {
      count += 1;
      status.textContent = \`Background clicks: \${count}\`;
    };
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel
                            heading="Supplier"
                            subtitle="Quick preview"
                            closeable
                        >
                            <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                The page behind remains interactive. This is useful for
                                quick-glance panels that should not block the current workflow.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="secondary" @click=\${closeSlideout}>
                                    Close
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <div
                style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
            >
                <cosmoz-button variant="primary" @click=\${open}>
                    Open panel
                </cosmoz-button>
                <cosmoz-button variant="secondary" @click=\${bump}>
                    Background action
                </cosmoz-button>
            </div>
            \${status}\${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open panel/iu
    }));
    const {
      surface
    } = surfaceOf(canvasElement);
    await step('background controls remain clickable while open', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /background action/iu
      }));
      expect(canvasElement.querySelector('[data-testid="bg-count"]')!.textContent).toMatch(/Background clicks: 1/u);
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: shellStory('Edit profile', false, html\`
            <cosmoz-slideout-panel
                heading="Edit profile"
                subtitle="Focus returns to the opener on close"
                closeable
            >
                <div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
                    <cosmoz-input
                        .label=\${'Full name'}
                        .value=\${'Alex Karlsson'}
                    ></cosmoz-input>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'alex@acme.se'}
                    ></cosmoz-input>
                </div>
            </cosmoz-slideout-panel>
        \`),
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /edit profile/iu
    }));
    const {
      el,
      surface
    } = surfaceOf(canvasElement);
    await step('moves focus into the dialog surface', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await waitFor(() => expect(el.shadowRoot!.activeElement).toBe(surface));
    });
    await step('returns focus to the opener after close', async () => {
      canvasElement.querySelector('cosmoz-slideout-panel')!.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
      await waitFor(() => expect(document.activeElement).toBe(canvasElement.querySelector('cosmoz-button')));
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: shellStory('Open guarded draft', true, html\`
            <cosmoz-slideout-panel
                heading="Guarded draft"
                subtitle="Escape disabled, autofocus disabled"
                closeable
            >
                <p>
                    Use <code>no-escape</code> when accidental dismissal would be
                    destructive. Use <code>no-autofocus</code> when the opener should keep
                    focus until the user explicitly moves it.
                </p>
                <div slot="footer" style="display: flex; justify-content: flex-end;">
                    <cosmoz-button variant="primary" @click=\${closeSlideout}>
                        Close explicitly
                    </cosmoz-button>
                </div>
            </cosmoz-slideout-panel>
        \`),
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open guarded draft/iu
    }));
    const {
      el,
      surface
    } = surfaceOf(canvasElement);
    await step('opens without stealing focus from the trigger', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.activeElement).not.toBe(surface);
      expect(document.activeElement).not.toBe(el);
    });
    await step('Escape does not close the guarded panel', async () => {
      await userEvent.keyboard('{Escape}');
      expect(surface.matches(':popover-open')).toBe(true);
    });
  }
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mountA = document.createElement('div');
    const mountB = document.createElement('div');
    let openedA = false;
    let openedB = false;
    const rerenderB = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Second"
                        .opened=\${openedB}
                        style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
                        @opened-changed=\${(e: CustomEvent) => {
      openedB = e.detail.value;
      rerenderB();
    }}
                    >
                        \${stackChrome('Second', 'The top-most slideout. Press Esc to close just this one.')}
                    </cosmoz-slideout>
                \`, mountB);
    const openB = () => {
      openedB = true;
      rerenderB();
    };
    const rerenderA = () => render(html\`
                    <cosmoz-slideout
                        aria-label="First"
                        .opened=\${openedA}
                        @opened-changed=\${(e: CustomEvent) => {
      openedA = e.detail.value;
      rerenderA();
    }}
                    >
                        \${stackChrome('First', html\`
                                <p style="margin: 0 0 12px;">The underlying slideout.</p>
                                <cosmoz-button variant="secondary" size="sm" @click=\${openB}>
                                    Open a second slideout
                                </cosmoz-button>
                            \`)}
                    </cosmoz-slideout>
                \`, mountA);
    const openA = () => {
      openedA = true;
      rerenderA();
    };
    rerenderA();
    rerenderB();
    return html\`
            <cosmoz-button variant="primary" @click=\${openA}>
                Open first
            </cosmoz-button>
            \${mountA}\${mountB}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    const openSurfaces = () => [...canvasElement.querySelectorAll('cosmoz-slideout')].filter(s => s.shadowRoot!.querySelector('[popover]')!.matches(':popover-open'));
    const openCount = () => openSurfaces().length;
    const labels = () => openSurfaces().map(s => s.getAttribute('aria-label'));
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open first/iu
    }));
    await step('opens a second slideout above the first', async () => {
      await waitFor(() => expect(openCount()).toBe(1));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /open a second slideout/iu
      }));
      await waitFor(() => expect(openCount()).toBe(2));
    });
    await step('Escape closes the most recent slideout first', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(labels()).toEqual(['First']));
    });
  }
}`,...Q.parameters?.docs?.source}}},$=[`NonModal`,`FocusRestore`,`DismissalOptions`,`Stacking`]}))();export{X as DismissalOptions,Y as FocusRestore,J as NonModal,Q as Stacking,$ as __namedExportsOrder,q as default};