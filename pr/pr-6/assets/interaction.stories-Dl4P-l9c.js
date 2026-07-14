import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,dt as n,ft as r,lt as i,ot as a,pt as o,st as s,ut as c}from"./iframe-rxxicwRP.js";import{A as l,C as u,D as d,P as f,T as p,_ as m,b as h,c as g,d as _,f as v,g as ee,i as y,j as b,k as te,l as x,m as ne,n as re,p as S,t as ie,u as C,v as w,x as T,y as ae}from"./cosmoz-slideout-Bx0QNqgs.js";var E,oe=e((()=>{o(),h(),a(),E=w(class extends ae{constructor(e){if(super(e),e.type!==T.PROPERTY&&e.type!==T.ATTRIBUTE&&e.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!t(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n||t===i)return t;let r=e.element,a=e.name;if(e.type===T.PROPERTY){if(t===r[a])return n}else if(e.type===T.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return n}else if(e.type===T.ATTRIBUTE&&r.getAttribute(a)===t+``)return n;return s(e),t}})})),D,O,k=e((()=>{o(),m(),h(),D=new WeakMap,O=w(class extends ee{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=D.get(t);n===void 0&&(n=new WeakMap,D.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?D.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),A,j,se=e((()=>{o(),g(),A=(e,{label:t,invalid:n,errorMessage:i})=>r`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${x(t,()=>r`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${x(n&&i,()=>r`<div class="error" part="error">${i}</div>`)}
	`,j=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`,`no-label-float`,`always-float-label`]})),M,N,P=e((()=>{re(),M=y`
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
`,N=y`
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
`})),F,ce=e((()=>{S(),F=e=>d(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),I,le=e((()=>{S(),I=b(class extends l{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),ue=e((()=>{S(),b(class extends l{update(){return this.state.host}})})),L,R,de=e((()=>{S(),ue(),L=/([A-Z])/gu,R=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(L,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))}})),z,B=e((()=>{le(),de(),S(),z=e=>{let t=u(void 0),n=p(e=>t.current=e,[]),r=e.shadowRoot,i=p(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=p(t=>R(e,`value`,t.target.value),[]),o=p(t=>R(e,`focused`,t.type===`focus`),[]),s=p(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return I({validate:s},[s]),te(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),V,H,fe=e((()=>{V=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,H=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),U,W,pe=e((()=>{S(),o(),_(),oe(),k(),se(),P(),ce(),B(),fe(),U=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...j],W=e=>{let{type:t=`text`,pattern:n,allowedPattern:i,autocomplete:a,value:o,readonly:s,disabled:c,min:l,max:u,step:d,maxlength:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=z(e),_=F(i);return A(r`
			<input
				${O(g)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${v(n)}
				autocomplete=${v(a)}
				placeholder=${V(e)}
				?readonly=${s}
				?aria-disabled=${c}
				?disabled=${c}
				.value=${E(o??``)}
				maxlength=${v(f)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${v(l)}
				max=${v(H(t,u))}
				step=${v(d)}
			/>
		`,e)},customElements.define(`cosmoz-input`,ne(W,{observedAttributes:U,styleSheets:[f(N)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),G,K,q,J,Y,X,Z,Q,$;e((()=>{C(),pe(),o(),ie(),{expect:G,waitFor:K}=__STORYBOOK_MODULE_TEST__,q=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),J={title:`CosmozSlideout/Interaction`,component:`cosmoz-slideout`,tags:[`autodocs`]},Y={render:()=>{let e=document.createElement(`div`),t=document.createElement(`p`);t.dataset.testid=`bg-count`,t.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let n=0;return t.textContent=`Background clicks: 0`,r`
            <div
                style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
            >
                <cosmoz-button variant="primary" @click=${()=>c(r`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Supplier"
                        subtitle="Quick preview"
                        closeable
                        @close=${()=>c(i,e)}
                    >
                        <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                            The page behind remains interactive. This is useful for
                            quick-glance panels that should not block the current workflow.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="secondary" @click=${q}>
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                    Open panel
                </cosmoz-button>
                <cosmoz-button variant="secondary" @click=${()=>{n+=1,t.textContent=`Background clicks: ${n}`}}>
                    Background action
                </cosmoz-button>
            </div>
            ${t}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`background controls remain clickable while open`,async()=>{await K(()=>G(i.matches(`:popover-open`)).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/background action/iu})),G(t.querySelector(`[data-testid="bg-count"]`).textContent).toMatch(/Background clicks: 1/u)})}},X={render:()=>{let e=document.createElement(`div`);return r`
            <cosmoz-button variant="primary" @click=${()=>c(r`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Edit profile"
                        subtitle="Focus returns to the opener on close"
                        closeable
                        @close=${()=>c(i,e)}
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
                    </cosmoz-slideout>
                `,e)}>
                Edit profile
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=await e.findByShadowRole(`button`,{name:/edit profile/iu});await r.click(i);let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);await n(`moves focus into the dialog surface`,async()=>{await K(()=>G(o.matches(`:popover-open`)).toBe(!0)),await K(()=>G(a.shadowRoot.activeElement).toBe(o))}),await n(`returns focus to the opener after close`,async()=>{a.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await K(()=>G(t.querySelector(`cosmoz-slideout`)).toBeNull()),await K(()=>G(document.activeElement).toBe(t.querySelector(`cosmoz-button`)))})}},Z={render:()=>{let e=document.createElement(`div`);return r`
            <cosmoz-button variant="primary" @click=${()=>c(r`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Guarded draft"
                        subtitle="Escape disabled, autofocus disabled"
                        closeable
                        no-escape
                        no-autofocus
                        @close=${()=>c(i,e)}
                    >
                        <p>
                            Use <code>no-escape</code> when accidental dismissal would be
                            destructive. Use <code>no-autofocus</code> when the opener should
                            keep focus until the user explicitly moves it.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=${q}>
                                Close explicitly
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open guarded draft
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=await e.findByShadowRole(`button`,{name:/open guarded draft/iu});await r.click(i);let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);await n(`opens without stealing focus from the trigger`,async()=>{await K(()=>G(o.matches(`:popover-open`)).toBe(!0)),G(a.shadowRoot.activeElement).not.toBe(o),G(document.activeElement).not.toBe(a)}),await n(`Escape does not close the guarded panel`,async()=>{await r.keyboard(`{Escape}`),G(o.matches(`:popover-open`)).toBe(!0)})}},Q={render:()=>{let e=document.createElement(`div`),t=document.createElement(`div`),n=()=>c(r`
                    <cosmoz-slideout
                        aria-label="Second"
                        style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
                        @close=${()=>c(i,t)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=${q}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Second
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The top-most slideout. Press Esc to close just this one.
                        </div>
                    </cosmoz-slideout>
                `,t);return r`
            <cosmoz-button variant="primary" @click=${()=>c(r`
                    <cosmoz-slideout
                        aria-label="First"
                        @close=${()=>c(i,e)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=${q}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            First
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            <p style="margin: 0 0 12px;">The underlying slideout.</p>
                            <cosmoz-button variant="secondary" size="sm" @click=${n}>
                                Open a second slideout
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open first
            </cosmoz-button>
            ${e}${t}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>t.querySelectorAll(`cosmoz-slideout`).length,a=()=>[...t.querySelectorAll(`cosmoz-slideout`)].map(e=>e.getAttribute(`aria-label`));await r.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await n(`opens a second slideout above the first`,async()=>{await K(()=>G(i()).toBe(1)),await r.click(await e.findByShadowRole(`button`,{name:/open a second slideout/iu})),await K(()=>G(i()).toBe(2))}),await n(`Escape closes the most recent slideout first`,async()=>{await r.keyboard(`{Escape}`),await K(()=>G(a()).toEqual([`First`]))})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Supplier"
                        subtitle="Quick preview"
                        closeable
                        @close=\${() => render(nothing, mount)}
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
                    </cosmoz-slideout>
                \`, mount);
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
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('background controls remain clickable while open', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /background action/iu
      }));
      expect(canvasElement.querySelector('[data-testid="bg-count"]')!.textContent).toMatch(/Background clicks: 1/u);
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Edit profile"
                        subtitle="Focus returns to the opener on close"
                        closeable
                        @close=\${() => render(nothing, mount)}
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
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Edit profile
            </cosmoz-button>
            \${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    const trigger = await canvas.findByShadowRole('button', {
      name: /edit profile/iu
    });
    await userEvent.click(trigger);
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('moves focus into the dialog surface', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await waitFor(() => expect(el.shadowRoot!.activeElement).toBe(surface));
    });
    await step('returns focus to the opener after close', async () => {
      el.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
      await waitFor(() => expect(document.activeElement).toBe(canvasElement.querySelector('cosmoz-button')));
    });
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Guarded draft"
                        subtitle="Escape disabled, autofocus disabled"
                        closeable
                        no-escape
                        no-autofocus
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>
                            Use <code>no-escape</code> when accidental dismissal would be
                            destructive. Use <code>no-autofocus</code> when the opener should
                            keep focus until the user explicitly moves it.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=\${closeSlideout}>
                                Close explicitly
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open guarded draft
            </cosmoz-button>
            \${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    const trigger = await canvas.findByShadowRole('button', {
      name: /open guarded draft/iu
    });
    await userEvent.click(trigger);
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mountA = document.createElement('div');
    const mountB = document.createElement('div');
    const openB = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Second"
                        style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
                        @close=\${() => render(nothing, mountB)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=\${closeSlideout}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Second
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The top-most slideout. Press Esc to close just this one.
                        </div>
                    </cosmoz-slideout>
                \`, mountB);
    const openA = () => render(html\`
                    <cosmoz-slideout
                        aria-label="First"
                        @close=\${() => render(nothing, mountA)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=\${closeSlideout}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            First
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            <p style="margin: 0 0 12px;">The underlying slideout.</p>
                            <cosmoz-button variant="secondary" size="sm" @click=\${openB}>
                                Open a second slideout
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mountA);
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
    const count = () => canvasElement.querySelectorAll('cosmoz-slideout').length;
    const labels = () => [...canvasElement.querySelectorAll('cosmoz-slideout')].map(s => s.getAttribute('aria-label'));
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open first/iu
    }));
    await step('opens a second slideout above the first', async () => {
      await waitFor(() => expect(count()).toBe(1));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /open a second slideout/iu
      }));
      await waitFor(() => expect(count()).toBe(2));
    });
    await step('Escape closes the most recent slideout first', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(labels()).toEqual(['First']));
    });
  }
}`,...Q.parameters?.docs?.source}}},$=[`NonModal`,`FocusRestore`,`DismissalOptions`,`Stacking`]}))();export{Z as DismissalOptions,X as FocusRestore,Y as NonModal,Q as Stacking,$ as __namedExportsOrder,J as default};