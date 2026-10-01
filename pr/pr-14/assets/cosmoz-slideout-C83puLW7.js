import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,ot as i,pt as a,ut as o}from"./iframe-BDE5kU1P.js";function s(e){u=e}function c(){u=null,d=0}function l(){return d++}var u,d,f=e((()=>{d=0})),p,m,h,g,_,v,y,b=e((()=>{p=Symbol(`haunted.phase`),m=Symbol(`haunted.hook`),h=Symbol(`haunted.update`),g=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),y=`haunted.context`})),ee,te=e((()=>{f(),b(),ee=class{update;host;virtual;[m];[_];[v];constructor(e,t){this.update=e,this.host=t,this[m]=new Map,this[_]=[],this[v]=[]}run(e){s(this);let t=e();return c(),t}_runEffects(e){let t=this[e];s(this);for(let e of t)e.call(this);c()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[m].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),x,ne=e((()=>{x=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,S,se,C=e((()=>{te(),b(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),S=re(),se=class e{renderer;host;state;[p];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[p]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new x(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(h);S(()=>{this.handlePhase(g,e),S(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[p]=e,e){case g:this.commit(t),this.runEffects(v);return;case h:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),w,ce,le,T,E=e((()=>{w=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ce=e=>e?.map(e=>typeof e==`string`?w(e):e),le=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),T=le}));function ue(e){class t extends se{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ce(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,D(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var D,de=e((()=>{C(),E(),D=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function fe(e,...t){let n=l(),r=u[m],i=r.get(n);return i||(i=new e(n,u,...t),r.set(n,i)),i.update(...t)}function O(e){return fe.bind(null,e)}var k,A=e((()=>{f(),b(),k=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function pe(e){return O(class extends k{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var me=e((()=>{A()}));function he(e,t){e[_].push(t)}var j,M=e((()=>{b(),me(),j=pe(he)})),ge,_e,ve=e((()=>{A(),b(),M(),ge=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,_e=O(class extends k{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,he(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};ge(this.state.host).dispatchEvent(new CustomEvent(y,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function ye(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(_e(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var be=e((()=>{b(),ve()})),N,P=e((()=>{A(),N=O(class extends k{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),F,xe=e((()=>{P(),F=(e,t)=>N(()=>e,t)}));function Se(e,t){e[v].push(t)}var Ce,we=e((()=>{b(),me(),Ce=pe(Se)})),Te=e((()=>{A(),O(class extends k{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ee=e((()=>{A(),O(class extends k{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),De,Oe=e((()=>{A(),De=/([A-Z])/gu,O(class extends k{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(De,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function ke(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function I(e){return N(()=>ke(e),[])}var Ae=e((()=>{P()})),L,je=e((()=>{A(),L=O(class extends k{update(){return this.state.host}})}));function Me({render:e}){let t=ue(e);return{component:t,createContext:ye(t)}}var R=e((()=>{de(),be(),xe(),M(),we(),Te(),Ee(),P(),ve(),Oe(),Ae(),je(),A(),C(),te(),ne()})),z,Ne,B,V=e((()=>{z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t}),B=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Pe(e){this._$AN===void 0?this._$AM=e:(U(this),this._$AM=e,W(this))}function Fe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)H(r[e],!1),U(r[e]);else r!=null&&(H(r,!1),U(r));else H(this,e)}var H,U,W,Ie,Le,Re=e((()=>{i(),V(),H=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),H(e,t);return!0},U=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},W=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ie(t)}},Ie=e=>{e.type==z.CHILD&&(e._$AP??=Fe,e._$AQ??=Pe)},Le=class extends B{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),W(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(H(this,e),U(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function ze(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(G.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?ze(e,t):e.teardown();break}else if(G.call(a.addedNodes,n.nextSibling)){i.disconnect(),ze(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var G,Be=e((()=>{V(),a(),Re(),C(),G=Array.prototype.includes})),K,Ve,He=e((()=>{a(),R(),Be(),{component:K,createContext:Ve}=Me({render:o})})),q=e((()=>{He(),R(),E(),R()})),Ue,We=e((()=>{a(),Ue=e=>e??r})),J,Ge=e((()=>{q(),J=w(T`
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
`)})),Ke=e((()=>{q()})),Y,qe=e((()=>{Y=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),Je=e((()=>{})),Ye=e((()=>{Ke(),qe(),Je()})),Xe,Ze=e((()=>{Ye(),Xe=Y`
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
`})),Qe,$e,X,et=e((()=>{q(),Qe=e=>e.replace(/-([a-z])/gu,(e,t)=>t.toUpperCase()),$e=e=>`${e}-changed`,X=e=>{let t=L(),n=Qe(e),r=()=>n in t&&!!t[n],i=r(),a=F(n=>{let i=r(),a=typeof n==`function`?n(i):n;if(a===i)return!1;let o=new CustomEvent($e(e),{detail:{value:a},cancelable:!0,bubbles:!0});return t.dispatchEvent(o),o.defaultPrevented?!1:(t.toggleAttribute(e,a),!0)},[e]);return Ce(()=>{t.toggleAttribute(e,r())},[i]),[i,a]}})),Z,Q=e((()=>{q(),Z=e=>{let t=N(()=>({}),[]);return N(()=>Object.assign(t,e),[t,...Object.values(e)])}})),tt,nt=e((()=>{Q(),q(),tt=({opened:e,noEscape:t,close:n})=>{let r=Z({opened:e,noEscape:t,close:n}),i=F(e=>{e.key===`Escape`&&!r.noEscape&&r.opened&&(e.preventDefault(),r.close())},[]);j(()=>{if(!(`CloseWatcher`in window))return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[i])}})),rt,it=e((()=>{Q(),q(),rt=({opened:e,noEscape:t,close:n})=>{let r=Z({close:n});j(()=>{if(!e||t||!(`CloseWatcher`in window))return;let n=new CloseWatcher;return n.oncancel=e=>{r.close()===!1&&e.preventDefault()},()=>{n.destroy()}},[e,t])}})),at,ot=e((()=>{q(),at=()=>{let e=I({armed:void 0,arm(t){e.armed=window.setTimeout(t,1e3)},clear(){window.clearTimeout(e.armed)}}).current;return e}})),st,ct=e((()=>{q(),st=()=>{let e=I({host:L(),opener:null,armed:!1,capture(){e.opener=document.activeElement,e.armed=!1},arm(){e.armed=e.host.contains(document.activeElement)},restore(){let{opener:t,armed:n}=e;e.armed=!1,n&&t?.isConnected&&t.focus({preventScroll:!0})}}).current;return e}})),lt,ut=e((()=>{q(),et(),lt=()=>{let[e,t]=X(`full-screen`);return{fullScreen:e,toggle:F(()=>{t(e=>!e)},[t])}}})),dt,ft=e((()=>{Q(),q(),dt=({opened:e,close:t})=>{let n=Z({opened:e,close:t}),r=F(e=>{n.opened&&!e.defaultPrevented&&(e.stopPropagation(),n.close())},[]),i=L();j(()=>(i.addEventListener(`request-close`,r),()=>i.removeEventListener(`request-close`,r)),[])}})),pt,mt=e((()=>{q(),pt=e=>{let t=L(),n=t.controls??={};return N(()=>Object.assign(n,e),[e])}})),ht=e((()=>{}));function $(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:gt(e)?Array.from(e):[e]}var gt,_t=e((()=>{ht(),gt=e=>typeof e==`object`&&!!e&&Symbol.iterator in e})),vt,yt=e((()=>{_t(),q(),vt=(e,t,n)=>{let r=I({state:e,send(e){let i=t[r.state]?.transitions[e];if(!i)return null;let a={...n,send:r.send};return $(i.guard).some(e=>e?.(a)===!1)?null:($(t[r.state].teardown).forEach(e=>e?.(a)),r.state=i.to,$(t[i.to].setup).forEach(e=>e?.(a)),i.to)},is(e){return r.state===e}}).current;return j(()=>{let e=r;return()=>{$(t[e.state].teardown).forEach(t=>t?.({...n,send:e.send}))}},[]),r}})),bt,xt=e((()=>{q(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),yt(),bt=({noEscape:e=!1})=>{let[t,n]=X(`opened`),r=F(()=>n(!0),[n]),i=F(()=>n(!1),[n]);dt({opened:t,close:i}),rt({opened:t,noEscape:e,close:i}),tt({opened:t,noEscape:e,close:i});let a=L(),o=st(),s=at(),c=vt(`closed`,{closed:{setup:[()=>{a.dispatchEvent(new Event(`close`,{bubbles:!0})),o.restore()}],transitions:{OPEN:{to:`opening`,guard:[()=>!a.matches(`:popover-open`)]}}},opening:{setup:[o.capture,()=>a.showPopover(),({send:e})=>s.arm(()=>e(`SETTLE`))],teardown:[s.clear],transitions:{OPEN:{to:`opening`},CLOSE:{to:`closing`},SETTLE:{to:`open`}}},open:{setup:[()=>{a.dispatchEvent(new Event(`open`,{bubbles:!0})),o.restore()}],transitions:{CLOSE:{to:`closing`,guard:[()=>a.matches(`:popover-open`)]}}},closing:{setup:[o.arm,()=>a.hidePopover(),({send:e})=>s.arm(()=>e(`SETTLE`))],teardown:[s.clear],transitions:{CLOSE:{to:`closing`},OPEN:{to:`opening`},SETTLE:{to:`closed`}}}});j(()=>a.addEventListener(`transitionend`,e=>{e.target!==a||e.propertyName!==`translate`||c.send(`SETTLE`)}),[]),j(()=>{c.send(t?`OPEN`:`CLOSE`)},[t]);let{fullScreen:l,toggle:u}=lt();return pt({open:r,close:i,toggleFullScreen:u}),{opened:t,open:r,close:i,fullScreen:l,toggleFullScreen:u}}})),St,Ct,wt=e((()=>{Ge(),q(),Ze(),xt(),St=e=>(bt(e),n`<slot></slot>`),Ct=class extends HTMLElement{controls;connectedCallback(){this.hasAttribute(`popover`)||this.setAttribute(`popover`,`manual`),this.hasAttribute(`role`)||this.setAttribute(`role`,`dialog`),this.hasAttribute(`aria-modal`)||this.setAttribute(`aria-modal`,`false`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}open(){this.controls?.open()}close(){this.controls?.close()}toggleFullScreen(){this.controls?.toggleFullScreen()}},customElements.define(`cosmoz-slideout`,K(St,{baseElement:Ct,observedAttributes:[`opened`,`full-screen`,`no-escape`],styleSheets:[J,Xe]}))}));export{E as A,N as C,O as D,k as E,A as O,P as S,j as T,z as _,Ge as a,xe as b,Ue as c,He as d,Le as f,V as g,B as h,Y as i,w as j,T as k,q as l,Ne as m,Ye as n,J as o,Re as p,qe as r,We as s,wt as t,K as u,Ae as v,M as w,F as x,I as y};