import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,ot as i,pt as a,ut as o}from"./iframe-BHcG80NJ.js";function s(e){u=e}function c(){u=null,d=0}function l(){return d++}var u,d,f=e((()=>{d=0})),p,m,h,g,_,v,y,b=e((()=>{p=Symbol(`haunted.phase`),m=Symbol(`haunted.hook`),h=Symbol(`haunted.update`),g=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),y=`haunted.context`})),ee,x=e((()=>{f(),b(),ee=class{update;host;virtual;[m];[_];[v];constructor(e,t){this.update=e,this.host=t,this[m]=new Map,this[_]=[],this[v]=[]}run(e){s(this);let t=e();return c(),t}_runEffects(e){let t=this[e];s(this);for(let e of t)e.call(this);c()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[m].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),S,te=e((()=>{S=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ne(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ie(n)}}var re,ie,ae,C,oe,w=e((()=>{x(),b(),te(),re=100,ie=Promise.resolve().then.bind(Promise.resolve()),ae=ne(),C=ne(),oe=class e{renderer;host;state;[p];_updateQueued;_active;_updateCount;_processing;static maxUpdates=re;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[p]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new S(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,ae(()=>{let e=this.handlePhase(h);C(()=>{this.handlePhase(g,e),C(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[p]=e,e){case g:this.commit(t),this.runEffects(v);return;case h:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),T,E,se,D,O=e((()=>{T=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},E=e=>e?.map(e=>typeof e==`string`?T(e):e),se=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),D=se}));function ce(e){class t extends oe{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=E(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,le(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var le,ue=e((()=>{w(),O(),le=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function de(e,...t){let n=l(),r=u[m],i=r.get(n);return i||(i=new e(n,u,...t),r.set(n,i)),i.update(...t)}function k(e){return de.bind(null,e)}var A,j=e((()=>{f(),b(),A=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function fe(e){return k(class extends A{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var pe=e((()=>{j()}));function me(e,t){e[_].push(t)}var M,N=e((()=>{b(),pe(),M=fe(me)})),he,ge,P=e((()=>{j(),b(),N(),he=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ge=k(class extends A{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,me(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};he(this.state.host).dispatchEvent(new CustomEvent(y,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function _e(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(ge(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var ve=e((()=>{b(),P()})),F,I=e((()=>{j(),F=k(class extends A{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),L,ye=e((()=>{I(),L=(e,t)=>F(()=>e,t)}));function be(e,t){e[v].push(t)}var R,xe=e((()=>{b(),pe(),R=fe(be)})),Se=e((()=>{j(),k(class extends A{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ce=e((()=>{j(),k(class extends A{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),we,Te=e((()=>{j(),we=/([A-Z])/gu,k(class extends A{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(we,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Ee(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function z(e){return F(()=>Ee(e),[])}var De=e((()=>{I()})),Oe=e((()=>{j(),k(class extends A{update(){return this.state.host}})}));function ke({render:e}){let t=ce(e);return{component:t,createContext:_e(t)}}var B=e((()=>{ue(),ve(),ye(),N(),xe(),Se(),Ce(),I(),P(),Te(),De(),Oe(),j(),w(),x(),te()})),V,Ae,H,U=e((()=>{V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ae=e=>(...t)=>({_$litDirective$:e,values:t}),H=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function je(e){this._$AN===void 0?this._$AM=e:(G(this),this._$AM=e,K(this))}function Me(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)W(r[e],!1),G(r[e]);else r!=null&&(W(r,!1),G(r));else W(this,e)}var W,G,K,Ne,Pe,Fe=e((()=>{i(),U(),W=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),W(e,t);return!0},G=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},K=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ne(t)}},Ne=e=>{e.type==V.CHILD&&(e._$AP??=Me,e._$AQ??=je)},Pe=class extends H{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),K(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(W(this,e),G(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function Ie(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(q.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?Ie(e,t):e.teardown();break}else if(q.call(a.addedNodes,n.nextSibling)){i.disconnect(),Ie(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var q,Le=e((()=>{U(),a(),Fe(),w(),q=Array.prototype.includes})),J,Re,ze=e((()=>{a(),B(),Le(),{component:J,createContext:Re}=ke({render:o})})),Y=e((()=>{ze(),B(),O(),B()})),Be,Ve=e((()=>{a(),Be=e=>e??r})),X,He=e((()=>{Y(),X=T(D`
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
`)})),Ue=e((()=>{Y()})),Z,We=e((()=>{Z=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),Ge=e((()=>{})),Q=e((()=>{Ue(),We(),Ge()})),Ke,qe=e((()=>{Q(),Ke=Z`
	:host([popover]) {
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

	:host(:popover-open) {
		display: flex;
		--_dur: var(--cosmoz-slideout-duration, 0.3s);
	}

	:host(:not(:popover-open)) {
		translate: 100% 0;
	}

	@starting-style {
		:host(:popover-open) {
			translate: 100% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:host([popover]) {
			transition: none;
		}
	}

	:host([full-screen]) {
		width: var(--cosmoz-slideout-full-screen-width, 100vw);
	}

	slot {
		flex: 1;
		min-height: 0;
	}
`})),Je,Ye,Xe=e((()=>{Y(),Je=e=>e.replace(/-([a-z])/gu,(e,t)=>t.toUpperCase()),Ye=(e,t,n=`${t}-changed`)=>{let r=Je(t),i=()=>!!e[r],a=i();return R(()=>{e.toggleAttribute(t,i())},[a]),[a,r=>{if(r===i())return!1;let a=new CustomEvent(n,{detail:{value:r},cancelable:!0,bubbles:!0});return e.dispatchEvent(a),a.defaultPrevented?!1:(e.toggleAttribute(t,r),!0)}]}})),$,Ze=e((()=>{$=(e,t=80)=>{let n=getComputedStyle(e),r=e=>e.split(`,`).map(e=>parseFloat(e)*1e3||0),i=r(n.transitionDuration),a=r(n.transitionDelay);return i.reduce((e,t,n)=>Math.max(e,t+(a[n]??0)),0)+t}})),Qe,$e,et=e((()=>{Y(),Xe(),Ze(),Qe=e=>{e?.isConnected&&e.focus({preventScroll:!0})},$e=e=>{let[t,n]=Ye(e,`opened`),r=z({opener:null,shouldRestore:!1,closing:!1,opening:!1,closeTimer:0,openTimer:0,watcher:null}),i=L(()=>{let t=r.current;t.opening&&(t.opening=!1,window.clearTimeout(t.openTimer),e.dispatchEvent(new Event(`open`,{bubbles:!0})))},[]),a=L(()=>{let t=r.current;t.closing&&(t.closing=!1,window.clearTimeout(t.closeTimer),t.watcher?.destroy(),t.watcher=null,t.shouldRestore&&Qe(t.opener),e.dispatchEvent(new Event(`close`,{bubbles:!0})),e.onClose?.())},[]),o=L(()=>{e.opened||n(!0)},[]),s=L(()=>{e.opened&&n(!1)},[]),c=L(e=>{let t=r.current;if(t.watcher?.destroy(),!e){t.watcher=null;return}e.oncancel=e=>{n(!1)||e.preventDefault()},t.watcher=e},[n]),l=L(()=>{let t=r.current;t.opener=document.activeElement,t.closing=!1,window.clearTimeout(t.closeTimer),e.matches(`:popover-open`)||e.showPopover(),c(!e.noEscape&&`CloseWatcher`in window?new CloseWatcher:null),e.noAutofocus||e.focus({preventScroll:!0}),t.opening=!0,window.clearTimeout(t.openTimer),t.openTimer=window.setTimeout(i,$(e))},[c]),u=L(()=>{let t=r.current;t.opening=!1,window.clearTimeout(t.openTimer),e.matches(`:popover-open`)&&(t.shouldRestore=e.contains(document.activeElement),t.closing=!0,window.clearTimeout(t.closeTimer),t.closeTimer=window.setTimeout(a,$(e)),e.hidePopover())},[]);return M(()=>{let t=t=>{t.target!==e||t.propertyName!==`translate`||(r.current.closing?a():i())},n=t=>{t.key===`Escape`&&!e.noEscape&&e.opened&&(t.preventDefault(),s())},o=t=>{e.opened&&!t.defaultPrevented&&(t.stopPropagation(),s())};return e.addEventListener(`transitionend`,t),`CloseWatcher`in window||document.addEventListener(`keydown`,n),e.addEventListener(`request-close`,o),()=>{window.clearTimeout(r.current.closeTimer),window.clearTimeout(r.current.openTimer),c(null),e.removeEventListener(`transitionend`,t),`CloseWatcher`in window||document.removeEventListener(`keydown`,n),e.removeEventListener(`request-close`,o)}},[c]),M(()=>{t?l():u()},[t]),{close:s,open:o}}})),tt,nt=e((()=>{Y(),tt=e=>{let t=!!e.fullScreen,n=L(()=>{e.toggleAttribute(`full-screen`)},[]);R(()=>{e.toggleAttribute(`full-screen`,t)},[t]);let r=z(!1);return M(()=>{if(!r.current){r.current=!0;return}e.dispatchEvent(new CustomEvent(`full-screen-changed`,{detail:{fullScreen:t},bubbles:!0}))},[t]),{fullScreen:t,toggle:n}}})),rt,it=e((()=>{Y(),rt=(e,t)=>{let n=e.controls??={};return F(()=>Object.assign(n,t),[t])}})),at,ot,st,ct=e((()=>{He(),Y(),qe(),et(),nt(),it(),at=e=>{let{close:t,open:n}=$e(e),{fullScreen:r,toggle:i}=tt(e);return rt(e,{open:n,close:t,toggleFullScreen:i}),{close:t,open:n,fullScreen:r,toggleFullScreen:i}},ot=e=>(at(e),n`<slot></slot>`),st=class extends HTMLElement{controls;constructor(){super(),this.hasAttribute(`popover`)||this.setAttribute(`popover`,`manual`),this.hasAttribute(`role`)||this.setAttribute(`role`,`dialog`),this.hasAttribute(`aria-modal`)||this.setAttribute(`aria-modal`,`false`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}open(){this.controls?.open()}close(){this.controls?.close()}toggleFullScreen(){this.controls?.toggleFullScreen()}},customElements.define(`cosmoz-slideout`,J(ot,{baseElement:st,observedAttributes:[`opened`,`full-screen`,`no-escape`,`no-autofocus`],styleSheets:[X,Ke]}))}));export{O as A,F as C,k as D,A as E,j as O,I as S,M as T,V as _,He as a,ye as b,Be as c,ze as d,Pe as f,U as g,H as h,Z as i,T as j,D as k,Y as l,Ae as m,Q as n,X as o,Fe as p,We as r,Ve as s,ct as t,J as u,De as v,N as w,L as x,z as y};