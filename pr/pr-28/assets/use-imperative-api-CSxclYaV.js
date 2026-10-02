import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,lt as n,mt as r,st as i,ut as a}from"./iframe-D1k0Osf9.js";function o(e){c=e}function s(){c=null,l=0}function ee(){return l++}var c,l,u=e((()=>{l=0})),d,f,p,m,h,g,_,v=e((()=>{d=Symbol(`haunted.phase`),f=Symbol(`haunted.hook`),p=Symbol(`haunted.update`),m=Symbol(`haunted.commit`),h=Symbol(`haunted.effects`),g=Symbol(`haunted.layoutEffects`),_=`haunted.context`})),y,b=e((()=>{u(),v(),y=class{update;host;virtual;[f];[h];[g];constructor(e,t){this.update=e,this.host=t,this[f]=new Map,this[h]=[],this[g]=[]}run(e){o(this);let t=e();return s(),t}_runEffects(e){let t=this[e];o(this);for(let e of t)e.call(this);s()}runEffects(){this._runEffects(h)}runLayoutEffects(){this._runEffects(g)}teardown(){this[f].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),te,ne=e((()=>{te=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,x,S,C=e((()=>{b(),v(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),x=re(),S=class e{renderer;host;state;[d];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new y(this.update.bind(this),t),this[d]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new te(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(p);x(()=>{this.handlePhase(m,e),x(()=>{this.handlePhase(h),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[d]=e,e){case m:this.commit(t),this.runEffects(g);return;case p:return this.render();case h:return this.runEffects(h)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),w,se,ce,T,E=e((()=>{w=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},se=e=>e?.map(e=>typeof e==`string`?w(e):e),ce=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),T=ce}));function le(e){class t extends S{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:ee}=r||n||{},c=se(e.styleSheets||ee);class l extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});c&&(n.adoptedStyleSheets=c),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,ue(e),r)}}function u(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let d=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:u(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(l.prototype,d),l}return n}var ue,de=e((()=>{C(),E(),ue=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function fe(e,...t){let n=ee(),r=c[f],i=r.get(n);return i||(i=new e(n,c,...t),r.set(n,i)),i.update(...t)}function D(e){return fe.bind(null,e)}var O,k=e((()=>{u(),v(),O=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function pe(e){return D(class extends O{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var me=e((()=>{k()}));function he(e,t){e[h].push(t)}var A,j=e((()=>{v(),me(),A=pe(he)})),M,N,P=e((()=>{k(),v(),j(),M=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,N=D(class extends O{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,he(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};M(this.state.host).dispatchEvent(new CustomEvent(_,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function ge(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(_,this)}disconnectedCallback(){this.removeEventListener(_,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(N(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var _e=e((()=>{v(),P()})),F,I=e((()=>{k(),F=D(class extends O{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),L,R=e((()=>{I(),L=(e,t)=>F(()=>e,t)}));function ve(e,t){e[g].push(t)}var z,ye=e((()=>{v(),me(),z=pe(ve)})),be=e((()=>{k(),D(class extends O{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),xe=e((()=>{k(),D(class extends O{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Se,Ce=e((()=>{k(),Se=/([A-Z])/gu,D(class extends O{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Se,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function we(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Te(e){return F(()=>we(e),[])}var Ee=e((()=>{I()})),B,De=e((()=>{k(),B=D(class extends O{update(){return this.state.host}})}));function Oe({render:e}){let t=le(e);return{component:t,createContext:ge(t)}}var V=e((()=>{de(),_e(),R(),j(),ye(),be(),xe(),I(),P(),Ce(),Ee(),De(),k(),C(),b(),ne()})),H,ke,U,W=e((()=>{H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ke=e=>(...t)=>({_$litDirective$:e,values:t}),U=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Ae(e){this._$AN===void 0?this._$AM=e:(K(this),this._$AM=e,q(this))}function je(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)G(r[e],!1),K(r[e]);else r!=null&&(G(r,!1),K(r));else G(this,e)}var G,K,q,Me,Ne,Pe=e((()=>{i(),W(),G=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),G(e,t);return!0},K=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},q=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Me(t)}},Me=e=>{e.type==H.CHILD&&(e._$AP??=je,e._$AQ??=Ae)},Ne=class extends U{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),q(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(G(this,e),K(this))}setValue(e){if(n(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function Fe(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(J.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?Fe(e,t):e.teardown();break}else if(J.call(a.addedNodes,n.nextSibling)){i.disconnect(),Fe(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var J,Ie=e((()=>{W(),r(),Pe(),C(),J=Array.prototype.includes})),Le,Re,ze=e((()=>{r(),V(),Ie(),{component:Le,createContext:Re}=Oe({render:t})})),Y=e((()=>{ze(),V(),E(),V()})),Be,Ve=e((()=>{r(),Be=e=>e??a})),He,Ue=e((()=>{Y(),He=w(T`
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
`)})),We=e((()=>{Y()})),X,Ge=e((()=>{X=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),Ke=e((()=>{})),qe=e((()=>{We(),Ge(),Ke()})),Je,Ye=e((()=>{qe(),Je=X`
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
`})),Xe,Z,Q,Ze=e((()=>{Y(),Xe=e=>e.replace(/-([a-z])/gu,(e,t)=>t.toUpperCase()),Z=e=>`${e}-changed`,Q=e=>{let t=B(),n=Xe(e),r=()=>n in t&&!!t[n],i=r(),a=L(n=>{let i=r(),a=typeof n==`function`?n(i):n;if(a===i)return!1;let o=new CustomEvent(Z(e),{detail:{value:a},cancelable:!0,bubbles:!0});return t.dispatchEvent(o),o.defaultPrevented?!1:(t.toggleAttribute(e,a),!0)},[e]),o=L(n=>{n!==r()&&t.toggleAttribute(e,n)},[e]);return z(()=>{t.toggleAttribute(e,r())},[i]),[i,a,o]}})),$,Qe=e((()=>{Y(),$=e=>{let t=F(()=>({}),[]);return F(()=>Object.assign(t,e),[t,...Object.values(e)])}})),$e,et=e((()=>{Y(),Ze(),$e=()=>{let[e,t]=Q(`full-screen`);return{fullScreen:e,toggle:L(()=>{t(e=>!e)},[t])}}})),tt,nt=e((()=>{Qe(),Y(),tt=({opened:e,close:t})=>{let n=$({opened:e,close:t}),r=L(e=>{n.opened&&!e.defaultPrevented&&(e.stopPropagation(),n.close())},[]),i=B();A(()=>(i.addEventListener(`request-close`,r),()=>i.removeEventListener(`request-close`,r)),[])}})),rt,it=e((()=>{Y(),rt=e=>{let t=B(),n=t.controls??={};return F(()=>Object.assign(n,e),[e])}}));export{B as A,A as B,Ne as C,W as D,U as E,R as F,E as G,D as H,L as I,w as K,I as L,Te as M,ye as N,H as O,z as P,F as R,ze as S,ke as T,k as U,O as V,T as W,He as _,et as a,Y as b,$ as c,Je as d,Ye as f,Ue as g,X as h,tt as i,Ee as j,De as k,Ze as l,Ge as m,rt as n,$e as o,qe as p,nt as r,Qe as s,it as t,Q as u,Ve as v,Pe as w,Le as x,Be as y,j as z};