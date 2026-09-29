import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,ot as i,pt as a,ut as o}from"./iframe-B1goUN66.js";function s(e){u=e}function c(){u=null,d=0}function l(){return d++}var u,d,f=e((()=>{d=0})),p,m,h,g,_,v,y,b=e((()=>{p=Symbol(`haunted.phase`),m=Symbol(`haunted.hook`),h=Symbol(`haunted.update`),g=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),y=`haunted.context`})),ee,te=e((()=>{f(),b(),ee=class{update;host;virtual;[m];[_];[v];constructor(e,t){this.update=e,this.host=t,this[m]=new Map,this[_]=[],this[v]=[]}run(e){s(this);let t=e();return c(),t}_runEffects(e){let t=this[e];s(this);for(let e of t)e.call(this);c()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[m].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,x,ce,S=e((()=>{te(),b(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),x=ie(),ce=class e{renderer;host;state;[p];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[p]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(h);x(()=>{this.handlePhase(g,e),x(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[p]=e,e){case g:this.commit(t),this.runEffects(v);return;case h:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),C,le,ue,w,T=e((()=>{C=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?C(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=ue}));function de(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,fe(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var fe,pe=e((()=>{S(),T(),fe=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function me(e,...t){let n=l(),r=u[m],i=r.get(n);return i||(i=new e(n,u,...t),r.set(n,i)),i.update(...t)}function E(e){return me.bind(null,e)}var D,O=e((()=>{f(),b(),D=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function he(e){return E(class extends D{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ge=e((()=>{O()}));function _e(e,t){e[_].push(t)}var k,A=e((()=>{b(),ge(),k=he(_e)})),ve,ye,be=e((()=>{O(),b(),A(),ve=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ye=E(class extends D{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,_e(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};ve(this.state.host).dispatchEvent(new CustomEvent(y,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function xe(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(ye(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Se=e((()=>{b(),be()})),j,M=e((()=>{O(),j=E(class extends D{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),N,Ce=e((()=>{M(),N=(e,t)=>j(()=>e,t)}));function we(e,t){e[v].push(t)}var P,Te=e((()=>{b(),ge(),P=he(we)})),Ee=e((()=>{O(),E(class extends D{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),De=e((()=>{O(),E(class extends D{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Oe,ke=e((()=>{O(),Oe=/([A-Z])/gu,E(class extends D{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Oe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Ae(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function F(e){return j(()=>Ae(e),[])}var je=e((()=>{M()})),Me=e((()=>{O(),E(class extends D{update(){return this.state.host}})}));function Ne({render:e}){let t=de(e);return{component:t,createContext:xe(t)}}var I=e((()=>{pe(),Se(),Ce(),A(),Te(),Ee(),De(),M(),be(),ke(),je(),Me(),O(),S(),te(),re()})),L,Pe,R,z=e((()=>{L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pe=e=>(...t)=>({_$litDirective$:e,values:t}),R=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Fe(e){this._$AN===void 0?this._$AM=e:(V(this),this._$AM=e,H(this))}function Ie(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)B(r[e],!1),V(r[e]);else r!=null&&(B(r,!1),V(r));else B(this,e)}var B,V,H,Le,Re,ze=e((()=>{i(),z(),B=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),B(e,t);return!0},V=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},H=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Le(t)}},Le=e=>{e.type==L.CHILD&&(e._$AP??=Ie,e._$AQ??=Fe)},Re=class extends R{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),H(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(B(this,e),V(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function Be(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(U.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?Be(e,t):e.teardown();break}else if(U.call(a.addedNodes,n.nextSibling)){i.disconnect(),Be(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var U,Ve=e((()=>{z(),a(),ze(),S(),U=Array.prototype.includes})),W,He,Ue=e((()=>{a(),I(),Ve(),{component:W,createContext:He}=Ne({render:o})})),G=e((()=>{Ue(),I(),T(),I()})),K,We=e((()=>{G(),K=C(w`
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
`)})),q,J=e((()=>{a(),q=e=>e??r})),Ge=e((()=>{G()})),Y,Ke=e((()=>{Y=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),qe=e((()=>{})),Je=e((()=>{Ge(),Ke(),qe()})),Ye,Xe=e((()=>{Je(),Ye=Y`
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
`})),Ze,Qe,$e=e((()=>{G(),Ze=e=>e.replace(/-([a-z])/gu,(e,t)=>t.toUpperCase()),Qe=(e,t,n=`${t}-changed`)=>{let r=Ze(t),i=()=>!!e[r],a=i();return P(()=>{e.toggleAttribute(t,i())},[a]),[a,r=>{if(r===i())return;let a=new CustomEvent(n,{detail:{value:r},cancelable:!0,bubbles:!0});e.dispatchEvent(a),!a.defaultPrevented&&e.toggleAttribute(t,r)}]}})),et,X,tt=e((()=>{et=(e,t)=>{let n=e.indexOf(t);n!==-1&&e.splice(n,1)},X=(e,t=80)=>{let n=getComputedStyle(e),r=e=>e.split(`,`).map(e=>parseFloat(e)*1e3||0),i=r(n.transitionDuration),a=r(n.transitionDelay);return i.reduce((e,t,n)=>Math.max(e,t+(a[n]??0)),0)+t}})),Z,Q,$,nt,rt,it=e((()=>{G(),$e(),tt(),Z=[],Q=e=>et(Z,e),$=e=>e.shadowRoot?.querySelector(`[popover]`)??void 0,nt=e=>{e?.isConnected&&e.focus({preventScroll:!0})},rt=e=>{let[t,n]=Qe(e,`opened`),r=F({opener:null,shouldRestore:!1,closing:!1,opening:!1,closeTimer:0,openTimer:0}),i=N(()=>{let t=r.current;t.opening&&(t.opening=!1,window.clearTimeout(t.openTimer),e.dispatchEvent(new Event(`open`,{bubbles:!0})))},[]),a=N(()=>{let t=r.current;if(!t.closing)return;t.closing=!1,window.clearTimeout(t.closeTimer);let n=$(e);n&&Q(n),t.shouldRestore&&nt(t.opener),e.dispatchEvent(new Event(`close`,{bubbles:!0})),e.onClose?.()},[]),o=N(()=>{e.opened||n(!0)},[]),s=N(()=>{e.opened&&n(!1)},[]);Object.assign(e,{open:o,close:s});let c=N(t=>{let n=r.current;n.opener=document.activeElement,n.closing=!1,window.clearTimeout(n.closeTimer),t.matches(`:popover-open`)||t.showPopover(),Z.indexOf(t)===-1&&Z.push(t),e.noAutofocus||t.focus({preventScroll:!0}),n.opening=!0,window.clearTimeout(n.openTimer),n.openTimer=window.setTimeout(i,X(t))},[]),l=N(t=>{let n=r.current;n.opening=!1,window.clearTimeout(n.openTimer),t.matches(`:popover-open`)&&(n.shouldRestore=e.contains(document.activeElement),Q(t),n.closing=!0,window.clearTimeout(n.closeTimer),n.closeTimer=window.setTimeout(a,X(t)),t.hidePopover())},[]);return k(()=>{let t=$(e);if(!t)return;let n=e=>{e.target!==t||e.propertyName!==`translate`||(r.current.closing?a():i())},o=n=>{n.key===`Escape`&&!e.noEscape&&Z[Z.length-1]===t&&(n.preventDefault(),s())},c=t=>{e.opened&&!t.defaultPrevented&&(t.stopPropagation(),s())};return t.addEventListener(`transitionend`,n),document.addEventListener(`keydown`,o),e.addEventListener(`request-close`,c),()=>{window.clearTimeout(r.current.closeTimer),window.clearTimeout(r.current.openTimer),Q(t),t.removeEventListener(`transitionend`,n),document.removeEventListener(`keydown`,o),e.removeEventListener(`request-close`,c)}},[]),k(()=>{let n=$(e);n&&(t?c(n):l(n))},[t]),{close:s,open:o}}})),at,ot=e((()=>{G(),at=e=>{let t=!!e.fullScreen,n=N(()=>{e.toggleAttribute(`full-screen`)},[]);e.toggleFullScreen=n,P(()=>{e.toggleAttribute(`full-screen`,t)},[t]);let r=F(!1);return k(()=>{if(!r.current){r.current=!0;return}e.dispatchEvent(new CustomEvent(`full-screen-changed`,{detail:{fullScreen:t},bubbles:!0}))},[t]),{fullScreen:t,toggle:n}}})),st,ct,lt=e((()=>{G(),J(),st=(e,t)=>n`
	<cosmoz-slideout
		class=${q(e.class)}
		style=${q(e.style)}
		.opened=${e.opened??!1}
		?full-screen=${e.fullScreen}
		?no-escape=${e.noEscape}
		?no-autofocus=${e.noAutofocus}
		aria-label=${q(e.ariaLabel)}
		aria-labelledby=${q(e.ariaLabelledby)}
		@opened-changed=${e.onOpenedChanged}
		@open=${e.onOpen}
		@close=${e.onClose}
		@full-screen-changed=${e.onFullScreenChanged}
	>
		${t}
	</cosmoz-slideout>
`,ct=(e,t)=>n`
	<cosmoz-slideout-panel
		class=${q(e.class)}
		style=${q(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),ut,dt,ft,pt,mt=e((()=>{We(),G(),J(),Xe(),it(),ot(),lt(),$e(),ut=e=>{let{close:t,open:n}=rt(e),{fullScreen:r,toggle:i}=at(e);return{close:t,open:n,fullScreen:r,toggleFullScreen:i}},dt=(e,t)=>n`
	<div
		part="surface"
		popover="manual"
		role="dialog"
		aria-modal="false"
		tabindex="-1"
		aria-label=${q(e.getAttribute(`aria-label`)??void 0)}
		aria-labelledby=${q(e.getAttribute(`aria-labelledby`)??void 0)}
	>
		${t}
	</div>
`,ft=[K,Ye],pt=[`opened`,`aria-label`,`aria-labelledby`,`full-screen`,`no-autofocus`,`no-escape`]})),ht=e((()=>{G(),mt(),customElements.define(`cosmoz-slideout`,W(e=>(ut(e),dt(e,n`<slot></slot>`)),{observedAttributes:[...pt],styleSheets:ft}))}));export{E as A,Ce as C,A as D,j as E,w as M,T as N,k as O,C as P,F as S,M as T,Pe as _,Je as a,L as b,J as c,K as d,G as f,ze as g,Re as h,ct as i,O as j,D as k,q as l,Ue as m,lt as n,Ke as o,W as p,st as r,Y as s,ht as t,We as u,R as v,N as w,je as x,z as y};