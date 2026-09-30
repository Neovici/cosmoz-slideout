import{i as e}from"./preload-helper-B45gAKPr.js";import{ct as t,ft as n,lt as r,ot as i,pt as a,ut as o}from"./iframe-DboistYl.js";function s(e){u=e}function c(){u=null,d=0}function l(){return d++}var u,d,f=e((()=>{d=0})),p,m,h,g,_,v,y,b=e((()=>{p=Symbol(`haunted.phase`),m=Symbol(`haunted.hook`),h=Symbol(`haunted.update`),g=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),y=`haunted.context`})),ee,te=e((()=>{f(),b(),ee=class{update;host;virtual;[m];[_];[v];constructor(e,t){this.update=e,this.host=t,this[m]=new Map,this[_]=[],this[v]=[]}run(e){s(this);let t=e();return c(),t}_runEffects(e){let t=this[e];s(this);for(let e of t)e.call(this);c()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[m].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,x,ce,S=e((()=>{te(),b(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),x=ie(),ce=class e{renderer;host;state;[p];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[p]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(h);x(()=>{this.handlePhase(g,e),x(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[p]=e,e){case g:this.commit(t),this.runEffects(v);return;case h:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),C,le,ue,w,T=e((()=>{C=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?C(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=ue}));function de(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,E(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var E,fe=e((()=>{S(),T(),E=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function pe(e,...t){let n=l(),r=u[m],i=r.get(n);return i||(i=new e(n,u,...t),r.set(n,i)),i.update(...t)}function D(e){return pe.bind(null,e)}var O,k=e((()=>{f(),b(),O=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function me(e){return D(class extends O{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var he=e((()=>{k()}));function ge(e,t){e[_].push(t)}var A,j=e((()=>{b(),he(),A=me(ge)})),_e,ve,ye=e((()=>{k(),b(),j(),_e=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ve=D(class extends O{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ge(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};_e(this.state.host).dispatchEvent(new CustomEvent(y,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function be(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(ve(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var xe=e((()=>{b(),ye()})),M,N=e((()=>{k(),M=D(class extends O{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),P,Se=e((()=>{N(),P=(e,t)=>M(()=>e,t)}));function Ce(e,t){e[v].push(t)}var F,we=e((()=>{b(),he(),F=me(Ce)})),Te=e((()=>{k(),D(class extends O{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ee=e((()=>{k(),D(class extends O{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),De,Oe=e((()=>{k(),De=/([A-Z])/gu,D(class extends O{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(De,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function ke(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function I(e){return M(()=>ke(e),[])}var Ae=e((()=>{N()})),je=e((()=>{k(),D(class extends O{update(){return this.state.host}})}));function Me({render:e}){let t=de(e);return{component:t,createContext:be(t)}}var L=e((()=>{fe(),xe(),Se(),j(),we(),Te(),Ee(),N(),ye(),Oe(),Ae(),je(),k(),S(),te(),re()})),R,Ne,z,B=e((()=>{R={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t}),z=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Pe(e){this._$AN===void 0?this._$AM=e:(H(this),this._$AM=e,U(this))}function Fe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)V(r[e],!1),H(r[e]);else r!=null&&(V(r,!1),H(r));else V(this,e)}var V,H,U,Ie,Le,Re=e((()=>{i(),B(),V=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),V(e,t);return!0},H=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},U=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ie(t)}},Ie=e=>{e.type==R.CHILD&&(e._$AP??=Fe,e._$AQ??=Pe)},Le=class extends z{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),U(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(V(this,e),H(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function ze(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(W.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?ze(e,t):e.teardown();break}else if(W.call(a.addedNodes,n.nextSibling)){i.disconnect(),ze(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var W,Be=e((()=>{B(),a(),Re(),S(),W=Array.prototype.includes})),G,Ve,He=e((()=>{a(),L(),Be(),{component:G,createContext:Ve}=Me({render:o})})),K=e((()=>{He(),L(),T(),L()})),q,J=e((()=>{a(),q=e=>e??r})),Y,Ue=e((()=>{K(),Y=C(w`
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
`)})),We=e((()=>{K()})),X,Ge=e((()=>{X=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),Ke=e((()=>{})),qe=e((()=>{We(),Ge(),Ke()})),Je,Ye=e((()=>{qe(),Je=X`
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
`})),Xe,Ze,Qe=e((()=>{K(),Xe=e=>e.replace(/-([a-z])/gu,(e,t)=>t.toUpperCase()),Ze=(e,t,n=`${t}-changed`)=>{let r=Xe(t),i=()=>!!e[r],a=i();return F(()=>{e.toggleAttribute(t,i())},[a]),[a,r=>{if(r===i())return!1;let a=new CustomEvent(n,{detail:{value:r},cancelable:!0,bubbles:!0});return e.dispatchEvent(a),a.defaultPrevented?!1:(e.toggleAttribute(t,r),!0)}]}})),Z,$e=e((()=>{Z=(e,t=80)=>{let n=getComputedStyle(e),r=e=>e.split(`,`).map(e=>parseFloat(e)*1e3||0),i=r(n.transitionDuration),a=r(n.transitionDelay);return i.reduce((e,t,n)=>Math.max(e,t+(a[n]??0)),0)+t}})),Q,et,tt,nt=e((()=>{K(),Qe(),$e(),Q=e=>e.shadowRoot?.querySelector(`[popover]`)??void 0,et=e=>{e?.isConnected&&e.focus({preventScroll:!0})},tt=e=>{let[t,n]=Ze(e,`opened`),r=I({opener:null,shouldRestore:!1,closing:!1,opening:!1,closeTimer:0,openTimer:0,watcher:null}),i=P(()=>{let t=r.current;t.opening&&(t.opening=!1,window.clearTimeout(t.openTimer),e.dispatchEvent(new Event(`open`,{bubbles:!0})))},[]),a=P(()=>{let t=r.current;t.closing&&(t.closing=!1,window.clearTimeout(t.closeTimer),t.watcher?.destroy(),t.watcher=null,t.shouldRestore&&et(t.opener),e.dispatchEvent(new Event(`close`,{bubbles:!0})),e.onClose?.())},[]),o=P(()=>{e.opened||n(!0)},[]),s=P(()=>{e.opened&&n(!1)},[]);Object.assign(e,{open:o,close:s});let c=P(e=>{let t=r.current;if(t.watcher?.destroy(),!e){t.watcher=null;return}e.oncancel=e=>{n(!1)||e.preventDefault()},t.watcher=e},[n]),l=P(t=>{let n=r.current;n.opener=document.activeElement,n.closing=!1,window.clearTimeout(n.closeTimer),t.matches(`:popover-open`)||t.showPopover(),c(!e.noEscape&&`CloseWatcher`in window?new CloseWatcher:null),e.noAutofocus||t.focus({preventScroll:!0}),n.opening=!0,window.clearTimeout(n.openTimer),n.openTimer=window.setTimeout(i,Z(t))},[c]),u=P(t=>{let n=r.current;n.opening=!1,window.clearTimeout(n.openTimer),t.matches(`:popover-open`)&&(n.shouldRestore=e.contains(document.activeElement),n.closing=!0,window.clearTimeout(n.closeTimer),n.closeTimer=window.setTimeout(a,Z(t)),t.hidePopover())},[]);return A(()=>{let t=Q(e);if(!t)return;let n=e=>{e.target!==t||e.propertyName!==`translate`||(r.current.closing?a():i())},o=t=>{t.key===`Escape`&&!e.noEscape&&e.opened&&(t.preventDefault(),s())},l=t=>{e.opened&&!t.defaultPrevented&&(t.stopPropagation(),s())};return t.addEventListener(`transitionend`,n),`CloseWatcher`in window||document.addEventListener(`keydown`,o),e.addEventListener(`request-close`,l),()=>{window.clearTimeout(r.current.closeTimer),window.clearTimeout(r.current.openTimer),c(null),t.removeEventListener(`transitionend`,n),`CloseWatcher`in window||document.removeEventListener(`keydown`,o),e.removeEventListener(`request-close`,l)}},[c]),A(()=>{let n=Q(e);n&&(t?l(n):u(n))},[t]),{close:s,open:o}}})),rt,it=e((()=>{K(),rt=e=>{let t=!!e.fullScreen,n=P(()=>{e.toggleAttribute(`full-screen`)},[]);e.toggleFullScreen=n,F(()=>{e.toggleAttribute(`full-screen`,t)},[t]);let r=I(!1);return A(()=>{if(!r.current){r.current=!0;return}e.dispatchEvent(new CustomEvent(`full-screen-changed`,{detail:{fullScreen:t},bubbles:!0}))},[t]),{fullScreen:t,toggle:n}}})),at,ot,st=e((()=>{K(),J(),at=(e,t)=>n`
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
`,ot=(e,t)=>n`
	<cosmoz-slideout-panel
		class=${q(e.class)}
		style=${q(e.style)}
	>
		${t}
	</cosmoz-slideout-panel>
`})),ct,lt,$,ut,dt=e((()=>{Ue(),K(),J(),Ye(),nt(),it(),st(),Qe(),ct=e=>{let{close:t,open:n}=tt(e),{fullScreen:r,toggle:i}=rt(e);return{close:t,open:n,fullScreen:r,toggleFullScreen:i}},lt=(e,t)=>n`
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
`,$=[Y,Je],ut=[`opened`,`aria-label`,`aria-labelledby`,`full-screen`,`no-autofocus`,`no-escape`]})),ft=e((()=>{K(),dt(),customElements.define(`cosmoz-slideout`,G(e=>(ct(e),lt(e,n`<slot></slot>`)),{observedAttributes:[...ut],styleSheets:$}))}));export{D as A,Se as C,j as D,M as E,w as M,T as N,A as O,C as P,I as S,N as T,Ne as _,qe as a,R as b,Ue as c,q as d,K as f,Re as g,Le as h,ot as i,k as j,O as k,Y as l,He as m,st as n,Ge as o,G as p,at as r,X as s,ft as t,J as u,z as v,P as w,Ae as x,B as y};