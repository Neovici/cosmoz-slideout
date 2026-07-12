import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,mt as i,ot as a,pt as o,ut as s}from"./iframe-C9FwPToW.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f,p=e((()=>{f=0})),m,h,g,_,v,y,b,x=e((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),_=Symbol(`haunted.commit`),v=Symbol(`haunted.effects`),y=Symbol(`haunted.layoutEffects`),b=`haunted.context`})),ee,te=e((()=>{p(),x(),ee=class{update;host;virtual;[h];[v];[y];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[v]=[],this[y]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(y)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,S,ce,C=e((()=>{te(),x(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),S=ie(),ce=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(g);S(()=>{this.handlePhase(_,e),S(()=>{this.handlePhase(v),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case _:this.commit(t),this.runEffects(y);return;case g:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),w,le,ue,T,E=e((()=>{w=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?w(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),T=ue}));function de(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,fe(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var fe,pe=e((()=>{C(),E(),fe=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function me(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function D(e){return me.bind(null,e)}var O,k=e((()=>{p(),x(),O=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function he(e){return D(class extends O{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ge=e((()=>{k()}));function _e(e,t){e[v].push(t)}var A,ve=e((()=>{x(),ge(),A=he(_e)})),ye,be,xe=e((()=>{k(),x(),ve(),ye=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,be=D(class extends O{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,_e(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};ye(this.state.host).dispatchEvent(new CustomEvent(b,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Se(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(b,this)}disconnectedCallback(){this.removeEventListener(b,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(be(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ce=e((()=>{x(),xe()})),j,M=e((()=>{k(),j=D(class extends O{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),N,we=e((()=>{M(),N=(e,t)=>j(()=>e,t)}));function Te(e,t){e[y].push(t)}var Ee,De=e((()=>{x(),ge(),Ee=he(Te)})),Oe,ke=e((()=>{k(),Oe=D(class extends O{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ae=e((()=>{k(),D(class extends O{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),je,Me=e((()=>{k(),je=/([A-Z])/gu,D(class extends O{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(je,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Ne(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function P(e){return j(()=>Ne(e),[])}var Pe=e((()=>{M()})),Fe=e((()=>{k(),D(class extends O{update(){return this.state.host}})}));function Ie({render:e}){let t=de(e);return{component:t,createContext:Se(t)}}var F=e((()=>{pe(),Ce(),we(),ve(),De(),ke(),Ae(),M(),xe(),Me(),Pe(),Fe(),k(),C(),te(),re()})),I,Le,L,R=e((()=>{I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Le=e=>(...t)=>({_$litDirective$:e,values:t}),L=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Re(e){this._$AN===void 0?this._$AM=e:(B(this),this._$AM=e,V(this))}function ze(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)z(r[e],!1),B(r[e]);else r!=null&&(z(r,!1),B(r));else z(this,e)}var z,B,V,Be,Ve,He=e((()=>{a(),R(),z=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),z(e,t);return!0},B=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},V=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Be(t)}},Be=e=>{e.type==I.CHILD&&(e._$AP??=ze,e._$AQ??=Re)},Ve=class extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),V(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(z(this,e),B(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function Ue(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(H.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?Ue(e,t):e.teardown();break}else if(H.call(a.addedNodes,n.nextSibling)){i.disconnect(),Ue(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var H,We=e((()=>{R(),o(),He(),C(),H=Array.prototype.includes})),U,Ge,Ke=e((()=>{o(),F(),We(),{component:U,createContext:Ge}=Ie({render:s})})),W=e((()=>{Ke(),F(),E(),F()})),G,qe=e((()=>{W(),G=w(T`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})),K,q=e((()=>{o(),K=e=>e??r})),Je,Ye=e((()=>{W(),Je=T`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`})),Xe,Ze=e((()=>{Ye(),W(),Xe=T`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Je}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`})),Qe,$e,et=e((()=>{qe(),W(),o(),q(),Ze(),Qe=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],$e=e=>{let t=e.hasAttribute(`disabled`),i=e.getAttribute(`type`)||`button`,a=e.getAttribute(`href`);A(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let o=n`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(a!=null){let i=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return n`
			<a
				href=${a}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${K(i)}
				rel=${K(s)}
				download=${K(c)}
				>${o}</a
			>
		`}return n`
		<button type=${i} class="button" ?disabled=${t} part="button">
			${o}
		</button>
	`},customElements.define(`cosmoz-button`,U($e,{observedAttributes:Qe,styleSheets:[G,Xe],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));function J(e,t,n){return e?t(e):n?.(e)}var Y=e((()=>{})),tt=e((()=>{o(),q()})),nt=e((()=>{o(),q()})),rt=e((()=>{o(),q()})),it=e((()=>{o(),q()})),at=e((()=>{o(),q()})),ot=e((()=>{o(),q()})),st=e((()=>{o(),q()})),ct=e((()=>{o(),q()})),lt=e((()=>{o(),q()})),ut=e((()=>{o(),q()})),dt=e((()=>{o(),q()})),ft=e((()=>{o(),q()})),pt=e((()=>{o(),q()})),mt=e((()=>{o(),q()})),ht=e((()=>{o(),q()})),gt=e((()=>{o(),q()})),_t=e((()=>{o(),q()})),vt=e((()=>{o(),q()})),yt=e((()=>{o(),q()})),bt=e((()=>{o(),q()})),xt=e((()=>{o(),q()})),St=e((()=>{o(),q()})),Ct=e((()=>{o(),q()})),wt=e((()=>{o(),q()})),Tt=e((()=>{o(),q()})),Et=e((()=>{o(),q()})),Dt=e((()=>{o(),q()})),Ot=e((()=>{o(),q()})),kt=e((()=>{o(),q()})),At=e((()=>{o(),q()})),jt=e((()=>{o(),q()})),Mt=e((()=>{o(),q()})),Nt=e((()=>{o(),q()})),Pt=e((()=>{o(),q()})),Ft=e((()=>{o(),q()})),It=e((()=>{o(),q()})),Lt=e((()=>{o(),q()})),Rt=e((()=>{o(),q()})),zt=e((()=>{o(),q()})),Bt=e((()=>{o(),q()})),Vt=e((()=>{o(),q()})),Ht=e((()=>{o(),q()})),Ut=e((()=>{o(),q()})),Wt=e((()=>{o(),q()})),Gt=e((()=>{o(),q()})),Kt=e((()=>{o(),q()})),qt=e((()=>{o(),q()})),Jt=e((()=>{o(),q()})),Yt=e((()=>{o(),q()})),Xt=e((()=>{o(),q()})),Zt=e((()=>{o(),q()})),Qt=e((()=>{o(),q()})),$t=e((()=>{o(),q()})),en=e((()=>{o(),q()})),tn=e((()=>{o(),q()})),nn=e((()=>{o(),q()})),rn=e((()=>{o(),q()})),an=e((()=>{o(),q()})),on=e((()=>{o(),q()})),sn=e((()=>{o(),q()})),cn=e((()=>{o(),q()})),ln=e((()=>{o(),q()})),un=e((()=>{o(),q()})),dn=e((()=>{o(),q()})),fn=e((()=>{o(),q()})),pn=e((()=>{o(),q()})),mn=e((()=>{o(),q()})),hn=e((()=>{o(),q()})),gn=e((()=>{o(),q()})),_n=e((()=>{o(),q()})),vn=e((()=>{o(),q()})),yn=e((()=>{o(),q()})),bn=e((()=>{o(),q()})),xn=e((()=>{o(),q()})),Sn=e((()=>{o(),q()})),Cn=e((()=>{o(),q()})),wn=e((()=>{o(),q()})),Tn=e((()=>{o(),q()})),En=e((()=>{o(),q()})),Dn=e((()=>{o(),q()})),On=e((()=>{o(),q()})),kn=e((()=>{o(),q()})),An=e((()=>{o(),q()})),jn=e((()=>{o(),q()})),Mn=e((()=>{o(),q()})),Nn=e((()=>{o(),q()})),Pn=e((()=>{o(),q()})),Fn=e((()=>{o(),q()})),In=e((()=>{o(),q()})),Ln=e((()=>{o(),q()})),Rn=e((()=>{o(),q()})),zn=e((()=>{o(),q()})),Bn=e((()=>{o(),q()})),Vn=e((()=>{o(),q()})),Hn=e((()=>{o(),q()})),Un=e((()=>{o(),q()})),Wn=e((()=>{o(),q()})),Gn=e((()=>{o(),q()})),Kn=e((()=>{o(),q()})),qn=e((()=>{o(),q()})),Jn=e((()=>{o(),q()})),Yn=e((()=>{o(),q()})),Xn=e((()=>{o(),q()})),Zn=e((()=>{o(),q()})),Qn=e((()=>{o(),q()})),$n=e((()=>{o(),q()})),er=e((()=>{o(),q()})),tr=e((()=>{o(),q()})),nr=e((()=>{o(),q()})),rr=e((()=>{o(),q()})),ir=e((()=>{o(),q()})),ar=e((()=>{o(),q()})),or=e((()=>{o(),q()})),sr=e((()=>{o(),q()})),cr=e((()=>{o(),q()})),lr=e((()=>{o(),q()})),ur=e((()=>{o(),q()})),dr=e((()=>{o(),q()})),fr=e((()=>{o(),q()})),pr=e((()=>{o(),q()})),mr=e((()=>{o(),q()})),hr=e((()=>{o(),q()})),gr=e((()=>{o(),q()})),_r=e((()=>{o(),q()})),vr=e((()=>{o(),q()})),yr=e((()=>{o(),q()})),br=e((()=>{o(),q()})),xr=e((()=>{o(),q()})),Sr=e((()=>{o(),q()})),Cr=e((()=>{o(),q()})),wr=e((()=>{o(),q()})),Tr=e((()=>{o(),q()})),Er=e((()=>{o(),q()})),Dr=e((()=>{o(),q()})),Or=e((()=>{o(),q()})),kr=e((()=>{o(),q()})),Ar=e((()=>{o(),q()})),jr=e((()=>{o(),q()})),Mr=e((()=>{o(),q()})),Nr=e((()=>{o(),q()})),Pr=e((()=>{o(),q()})),Fr=e((()=>{o(),q()})),Ir=e((()=>{o(),q()})),Lr=e((()=>{o(),q()})),Rr=e((()=>{o(),q()})),zr=e((()=>{o(),q()})),Br=e((()=>{o(),q()})),Vr=e((()=>{o(),q()})),Hr=e((()=>{o(),q()})),Ur=e((()=>{o(),q()})),Wr=e((()=>{o(),q()})),Gr=e((()=>{o(),q()})),Kr=e((()=>{o(),q()})),qr=e((()=>{o(),q()})),Jr=e((()=>{o(),q()})),Yr=e((()=>{o(),q()})),Xr=e((()=>{o(),q()})),Zr=e((()=>{o(),q()})),Qr=e((()=>{o(),q()})),$r=e((()=>{o(),q()})),ei=e((()=>{o(),q()})),ti=e((()=>{o(),q()})),ni=e((()=>{o(),q()})),ri=e((()=>{o(),q()})),ii=e((()=>{o(),q()})),ai=e((()=>{o(),q()})),oi=e((()=>{o(),q()})),si=e((()=>{o(),q()})),ci=e((()=>{o(),q()})),li=e((()=>{o(),q()})),ui=e((()=>{o(),q()})),di=e((()=>{o(),q()})),fi=e((()=>{o(),q()})),pi=e((()=>{o(),q()})),mi=e((()=>{o(),q()})),hi=e((()=>{o(),q()})),gi=e((()=>{o(),q()})),_i=e((()=>{o(),q()})),vi=e((()=>{o(),q()})),yi=e((()=>{o(),q()})),bi=e((()=>{o(),q()})),xi=e((()=>{o(),q()})),Si=e((()=>{o(),q()})),Ci=e((()=>{o(),q()})),wi=e((()=>{o(),q()})),Ti=e((()=>{o(),q()})),Ei=e((()=>{o(),q()})),Di=e((()=>{o(),q()})),Oi=e((()=>{o(),q()})),ki=e((()=>{o(),q()})),Ai=e((()=>{o(),q()})),ji=e((()=>{o(),q()})),Mi=e((()=>{o(),q()})),Ni=e((()=>{o(),q()})),Pi=e((()=>{o(),q()})),Fi=e((()=>{o(),q()})),Ii=e((()=>{o(),q()})),Li=e((()=>{o(),q()})),Ri=e((()=>{o(),q()})),zi=e((()=>{o(),q()})),Bi=e((()=>{o(),q()})),Vi=e((()=>{o(),q()})),Hi=e((()=>{o(),q()})),Ui=e((()=>{o(),q()})),Wi=e((()=>{o(),q()})),Gi=e((()=>{o(),q()})),Ki=e((()=>{o(),q()})),qi=e((()=>{o(),q()})),Ji=e((()=>{o(),q()})),Yi=e((()=>{o(),q()})),Xi=e((()=>{o(),q()})),Zi=e((()=>{o(),q()})),Qi=e((()=>{o(),q()})),$i=e((()=>{o(),q()})),ea=e((()=>{o(),q()})),ta=e((()=>{o(),q()})),na=e((()=>{o(),q()})),ra=e((()=>{o(),q()})),ia=e((()=>{o(),q()})),aa=e((()=>{o(),q()})),oa=e((()=>{o(),q()})),sa=e((()=>{o(),q()})),ca=e((()=>{o(),q()})),la=e((()=>{o(),q()})),ua=e((()=>{o(),q()})),da=e((()=>{o(),q()})),fa=e((()=>{o(),q()})),pa=e((()=>{o(),q()})),ma=e((()=>{o(),q()})),ha=e((()=>{o(),q()})),ga=e((()=>{o(),q()})),_a=e((()=>{o(),q()})),va=e((()=>{o(),q()})),ya=e((()=>{o(),q()})),ba=e((()=>{o(),q()})),xa=e((()=>{o(),q()})),Sa=e((()=>{o(),q()})),Ca=e((()=>{o(),q()})),wa=e((()=>{o(),q()})),Ta=e((()=>{o(),q()})),Ea=e((()=>{o(),q()})),Da=e((()=>{o(),q()})),Oa=e((()=>{o(),q()})),ka=e((()=>{o(),q()})),Aa=e((()=>{o(),q()})),ja=e((()=>{o(),q()})),Ma=e((()=>{o(),q()})),Na=e((()=>{o(),q()})),Pa=e((()=>{o(),q()})),Fa=e((()=>{o(),q()})),Ia=e((()=>{o(),q()})),La=e((()=>{o(),q()})),Ra=e((()=>{o(),q()})),za=e((()=>{o(),q()})),Ba=e((()=>{o(),q()})),Va=e((()=>{o(),q()})),Ha=e((()=>{o(),q()})),Ua=e((()=>{o(),q()})),Wa=e((()=>{o(),q()})),Ga=e((()=>{o(),q()})),Ka=e((()=>{o(),q()})),qa=e((()=>{o(),q()})),Ja=e((()=>{o(),q()})),Ya=e((()=>{o(),q()})),Xa=e((()=>{o(),q()})),Za=e((()=>{o(),q()})),Qa=e((()=>{o(),q()})),$a=e((()=>{o(),q()})),eo=e((()=>{o(),q()})),to=e((()=>{o(),q()})),no=e((()=>{o(),q()})),ro=e((()=>{o(),q()})),io=e((()=>{o(),q()})),ao=e((()=>{o(),q()})),oo=e((()=>{o(),q()})),so=e((()=>{o(),q()})),co=e((()=>{o(),q()})),lo=e((()=>{o(),q()})),uo=e((()=>{o(),q()})),fo=e((()=>{o(),q()})),po=e((()=>{o(),q()})),mo=e((()=>{o(),q()})),ho=e((()=>{o(),q()})),go=e((()=>{o(),q()})),_o=e((()=>{o(),q()})),vo=e((()=>{o(),q()})),yo=e((()=>{o(),q()})),bo=e((()=>{o(),q()})),xo=e((()=>{o(),q()})),So=e((()=>{o(),q()})),Co=e((()=>{o(),q()})),wo=e((()=>{o(),q()})),To=e((()=>{o(),q()})),Eo=e((()=>{o(),q()})),Do=e((()=>{o(),q()})),Oo=e((()=>{o(),q()})),ko=e((()=>{o(),q()})),Ao=e((()=>{o(),q()})),jo=e((()=>{o(),q()})),Mo=e((()=>{o(),q()})),No=e((()=>{o(),q()})),Po=e((()=>{o(),q()})),Fo=e((()=>{o(),q()})),Io=e((()=>{o(),q()})),Lo=e((()=>{o(),q()})),Ro=e((()=>{o(),q()})),zo=e((()=>{o(),q()})),Bo=e((()=>{o(),q()})),Vo=e((()=>{o(),q()})),Ho=e((()=>{o(),q()})),Uo=e((()=>{o(),q()})),Wo=e((()=>{o(),q()})),Go=e((()=>{o(),q()})),Ko=e((()=>{o(),q()})),qo=e((()=>{o(),q()})),Jo=e((()=>{o(),q()})),Yo=e((()=>{o(),q()})),Xo=e((()=>{o(),q()})),Zo=e((()=>{o(),q()})),Qo=e((()=>{o(),q()})),$o=e((()=>{o(),q()})),es=e((()=>{o(),q()})),ts=e((()=>{o(),q()})),ns=e((()=>{o(),q()})),rs=e((()=>{o(),q()})),is=e((()=>{o(),q()})),as=e((()=>{o(),q()})),os=e((()=>{o(),q()})),ss=e((()=>{o(),q()})),cs=e((()=>{o(),q()})),ls=e((()=>{o(),q()})),us=e((()=>{o(),q()})),ds=e((()=>{o(),q()})),fs=e((()=>{o(),q()})),ps=e((()=>{o(),q()})),ms=e((()=>{o(),q()})),hs=e((()=>{o(),q()})),gs=e((()=>{o(),q()})),_s=e((()=>{o(),q()})),vs=e((()=>{o(),q()})),ys=e((()=>{o(),q()})),bs=e((()=>{o(),q()})),xs=e((()=>{o(),q()})),Ss=e((()=>{o(),q()})),Cs=e((()=>{o(),q()})),ws=e((()=>{o(),q()})),Ts=e((()=>{o(),q()})),Es=e((()=>{o(),q()})),Ds=e((()=>{o(),q()})),Os=e((()=>{o(),q()})),ks=e((()=>{o(),q()})),As=e((()=>{o(),q()})),js=e((()=>{o(),q()})),Ms=e((()=>{o(),q()})),Ns=e((()=>{o(),q()})),Ps=e((()=>{o(),q()})),Fs=e((()=>{o(),q()})),Is=e((()=>{o(),q()})),Ls=e((()=>{o(),q()})),Rs=e((()=>{o(),q()})),zs=e((()=>{o(),q()})),Bs=e((()=>{o(),q()})),Vs=e((()=>{o(),q()})),Hs=e((()=>{o(),q()})),Us=e((()=>{o(),q()})),Ws=e((()=>{o(),q()})),Gs=e((()=>{o(),q()})),Ks=e((()=>{o(),q()})),qs=e((()=>{o(),q()})),Js=e((()=>{o(),q()})),Ys=e((()=>{o(),q()})),Xs=e((()=>{o(),q()})),Zs=e((()=>{o(),q()})),Qs=e((()=>{o(),q()})),$s=e((()=>{o(),q()})),ec=e((()=>{o(),q()})),tc=e((()=>{o(),q()})),nc=e((()=>{o(),q()})),rc=e((()=>{o(),q()})),ic=e((()=>{o(),q()})),ac=e((()=>{o(),q()})),oc=e((()=>{o(),q()})),sc=e((()=>{o(),q()})),cc=e((()=>{o(),q()})),lc=e((()=>{o(),q()})),uc=e((()=>{o(),q()})),dc=e((()=>{o(),q()})),fc=e((()=>{o(),q()})),pc=e((()=>{o(),q()})),mc=e((()=>{o(),q()})),hc=e((()=>{o(),q()})),gc=e((()=>{o(),q()})),_c=e((()=>{o(),q()})),vc=e((()=>{o(),q()})),yc=e((()=>{o(),q()})),bc=e((()=>{o(),q()})),xc=e((()=>{o(),q()})),Sc=e((()=>{o(),q()})),Cc=e((()=>{o(),q()})),wc=e((()=>{o(),q()})),Tc=e((()=>{o(),q()})),Ec=e((()=>{o(),q()})),Dc=e((()=>{o(),q()})),Oc=e((()=>{o(),q()})),kc=e((()=>{o(),q()})),Ac=e((()=>{o(),q()})),jc=e((()=>{o(),q()})),Mc=e((()=>{o(),q()})),Nc=e((()=>{o(),q()})),Pc=e((()=>{o(),q()})),Fc=e((()=>{o(),q()})),Ic=e((()=>{o(),q()})),Lc=e((()=>{o(),q()})),Rc=e((()=>{o(),q()})),zc=e((()=>{o(),q()})),Bc=e((()=>{o(),q()})),Vc=e((()=>{o(),q()})),Hc=e((()=>{o(),q()})),Uc=e((()=>{o(),q()})),Wc=e((()=>{o(),q()})),Gc=e((()=>{o(),q()})),Kc=e((()=>{o(),q()})),qc=e((()=>{o(),q()})),Jc=e((()=>{o(),q()})),Yc=e((()=>{o(),q()})),Xc=e((()=>{o(),q()})),Zc=e((()=>{o(),q()})),Qc=e((()=>{o(),q()})),$c=e((()=>{o(),q()})),el=e((()=>{o(),q()})),tl=e((()=>{o(),q()})),nl=e((()=>{o(),q()})),rl=e((()=>{o(),q()})),il=e((()=>{o(),q()})),al=e((()=>{o(),q()})),ol=e((()=>{o(),q()})),sl=e((()=>{o(),q()})),cl=e((()=>{o(),q()})),ll=e((()=>{o(),q()})),ul=e((()=>{o(),q()})),dl=e((()=>{o(),q()})),fl=e((()=>{o(),q()})),pl=e((()=>{o(),q()})),ml=e((()=>{o(),q()})),hl=e((()=>{o(),q()})),gl=e((()=>{o(),q()})),_l=e((()=>{o(),q()})),vl=e((()=>{o(),q()})),yl=e((()=>{o(),q()})),bl=e((()=>{o(),q()})),xl=e((()=>{o(),q()})),Sl=e((()=>{o(),q()})),Cl=e((()=>{o(),q()})),wl=e((()=>{o(),q()})),Tl=e((()=>{o(),q()})),El=e((()=>{o(),q()})),Dl=e((()=>{o(),q()})),Ol=e((()=>{o(),q()})),kl=e((()=>{o(),q()})),Al=e((()=>{o(),q()})),jl=e((()=>{o(),q()})),Ml=e((()=>{o(),q()})),Nl=e((()=>{o(),q()})),Pl=e((()=>{o(),q()})),Fl=e((()=>{o(),q()})),Il=e((()=>{o(),q()})),Ll=e((()=>{o(),q()})),Rl=e((()=>{o(),q()})),zl=e((()=>{o(),q()})),Bl=e((()=>{o(),q()})),Vl=e((()=>{o(),q()})),Hl=e((()=>{o(),q()})),Ul=e((()=>{o(),q()})),Wl=e((()=>{o(),q()})),Gl=e((()=>{o(),q()})),Kl=e((()=>{o(),q()})),ql=e((()=>{o(),q()})),Jl=e((()=>{o(),q()})),Yl=e((()=>{o(),q()})),Xl=e((()=>{o(),q()})),Zl=e((()=>{o(),q()})),Ql=e((()=>{o(),q()})),$l=e((()=>{o(),q()})),eu=e((()=>{o(),q()})),tu=e((()=>{o(),q()})),nu=e((()=>{o(),q()})),ru=e((()=>{o(),q()})),iu=e((()=>{o(),q()})),au=e((()=>{o(),q()})),ou=e((()=>{o(),q()})),su=e((()=>{o(),q()})),cu=e((()=>{o(),q()})),lu=e((()=>{o(),q()})),uu=e((()=>{o(),q()})),du=e((()=>{o(),q()})),fu=e((()=>{o(),q()})),pu=e((()=>{o(),q()})),mu=e((()=>{o(),q()})),hu=e((()=>{o(),q()})),gu=e((()=>{o(),q()})),_u=e((()=>{o(),q()})),vu=e((()=>{o(),q()})),yu=e((()=>{o(),q()})),bu=e((()=>{o(),q()})),xu=e((()=>{o(),q()})),Su=e((()=>{o(),q()})),Cu=e((()=>{o(),q()})),wu=e((()=>{o(),q()})),Tu=e((()=>{o(),q()})),Eu=e((()=>{o(),q()})),Du=e((()=>{o(),q()})),Ou=e((()=>{o(),q()})),ku=e((()=>{o(),q()})),Au=e((()=>{o(),q()})),ju=e((()=>{o(),q()})),Mu=e((()=>{o(),q()})),Nu=e((()=>{o(),q()})),Pu=e((()=>{o(),q()})),Fu=e((()=>{o(),q()})),Iu=e((()=>{o(),q()})),Lu=e((()=>{o(),q()})),Ru=e((()=>{o(),q()})),zu=e((()=>{o(),q()})),Bu=e((()=>{o(),q()})),Vu=e((()=>{o(),q()})),Hu=e((()=>{o(),q()})),Uu=e((()=>{o(),q()})),Wu=e((()=>{o(),q()})),Gu=e((()=>{o(),q()})),Ku=e((()=>{o(),q()})),qu=e((()=>{o(),q()})),Ju=e((()=>{o(),q()})),Yu=e((()=>{o(),q()})),Xu=e((()=>{o(),q()})),Zu=e((()=>{o(),q()})),Qu=e((()=>{o(),q()})),$u=e((()=>{o(),q()})),ed=e((()=>{o(),q()})),td=e((()=>{o(),q()})),nd=e((()=>{o(),q()})),rd=e((()=>{o(),q()})),id=e((()=>{o(),q()})),ad=e((()=>{o(),q()})),od=e((()=>{o(),q()})),sd=e((()=>{o(),q()})),cd=e((()=>{o(),q()})),ld=e((()=>{o(),q()})),ud=e((()=>{o(),q()})),dd=e((()=>{o(),q()})),fd=e((()=>{o(),q()})),pd=e((()=>{o(),q()})),md=e((()=>{o(),q()})),hd=e((()=>{o(),q()})),gd=e((()=>{o(),q()})),_d=e((()=>{o(),q()})),vd=e((()=>{o(),q()})),yd=e((()=>{o(),q()})),bd=e((()=>{o(),q()})),xd=e((()=>{o(),q()})),Sd=e((()=>{o(),q()})),Cd=e((()=>{o(),q()})),wd=e((()=>{o(),q()})),Td=e((()=>{o(),q()})),Ed=e((()=>{o(),q()})),Dd=e((()=>{o(),q()})),Od=e((()=>{o(),q()})),kd=e((()=>{o(),q()})),Ad=e((()=>{o(),q()})),jd=e((()=>{o(),q()})),Md=e((()=>{o(),q()})),Nd=e((()=>{o(),q()})),Pd=e((()=>{o(),q()})),Fd=e((()=>{o(),q()})),Id=e((()=>{o(),q()})),Ld=e((()=>{o(),q()})),Rd=e((()=>{o(),q()})),zd=e((()=>{o(),q()})),Bd=e((()=>{o(),q()})),Vd=e((()=>{o(),q()})),Hd=e((()=>{o(),q()})),Ud=e((()=>{o(),q()})),Wd=e((()=>{o(),q()})),Gd=e((()=>{o(),q()})),Kd=e((()=>{o(),q()})),qd=e((()=>{o(),q()})),Jd=e((()=>{o(),q()})),Yd=e((()=>{o(),q()})),Xd=e((()=>{o(),q()})),Zd=e((()=>{o(),q()})),Qd=e((()=>{o(),q()})),$d=e((()=>{o(),q()})),ef=e((()=>{o(),q()})),tf=e((()=>{o(),q()})),nf=e((()=>{o(),q()})),rf=e((()=>{o(),q()})),af=e((()=>{o(),q()})),of=e((()=>{o(),q()})),sf=e((()=>{o(),q()})),cf=e((()=>{o(),q()})),lf=e((()=>{o(),q()})),uf=e((()=>{o(),q()})),df=e((()=>{o(),q()})),ff=e((()=>{o(),q()})),pf=e((()=>{o(),q()})),mf=e((()=>{o(),q()})),hf=e((()=>{o(),q()})),gf=e((()=>{o(),q()})),_f=e((()=>{o(),q()})),vf=e((()=>{o(),q()})),yf=e((()=>{o(),q()})),bf=e((()=>{o(),q()})),xf=e((()=>{o(),q()})),Sf=e((()=>{o(),q()})),Cf=e((()=>{o(),q()})),wf=e((()=>{o(),q()})),Tf=e((()=>{o(),q()})),Ef=e((()=>{o(),q()})),Df=e((()=>{o(),q()})),Of=e((()=>{o(),q()})),kf=e((()=>{o(),q()})),Af=e((()=>{o(),q()})),jf=e((()=>{o(),q()})),Mf=e((()=>{o(),q()})),Nf=e((()=>{o(),q()})),Pf=e((()=>{o(),q()})),Ff=e((()=>{o(),q()})),If=e((()=>{o(),q()})),Lf=e((()=>{o(),q()})),Rf=e((()=>{o(),q()})),zf=e((()=>{o(),q()})),Bf=e((()=>{o(),q()})),Vf=e((()=>{o(),q()})),Hf=e((()=>{o(),q()})),Uf=e((()=>{o(),q()})),Wf=e((()=>{o(),q()})),Gf=e((()=>{o(),q()})),Kf=e((()=>{o(),q()})),qf=e((()=>{o(),q()})),Jf=e((()=>{o(),q()})),Yf=e((()=>{o(),q()})),Xf=e((()=>{o(),q()})),Zf=e((()=>{o(),q()})),Qf=e((()=>{o(),q()})),$f=e((()=>{o(),q()})),ep=e((()=>{o(),q()})),tp=e((()=>{o(),q()})),np=e((()=>{o(),q()})),rp=e((()=>{o(),q()})),ip=e((()=>{o(),q()})),ap=e((()=>{o(),q()})),op=e((()=>{o(),q()})),sp=e((()=>{o(),q()})),cp=e((()=>{o(),q()})),lp=e((()=>{o(),q()})),up=e((()=>{o(),q()})),dp=e((()=>{o(),q()})),fp=e((()=>{o(),q()})),pp=e((()=>{o(),q()})),mp=e((()=>{o(),q()})),hp=e((()=>{o(),q()})),gp=e((()=>{o(),q()})),_p=e((()=>{o(),q()})),vp=e((()=>{o(),q()})),yp=e((()=>{o(),q()})),bp=e((()=>{o(),q()})),xp=e((()=>{o(),q()})),Sp=e((()=>{o(),q()})),Cp=e((()=>{o(),q()})),wp=e((()=>{o(),q()})),Tp=e((()=>{o(),q()})),Ep=e((()=>{o(),q()})),Dp=e((()=>{o(),q()})),Op=e((()=>{o(),q()})),kp=e((()=>{o(),q()})),Ap=e((()=>{o(),q()})),jp=e((()=>{o(),q()})),Mp=e((()=>{o(),q()})),Np=e((()=>{o(),q()})),Pp=e((()=>{o(),q()})),Fp=e((()=>{o(),q()})),Ip=e((()=>{o(),q()})),Lp=e((()=>{o(),q()})),Rp=e((()=>{o(),q()})),zp=e((()=>{o(),q()})),Bp=e((()=>{o(),q()})),Vp=e((()=>{o(),q()})),Hp=e((()=>{o(),q()})),Up=e((()=>{o(),q()})),Wp=e((()=>{o(),q()})),Gp=e((()=>{o(),q()})),Kp=e((()=>{o(),q()})),qp=e((()=>{o(),q()})),Jp=e((()=>{o(),q()})),Yp=e((()=>{o(),q()})),Xp=e((()=>{o(),q()})),Zp=e((()=>{o(),q()})),Qp=e((()=>{o(),q()})),$p=e((()=>{o(),q()})),em=e((()=>{o(),q()})),tm=e((()=>{o(),q()})),nm=e((()=>{o(),q()})),rm=e((()=>{o(),q()})),im=e((()=>{o(),q()})),am=e((()=>{o(),q()})),om=e((()=>{o(),q()})),sm=e((()=>{o(),q()})),cm=e((()=>{o(),q()})),lm=e((()=>{o(),q()})),um=e((()=>{o(),q()})),dm=e((()=>{o(),q()})),fm=e((()=>{o(),q()})),pm=e((()=>{o(),q()})),mm=e((()=>{o(),q()})),hm=e((()=>{o(),q()})),gm=e((()=>{o(),q()})),_m=e((()=>{o(),q()})),vm=e((()=>{o(),q()})),ym=e((()=>{o(),q()})),bm=e((()=>{o(),q()})),xm=e((()=>{o(),q()})),Sm=e((()=>{o(),q()})),Cm=e((()=>{o(),q()})),wm=e((()=>{o(),q()})),Tm=e((()=>{o(),q()})),Em=e((()=>{o(),q()})),Dm=e((()=>{o(),q()})),Om=e((()=>{o(),q()})),km=e((()=>{o(),q()})),Am=e((()=>{o(),q()})),jm=e((()=>{o(),q()})),Mm=e((()=>{o(),q()})),Nm=e((()=>{o(),q()})),Pm=e((()=>{o(),q()})),Fm=e((()=>{o(),q()})),Im=e((()=>{o(),q()})),Lm=e((()=>{o(),q()})),Rm=e((()=>{o(),q()})),zm=e((()=>{o(),q()})),Bm=e((()=>{o(),q()})),Vm=e((()=>{o(),q()})),Hm=e((()=>{o(),q()})),Um=e((()=>{o(),q()})),Wm=e((()=>{o(),q()})),Gm=e((()=>{o(),q()})),Km=e((()=>{o(),q()})),qm=e((()=>{o(),q()})),Jm=e((()=>{o(),q()})),Ym=e((()=>{o(),q()})),Xm=e((()=>{o(),q()})),Zm=e((()=>{o(),q()})),Qm=e((()=>{o(),q()})),$m=e((()=>{o(),q()})),eh=e((()=>{o(),q()})),th=e((()=>{o(),q()})),nh=e((()=>{o(),q()})),rh=e((()=>{o(),q()})),ih=e((()=>{o(),q()})),ah=e((()=>{o(),q()})),oh=e((()=>{o(),q()})),sh=e((()=>{o(),q()})),ch=e((()=>{o(),q()})),lh=e((()=>{o(),q()})),uh=e((()=>{o(),q()})),dh=e((()=>{o(),q()})),fh=e((()=>{o(),q()})),ph=e((()=>{o(),q()})),mh=e((()=>{o(),q()})),hh=e((()=>{o(),q()})),gh=e((()=>{o(),q()})),_h=e((()=>{o(),q()})),vh=e((()=>{o(),q()})),yh=e((()=>{o(),q()})),bh=e((()=>{o(),q()})),xh=e((()=>{o(),q()})),Sh=e((()=>{o(),q()})),Ch=e((()=>{o(),q()})),wh=e((()=>{o(),q()})),Th=e((()=>{o(),q()})),Eh=e((()=>{o(),q()})),Dh=e((()=>{o(),q()})),Oh=e((()=>{o(),q()})),kh=e((()=>{o(),q()})),Ah=e((()=>{o(),q()})),jh=e((()=>{o(),q()})),Mh=e((()=>{o(),q()})),Nh=e((()=>{o(),q()})),Ph=e((()=>{o(),q()})),Fh=e((()=>{o(),q()})),Ih=e((()=>{o(),q()})),Lh=e((()=>{o(),q()})),Rh=e((()=>{o(),q()})),zh=e((()=>{o(),q()})),Bh=e((()=>{o(),q()})),Vh=e((()=>{o(),q()})),Hh=e((()=>{o(),q()})),Uh=e((()=>{o(),q()})),Wh=e((()=>{o(),q()})),Gh=e((()=>{o(),q()})),Kh=e((()=>{o(),q()})),qh=e((()=>{o(),q()})),Jh=e((()=>{o(),q()})),Yh=e((()=>{o(),q()})),Xh=e((()=>{o(),q()})),Zh=e((()=>{o(),q()})),Qh=e((()=>{o(),q()})),$h=e((()=>{o(),q()})),eg=e((()=>{o(),q()})),tg=e((()=>{o(),q()})),ng=e((()=>{o(),q()})),rg=e((()=>{o(),q()})),ig=e((()=>{o(),q()})),ag=e((()=>{o(),q()})),og=e((()=>{o(),q()})),sg=e((()=>{o(),q()})),cg=e((()=>{o(),q()})),lg=e((()=>{o(),q()})),ug=e((()=>{o(),q()})),dg=e((()=>{o(),q()})),fg=e((()=>{o(),q()})),pg=e((()=>{o(),q()})),mg=e((()=>{o(),q()})),hg=e((()=>{o(),q()})),gg=e((()=>{o(),q()})),_g=e((()=>{o(),q()})),vg=e((()=>{o(),q()})),yg=e((()=>{o(),q()})),bg=e((()=>{o(),q()})),xg=e((()=>{o(),q()})),Sg=e((()=>{o(),q()})),Cg=e((()=>{o(),q()})),wg=e((()=>{o(),q()})),Tg=e((()=>{o(),q()})),Eg=e((()=>{o(),q()})),Dg=e((()=>{o(),q()})),Og=e((()=>{o(),q()})),kg=e((()=>{o(),q()})),Ag=e((()=>{o(),q()})),jg=e((()=>{o(),q()})),Mg=e((()=>{o(),q()})),Ng=e((()=>{o(),q()})),Pg=e((()=>{o(),q()})),Fg=e((()=>{o(),q()})),Ig=e((()=>{o(),q()})),Lg=e((()=>{o(),q()})),Rg=e((()=>{o(),q()})),zg=e((()=>{o(),q()})),Bg=e((()=>{o(),q()})),Vg=e((()=>{o(),q()})),Hg=e((()=>{o(),q()})),Ug=e((()=>{o(),q()})),Wg=e((()=>{o(),q()})),Gg=e((()=>{o(),q()})),Kg=e((()=>{o(),q()})),qg=e((()=>{o(),q()})),Jg=e((()=>{o(),q()})),Yg=e((()=>{o(),q()})),Xg=e((()=>{o(),q()})),Zg=e((()=>{o(),q()})),Qg=e((()=>{o(),q()})),$g=e((()=>{o(),q()})),e_=e((()=>{o(),q()})),t_=e((()=>{o(),q()})),n_=e((()=>{o(),q()})),r_=e((()=>{o(),q()})),i_=e((()=>{o(),q()})),a_=e((()=>{o(),q()})),o_=e((()=>{o(),q()})),s_=e((()=>{o(),q()})),c_=e((()=>{o(),q()})),l_=e((()=>{o(),q()})),u_=e((()=>{o(),q()})),d_=e((()=>{o(),q()})),f_=e((()=>{o(),q()})),p_=e((()=>{o(),q()})),m_=e((()=>{o(),q()})),h_=e((()=>{o(),q()})),g_=e((()=>{o(),q()})),__=e((()=>{o(),q()})),v_=e((()=>{o(),q()})),y_=e((()=>{o(),q()})),b_=e((()=>{o(),q()})),x_=e((()=>{o(),q()})),S_=e((()=>{o(),q()})),C_=e((()=>{o(),q()})),w_=e((()=>{o(),q()})),T_=e((()=>{o(),q()})),E_=e((()=>{o(),q()})),D_=e((()=>{o(),q()})),O_=e((()=>{o(),q()})),k_=e((()=>{o(),q()})),A_=e((()=>{o(),q()})),j_=e((()=>{o(),q()})),M_=e((()=>{o(),q()})),N_=e((()=>{o(),q()})),P_=e((()=>{o(),q()})),F_=e((()=>{o(),q()})),I_=e((()=>{o(),q()})),L_=e((()=>{o(),q()})),R_=e((()=>{o(),q()})),z_=e((()=>{o(),q()})),B_=e((()=>{o(),q()})),V_=e((()=>{o(),q()})),H_=e((()=>{o(),q()})),U_=e((()=>{o(),q()})),W_=e((()=>{o(),q()})),G_=e((()=>{o(),q()})),K_=e((()=>{o(),q()})),q_=e((()=>{o(),q()})),J_=e((()=>{o(),q()})),Y_=e((()=>{o(),q()})),X_=e((()=>{o(),q()})),Z_=e((()=>{o(),q()})),Q_=e((()=>{o(),q()})),$_=e((()=>{o(),q()})),ev=e((()=>{o(),q()})),tv=e((()=>{o(),q()})),nv=e((()=>{o(),q()})),rv=e((()=>{o(),q()})),iv=e((()=>{o(),q()})),av=e((()=>{o(),q()})),ov=e((()=>{o(),q()})),sv=e((()=>{o(),q()})),cv=e((()=>{o(),q()})),lv=e((()=>{o(),q()})),uv=e((()=>{o(),q()})),dv=e((()=>{o(),q()})),fv=e((()=>{o(),q()})),pv=e((()=>{o(),q()})),mv=e((()=>{o(),q()})),hv=e((()=>{o(),q()})),gv=e((()=>{o(),q()})),_v=e((()=>{o(),q()})),vv=e((()=>{o(),q()})),yv=e((()=>{o(),q()})),bv=e((()=>{o(),q()})),xv=e((()=>{o(),q()})),Sv=e((()=>{o(),q()})),Cv=e((()=>{o(),q()})),wv=e((()=>{o(),q()})),Tv=e((()=>{o(),q()})),Ev=e((()=>{o(),q()})),Dv=e((()=>{o(),q()})),Ov=e((()=>{o(),q()})),kv=e((()=>{o(),q()})),Av=e((()=>{o(),q()})),jv=e((()=>{o(),q()})),Mv=e((()=>{o(),q()})),Nv=e((()=>{o(),q()})),Pv=e((()=>{o(),q()})),Fv=e((()=>{o(),q()})),Iv=e((()=>{o(),q()})),Lv=e((()=>{o(),q()})),Rv=e((()=>{o(),q()})),zv=e((()=>{o(),q()})),Bv=e((()=>{o(),q()})),Vv=e((()=>{o(),q()})),Hv=e((()=>{o(),q()})),Uv=e((()=>{o(),q()})),Wv=e((()=>{o(),q()})),Gv=e((()=>{o(),q()})),Kv=e((()=>{o(),q()})),qv=e((()=>{o(),q()})),Jv=e((()=>{o(),q()})),Yv=e((()=>{o(),q()})),Xv=e((()=>{o(),q()})),Zv=e((()=>{o(),q()})),Qv=e((()=>{o(),q()})),$v=e((()=>{o(),q()})),ey=e((()=>{o(),q()})),ty=e((()=>{o(),q()})),ny=e((()=>{o(),q()})),ry=e((()=>{o(),q()})),iy=e((()=>{o(),q()})),ay=e((()=>{o(),q()})),oy=e((()=>{o(),q()})),sy=e((()=>{o(),q()})),cy=e((()=>{o(),q()})),ly=e((()=>{o(),q()})),uy=e((()=>{o(),q()})),dy=e((()=>{o(),q()})),fy=e((()=>{o(),q()})),py=e((()=>{o(),q()})),my=e((()=>{o(),q()})),hy=e((()=>{o(),q()})),gy=e((()=>{o(),q()})),_y=e((()=>{o(),q()})),vy=e((()=>{o(),q()})),yy=e((()=>{o(),q()})),by=e((()=>{o(),q()})),xy=e((()=>{o(),q()})),Sy=e((()=>{o(),q()})),Cy=e((()=>{o(),q()})),wy=e((()=>{o(),q()})),Ty=e((()=>{o(),q()})),Ey=e((()=>{o(),q()})),Dy=e((()=>{o(),q()})),Oy=e((()=>{o(),q()})),ky=e((()=>{o(),q()})),Ay=e((()=>{o(),q()})),jy=e((()=>{o(),q()})),My=e((()=>{o(),q()})),Ny=e((()=>{o(),q()})),Py=e((()=>{o(),q()})),Fy=e((()=>{o(),q()})),Iy=e((()=>{o(),q()})),Ly=e((()=>{o(),q()})),Ry=e((()=>{o(),q()})),zy=e((()=>{o(),q()})),By=e((()=>{o(),q()})),Vy=e((()=>{o(),q()})),Hy=e((()=>{o(),q()})),Uy=e((()=>{o(),q()})),Wy=e((()=>{o(),q()})),Gy=e((()=>{o(),q()})),Ky=e((()=>{o(),q()})),qy=e((()=>{o(),q()})),Jy=e((()=>{o(),q()})),Yy=e((()=>{o(),q()})),Xy=e((()=>{o(),q()})),Zy=e((()=>{o(),q()})),Qy=e((()=>{o(),q()})),$y=e((()=>{o(),q()})),eb=e((()=>{o(),q()})),tb=e((()=>{o(),q()})),nb=e((()=>{o(),q()})),rb=e((()=>{o(),q()})),ib=e((()=>{o(),q()})),ab=e((()=>{o(),q()})),ob=e((()=>{o(),q()})),sb=e((()=>{o(),q()})),cb=e((()=>{o(),q()})),lb=e((()=>{o(),q()})),ub=e((()=>{o(),q()})),db=e((()=>{o(),q()})),fb=e((()=>{o(),q()})),pb=e((()=>{o(),q()})),mb=e((()=>{o(),q()})),hb=e((()=>{o(),q()})),gb=e((()=>{o(),q()})),_b=e((()=>{o(),q()})),vb=e((()=>{o(),q()})),yb=e((()=>{o(),q()})),bb=e((()=>{o(),q()})),xb=e((()=>{o(),q()})),Sb=e((()=>{o(),q()})),Cb=e((()=>{o(),q()})),wb=e((()=>{o(),q()})),Tb=e((()=>{o(),q()})),Eb=e((()=>{o(),q()})),Db=e((()=>{o(),q()})),Ob=e((()=>{o(),q()})),kb=e((()=>{o(),q()})),Ab=e((()=>{o(),q()})),jb=e((()=>{o(),q()})),Mb=e((()=>{o(),q()})),Nb=e((()=>{o(),q()})),Pb=e((()=>{o(),q()})),Fb=e((()=>{o(),q()})),Ib=e((()=>{o(),q()})),Lb=e((()=>{o(),q()})),Rb=e((()=>{o(),q()})),zb=e((()=>{o(),q()})),Bb=e((()=>{o(),q()})),Vb=e((()=>{o(),q()})),Hb=e((()=>{o(),q()})),Ub=e((()=>{o(),q()})),Wb=e((()=>{o(),q()})),Gb=e((()=>{o(),q()})),Kb=e((()=>{o(),q()})),qb=e((()=>{o(),q()})),Jb=e((()=>{o(),q()})),Yb=e((()=>{o(),q()})),Xb=e((()=>{o(),q()})),Zb=e((()=>{o(),q()})),Qb=e((()=>{o(),q()})),$b=e((()=>{o(),q()})),ex=e((()=>{o(),q()})),tx=e((()=>{o(),q()})),nx=e((()=>{o(),q()})),rx=e((()=>{o(),q()})),ix=e((()=>{o(),q()})),ax=e((()=>{o(),q()})),ox=e((()=>{o(),q()})),sx=e((()=>{o(),q()})),cx=e((()=>{o(),q()})),lx=e((()=>{o(),q()})),ux=e((()=>{o(),q()})),dx=e((()=>{o(),q()})),fx=e((()=>{o(),q()})),px=e((()=>{o(),q()})),mx=e((()=>{o(),q()})),hx=e((()=>{o(),q()})),gx=e((()=>{o(),q()})),_x=e((()=>{o(),q()})),vx=e((()=>{o(),q()})),yx=e((()=>{o(),q()})),bx=e((()=>{o(),q()})),xx=e((()=>{o(),q()})),Sx=e((()=>{o(),q()})),Cx=e((()=>{o(),q()})),wx=e((()=>{o(),q()})),Tx=e((()=>{o(),q()})),Ex=e((()=>{o(),q()})),Dx=e((()=>{o(),q()})),Ox=e((()=>{o(),q()})),kx=e((()=>{o(),q()})),Ax=e((()=>{o(),q()})),jx=e((()=>{o(),q()})),Mx=e((()=>{o(),q()})),Nx=e((()=>{o(),q()})),Px=e((()=>{o(),q()})),Fx=e((()=>{o(),q()})),Ix=e((()=>{o(),q()})),Lx=e((()=>{o(),q()})),Rx=e((()=>{o(),q()})),zx=e((()=>{o(),q()})),Bx=e((()=>{o(),q()})),Vx=e((()=>{o(),q()})),Hx=e((()=>{o(),q()})),Ux=e((()=>{o(),q()})),Wx=e((()=>{o(),q()})),Gx=e((()=>{o(),q()})),Kx=e((()=>{o(),q()})),qx=e((()=>{o(),q()})),Jx=e((()=>{o(),q()})),Yx=e((()=>{o(),q()})),Xx=e((()=>{o(),q()})),Zx=e((()=>{o(),q()})),Qx=e((()=>{o(),q()})),$x=e((()=>{o(),q()})),eS=e((()=>{o(),q()})),tS=e((()=>{o(),q()})),nS=e((()=>{o(),q()})),rS=e((()=>{o(),q()})),iS=e((()=>{o(),q()})),aS=e((()=>{o(),q()})),oS=e((()=>{o(),q()})),sS=e((()=>{o(),q()})),cS=e((()=>{o(),q()})),lS=e((()=>{o(),q()})),uS=e((()=>{o(),q()})),dS=e((()=>{o(),q()})),fS=e((()=>{o(),q()})),pS=e((()=>{o(),q()})),mS=e((()=>{o(),q()})),hS=e((()=>{o(),q()})),gS=e((()=>{o(),q()})),_S=e((()=>{o(),q()})),vS=e((()=>{o(),q()})),yS=e((()=>{o(),q()})),bS=e((()=>{o(),q()})),xS=e((()=>{o(),q()})),SS=e((()=>{o(),q()})),CS=e((()=>{o(),q()})),wS=e((()=>{o(),q()})),TS=e((()=>{o(),q()})),ES=e((()=>{o(),q()})),DS=e((()=>{o(),q()})),OS=e((()=>{o(),q()})),kS=e((()=>{o(),q()})),AS=e((()=>{o(),q()})),jS=e((()=>{o(),q()})),MS=e((()=>{o(),q()})),NS,PS=e((()=>{o(),q(),Y(),NS=({slot:e,title:t,className:r,width:a=`24`,height:o=`24`,styles:s}={})=>n`
  <svg
    slot=${K(e)}
    class=${`x-close-icon ${r??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${o}
    style=${K(s)}
  >
    ${J(t,()=>i`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})),FS=e((()=>{o(),q()})),IS=e((()=>{o(),q()})),LS=e((()=>{o(),q()})),RS=e((()=>{o(),q()})),zS=e((()=>{o(),q()})),BS=e((()=>{o(),q()})),VS=e((()=>{o(),q()})),HS=e((()=>{o(),q()})),US=e((()=>{o(),q()})),WS=e((()=>{tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US()})),GS=e((()=>{W()})),X,KS=e((()=>{X=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),qS=e((()=>{})),JS=e((()=>{GS(),KS(),qS()})),YS,XS=e((()=>{W(),YS=()=>n`<style>
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
</style>`,customElements.define(`cz-spinner`,U(YS))})),ZS,QS=e((()=>{JS(),ZS=X`
	:host {
		display: contents;
	}

	[popover] {
		box-sizing: border-box;
		position: fixed;
		inset: 0 0 0 auto;
		height: 100%;
		max-height: 100%;
		width: var(--cosmoz-slideout-width, min(400px, 100vw));
		max-width: 100vw;
		margin: 0;
		padding: 0;
		border: none;
		border-left: var(
			--cosmoz-slideout-border,
			1px solid var(--cz-color-border-secondary, #e9eaeb)
		);
		background: var(--cosmoz-slideout-bg, var(--cz-color-bg-primary, #fff));
		color: var(--cosmoz-slideout-color, var(--cz-color-text-primary, #181d27));
		box-shadow: var(
			--cosmoz-slideout-shadow,
			var(--cz-shadow-xl, -8px 0 24px rgb(10 13 18 / 18%))
		);
		flex-direction: column;
		overflow: hidden;

		translate: 0 0;
		--_dur: var(
			--cosmoz-slideout-exit-duration,
			var(--cosmoz-slideout-duration, 0.3s)
		);
		--_ease: var(--cosmoz-slideout-easing, cubic-bezier(0.4, 0, 0.2, 1));
		transition: translate var(--_dur) var(--_ease),
			overlay var(--_dur) var(--_ease) allow-discrete,
			display var(--_dur) var(--_ease) allow-discrete, width 0.2s var(--_ease);
	}

	[popover]:popover-open {
		display: flex;
		--_dur: var(--cosmoz-slideout-duration, 0.3s); /* enter duration */
	}

	[popover]:not(:popover-open) {
		translate: 100% 0;
	}

	@starting-style {
		[popover]:popover-open {
			translate: 100% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}

	:host([full-screen]) [popover] {
		width: var(--cosmoz-slideout-full-screen-width, 100vw);
	}

	slot[name="controls"] {
		position: absolute;
		top: 8px;
		right: 8px;
		display: flex;
		gap: 4px;
		z-index: 3;
	}

	.content {
		position: relative;
		flex: 1;
		min-height: 0;
		overflow: auto;
		overscroll-behavior: contain;
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
`})),$S,Z,eC=e((()=>{$S=(e,t)=>{let n=e.indexOf(t);n!==-1&&e.splice(n,1)},Z=(e,t=80)=>{let n=getComputedStyle(e),r=e=>e.split(`,`).map(e=>parseFloat(e)*1e3||0),i=r(n.transitionDuration),a=r(n.transitionDelay);return i.reduce((e,t,n)=>Math.max(e,t+(a[n]??0)),0)+t}})),Q,$,tC,nC,rC,iC,aC,oC=e((()=>{W(),eC(),Q=[],$=e=>$S(Q,e),tC=e=>e.shadowRoot?.querySelector(`[popover]`)??void 0,nC=(e,t)=>{t.matches(`:popover-open`)||t.showPopover(),Q.push(t),!e.noAutofocus&&t.focus({preventScroll:!0})},rC=e=>{e?.isConnected&&e.focus({preventScroll:!0})},iC=(e,t,n,r)=>{let i=document.activeElement,a=!1,o=!1,s=!1,c=0,l=()=>{o||a||(o=!0,e.dispatchEvent(new Event(`opened`,{bubbles:!0})))},u=()=>{s||(s=!0,$(t),r.current&&rC(i),e.dispatchEvent(new Event(`close`,{bubbles:!0})),e.onClose?.())},d=e=>{e.target!==t||e.propertyName!==`translate`||(a?u():l())},f=e=>{e.newState===`closed`&&(a=!0,c=window.setTimeout(u,Z(t)))},p=r=>{r.key===`Escape`&&!e.noEscape&&Q[Q.length-1]===t&&(r.preventDefault(),n())};t.addEventListener(`transitionend`,d),t.addEventListener(`toggle`,f),document.addEventListener(`keydown`,p),nC(e,t);let m=window.setTimeout(l,Z(t));return()=>{window.clearTimeout(m),window.clearTimeout(c),$(t),t.removeEventListener(`transitionend`,d),t.removeEventListener(`toggle`,f),document.removeEventListener(`keydown`,p)}},aC=e=>{let t=P(!1),n=N(()=>{let n=tC(e);n?.matches(`:popover-open`)&&(t.current=e.contains(document.activeElement),n.hidePopover())},[]);return e.close=n,A(()=>{let r=tC(e);if(r)return iC(e,r,n,t)},[]),{close:n}}})),sC,cC=e((()=>{W(),sC=e=>{let t=!!e.fullScreen,n=N(()=>{e.toggleAttribute(`full-screen`)},[]);e.toggleFullScreen=n,Ee(()=>{e.toggleAttribute(`full-screen`,t)},[t]);let r=P(!1);return A(()=>{if(!r.current){r.current=!0;return}e.dispatchEvent(new CustomEvent(`full-screen-changed`,{detail:{fullScreen:t},bubbles:!0}))},[t]),{fullScreen:t,toggle:n}}})),lC,uC,dC,fC,pC,mC,hC=e((()=>{qe(),XS(),W(),o(),q(),Y(),QS(),oC(),cC(),lC=e=>{let{close:t}=aC(e),{fullScreen:n,toggle:r}=sC(e);return{close:t,fullScreen:n,toggleFullScreen:r}},uC=Symbol(`cosmoz-slideout-regions`),dC=e=>Object.assign({[uC]:!0},e),fC=e=>typeof e==`object`&&!!e&&uC in e,pC=(e,t)=>{let i=e.loading,a=fC(t)?t:{content:t};return n`
		<div
			part="surface"
			popover="manual"
			role="dialog"
			aria-modal="false"
			tabindex="-1"
			aria-label=${K(e.getAttribute(`aria-label`)??void 0)}
			aria-labelledby=${K(e.getAttribute(`aria-labelledby`)??void 0)}
		>
			${a.controls===void 0?n`<slot name="controls" part="controls"></slot>`:a.controls}
			${a.header===void 0?n`<slot name="header"></slot>`:a.header}
			<div class="content" part="content">
				${a.content??r}
				${J(i,()=>n`
						<div class="loading" part="loading">
							<cz-spinner></cz-spinner>
						</div>
					`)}
			</div>
			${a.footer===void 0?n`<slot name="footer"></slot>`:a.footer}
		</div>
	`},mC=(e,{observedAttributes:t,styles:r,styleSheets:i,...a}={})=>U(t=>(lC(t),n`
				${J(r,()=>n`<style>
							${r}
						</style>`)}
				${pC(t,e(t))}
			`),{observedAttributes:[`aria-label`,`aria-labelledby`,`full-screen`,`loading`,`no-autofocus`,`no-escape`,...t??[]],styleSheets:[G,ZS,...i??[]],...a})}));export{M as A,I as C,Oe as D,ke as E,D as F,k as I,E as L,ve as M,A as N,we as O,O as P,w as R,R as S,P as T,Ke as _,KS as a,Le as b,PS as c,J as d,et as f,U as g,W as h,JS as i,j,N as k,NS as l,K as m,dC as n,X as o,q as p,mC as r,WS as s,hC as t,Y as u,Ve as v,Pe as w,L as x,He as y};