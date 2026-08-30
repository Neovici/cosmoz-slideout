import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,ot as i,pt as a,ut as o}from"./iframe-DWBJWh4P.js";function s(e){u=e}function c(){u=null,d=0}function l(){return d++}var u,d,f=e((()=>{d=0})),p,m,h,g,_,v,y,b=e((()=>{p=Symbol(`haunted.phase`),m=Symbol(`haunted.hook`),h=Symbol(`haunted.update`),g=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),y=`haunted.context`})),ee,te=e((()=>{f(),b(),ee=class{update;host;virtual;[m];[_];[v];constructor(e,t){this.update=e,this.host=t,this[m]=new Map,this[_]=[],this[v]=[]}run(e){s(this);let t=e();return c(),t}_runEffects(e){let t=this[e];s(this);for(let e of t)e.call(this);c()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[m].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,x,ce,S=e((()=>{te(),b(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),x=ie(),ce=class e{renderer;host;state;[p];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[p]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(h);x(()=>{this.handlePhase(g,e),x(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[p]=e,e){case g:this.commit(t),this.runEffects(v);return;case h:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),C,le,ue,w,T=e((()=>{C=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?C(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=ue}));function de(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,fe(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var fe,pe=e((()=>{S(),T(),fe=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function me(e,...t){let n=l(),r=u[m],i=r.get(n);return i||(i=new e(n,u,...t),r.set(n,i)),i.update(...t)}function E(e){return me.bind(null,e)}var D,O=e((()=>{f(),b(),D=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function he(e){return E(class extends D{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ge=e((()=>{O()}));function _e(e,t){e[_].push(t)}var k,A=e((()=>{b(),ge(),k=he(_e)})),ve,ye,be=e((()=>{O(),b(),A(),ve=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ye=E(class extends D{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,_e(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};ve(this.state.host).dispatchEvent(new CustomEvent(y,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function xe(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(ye(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Se=e((()=>{b(),be()})),j,M=e((()=>{O(),j=E(class extends D{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),N,Ce=e((()=>{M(),N=(e,t)=>j(()=>e,t)}));function we(e,t){e[v].push(t)}var P,Te=e((()=>{b(),ge(),P=he(we)})),Ee,De=e((()=>{O(),Ee=E(class extends D{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Oe=e((()=>{O(),E(class extends D{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),ke,Ae,je=e((()=>{O(),ke=/([A-Z])/gu,Ae=E(class extends D{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ke,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Me(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function F(e){return j(()=>Me(e),[])}var Ne=e((()=>{M()})),Pe=e((()=>{O(),E(class extends D{update(){return this.state.host}})}));function Fe({render:e}){let t=de(e);return{component:t,createContext:xe(t)}}var I=e((()=>{pe(),Se(),Ce(),A(),Te(),De(),Oe(),M(),be(),je(),Ne(),Pe(),O(),S(),te(),re()})),L,Ie,R,z=e((()=>{L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=e=>(...t)=>({_$litDirective$:e,values:t}),R=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Le(e){this._$AN===void 0?this._$AM=e:(V(this),this._$AM=e,H(this))}function Re(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)B(r[e],!1),V(r[e]);else r!=null&&(B(r,!1),V(r));else B(this,e)}var B,V,H,ze,Be,Ve=e((()=>{i(),z(),B=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),B(e,t);return!0},V=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},H=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ze(t)}},ze=e=>{e.type==L.CHILD&&(e._$AP??=Re,e._$AQ??=Le)},Be=class extends R{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),H(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(B(this,e),V(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function He(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(U.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?He(e,t):e.teardown();break}else if(U.call(a.addedNodes,n.nextSibling)){i.disconnect(),He(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var U,Ue=e((()=>{z(),a(),Ve(),S(),U=Array.prototype.includes})),W,We,Ge=e((()=>{a(),I(),Ue(),{component:W,createContext:We}=Fe({render:o})})),G=e((()=>{Ge(),I(),T(),I()})),K,q=e((()=>{G(),K=C(w`
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
`)})),J,Y=e((()=>{a(),J=e=>e??r})),Ke,qe=e((()=>{G(),Ke=w`
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
`})),Je,Ye=e((()=>{qe(),G(),Je=w`
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
		${Ke}
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
`})),Xe,Ze,Qe=e((()=>{q(),G(),a(),Y(),Ye(),Xe=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],Ze=e=>{let t=e.hasAttribute(`disabled`),i=e.getAttribute(`type`)||`button`,a=e.getAttribute(`href`);k(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let o=n`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(a!=null){let i=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return n`
			<a
				href=${a}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${J(i)}
				rel=${J(s)}
				download=${J(c)}
				>${o}</a
			>
		`}return n`
		<button type=${i} class="button" ?disabled=${t} part="button">
			${o}
		</button>
	`},customElements.define(`cosmoz-button`,W(Ze,{observedAttributes:Xe,styleSheets:[K,Je],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),$e=e((()=>{G()})),X,et=e((()=>{X=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),tt=e((()=>{})),nt=e((()=>{$e(),et(),tt()})),rt,it=e((()=>{nt(),rt=X`
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

	[popover] > ::slotted(*) {
		flex: 1;
		min-height: 0;
	}
`})),at,ot,st=e((()=>{at=(e,t)=>{let n=e.indexOf(t);n!==-1&&e.splice(n,1)},ot=(e,t=80)=>{let n=getComputedStyle(e),r=e=>e.split(`,`).map(e=>parseFloat(e)*1e3||0),i=r(n.transitionDuration),a=r(n.transitionDelay);return i.reduce((e,t,n)=>Math.max(e,t+(a[n]??0)),0)+t}})),Z,Q,$,ct,lt,ut=e((()=>{G(),st(),Z=[],Q=e=>at(Z,e),$=e=>e.shadowRoot?.querySelector(`[popover]`)??void 0,ct=e=>{e?.isConnected&&e.focus({preventScroll:!0})},lt=e=>{let[t,n]=Ae(`opened`,!1),r=F(null),i=F(!1),a=F(!1),o=F(0),s=N(()=>{if(!a.current)return;a.current=!1,window.clearTimeout(o.current);let t=$(e);t&&Q(t),i.current&&ct(r.current),e.dispatchEvent(new Event(`close`,{bubbles:!0})),e.onClose?.()},[]),c=N(()=>{e.opened||n(!0)},[]),l=N(()=>{e.opened&&n(!1)},[]);e.open=c,e.close=l;let u=N(t=>{r.current=document.activeElement,a.current=!1,window.clearTimeout(o.current),t.matches(`:popover-open`)||t.showPopover(),Z.indexOf(t)===-1&&Z.push(t),e.noAutofocus||t.focus({preventScroll:!0})},[]),d=N(t=>{t.matches(`:popover-open`)&&(i.current=e.contains(document.activeElement),Q(t),a.current=!0,window.clearTimeout(o.current),o.current=window.setTimeout(s,ot(t)),t.hidePopover())},[]);return k(()=>{let t=$(e);if(!t)return;let n=e=>{e.target===t&&e.propertyName===`translate`&&a.current&&s()},r=n=>{n.key===`Escape`&&!e.noEscape&&Z[Z.length-1]===t&&(n.preventDefault(),l())},i=t=>{e.opened&&(t.stopPropagation(),l())};return t.addEventListener(`transitionend`,n),document.addEventListener(`keydown`,r),e.addEventListener(`request-close`,i),()=>{window.clearTimeout(o.current),Q(t),t.removeEventListener(`transitionend`,n),document.removeEventListener(`keydown`,r),e.removeEventListener(`request-close`,i)}},[]),k(()=>{let n=$(e);n&&(t?u(n):d(n))},[t]),{close:l,open:c}}})),dt,ft=e((()=>{G(),dt=e=>{let t=!!e.fullScreen,n=N(()=>{e.toggleAttribute(`full-screen`)},[]);e.toggleFullScreen=n,P(()=>{e.toggleAttribute(`full-screen`,t)},[t]);let r=F(!1);return k(()=>{if(!r.current){r.current=!0;return}e.dispatchEvent(new CustomEvent(`full-screen-changed`,{detail:{fullScreen:t},bubbles:!0}))},[t]),{fullScreen:t,toggle:n}}})),pt,mt,ht,gt=e((()=>{q(),G(),Y(),it(),ut(),ft(),pt=e=>{let{close:t,open:n}=lt(e),{fullScreen:r,toggle:i}=dt(e);return P(()=>{e.toggleAttribute(`opened`,!!e.opened)},[e.opened]),{close:t,open:n,fullScreen:r,toggleFullScreen:i}},mt=(e,t)=>n`
	<div
		part="surface"
		popover="manual"
		role="dialog"
		aria-modal="false"
		tabindex="-1"
		aria-label=${J(e.getAttribute(`aria-label`)??void 0)}
		aria-labelledby=${J(e.getAttribute(`aria-labelledby`)??void 0)}
	>
		${t}
	</div>
`,ht=(e,{observedAttributes:t,styleSheets:n,...r}={})=>W(t=>(pt(t),mt(t,e(t))),{observedAttributes:[`aria-label`,`aria-labelledby`,`full-screen`,`no-autofocus`,`no-escape`,...t??[]],styleSheets:[K,rt,...n??[]],...r})})),_t=e((()=>{G(),gt(),customElements.define(`cosmoz-slideout`,ht(()=>n`<slot></slot>`))}));export{E as A,Ce as C,A as D,j as E,T as M,C as N,k as O,Ee as S,M as T,z as _,Qe as a,F as b,q as c,W as d,Ge as f,R as g,Ie as h,X as i,O as j,D as k,K as l,Ve as m,nt as n,Y as o,Be as p,et as r,J as s,_t as t,G as u,L as v,N as w,De as x,Ne as y};