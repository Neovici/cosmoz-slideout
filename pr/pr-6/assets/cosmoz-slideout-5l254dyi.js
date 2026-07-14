import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,mt as i,ot as a,pt as o,ut as s}from"./iframe-CXTWcQPs.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f,p=e((()=>{f=0})),m,h,g,_,v,y,b,x=e((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),_=Symbol(`haunted.commit`),v=Symbol(`haunted.effects`),y=Symbol(`haunted.layoutEffects`),b=`haunted.context`})),ee,te=e((()=>{p(),x(),ee=class{update;host;virtual;[h];[v];[y];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[v]=[],this[y]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(y)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,S,ce,le=e((()=>{te(),x(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),S=ie(),ce=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(g);S(()=>{this.handlePhase(_,e),S(()=>{this.handlePhase(v),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case _:this.commit(t),this.runEffects(y);return;case g:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),C,ue,de,w,T=e((()=>{C=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ue=e=>e?.map(e=>typeof e==`string`?C(e):e),de=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=de}));function fe(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ue(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,pe(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var pe,me=e((()=>{le(),T(),pe=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function he(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function E(e){return he.bind(null,e)}var D,O=e((()=>{p(),x(),D=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ge(e){return E(class extends D{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var _e=e((()=>{O()}));function ve(e,t){e[v].push(t)}var k,A=e((()=>{x(),_e(),k=ge(ve)})),ye,be,xe=e((()=>{O(),x(),A(),ye=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,be=E(class extends D{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ve(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};ye(this.state.host).dispatchEvent(new CustomEvent(b,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Se(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(b,this)}disconnectedCallback(){this.removeEventListener(b,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(be(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ce=e((()=>{x(),xe()})),j,M=e((()=>{O(),j=E(class extends D{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),N,we=e((()=>{M(),N=(e,t)=>j(()=>e,t)}));function Te(e,t){e[y].push(t)}var Ee,De=e((()=>{x(),_e(),Ee=ge(Te)})),P,Oe=e((()=>{O(),P=E(class extends D{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),ke=e((()=>{O(),E(class extends D{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Ae,je=e((()=>{O(),Ae=/([A-Z])/gu,E(class extends D{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ae,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Me(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function F(e){return j(()=>Me(e),[])}var Ne=e((()=>{M()})),Pe=e((()=>{O(),E(class extends D{update(){return this.state.host}})}));function Fe({render:e}){let t=fe(e);return{component:t,createContext:Se(t)}}var I=e((()=>{me(),Ce(),we(),A(),De(),Oe(),ke(),M(),xe(),je(),Ne(),Pe(),O(),le(),te(),re()})),L,Ie,R,z=e((()=>{L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=e=>(...t)=>({_$litDirective$:e,values:t}),R=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Le(e){this._$AN===void 0?this._$AM=e:(V(this),this._$AM=e,H(this))}function Re(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)B(r[e],!1),V(r[e]);else r!=null&&(B(r,!1),V(r));else B(this,e)}var B,V,H,ze,Be,Ve=e((()=>{a(),z(),B=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),B(e,t);return!0},V=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},H=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ze(t)}},ze=e=>{e.type==L.CHILD&&(e._$AP??=Re,e._$AQ??=Le)},Be=class extends R{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),H(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(B(this,e),V(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function He(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(U.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?He(e,t):e.teardown();break}else if(U.call(a.addedNodes,n.nextSibling)){i.disconnect(),He(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var U,Ue=e((()=>{z(),o(),Ve(),le(),U=Array.prototype.includes})),W,We,Ge=e((()=>{o(),I(),Ue(),{component:W,createContext:We}=Fe({render:s})})),G=e((()=>{Ge(),I(),T(),I()})),K,Ke=e((()=>{G(),K=C(w`
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
`)})),q,J=e((()=>{o(),q=e=>e??r})),qe,Je=e((()=>{G(),qe=w`
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
`})),Ye,Xe=e((()=>{Je(),G(),Ye=w`
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
		${qe}
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
`})),Ze,Qe,$e=e((()=>{Ke(),G(),o(),J(),Xe(),Ze=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],Qe=e=>{let t=e.hasAttribute(`disabled`),i=e.getAttribute(`type`)||`button`,a=e.getAttribute(`href`);k(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let o=n`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(a!=null){let i=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return n`
			<a
				href=${a}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${q(i)}
				rel=${q(s)}
				download=${q(c)}
				>${o}</a
			>
		`}return n`
		<button type=${i} class="button" ?disabled=${t} part="button">
			${o}
		</button>
	`},customElements.define(`cosmoz-button`,W(Qe,{observedAttributes:Ze,styleSheets:[K,Ye],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));function Y(e,t,n){return e?t(e):n?.(e)}var X=e((()=>{})),et=e((()=>{o(),J()})),tt=e((()=>{o(),J()})),nt=e((()=>{o(),J()})),rt=e((()=>{o(),J()})),it=e((()=>{o(),J()})),at=e((()=>{o(),J()})),ot=e((()=>{o(),J()})),st=e((()=>{o(),J()})),ct=e((()=>{o(),J()})),lt=e((()=>{o(),J()})),ut=e((()=>{o(),J()})),dt=e((()=>{o(),J()})),ft=e((()=>{o(),J()})),pt=e((()=>{o(),J()})),mt=e((()=>{o(),J()})),ht=e((()=>{o(),J()})),gt=e((()=>{o(),J()})),_t=e((()=>{o(),J()})),vt=e((()=>{o(),J()})),yt=e((()=>{o(),J()})),bt=e((()=>{o(),J()})),xt=e((()=>{o(),J()})),St=e((()=>{o(),J()})),Ct=e((()=>{o(),J()})),wt=e((()=>{o(),J()})),Tt=e((()=>{o(),J()})),Et=e((()=>{o(),J()})),Dt=e((()=>{o(),J()})),Ot=e((()=>{o(),J()})),kt=e((()=>{o(),J()})),At=e((()=>{o(),J()})),jt=e((()=>{o(),J()})),Mt=e((()=>{o(),J()})),Nt=e((()=>{o(),J()})),Pt=e((()=>{o(),J()})),Ft=e((()=>{o(),J()})),It=e((()=>{o(),J()})),Lt=e((()=>{o(),J()})),Rt=e((()=>{o(),J()})),zt=e((()=>{o(),J()})),Bt=e((()=>{o(),J()})),Vt=e((()=>{o(),J()})),Ht=e((()=>{o(),J()})),Ut=e((()=>{o(),J()})),Wt=e((()=>{o(),J()})),Gt=e((()=>{o(),J()})),Kt=e((()=>{o(),J()})),qt=e((()=>{o(),J()})),Jt=e((()=>{o(),J()})),Yt=e((()=>{o(),J()})),Xt=e((()=>{o(),J()})),Zt=e((()=>{o(),J()})),Qt=e((()=>{o(),J()})),$t=e((()=>{o(),J()})),en=e((()=>{o(),J()})),tn=e((()=>{o(),J()})),nn=e((()=>{o(),J()})),rn=e((()=>{o(),J()})),an=e((()=>{o(),J()})),on=e((()=>{o(),J()})),sn=e((()=>{o(),J()})),cn=e((()=>{o(),J()})),ln=e((()=>{o(),J()})),un=e((()=>{o(),J()})),dn=e((()=>{o(),J()})),fn=e((()=>{o(),J()})),pn=e((()=>{o(),J()})),mn=e((()=>{o(),J()})),hn=e((()=>{o(),J()})),gn=e((()=>{o(),J()})),_n=e((()=>{o(),J()})),vn=e((()=>{o(),J()})),yn=e((()=>{o(),J()})),bn=e((()=>{o(),J()})),xn=e((()=>{o(),J()})),Sn=e((()=>{o(),J()})),Cn=e((()=>{o(),J()})),wn=e((()=>{o(),J()})),Tn=e((()=>{o(),J()})),En=e((()=>{o(),J()})),Dn=e((()=>{o(),J()})),On=e((()=>{o(),J()})),kn=e((()=>{o(),J()})),An=e((()=>{o(),J()})),jn=e((()=>{o(),J()})),Mn=e((()=>{o(),J()})),Nn=e((()=>{o(),J()})),Pn=e((()=>{o(),J()})),Fn=e((()=>{o(),J()})),In=e((()=>{o(),J()})),Ln=e((()=>{o(),J()})),Rn=e((()=>{o(),J()})),zn=e((()=>{o(),J()})),Bn=e((()=>{o(),J()})),Vn=e((()=>{o(),J()})),Hn=e((()=>{o(),J()})),Un=e((()=>{o(),J()})),Wn=e((()=>{o(),J()})),Gn=e((()=>{o(),J()})),Kn=e((()=>{o(),J()})),qn=e((()=>{o(),J()})),Jn=e((()=>{o(),J()})),Yn=e((()=>{o(),J()})),Xn=e((()=>{o(),J()})),Zn=e((()=>{o(),J()})),Qn=e((()=>{o(),J()})),$n=e((()=>{o(),J()})),er=e((()=>{o(),J()})),tr=e((()=>{o(),J()})),nr=e((()=>{o(),J()})),rr=e((()=>{o(),J()})),ir=e((()=>{o(),J()})),ar=e((()=>{o(),J()})),or=e((()=>{o(),J()})),sr=e((()=>{o(),J()})),cr=e((()=>{o(),J()})),lr=e((()=>{o(),J()})),ur=e((()=>{o(),J()})),dr=e((()=>{o(),J()})),fr=e((()=>{o(),J()})),pr=e((()=>{o(),J()})),mr=e((()=>{o(),J()})),hr=e((()=>{o(),J()})),gr=e((()=>{o(),J()})),_r=e((()=>{o(),J()})),vr=e((()=>{o(),J()})),yr=e((()=>{o(),J()})),br=e((()=>{o(),J()})),xr=e((()=>{o(),J()})),Sr=e((()=>{o(),J()})),Cr=e((()=>{o(),J()})),wr=e((()=>{o(),J()})),Tr=e((()=>{o(),J()})),Er=e((()=>{o(),J()})),Dr=e((()=>{o(),J()})),Or=e((()=>{o(),J()})),kr=e((()=>{o(),J()})),Ar=e((()=>{o(),J()})),jr=e((()=>{o(),J()})),Mr=e((()=>{o(),J()})),Nr=e((()=>{o(),J()})),Pr=e((()=>{o(),J()})),Fr=e((()=>{o(),J()})),Ir=e((()=>{o(),J()})),Lr=e((()=>{o(),J()})),Rr=e((()=>{o(),J()})),zr=e((()=>{o(),J()})),Br=e((()=>{o(),J()})),Vr=e((()=>{o(),J()})),Hr=e((()=>{o(),J()})),Ur=e((()=>{o(),J()})),Wr=e((()=>{o(),J()})),Gr=e((()=>{o(),J()})),Kr=e((()=>{o(),J()})),qr=e((()=>{o(),J()})),Jr=e((()=>{o(),J()})),Yr=e((()=>{o(),J()})),Xr=e((()=>{o(),J()})),Zr=e((()=>{o(),J()})),Qr=e((()=>{o(),J()})),$r=e((()=>{o(),J()})),ei=e((()=>{o(),J()})),ti=e((()=>{o(),J()})),ni=e((()=>{o(),J()})),ri=e((()=>{o(),J()})),ii=e((()=>{o(),J()})),ai=e((()=>{o(),J()})),oi=e((()=>{o(),J()})),si=e((()=>{o(),J()})),ci=e((()=>{o(),J()})),li=e((()=>{o(),J()})),ui=e((()=>{o(),J()})),di=e((()=>{o(),J()})),fi=e((()=>{o(),J()})),pi=e((()=>{o(),J()})),mi=e((()=>{o(),J()})),hi=e((()=>{o(),J()})),gi=e((()=>{o(),J()})),_i=e((()=>{o(),J()})),vi=e((()=>{o(),J()})),yi=e((()=>{o(),J()})),bi=e((()=>{o(),J()})),xi=e((()=>{o(),J()})),Si=e((()=>{o(),J()})),Ci=e((()=>{o(),J()})),wi=e((()=>{o(),J()})),Ti=e((()=>{o(),J()})),Ei=e((()=>{o(),J()})),Di=e((()=>{o(),J()})),Oi=e((()=>{o(),J()})),ki=e((()=>{o(),J()})),Ai=e((()=>{o(),J()})),ji=e((()=>{o(),J()})),Mi=e((()=>{o(),J()})),Ni=e((()=>{o(),J()})),Pi=e((()=>{o(),J()})),Fi=e((()=>{o(),J()})),Ii=e((()=>{o(),J()})),Li=e((()=>{o(),J()})),Ri=e((()=>{o(),J()})),zi=e((()=>{o(),J()})),Bi=e((()=>{o(),J()})),Vi=e((()=>{o(),J()})),Hi=e((()=>{o(),J()})),Ui=e((()=>{o(),J()})),Wi=e((()=>{o(),J()})),Gi=e((()=>{o(),J()})),Ki=e((()=>{o(),J()})),qi=e((()=>{o(),J()})),Ji=e((()=>{o(),J()})),Yi=e((()=>{o(),J()})),Xi=e((()=>{o(),J()})),Zi=e((()=>{o(),J()})),Qi=e((()=>{o(),J()})),$i=e((()=>{o(),J()})),ea=e((()=>{o(),J()})),ta=e((()=>{o(),J()})),na=e((()=>{o(),J()})),ra=e((()=>{o(),J()})),ia=e((()=>{o(),J()})),aa=e((()=>{o(),J()})),oa=e((()=>{o(),J()})),sa=e((()=>{o(),J()})),ca=e((()=>{o(),J()})),la=e((()=>{o(),J()})),ua=e((()=>{o(),J()})),da=e((()=>{o(),J()})),fa=e((()=>{o(),J()})),pa=e((()=>{o(),J()})),ma=e((()=>{o(),J()})),ha=e((()=>{o(),J()})),ga=e((()=>{o(),J()})),_a=e((()=>{o(),J()})),va=e((()=>{o(),J()})),ya=e((()=>{o(),J()})),ba=e((()=>{o(),J()})),xa=e((()=>{o(),J()})),Sa=e((()=>{o(),J()})),Ca=e((()=>{o(),J()})),wa=e((()=>{o(),J()})),Ta=e((()=>{o(),J()})),Ea=e((()=>{o(),J()})),Da=e((()=>{o(),J()})),Oa=e((()=>{o(),J()})),ka=e((()=>{o(),J()})),Aa=e((()=>{o(),J()})),ja=e((()=>{o(),J()})),Ma=e((()=>{o(),J()})),Na=e((()=>{o(),J()})),Pa=e((()=>{o(),J()})),Fa=e((()=>{o(),J()})),Ia=e((()=>{o(),J()})),La=e((()=>{o(),J()})),Ra=e((()=>{o(),J()})),za=e((()=>{o(),J()})),Ba=e((()=>{o(),J()})),Va=e((()=>{o(),J()})),Ha=e((()=>{o(),J()})),Ua=e((()=>{o(),J()})),Wa=e((()=>{o(),J()})),Ga=e((()=>{o(),J()})),Ka=e((()=>{o(),J()})),qa=e((()=>{o(),J()})),Ja=e((()=>{o(),J()})),Ya=e((()=>{o(),J()})),Xa=e((()=>{o(),J()})),Za=e((()=>{o(),J()})),Qa=e((()=>{o(),J()})),$a=e((()=>{o(),J()})),eo=e((()=>{o(),J()})),to=e((()=>{o(),J()})),no=e((()=>{o(),J()})),ro=e((()=>{o(),J()})),io=e((()=>{o(),J()})),ao=e((()=>{o(),J()})),oo=e((()=>{o(),J()})),so=e((()=>{o(),J()})),co=e((()=>{o(),J()})),lo=e((()=>{o(),J()})),uo=e((()=>{o(),J()})),fo=e((()=>{o(),J()})),po=e((()=>{o(),J()})),mo=e((()=>{o(),J()})),ho=e((()=>{o(),J()})),go=e((()=>{o(),J()})),_o=e((()=>{o(),J()})),vo=e((()=>{o(),J()})),yo=e((()=>{o(),J()})),bo=e((()=>{o(),J()})),xo=e((()=>{o(),J()})),So=e((()=>{o(),J()})),Co=e((()=>{o(),J()})),wo=e((()=>{o(),J()})),To=e((()=>{o(),J()})),Eo=e((()=>{o(),J()})),Do=e((()=>{o(),J()})),Oo=e((()=>{o(),J()})),ko=e((()=>{o(),J()})),Ao=e((()=>{o(),J()})),jo=e((()=>{o(),J()})),Mo=e((()=>{o(),J()})),No=e((()=>{o(),J()})),Po=e((()=>{o(),J()})),Fo=e((()=>{o(),J()})),Io=e((()=>{o(),J()})),Lo=e((()=>{o(),J()})),Ro=e((()=>{o(),J()})),zo=e((()=>{o(),J()})),Bo=e((()=>{o(),J()})),Vo=e((()=>{o(),J()})),Ho=e((()=>{o(),J()})),Uo=e((()=>{o(),J()})),Wo=e((()=>{o(),J()})),Go=e((()=>{o(),J()})),Ko=e((()=>{o(),J()})),qo=e((()=>{o(),J()})),Jo=e((()=>{o(),J()})),Yo=e((()=>{o(),J()})),Xo=e((()=>{o(),J()})),Zo=e((()=>{o(),J()})),Qo=e((()=>{o(),J()})),$o=e((()=>{o(),J()})),es=e((()=>{o(),J()})),ts=e((()=>{o(),J()})),ns=e((()=>{o(),J()})),rs=e((()=>{o(),J()})),is=e((()=>{o(),J()})),as=e((()=>{o(),J()})),os=e((()=>{o(),J()})),ss=e((()=>{o(),J()})),cs=e((()=>{o(),J()})),ls=e((()=>{o(),J()})),us=e((()=>{o(),J()})),ds=e((()=>{o(),J()})),fs=e((()=>{o(),J()})),ps=e((()=>{o(),J()})),ms=e((()=>{o(),J()})),hs=e((()=>{o(),J()})),gs=e((()=>{o(),J()})),_s=e((()=>{o(),J()})),vs=e((()=>{o(),J()})),ys=e((()=>{o(),J()})),bs=e((()=>{o(),J()})),xs=e((()=>{o(),J()})),Ss=e((()=>{o(),J()})),Cs=e((()=>{o(),J()})),ws=e((()=>{o(),J()})),Ts=e((()=>{o(),J()})),Es=e((()=>{o(),J()})),Ds=e((()=>{o(),J()})),Os=e((()=>{o(),J()})),ks=e((()=>{o(),J()})),As=e((()=>{o(),J()})),js=e((()=>{o(),J()})),Ms=e((()=>{o(),J()})),Ns=e((()=>{o(),J()})),Ps=e((()=>{o(),J()})),Fs=e((()=>{o(),J()})),Is=e((()=>{o(),J()})),Ls=e((()=>{o(),J()})),Rs=e((()=>{o(),J()})),zs=e((()=>{o(),J()})),Bs=e((()=>{o(),J()})),Vs=e((()=>{o(),J()})),Hs=e((()=>{o(),J()})),Us=e((()=>{o(),J()})),Ws=e((()=>{o(),J()})),Gs=e((()=>{o(),J()})),Ks=e((()=>{o(),J()})),qs=e((()=>{o(),J()})),Js=e((()=>{o(),J()})),Ys=e((()=>{o(),J()})),Xs=e((()=>{o(),J()})),Zs=e((()=>{o(),J()})),Qs=e((()=>{o(),J()})),$s=e((()=>{o(),J()})),ec=e((()=>{o(),J()})),tc=e((()=>{o(),J()})),nc=e((()=>{o(),J()})),rc=e((()=>{o(),J()})),ic=e((()=>{o(),J()})),ac=e((()=>{o(),J()})),oc=e((()=>{o(),J()})),sc=e((()=>{o(),J()})),cc=e((()=>{o(),J()})),lc=e((()=>{o(),J()})),uc=e((()=>{o(),J()})),dc=e((()=>{o(),J()})),fc=e((()=>{o(),J()})),pc=e((()=>{o(),J()})),mc=e((()=>{o(),J()})),hc=e((()=>{o(),J()})),gc=e((()=>{o(),J()})),_c=e((()=>{o(),J()})),vc=e((()=>{o(),J()})),yc=e((()=>{o(),J()})),bc=e((()=>{o(),J()})),xc=e((()=>{o(),J()})),Sc=e((()=>{o(),J()})),Cc=e((()=>{o(),J()})),wc=e((()=>{o(),J()})),Tc=e((()=>{o(),J()})),Ec=e((()=>{o(),J()})),Dc=e((()=>{o(),J()})),Oc=e((()=>{o(),J()})),kc=e((()=>{o(),J()})),Ac=e((()=>{o(),J()})),jc=e((()=>{o(),J()})),Mc=e((()=>{o(),J()})),Nc=e((()=>{o(),J()})),Pc=e((()=>{o(),J()})),Fc=e((()=>{o(),J()})),Ic=e((()=>{o(),J()})),Lc=e((()=>{o(),J()})),Rc=e((()=>{o(),J()})),zc=e((()=>{o(),J()})),Bc=e((()=>{o(),J()})),Vc=e((()=>{o(),J()})),Hc=e((()=>{o(),J()})),Uc=e((()=>{o(),J()})),Wc=e((()=>{o(),J()})),Gc=e((()=>{o(),J()})),Kc=e((()=>{o(),J()})),qc=e((()=>{o(),J()})),Jc=e((()=>{o(),J()})),Yc=e((()=>{o(),J()})),Xc=e((()=>{o(),J()})),Zc=e((()=>{o(),J()})),Qc=e((()=>{o(),J()})),$c=e((()=>{o(),J()})),el=e((()=>{o(),J()})),tl=e((()=>{o(),J()})),nl=e((()=>{o(),J()})),rl=e((()=>{o(),J()})),il=e((()=>{o(),J()})),al=e((()=>{o(),J()})),ol=e((()=>{o(),J()})),sl=e((()=>{o(),J()})),cl=e((()=>{o(),J()})),ll=e((()=>{o(),J()})),ul=e((()=>{o(),J()})),dl=e((()=>{o(),J()})),fl=e((()=>{o(),J()})),pl=e((()=>{o(),J()})),ml=e((()=>{o(),J()})),hl=e((()=>{o(),J()})),gl=e((()=>{o(),J()})),_l=e((()=>{o(),J()})),vl=e((()=>{o(),J()})),yl=e((()=>{o(),J()})),bl=e((()=>{o(),J()})),xl=e((()=>{o(),J()})),Sl=e((()=>{o(),J()})),Cl=e((()=>{o(),J()})),wl=e((()=>{o(),J()})),Tl=e((()=>{o(),J()})),El=e((()=>{o(),J()})),Dl=e((()=>{o(),J()})),Ol=e((()=>{o(),J()})),kl=e((()=>{o(),J()})),Al=e((()=>{o(),J()})),jl=e((()=>{o(),J()})),Ml=e((()=>{o(),J()})),Nl=e((()=>{o(),J()})),Pl=e((()=>{o(),J()})),Fl=e((()=>{o(),J()})),Il=e((()=>{o(),J()})),Ll=e((()=>{o(),J()})),Rl=e((()=>{o(),J()})),zl=e((()=>{o(),J()})),Bl=e((()=>{o(),J()})),Vl=e((()=>{o(),J()})),Hl=e((()=>{o(),J()})),Ul=e((()=>{o(),J()})),Wl=e((()=>{o(),J()})),Gl=e((()=>{o(),J()})),Kl=e((()=>{o(),J()})),ql=e((()=>{o(),J()})),Jl=e((()=>{o(),J()})),Yl=e((()=>{o(),J()})),Xl=e((()=>{o(),J()})),Zl=e((()=>{o(),J()})),Ql=e((()=>{o(),J()})),$l=e((()=>{o(),J()})),eu=e((()=>{o(),J()})),tu=e((()=>{o(),J()})),nu=e((()=>{o(),J()})),ru=e((()=>{o(),J()})),iu=e((()=>{o(),J()})),au=e((()=>{o(),J()})),ou=e((()=>{o(),J()})),su=e((()=>{o(),J()})),cu=e((()=>{o(),J()})),lu=e((()=>{o(),J()})),uu=e((()=>{o(),J()})),du=e((()=>{o(),J()})),fu=e((()=>{o(),J()})),pu=e((()=>{o(),J()})),mu=e((()=>{o(),J()})),hu=e((()=>{o(),J()})),gu=e((()=>{o(),J()})),_u=e((()=>{o(),J()})),vu=e((()=>{o(),J()})),yu=e((()=>{o(),J()})),bu=e((()=>{o(),J()})),xu=e((()=>{o(),J()})),Su=e((()=>{o(),J()})),Cu=e((()=>{o(),J()})),wu=e((()=>{o(),J()})),Tu=e((()=>{o(),J()})),Eu=e((()=>{o(),J()})),Du=e((()=>{o(),J()})),Ou=e((()=>{o(),J()})),ku=e((()=>{o(),J()})),Au=e((()=>{o(),J()})),ju=e((()=>{o(),J()})),Mu=e((()=>{o(),J()})),Nu=e((()=>{o(),J()})),Pu=e((()=>{o(),J()})),Fu=e((()=>{o(),J()})),Iu=e((()=>{o(),J()})),Lu=e((()=>{o(),J()})),Ru=e((()=>{o(),J()})),zu=e((()=>{o(),J()})),Bu=e((()=>{o(),J()})),Vu=e((()=>{o(),J()})),Hu=e((()=>{o(),J()})),Uu=e((()=>{o(),J()})),Wu=e((()=>{o(),J()})),Gu=e((()=>{o(),J()})),Ku=e((()=>{o(),J()})),qu=e((()=>{o(),J()})),Ju=e((()=>{o(),J()})),Yu=e((()=>{o(),J()})),Xu=e((()=>{o(),J()})),Zu=e((()=>{o(),J()})),Qu=e((()=>{o(),J()})),$u=e((()=>{o(),J()})),ed=e((()=>{o(),J()})),td=e((()=>{o(),J()})),nd=e((()=>{o(),J()})),rd=e((()=>{o(),J()})),id=e((()=>{o(),J()})),ad=e((()=>{o(),J()})),od=e((()=>{o(),J()})),sd=e((()=>{o(),J()})),cd=e((()=>{o(),J()})),ld=e((()=>{o(),J()})),ud=e((()=>{o(),J()})),dd=e((()=>{o(),J()})),fd=e((()=>{o(),J()})),pd=e((()=>{o(),J()})),md=e((()=>{o(),J()})),hd=e((()=>{o(),J()})),gd=e((()=>{o(),J()})),_d=e((()=>{o(),J()})),vd=e((()=>{o(),J()})),yd=e((()=>{o(),J()})),bd=e((()=>{o(),J()})),xd=e((()=>{o(),J()})),Sd=e((()=>{o(),J()})),Cd=e((()=>{o(),J()})),wd=e((()=>{o(),J()})),Td=e((()=>{o(),J()})),Ed=e((()=>{o(),J()})),Dd=e((()=>{o(),J()})),Od=e((()=>{o(),J()})),kd=e((()=>{o(),J()})),Ad=e((()=>{o(),J()})),jd=e((()=>{o(),J()})),Md=e((()=>{o(),J()})),Nd=e((()=>{o(),J()})),Pd=e((()=>{o(),J()})),Fd=e((()=>{o(),J()})),Id=e((()=>{o(),J()})),Ld=e((()=>{o(),J()})),Rd=e((()=>{o(),J()})),zd=e((()=>{o(),J()})),Bd=e((()=>{o(),J()})),Vd=e((()=>{o(),J()})),Hd=e((()=>{o(),J()})),Ud=e((()=>{o(),J()})),Wd=e((()=>{o(),J()})),Gd=e((()=>{o(),J()})),Kd=e((()=>{o(),J()})),qd=e((()=>{o(),J()})),Jd=e((()=>{o(),J()})),Yd=e((()=>{o(),J()})),Xd=e((()=>{o(),J()})),Zd=e((()=>{o(),J()})),Qd=e((()=>{o(),J()})),$d=e((()=>{o(),J()})),ef=e((()=>{o(),J()})),tf=e((()=>{o(),J()})),nf=e((()=>{o(),J()})),rf=e((()=>{o(),J()})),af=e((()=>{o(),J()})),of=e((()=>{o(),J()})),sf=e((()=>{o(),J()})),cf=e((()=>{o(),J()})),lf=e((()=>{o(),J()})),uf=e((()=>{o(),J()})),df=e((()=>{o(),J()})),ff=e((()=>{o(),J()})),pf=e((()=>{o(),J()})),mf=e((()=>{o(),J()})),hf=e((()=>{o(),J()})),gf=e((()=>{o(),J()})),_f=e((()=>{o(),J()})),vf=e((()=>{o(),J()})),yf=e((()=>{o(),J()})),bf=e((()=>{o(),J()})),xf=e((()=>{o(),J()})),Sf=e((()=>{o(),J()})),Cf=e((()=>{o(),J()})),wf=e((()=>{o(),J()})),Tf=e((()=>{o(),J()})),Ef=e((()=>{o(),J()})),Df=e((()=>{o(),J()})),Of=e((()=>{o(),J()})),kf=e((()=>{o(),J()})),Af=e((()=>{o(),J()})),jf=e((()=>{o(),J()})),Mf=e((()=>{o(),J()})),Nf=e((()=>{o(),J()})),Pf=e((()=>{o(),J()})),Ff=e((()=>{o(),J()})),If=e((()=>{o(),J()})),Lf=e((()=>{o(),J()})),Rf=e((()=>{o(),J()})),zf=e((()=>{o(),J()})),Bf=e((()=>{o(),J()})),Vf=e((()=>{o(),J()})),Hf=e((()=>{o(),J()})),Uf=e((()=>{o(),J()})),Wf=e((()=>{o(),J()})),Gf=e((()=>{o(),J()})),Kf=e((()=>{o(),J()})),qf=e((()=>{o(),J()})),Jf=e((()=>{o(),J()})),Yf=e((()=>{o(),J()})),Xf=e((()=>{o(),J()})),Zf=e((()=>{o(),J()})),Qf=e((()=>{o(),J()})),$f=e((()=>{o(),J()})),ep=e((()=>{o(),J()})),tp=e((()=>{o(),J()})),np=e((()=>{o(),J()})),rp=e((()=>{o(),J()})),ip=e((()=>{o(),J()})),ap=e((()=>{o(),J()})),op=e((()=>{o(),J()})),sp=e((()=>{o(),J()})),cp=e((()=>{o(),J()})),lp=e((()=>{o(),J()})),up=e((()=>{o(),J()})),dp=e((()=>{o(),J()})),fp=e((()=>{o(),J()})),pp=e((()=>{o(),J()})),mp=e((()=>{o(),J()})),hp=e((()=>{o(),J()})),gp=e((()=>{o(),J()})),_p=e((()=>{o(),J()})),vp=e((()=>{o(),J()})),yp=e((()=>{o(),J()})),bp=e((()=>{o(),J()})),xp=e((()=>{o(),J()})),Sp=e((()=>{o(),J()})),Cp=e((()=>{o(),J()})),wp=e((()=>{o(),J()})),Tp=e((()=>{o(),J()})),Ep=e((()=>{o(),J()})),Dp=e((()=>{o(),J()})),Op=e((()=>{o(),J()})),kp=e((()=>{o(),J()})),Ap=e((()=>{o(),J()})),jp=e((()=>{o(),J()})),Mp=e((()=>{o(),J()})),Np=e((()=>{o(),J()})),Pp=e((()=>{o(),J()})),Fp=e((()=>{o(),J()})),Ip=e((()=>{o(),J()})),Lp=e((()=>{o(),J()})),Rp=e((()=>{o(),J()})),zp=e((()=>{o(),J()})),Bp=e((()=>{o(),J()})),Vp=e((()=>{o(),J()})),Hp=e((()=>{o(),J()})),Up=e((()=>{o(),J()})),Wp=e((()=>{o(),J()})),Gp=e((()=>{o(),J()})),Kp=e((()=>{o(),J()})),qp=e((()=>{o(),J()})),Jp=e((()=>{o(),J()})),Yp=e((()=>{o(),J()})),Xp=e((()=>{o(),J()})),Zp=e((()=>{o(),J()})),Qp=e((()=>{o(),J()})),$p=e((()=>{o(),J()})),em=e((()=>{o(),J()})),tm=e((()=>{o(),J()})),nm=e((()=>{o(),J()})),rm=e((()=>{o(),J()})),im=e((()=>{o(),J()})),am=e((()=>{o(),J()})),om=e((()=>{o(),J()})),sm=e((()=>{o(),J()})),cm=e((()=>{o(),J()})),lm=e((()=>{o(),J()})),um=e((()=>{o(),J()})),dm=e((()=>{o(),J()})),fm=e((()=>{o(),J()})),pm=e((()=>{o(),J()})),mm=e((()=>{o(),J()})),hm=e((()=>{o(),J()})),gm=e((()=>{o(),J()})),_m=e((()=>{o(),J()})),vm=e((()=>{o(),J()})),ym=e((()=>{o(),J()})),bm=e((()=>{o(),J()})),xm=e((()=>{o(),J()})),Sm=e((()=>{o(),J()})),Cm=e((()=>{o(),J()})),wm=e((()=>{o(),J()})),Tm=e((()=>{o(),J()})),Em=e((()=>{o(),J()})),Dm=e((()=>{o(),J()})),Om=e((()=>{o(),J()})),km=e((()=>{o(),J()})),Am=e((()=>{o(),J()})),jm=e((()=>{o(),J()})),Mm=e((()=>{o(),J()})),Nm=e((()=>{o(),J()})),Pm=e((()=>{o(),J()})),Fm=e((()=>{o(),J()})),Im=e((()=>{o(),J()})),Lm=e((()=>{o(),J()})),Rm=e((()=>{o(),J()})),zm=e((()=>{o(),J()})),Bm=e((()=>{o(),J()})),Vm=e((()=>{o(),J()})),Hm=e((()=>{o(),J()})),Um=e((()=>{o(),J()})),Wm=e((()=>{o(),J()})),Gm=e((()=>{o(),J()})),Km=e((()=>{o(),J()})),qm=e((()=>{o(),J()})),Jm=e((()=>{o(),J()})),Ym=e((()=>{o(),J()})),Xm=e((()=>{o(),J()})),Zm=e((()=>{o(),J()})),Qm=e((()=>{o(),J()})),$m=e((()=>{o(),J()})),eh=e((()=>{o(),J()})),th=e((()=>{o(),J()})),nh=e((()=>{o(),J()})),rh=e((()=>{o(),J()})),ih=e((()=>{o(),J()})),ah=e((()=>{o(),J()})),oh=e((()=>{o(),J()})),sh=e((()=>{o(),J()})),ch=e((()=>{o(),J()})),lh=e((()=>{o(),J()})),uh=e((()=>{o(),J()})),dh=e((()=>{o(),J()})),fh=e((()=>{o(),J()})),ph=e((()=>{o(),J()})),mh=e((()=>{o(),J()})),hh=e((()=>{o(),J()})),gh=e((()=>{o(),J()})),_h=e((()=>{o(),J()})),vh=e((()=>{o(),J()})),yh=e((()=>{o(),J()})),bh=e((()=>{o(),J()})),xh=e((()=>{o(),J()})),Sh=e((()=>{o(),J()})),Ch=e((()=>{o(),J()})),wh=e((()=>{o(),J()})),Th=e((()=>{o(),J()})),Eh=e((()=>{o(),J()})),Dh=e((()=>{o(),J()})),Oh=e((()=>{o(),J()})),kh=e((()=>{o(),J()})),Ah=e((()=>{o(),J()})),jh=e((()=>{o(),J()})),Mh=e((()=>{o(),J()})),Nh=e((()=>{o(),J()})),Ph=e((()=>{o(),J()})),Fh=e((()=>{o(),J()})),Ih=e((()=>{o(),J()})),Lh=e((()=>{o(),J()})),Rh=e((()=>{o(),J()})),zh=e((()=>{o(),J()})),Bh=e((()=>{o(),J()})),Vh=e((()=>{o(),J()})),Hh=e((()=>{o(),J()})),Uh=e((()=>{o(),J()})),Wh=e((()=>{o(),J()})),Gh=e((()=>{o(),J()})),Kh=e((()=>{o(),J()})),qh=e((()=>{o(),J()})),Jh=e((()=>{o(),J()})),Yh=e((()=>{o(),J()})),Xh=e((()=>{o(),J()})),Zh=e((()=>{o(),J()})),Qh=e((()=>{o(),J()})),$h=e((()=>{o(),J()})),eg=e((()=>{o(),J()})),tg=e((()=>{o(),J()})),ng=e((()=>{o(),J()})),rg=e((()=>{o(),J()})),ig=e((()=>{o(),J()})),ag=e((()=>{o(),J()})),og=e((()=>{o(),J()})),sg=e((()=>{o(),J()})),cg=e((()=>{o(),J()})),lg=e((()=>{o(),J()})),ug=e((()=>{o(),J()})),dg=e((()=>{o(),J()})),fg=e((()=>{o(),J()})),pg=e((()=>{o(),J()})),mg=e((()=>{o(),J()})),hg=e((()=>{o(),J()})),gg=e((()=>{o(),J()})),_g=e((()=>{o(),J()})),vg=e((()=>{o(),J()})),yg=e((()=>{o(),J()})),bg=e((()=>{o(),J()})),xg=e((()=>{o(),J()})),Sg=e((()=>{o(),J()})),Cg=e((()=>{o(),J()})),wg=e((()=>{o(),J()})),Tg=e((()=>{o(),J()})),Eg=e((()=>{o(),J()})),Dg=e((()=>{o(),J()})),Og=e((()=>{o(),J()})),kg=e((()=>{o(),J()})),Ag=e((()=>{o(),J()})),jg=e((()=>{o(),J()})),Mg=e((()=>{o(),J()})),Ng=e((()=>{o(),J()})),Pg=e((()=>{o(),J()})),Fg=e((()=>{o(),J()})),Ig=e((()=>{o(),J()})),Lg=e((()=>{o(),J()})),Rg=e((()=>{o(),J()})),zg=e((()=>{o(),J()})),Bg=e((()=>{o(),J()})),Vg=e((()=>{o(),J()})),Hg=e((()=>{o(),J()})),Ug=e((()=>{o(),J()})),Wg=e((()=>{o(),J()})),Gg=e((()=>{o(),J()})),Kg=e((()=>{o(),J()})),qg=e((()=>{o(),J()})),Jg=e((()=>{o(),J()})),Yg=e((()=>{o(),J()})),Xg=e((()=>{o(),J()})),Zg=e((()=>{o(),J()})),Qg=e((()=>{o(),J()})),$g=e((()=>{o(),J()})),e_=e((()=>{o(),J()})),t_=e((()=>{o(),J()})),n_=e((()=>{o(),J()})),r_=e((()=>{o(),J()})),i_=e((()=>{o(),J()})),a_=e((()=>{o(),J()})),o_=e((()=>{o(),J()})),s_=e((()=>{o(),J()})),c_=e((()=>{o(),J()})),l_=e((()=>{o(),J()})),u_=e((()=>{o(),J()})),d_=e((()=>{o(),J()})),f_=e((()=>{o(),J()})),p_=e((()=>{o(),J()})),m_=e((()=>{o(),J()})),h_=e((()=>{o(),J()})),g_=e((()=>{o(),J()})),__=e((()=>{o(),J()})),v_=e((()=>{o(),J()})),y_=e((()=>{o(),J()})),b_=e((()=>{o(),J()})),x_=e((()=>{o(),J()})),S_=e((()=>{o(),J()})),C_=e((()=>{o(),J()})),w_=e((()=>{o(),J()})),T_=e((()=>{o(),J()})),E_=e((()=>{o(),J()})),D_=e((()=>{o(),J()})),O_=e((()=>{o(),J()})),k_=e((()=>{o(),J()})),A_=e((()=>{o(),J()})),j_=e((()=>{o(),J()})),M_=e((()=>{o(),J()})),N_=e((()=>{o(),J()})),P_=e((()=>{o(),J()})),F_=e((()=>{o(),J()})),I_=e((()=>{o(),J()})),L_=e((()=>{o(),J()})),R_=e((()=>{o(),J()})),z_=e((()=>{o(),J()})),B_=e((()=>{o(),J()})),V_=e((()=>{o(),J()})),H_=e((()=>{o(),J()})),U_=e((()=>{o(),J()})),W_=e((()=>{o(),J()})),G_=e((()=>{o(),J()})),K_=e((()=>{o(),J()})),q_=e((()=>{o(),J()})),J_=e((()=>{o(),J()})),Y_=e((()=>{o(),J()})),X_=e((()=>{o(),J()})),Z_=e((()=>{o(),J()})),Q_=e((()=>{o(),J()})),$_=e((()=>{o(),J()})),ev=e((()=>{o(),J()})),tv=e((()=>{o(),J()})),nv=e((()=>{o(),J()})),rv=e((()=>{o(),J()})),iv=e((()=>{o(),J()})),av=e((()=>{o(),J()})),ov=e((()=>{o(),J()})),sv=e((()=>{o(),J()})),cv=e((()=>{o(),J()})),lv=e((()=>{o(),J()})),uv=e((()=>{o(),J()})),dv=e((()=>{o(),J()})),fv=e((()=>{o(),J()})),pv=e((()=>{o(),J()})),mv=e((()=>{o(),J()})),hv=e((()=>{o(),J()})),gv=e((()=>{o(),J()})),_v=e((()=>{o(),J()})),vv=e((()=>{o(),J()})),yv=e((()=>{o(),J()})),bv=e((()=>{o(),J()})),xv=e((()=>{o(),J()})),Sv=e((()=>{o(),J()})),Cv=e((()=>{o(),J()})),wv=e((()=>{o(),J()})),Tv=e((()=>{o(),J()})),Ev=e((()=>{o(),J()})),Dv=e((()=>{o(),J()})),Ov=e((()=>{o(),J()})),kv=e((()=>{o(),J()})),Av=e((()=>{o(),J()})),jv=e((()=>{o(),J()})),Mv=e((()=>{o(),J()})),Nv=e((()=>{o(),J()})),Pv=e((()=>{o(),J()})),Fv=e((()=>{o(),J()})),Iv=e((()=>{o(),J()})),Lv=e((()=>{o(),J()})),Rv=e((()=>{o(),J()})),zv=e((()=>{o(),J()})),Bv=e((()=>{o(),J()})),Vv=e((()=>{o(),J()})),Hv=e((()=>{o(),J()})),Uv=e((()=>{o(),J()})),Wv=e((()=>{o(),J()})),Gv=e((()=>{o(),J()})),Kv=e((()=>{o(),J()})),qv=e((()=>{o(),J()})),Jv=e((()=>{o(),J()})),Yv=e((()=>{o(),J()})),Xv=e((()=>{o(),J()})),Zv=e((()=>{o(),J()})),Qv=e((()=>{o(),J()})),$v=e((()=>{o(),J()})),ey=e((()=>{o(),J()})),ty=e((()=>{o(),J()})),ny=e((()=>{o(),J()})),ry=e((()=>{o(),J()})),iy=e((()=>{o(),J()})),ay=e((()=>{o(),J()})),oy=e((()=>{o(),J()})),sy=e((()=>{o(),J()})),cy=e((()=>{o(),J()})),ly=e((()=>{o(),J()})),uy=e((()=>{o(),J()})),dy=e((()=>{o(),J()})),fy=e((()=>{o(),J()})),py=e((()=>{o(),J()})),my=e((()=>{o(),J()})),hy=e((()=>{o(),J()})),gy=e((()=>{o(),J()})),_y=e((()=>{o(),J()})),vy=e((()=>{o(),J()})),yy=e((()=>{o(),J()})),by=e((()=>{o(),J()})),xy=e((()=>{o(),J()})),Sy=e((()=>{o(),J()})),Cy=e((()=>{o(),J()})),wy=e((()=>{o(),J()})),Ty=e((()=>{o(),J()})),Ey=e((()=>{o(),J()})),Dy=e((()=>{o(),J()})),Oy=e((()=>{o(),J()})),ky=e((()=>{o(),J()})),Ay=e((()=>{o(),J()})),jy=e((()=>{o(),J()})),My=e((()=>{o(),J()})),Ny=e((()=>{o(),J()})),Py=e((()=>{o(),J()})),Fy=e((()=>{o(),J()})),Iy=e((()=>{o(),J()})),Ly=e((()=>{o(),J()})),Ry=e((()=>{o(),J()})),zy=e((()=>{o(),J()})),By=e((()=>{o(),J()})),Vy=e((()=>{o(),J()})),Hy=e((()=>{o(),J()})),Uy=e((()=>{o(),J()})),Wy=e((()=>{o(),J()})),Gy=e((()=>{o(),J()})),Ky=e((()=>{o(),J()})),qy=e((()=>{o(),J()})),Jy=e((()=>{o(),J()})),Yy=e((()=>{o(),J()})),Xy=e((()=>{o(),J()})),Zy=e((()=>{o(),J()})),Qy=e((()=>{o(),J()})),$y=e((()=>{o(),J()})),eb=e((()=>{o(),J()})),tb=e((()=>{o(),J()})),nb=e((()=>{o(),J()})),rb=e((()=>{o(),J()})),ib=e((()=>{o(),J()})),ab=e((()=>{o(),J()})),ob=e((()=>{o(),J()})),sb=e((()=>{o(),J()})),cb=e((()=>{o(),J()})),lb=e((()=>{o(),J()})),ub=e((()=>{o(),J()})),db=e((()=>{o(),J()})),fb=e((()=>{o(),J()})),pb=e((()=>{o(),J()})),mb=e((()=>{o(),J()})),hb=e((()=>{o(),J()})),gb=e((()=>{o(),J()})),_b=e((()=>{o(),J()})),vb=e((()=>{o(),J()})),yb=e((()=>{o(),J()})),bb=e((()=>{o(),J()})),xb=e((()=>{o(),J()})),Sb=e((()=>{o(),J()})),Cb=e((()=>{o(),J()})),wb=e((()=>{o(),J()})),Tb=e((()=>{o(),J()})),Eb=e((()=>{o(),J()})),Db=e((()=>{o(),J()})),Ob=e((()=>{o(),J()})),kb=e((()=>{o(),J()})),Ab=e((()=>{o(),J()})),jb=e((()=>{o(),J()})),Mb=e((()=>{o(),J()})),Nb=e((()=>{o(),J()})),Pb=e((()=>{o(),J()})),Fb=e((()=>{o(),J()})),Ib=e((()=>{o(),J()})),Lb=e((()=>{o(),J()})),Rb=e((()=>{o(),J()})),zb=e((()=>{o(),J()})),Bb=e((()=>{o(),J()})),Vb=e((()=>{o(),J()})),Hb=e((()=>{o(),J()})),Ub=e((()=>{o(),J()})),Wb=e((()=>{o(),J()})),Gb=e((()=>{o(),J()})),Kb=e((()=>{o(),J()})),qb=e((()=>{o(),J()})),Jb=e((()=>{o(),J()})),Yb=e((()=>{o(),J()})),Xb=e((()=>{o(),J()})),Zb=e((()=>{o(),J()})),Qb=e((()=>{o(),J()})),$b=e((()=>{o(),J()})),ex=e((()=>{o(),J()})),tx=e((()=>{o(),J()})),nx=e((()=>{o(),J()})),rx=e((()=>{o(),J()})),ix=e((()=>{o(),J()})),ax=e((()=>{o(),J()})),ox=e((()=>{o(),J()})),sx=e((()=>{o(),J()})),cx=e((()=>{o(),J()})),lx=e((()=>{o(),J()})),ux=e((()=>{o(),J()})),dx=e((()=>{o(),J()})),fx=e((()=>{o(),J()})),px=e((()=>{o(),J()})),mx=e((()=>{o(),J()})),hx=e((()=>{o(),J()})),gx=e((()=>{o(),J()})),_x=e((()=>{o(),J()})),vx=e((()=>{o(),J()})),yx=e((()=>{o(),J()})),bx=e((()=>{o(),J()})),xx=e((()=>{o(),J()})),Sx=e((()=>{o(),J()})),Cx=e((()=>{o(),J()})),wx=e((()=>{o(),J()})),Tx=e((()=>{o(),J()})),Ex=e((()=>{o(),J()})),Dx=e((()=>{o(),J()})),Ox=e((()=>{o(),J()})),kx=e((()=>{o(),J()})),Ax=e((()=>{o(),J()})),jx=e((()=>{o(),J()})),Mx=e((()=>{o(),J()})),Nx=e((()=>{o(),J()})),Px=e((()=>{o(),J()})),Fx=e((()=>{o(),J()})),Ix=e((()=>{o(),J()})),Lx=e((()=>{o(),J()})),Rx=e((()=>{o(),J()})),zx=e((()=>{o(),J()})),Bx=e((()=>{o(),J()})),Vx=e((()=>{o(),J()})),Hx=e((()=>{o(),J()})),Ux=e((()=>{o(),J()})),Wx=e((()=>{o(),J()})),Gx=e((()=>{o(),J()})),Kx=e((()=>{o(),J()})),qx=e((()=>{o(),J()})),Jx=e((()=>{o(),J()})),Yx=e((()=>{o(),J()})),Xx=e((()=>{o(),J()})),Zx=e((()=>{o(),J()})),Qx=e((()=>{o(),J()})),$x=e((()=>{o(),J()})),eS=e((()=>{o(),J()})),tS=e((()=>{o(),J()})),nS=e((()=>{o(),J()})),rS=e((()=>{o(),J()})),iS=e((()=>{o(),J()})),aS=e((()=>{o(),J()})),oS=e((()=>{o(),J()})),sS=e((()=>{o(),J()})),cS=e((()=>{o(),J()})),lS=e((()=>{o(),J()})),uS=e((()=>{o(),J()})),dS=e((()=>{o(),J()})),fS=e((()=>{o(),J()})),pS=e((()=>{o(),J()})),mS=e((()=>{o(),J()})),hS=e((()=>{o(),J()})),gS=e((()=>{o(),J()})),_S=e((()=>{o(),J()})),vS=e((()=>{o(),J()})),yS=e((()=>{o(),J()})),bS=e((()=>{o(),J()})),xS=e((()=>{o(),J()})),SS=e((()=>{o(),J()})),CS=e((()=>{o(),J()})),wS=e((()=>{o(),J()})),TS=e((()=>{o(),J()})),ES=e((()=>{o(),J()})),DS=e((()=>{o(),J()})),OS=e((()=>{o(),J()})),kS=e((()=>{o(),J()})),AS=e((()=>{o(),J()})),jS=e((()=>{o(),J()})),MS,NS=e((()=>{o(),J(),X(),MS=({slot:e,title:t,className:r,width:a=`24`,height:o=`24`,styles:s}={})=>n`
  <svg
    slot=${q(e)}
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
    style=${q(s)}
  >
    ${Y(t,()=>i`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})),PS=e((()=>{o(),J()})),FS=e((()=>{o(),J()})),IS=e((()=>{o(),J()})),LS=e((()=>{o(),J()})),RS=e((()=>{o(),J()})),zS=e((()=>{o(),J()})),BS=e((()=>{o(),J()})),VS=e((()=>{o(),J()})),HS=e((()=>{o(),J()})),US=e((()=>{et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS()})),WS=e((()=>{G()})),Z,GS=e((()=>{Z=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),KS=e((()=>{})),qS=e((()=>{WS(),GS(),KS()})),JS,YS=e((()=>{qS(),JS=Z`
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
`})),XS,ZS=e((()=>{G(),XS=()=>n`<style>
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
</style>`,customElements.define(`cz-spinner`,W(XS))})),QS,$S=e((()=>{qS(),QS=Z`
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
`})),eC,tC,nC=e((()=>{eC=(e,t)=>{let n=e.indexOf(t);n!==-1&&e.splice(n,1)},tC=(e,t=80)=>{let n=getComputedStyle(e),r=e=>e.split(`,`).map(e=>parseFloat(e)*1e3||0),i=r(n.transitionDuration),a=r(n.transitionDelay);return i.reduce((e,t,n)=>Math.max(e,t+(a[n]??0)),0)+t}})),Q,rC,iC,aC,oC,sC,cC,lC=e((()=>{G(),nC(),Q=[],rC=e=>eC(Q,e),iC=e=>e.shadowRoot?.querySelector(`[popover]`)??void 0,aC=(e,t)=>{t.matches(`:popover-open`)||t.showPopover(),Q.push(t),!e.noAutofocus&&t.focus({preventScroll:!0})},oC=e=>{e?.isConnected&&e.focus({preventScroll:!0})},sC=(e,t,n,r)=>{let i=document.activeElement,a=!1,o=!1,s=!1,c=0,l=()=>{o||a||(o=!0,e.dispatchEvent(new Event(`opened`,{bubbles:!0})))},u=()=>{s||(s=!0,rC(t),r.current&&oC(i),e.dispatchEvent(new Event(`close`,{bubbles:!0})),e.onClose?.())},d=e=>{e.target!==t||e.propertyName!==`translate`||(a?u():l())},f=e=>{e.newState===`closed`&&(a=!0,c=window.setTimeout(u,tC(t)))},p=r=>{r.key===`Escape`&&!e.noEscape&&Q[Q.length-1]===t&&(r.preventDefault(),n())};t.addEventListener(`transitionend`,d),t.addEventListener(`toggle`,f),document.addEventListener(`keydown`,p),aC(e,t);let m=window.setTimeout(l,tC(t));return()=>{window.clearTimeout(m),window.clearTimeout(c),rC(t),t.removeEventListener(`transitionend`,d),t.removeEventListener(`toggle`,f),document.removeEventListener(`keydown`,p)}},cC=e=>{let t=F(!1),n=N(()=>{let n=iC(e);n?.matches(`:popover-open`)&&(t.current=e.contains(document.activeElement),n.hidePopover())},[]);return e.close=n,k(()=>{let r=iC(e);if(r)return sC(e,r,n,t)},[]),{close:n}}})),uC,dC=e((()=>{G(),uC=e=>{let t=!!e.fullScreen,n=N(()=>{e.toggleAttribute(`full-screen`)},[]);e.toggleFullScreen=n,Ee(()=>{e.toggleAttribute(`full-screen`,t)},[t]);let r=F(!1);return k(()=>{if(!r.current){r.current=!0;return}e.dispatchEvent(new CustomEvent(`full-screen-changed`,{detail:{fullScreen:t},bubbles:!0}))},[t]),{fullScreen:t,toggle:n}}})),fC,pC,mC,hC,gC,_C,vC=e((()=>{Ke(),ZS(),G(),o(),J(),X(),$S(),lC(),dC(),fC=e=>{let{close:t}=cC(e),{fullScreen:n,toggle:r}=uC(e);return{close:t,fullScreen:n,toggleFullScreen:r}},pC=Symbol(`cosmoz-slideout-regions`),mC=e=>Object.assign({[pC]:!0},e),hC=e=>typeof e==`object`&&!!e&&pC in e,gC=(e,t)=>{let i=e.loading,a=hC(t)?t:{content:t};return n`
		<div
			part="surface"
			popover="manual"
			role="dialog"
			aria-modal="false"
			tabindex="-1"
			aria-label=${q(e.getAttribute(`aria-label`)??void 0)}
			aria-labelledby=${q(e.getAttribute(`aria-labelledby`)??void 0)}
		>
			${a.controls===void 0?n`<slot name="controls" part="controls"></slot>`:a.controls}
			${a.header===void 0?n`<slot name="header"></slot>`:a.header}
			<div class="content" part="content">
				${a.content??r}
				${Y(i,()=>n`
						<div class="loading" part="loading">
							<cz-spinner></cz-spinner>
						</div>
					`)}
			</div>
			${a.footer===void 0?n`<slot name="footer"></slot>`:a.footer}
		</div>
	`},_C=(e,{observedAttributes:t,styles:r,styleSheets:i,...a}={})=>W(t=>(fC(t),n`
				${Y(r,()=>n`<style>
							${r}
						</style>`)}
				${gC(t,e(t))}
			`),{observedAttributes:[`aria-label`,`aria-labelledby`,`full-screen`,`loading`,`no-autofocus`,`no-escape`,...t??[]],styleSheets:[K,QS,...i??[]],...a})})),yC,$,bC,xC=e((()=>{G(),yC=e=>e.target.assignedElements().length>0,$=(e,t)=>e.querySelector(`:scope > [slot="${t}"]`)!==null,bC=e=>{let[t,n]=P($(e,`header`)),[r,i]=P($(e,`footer`));return{hasHeaderContent:t,hasFooterContent:r,onHeaderSlot:N(e=>n(yC(e)),[]),onFooterSlot:N(e=>i(yC(e)),[])}}})),SC,CC,wC,TC=e((()=>{$e(),US(),G(),o(),vC(),xC(),SC=e=>n`
	<cosmoz-button
		class="close"
		part="close"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${()=>e.close?.()}
	>
		${MS({slot:`prefix`})}
	</cosmoz-button>
`,CC=(e,t)=>n`
	${e?n`<h2 class="heading">${e}</h2>`:r}
	${t?n`<p class="subtitle">${t}</p>`:r}
`,wC=e=>{let{hasHeaderContent:t,hasFooterContent:i,onHeaderSlot:a,onFooterSlot:o}=bC(e),{heading:s,subtitle:c}=e,l=!!e.closeable,u=!!(s||c||l||t),d=e.variant===`panel`?s:void 0,f=e.getAttribute(`aria-label`),p=F(null);return k(()=>{if(!d){f&&f===p.current&&e.removeAttribute(`aria-label`),p.current=null;return}(!f||f===p.current)&&f!==d&&(e.setAttribute(`aria-label`,d),p.current=d)},[f,d]),mC({header:n`
			<header part="header" class="header" ?hidden=${!u}>
				<slot name="header" @slotchange=${a}>
					${CC(s,c)}
				</slot>
				${l?SC(e):r}
			</header>
		`,content:n`<div part="body" class="body"><slot></slot></div>`,footer:n`
			<footer part="footer" class="footer" ?hidden=${!i}>
				<slot name="footer" @slotchange=${o}></slot>
			</footer>
		`})}})),EC=e((()=>{G(),YS(),vC(),TC(),customElements.define(`cosmoz-slideout`,_C(e=>{let t=wC(e);return e.variant===`panel`?t:n`<slot></slot>`},{observedAttributes:[`variant`,`heading`,`subtitle`,`closeable`],styleSheets:[JS]}))}));export{D as A,F as C,j as D,M as E,O as M,T as N,A as O,C as P,Ne as S,N as T,Ve as _,US as a,z as b,X as c,J as d,q as f,Be as g,Ge as h,Z as i,E as j,k,Y as l,W as m,qS as n,NS as o,G as p,GS as r,MS as s,EC as t,$e as u,Ie as v,we as w,L as x,R as y};