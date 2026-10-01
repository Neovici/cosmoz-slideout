import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,dt as n,ft as r,lt as i,ot as a,pt as o,st as s,ut as c}from"./iframe-t4IxhJg_.js";import{C as l,D as u,E as d,T as f,_ as p,c as m,f as h,g,h as _,i as v,j as ee,l as y,m as b,n as te,p as ne,s as re,t as ie,u as ae,x,y as oe}from"./cosmoz-slideout-BmRMwPky.js";import{t as se}from"./cosmoz-button-BIXHsZAb.js";import{a as S,i as ce}from"./untitled-q43Dc5J8.js";import{n as C,t as le}from"./trusted-6AwRJoKi.js";import{n as ue,r as w,t as de}from"./story-docs-CVcPOcP0.js";import{t as fe}from"./cosmoz-slideout-panel-VrOQRnND.js";import{i as T,n as E,r as pe}from"./chrome-BxtIFk4o.js";var D,me=e((()=>{o(),g(),a(),D=b(class extends _{constructor(e){if(super(e),e.type!==p.PROPERTY&&e.type!==p.ATTRIBUTE&&e.type!==p.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!t(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n||t===i)return t;let r=e.element,a=e.name;if(e.type===p.PROPERTY){if(t===r[a])return n}else if(e.type===p.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return n}else if(e.type===p.ATTRIBUTE&&r.getAttribute(a)===t+``)return n;return s(e),t}})})),O,k,he=e((()=>{o(),ne(),g(),O=new WeakMap,k=b(class extends h{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=O.get(t);n===void 0&&(n=new WeakMap,O.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?O.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),A,j,ge=e((()=>{o(),ce(),A=(e,{label:t,invalid:n,errorMessage:i})=>r`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${S(t,()=>r`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${S(n&&i,()=>r`<div class="error" part="error">${i}</div>`)}
	`,j=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`,`no-label-float`,`always-float-label`]})),M,N,_e=e((()=>{te(),M=v`
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
`,N=v`
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
		${M}
	}
	@container style(--focused: focused) {
		${M}
	}
`})),P,F=e((()=>{y(),P=e=>l(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),I,ve=e((()=>{y(),I=u(class extends d{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),ye=e((()=>{y(),u(class extends d{update(){return this.state.host}})})),L,R,be=e((()=>{y(),ye(),L=/([A-Z])/gu,R=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(L,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))}})),z,xe=e((()=>{ve(),be(),y(),z=e=>{let t=oe(void 0),n=x(e=>t.current=e,[]),r=e.shadowRoot,i=x(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=x(t=>R(e,`value`,t.target.value),[]),o=x(t=>R(e,`focused`,t.type===`focus`),[]),s=x(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return I({validate:s},[s]),f(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea, label`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),B,V,Se=e((()=>{B=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,V=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),H,U,Ce=e((()=>{y(),o(),re(),me(),he(),ge(),_e(),F(),xe(),Se(),H=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...j],U=e=>{let{type:t=`text`,pattern:n,allowedPattern:i,autocomplete:a,value:o,readonly:s,disabled:c,min:l,max:u,step:d,maxlength:f}=e,{onChange:p,onFocus:h,onInput:g,onRef:_}=z(e),v=P(i);return A(r`
			<input
				${k(_)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${m(n)}
				autocomplete=${m(a)}
				placeholder=${B(e)}
				?readonly=${s}
				?aria-disabled=${c}
				?disabled=${c}
				.value=${D(o??``)}
				maxlength=${m(f)}
				@beforeinput=${v}
				@input=${g}
				@change=${p}
				@focus=${h}
				@blur=${h}
				min=${m(l)}
				max=${m(V(t,u))}
				step=${m(d)}
			/>
		`,e)},customElements.define(`cosmoz-input`,ae(U,{observedAttributes:H,styleSheets:[ee(N)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{se(),Ce(),o(),ie(),fe(),pe(),ue(),le(),{expect:W,waitFor:G}=__STORYBOOK_MODULE_TEST__,K=(e,t,n)=>()=>{let i=document.createElement(`div`),a=!1,o=()=>c(r`
                    <cosmoz-slideout
                        ?no-escape=${t}
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
        `},q={title:`CosmozSlideout/Interaction`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:de(`Interaction & focus: non-modal, focus, dismissal, stacking.`)},J={parameters:w(`Non-modal: the page behind stays interactive while open.`),render:()=>{let e=document.createElement(`div`),t=document.createElement(`p`);t.dataset.testid=`bg-count`,t.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary);`;let n=0;t.textContent=`Background clicks: 0`;let i=()=>{t.textContent=`Background clicks: ${++n}`},a=!1,o=()=>c(r`
                    <cosmoz-slideout
                        .opened=${a}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        <cosmoz-slideout-panel>
                            ${E(`Supplier`,{subtitle:`Quick preview`})}
                            <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                The page behind remains interactive. This is useful for
                                quick-glance panels that should not block the current workflow.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="secondary" @click=${T}>
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`background controls remain clickable while open`,async()=>{await G(()=>W(i.matches(`:popover-open`)).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/background action/iu})),W(t.querySelector(`[data-testid="bg-count"]`).textContent).toMatch(/Background clicks: 1/u)})}},Y={parameters:w(`Focus moves into the first marked field on open, back to the opener on close.`),render:K(`Edit profile`,!1,r`
            <cosmoz-slideout-panel>
                ${E(`Edit profile`,{subtitle:`Focus returns to the opener on close`})}
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
        `),play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit profile/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`focus is delegated to the first focusable content`,async()=>{await G(()=>W(i.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-input`);await G(()=>W(document.activeElement).toBe(e))}),await n(`returns focus to the opener after close`,async()=>{t.querySelector(`cosmoz-slideout-panel`).querySelector(`cosmoz-button[aria-label="Close"]`).click(),await G(()=>W(i.matches(`:popover-open`)).toBe(!1)),await G(()=>W(document.activeElement).toBe(t.querySelector(`cosmoz-button`)),{timeout:3e3})})}},X={parameters:w("`no-escape`: opt out of Escape-to-close."),render:K(`Open guarded draft`,!0,r`
            <cosmoz-slideout-panel>
                ${E(`Guarded draft`,{subtitle:`Escape disabled`})}
                <p>
                    Use <code>no-escape</code> when accidental dismissal would be
                    destructive.
                </p>
                <div slot="footer" style="display: flex; justify-content: flex-end;">
                    <cosmoz-button variant="primary" @click=${T}>
                        Close explicitly
                    </cosmoz-button>
                </div>
            </cosmoz-slideout-panel>
        `),play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open guarded draft/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`opens and focuses the default target`,async()=>{await G(()=>W(i.matches(`:popover-open`)).toBe(!0)),W(i.matches(`:popover-open`)).toBe(!0)}),await n(`Escape does not close the guarded panel`,async()=>{let e=await C(n);e&&(await e.keyboard(`{Escape}`),await new Promise(e=>window.setTimeout(e,100)),W(i.matches(`:popover-open`)).toBe(!0))})}},Z=(e,t)=>r`
    <div style="display: flex; flex-direction: column; height: 100%;">
        <cosmoz-button
            variant="tertiary"
            size="sm"
            aria-label="Close"
            style="position: absolute; top: 8px; right: 8px; z-index: 3;"
            @click=${T}
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
`,Q={parameters:w(`Multiple slideouts stack; Escape closes only the top-most.`),render:()=>{let e=document.createElement(`div`),t=document.createElement(`div`),n=!1,i=!1,a=()=>c(r`
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
        `},play:async({canvas:e,canvasElement:t,step:n})=>{let r=()=>[...t.querySelectorAll(`cosmoz-slideout`)].filter(e=>e.matches(`:popover-open`)),i=()=>r().map(e=>e.getAttribute(`aria-label`)),a=await C(n);a&&(await a.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await n(`opens a second slideout above the first`,async()=>{await G(()=>W(r().length).toBe(1)),await a.click(await e.findByShadowRole(`button`,{name:/open a second slideout/iu})),await G(()=>W(r().length).toBe(2))}),await n(`Escape closes the most recent slideout first`,async()=>{await a.keyboard(`{Escape}`),await G(()=>W(i()).toEqual([`First`]))}))}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Non-modal: the page behind stays interactive while open.'),
  render: () => {
    const mount = document.createElement('div');
    const status = document.createElement('p');
    status.dataset.testid = 'bg-count';
    status.style.cssText = 'margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary);';
    let count = 0;
    status.textContent = 'Background clicks: 0';
    const bump = () => {
      status.textContent = \`Background clicks: \${++count}\`;
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
                        <cosmoz-slideout-panel>
                            \${header('Supplier', {
      subtitle: 'Quick preview'
    })}
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
    const el = canvasElement.querySelector<SlideoutEl>('cosmoz-slideout')!;
    await step('background controls remain clickable while open', async () => {
      await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /background action/iu
      }));
      expect(canvasElement.querySelector('[data-testid="bg-count"]')!.textContent).toMatch(/Background clicks: 1/u);
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Focus moves into the first marked field on open, back to the opener on close.'),
  render: shellStory('Edit profile', false, html\`
            <cosmoz-slideout-panel>
                \${header('Edit profile', {
    subtitle: 'Focus returns to the opener on close'
  })}
                <div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
                    <cosmoz-input
                        autofocus
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
    const el = canvasElement.querySelector<SlideoutEl>('cosmoz-slideout')!;
    await step('focus is delegated to the first focusable content', async () => {
      await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
      // autofocus on the first cosmoz-input: the popover focusing steps
      // delegate through its DF shadow to the inner native input
      const firstInput = el.querySelector('cosmoz-input')!;
      await waitFor(() => expect(document.activeElement).toBe(firstInput));
    });
    await step('returns focus to the opener after close', async () => {
      canvasElement.querySelector('cosmoz-slideout-panel')!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
      // focus restore rides the settle cap, which matches the waitFor
      // default; give the assertion room beyond it
      await waitFor(() => expect(document.activeElement).toBe(canvasElement.querySelector('cosmoz-button')), {
        timeout: 3000
      });
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('\`no-escape\`: opt out of Escape-to-close.'),
  render: shellStory('Open guarded draft', true, html\`
            <cosmoz-slideout-panel>
                \${header('Guarded draft', {
    subtitle: 'Escape disabled'
  })}
                <p>
                    Use <code>no-escape</code> when accidental dismissal would be
                    destructive.
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
    const el = canvasElement.querySelector<SlideoutEl>('cosmoz-slideout')!;
    await step('opens and focuses the default target', async () => {
      await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
      expect(el.matches(':popover-open')).toBe(true);
    });
    await step('Escape does not close the guarded panel', async () => {
      // CloseWatcher ignores synthetic keys; skip in static builds
      const trusted = await skipUnlessTrusted(step);
      if (!trusted) return;
      await trusted.keyboard('{Escape}');
      await new Promise(r => window.setTimeout(r, 100));
      expect(el.matches(':popover-open')).toBe(true);
    });
  }
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Multiple slideouts stack; Escape closes only the top-most.'),
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
    step
  }) => {
    const openSurfaces = () => [...canvasElement.querySelectorAll('cosmoz-slideout')].filter(s => s.matches(':popover-open'));
    const labels = () => openSurfaces().map(s => s.getAttribute('aria-label'));
    // the stacked close-request sessions need real user activation at
    // their creation: synthetic clicks (storybook userEvent) create
    // none and the user agent then groups the watchers, so one close
    // request would close every surface; the open clicks use the
    // Playwright-backed trusted input for that guarantee
    const trusted = await skipUnlessTrusted(step);
    if (!trusted) return;
    await trusted.click(await canvas.findByShadowRole('button', {
      name: /open first/iu
    }));
    await step('opens a second slideout above the first', async () => {
      await waitFor(() => expect(openSurfaces().length).toBe(1));
      await trusted.click(await canvas.findByShadowRole('button', {
        name: /open a second slideout/iu
      }));
      await waitFor(() => expect(openSurfaces().length).toBe(2));
    });
    await step('Escape closes the most recent slideout first', async () => {
      await trusted.keyboard('{Escape}');
      await waitFor(() => expect(labels()).toEqual(['First']));
    });
  }
}`,...Q.parameters?.docs?.source}}},$=[`NonModal`,`FocusRestore`,`DismissalOptions`,`Stacking`]}))();export{X as DismissalOptions,Y as FocusRestore,J as NonModal,Q as Stacking,$ as __namedExportsOrder,q as default};