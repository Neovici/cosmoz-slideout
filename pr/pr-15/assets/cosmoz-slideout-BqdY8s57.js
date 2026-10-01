import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,ot as i,pt as a,ut as o}from"./iframe-lkyprYIf.js";function s(e){u=e}function c(){u=null,d=0}function l(){return d++}var u,d,f=e((()=>{d=0})),p,m,h,g,_,v,y,b=e((()=>{p=Symbol(`haunted.phase`),m=Symbol(`haunted.hook`),h=Symbol(`haunted.update`),g=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),y=`haunted.context`})),ee,te=e((()=>{f(),b(),ee=class{update;host;virtual;[m];[_];[v];constructor(e,t){this.update=e,this.host=t,this[m]=new Map,this[_]=[],this[v]=[]}run(e){s(this);let t=e();return c(),t}_runEffects(e){let t=this[e];s(this);for(let e of t)e.call(this);c()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[m].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,x,ce,S=e((()=>{te(),b(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),x=ie(),ce=class e{renderer;host;state;[p];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[p]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(h);x(()=>{this.handlePhase(g,e),x(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[p]=e,e){case g:this.commit(t),this.runEffects(v);return;case h:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),C,le,ue,de,w=e((()=>{C=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?C(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),de=ue}));function fe(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,pe(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var pe,me=e((()=>{S(),w(),pe=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function he(e,...t){let n=l(),r=u[m],i=r.get(n);return i||(i=new e(n,u,...t),r.set(n,i)),i.update(...t)}function T(e){return he.bind(null,e)}var E,D=e((()=>{f(),b(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ge(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var _e=e((()=>{D()}));function ve(e,t){e[_].push(t)}var O,k=e((()=>{b(),_e(),O=ge(ve)})),ye,be,xe=e((()=>{D(),b(),k(),ye=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,be=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ve(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};ye(this.state.host).dispatchEvent(new CustomEvent(y,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Se(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(be(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ce=e((()=>{b(),xe()})),A,j=e((()=>{D(),A=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),M,we=e((()=>{j(),M=(e,t)=>A(()=>e,t)}));function Te(e,t){e[v].push(t)}var Ee,De=e((()=>{b(),_e(),Ee=ge(Te)})),Oe=e((()=>{D(),T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),ke=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Ae,je=e((()=>{D(),Ae=/([A-Z])/gu,T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ae,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Me(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function N(e){return A(()=>Me(e),[])}var Ne=e((()=>{j()})),P,Pe=e((()=>{D(),P=T(class extends E{update(){return this.state.host}})}));function Fe({render:e}){let t=fe(e);return{component:t,createContext:Se(t)}}var F=e((()=>{me(),Ce(),we(),k(),De(),Oe(),ke(),j(),xe(),je(),Ne(),Pe(),D(),S(),te(),re()})),I,Ie,L,R=e((()=>{I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=e=>(...t)=>({_$litDirective$:e,values:t}),L=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Le(e){this._$AN===void 0?this._$AM=e:(B(this),this._$AM=e,V(this))}function Re(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)z(r[e],!1),B(r[e]);else r!=null&&(z(r,!1),B(r));else z(this,e)}var z,B,V,ze,Be,Ve=e((()=>{i(),R(),z=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),z(e,t);return!0},B=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},V=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ze(t)}},ze=e=>{e.type==I.CHILD&&(e._$AP??=Re,e._$AQ??=Le)},Be=class extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),V(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(z(this,e),B(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function He(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(H.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?He(e,t):e.teardown();break}else if(H.call(a.addedNodes,n.nextSibling)){i.disconnect(),He(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var H,Ue=e((()=>{R(),a(),Ve(),S(),H=Array.prototype.includes})),U,We,Ge=e((()=>{a(),F(),Ue(),{component:U,createContext:We}=Fe({render:o})})),W=e((()=>{Ge(),F(),w(),F()})),Ke,qe=e((()=>{a(),Ke=e=>e??r})),G,Je=e((()=>{W(),G=C(de`
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
`)})),Ye=e((()=>{W()})),K,Xe=e((()=>{K=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),Ze=e((()=>{})),Qe=e((()=>{Ye(),Xe(),Ze()})),q,$e=e((()=>{Qe(),q=K`
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
`})),et,J,Y,X=e((()=>{W(),et=e=>e.replace(/-([a-z])/gu,(e,t)=>t.toUpperCase()),J=e=>`${e}-changed`,Y=e=>{let t=P(),n=et(e),r=()=>n in t&&!!t[n],i=r(),a=M(n=>{let i=r(),a=typeof n==`function`?n(i):n;if(a===i)return!1;let o=new CustomEvent(J(e),{detail:{value:a},cancelable:!0,bubbles:!0});return t.dispatchEvent(o),o.defaultPrevented?!1:(t.toggleAttribute(e,a),!0)},[e]),o=M(n=>{n!==r()&&(t.dispatchEvent(new CustomEvent(J(e),{detail:{value:n},bubbles:!0})),t.toggleAttribute(e,n))},[e]);return Ee(()=>{t.toggleAttribute(e,r())},[i]),[i,a,o]}})),Z,tt=e((()=>{W(),Z=e=>{let t=A(()=>({}),[]);return A(()=>Object.assign(t,e),[t,...Object.values(e)])}})),nt,rt=e((()=>{tt(),W(),nt=({opened:e,noEscape:t,close:n})=>{let r=Z({opened:e,noEscape:t,close:n}),i=M(e=>{e.key===`Escape`&&!r.noEscape&&r.opened&&(e.preventDefault(),r.close())},[]);O(()=>{if(!(`CloseWatcher`in window))return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[i])}})),it,at=e((()=>{tt(),W(),it=({opened:e,noEscape:t,close:n})=>{let r=Z({close:n});O(()=>{if(!e||t||!(`CloseWatcher`in window))return;let n=new CloseWatcher;return n.oncancel=e=>{r.close()===!1&&e.preventDefault()},()=>{n.destroy()}},[e,t])}})),ot,st=e((()=>{W(),ot=()=>{let e=N({armed:void 0,arm(t){e.armed=window.setTimeout(t,1e3)},clear(){window.clearTimeout(e.armed)}}).current;return e}})),ct,lt=e((()=>{W(),ct=()=>{let e=N({host:P(),opener:null,armed:!1,capture(){e.opener=document.activeElement,e.armed=!1},arm(){e.armed=e.host.contains(document.activeElement)},restore(){let{opener:t,armed:n}=e;if(e.armed=!1,!n||!t?.isConnected)return;let r=document.activeElement?.closest?.(`:popover-open`);r&&r!==e.host||t.focus({preventScroll:!0})}}).current;return e}})),ut,dt=e((()=>{W(),X(),ut=()=>{let[e,t]=Y(`full-screen`);return{fullScreen:e,toggle:M(()=>{t(e=>!e)},[t])}}})),ft,pt=e((()=>{tt(),W(),ft=({opened:e,close:t})=>{let n=Z({opened:e,close:t}),r=M(e=>{n.opened&&!e.defaultPrevented&&(e.stopPropagation(),n.close())},[]),i=P();O(()=>(i.addEventListener(`request-close`,r),()=>i.removeEventListener(`request-close`,r)),[])}})),Q,mt=e((()=>{W(),Q=e=>{let t=P(),n=t.controls??={};return A(()=>Object.assign(n,e),[e])}})),ht=e((()=>{}));function $(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:gt(e)?Array.from(e):[e]}var gt,_t=e((()=>{ht(),gt=e=>typeof e==`object`&&!!e&&Symbol.iterator in e})),vt,yt=e((()=>{_t(),W(),vt=(e,t)=>{let n=N({state:e,send(e){let r=t[n.state]?.transitions[e];if(!r)return null;let i={send:n.send};return $(r.guard).some(e=>e?.(i)===!1)?null:($(t[n.state].teardown).forEach(e=>e?.(i)),n.state=r.to,$(t[r.to].setup).forEach(e=>e?.(i)),r.to)},is(e){return n.state===e}}).current;return O(()=>{let e=n;return()=>{$(t[e.state].teardown).forEach(t=>t?.({send:e.send}))}},[]),n}})),bt,xt=e((()=>{W(),X(),rt(),at(),st(),lt(),dt(),pt(),mt(),yt(),bt=({noEscape:e=!1})=>{let[t,n]=Y(`opened`),r=M(()=>n(!0),[n]),i=M(()=>n(!1),[n]);ft({opened:t,close:i}),it({opened:t,noEscape:e,close:i}),nt({opened:t,noEscape:e,close:i});let a=P(),o=ct(),s=ot(),c=vt(`closed`,{closed:{setup:[()=>{a.dispatchEvent(new Event(`close`,{bubbles:!0})),o.restore()}],transitions:{OPEN:{to:`opening`,guard:[()=>!a.matches(`:popover-open`)]}}},opening:{setup:[o.capture,()=>a.showPopover(),({send:e})=>s.arm(()=>e(`SETTLE`))],teardown:[s.clear],transitions:{OPEN:{to:`opening`},CLOSE:{to:`closing`},SETTLE:{to:`open`}}},open:{setup:[()=>{a.dispatchEvent(new Event(`open`,{bubbles:!0})),o.restore()}],transitions:{CLOSE:{to:`closing`,guard:[()=>a.matches(`:popover-open`)]}}},closing:{setup:[o.arm,()=>a.hidePopover(),({send:e})=>s.arm(()=>e(`SETTLE`))],teardown:[s.clear],transitions:{CLOSE:{to:`closing`},OPEN:{to:`opening`},SETTLE:{to:`closed`}}}});O(()=>a.addEventListener(`transitionend`,e=>{e.target!==a||e.propertyName!==`translate`||c.send(`SETTLE`)}),[]),O(()=>{c.send(t?`OPEN`:`CLOSE`)},[t]);let{fullScreen:l,toggle:u}=ut();return Q({open:r,close:i,toggleFullScreen:u}),{opened:t,open:r,close:i,fullScreen:l,toggleFullScreen:u}}})),St,Ct,wt=e((()=>{Je(),W(),$e(),xt(),St=e=>(bt(e),n`<slot></slot>`),Ct=class extends HTMLElement{controls;connectedCallback(){this.hasAttribute(`popover`)||this.setAttribute(`popover`,`manual`),this.hasAttribute(`role`)||this.setAttribute(`role`,`dialog`),this.hasAttribute(`aria-modal`)||this.setAttribute(`aria-modal`,`false`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}open(){this.controls?.open()}close(){this.controls?.close()}toggleFullScreen(){this.controls?.toggleFullScreen()}},customElements.define(`cosmoz-slideout`,U(St,{baseElement:Ct,observedAttributes:[`opened`,`full-screen`,`no-escape`],styleSheets:[G,q]}))}));export{Ve as A,M as B,G as C,U as D,W as E,Pe as F,E as G,A as H,P as I,de as J,T as K,Ne as L,L as M,R as N,Ge as O,I as P,N as R,Je as S,Ke as T,k as U,j as V,O as W,C as X,w as Y,q as _,mt as a,Xe as b,ft as c,lt as d,ct as f,Y as g,X as h,vt as i,Ie as j,Be as k,dt as l,ot as m,wt as n,Q as o,st as p,D as q,yt as r,pt as s,Ct as t,ut as u,$e as v,qe as w,K as x,Qe as y,we as z};