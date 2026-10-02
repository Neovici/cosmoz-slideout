import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-DgIR1Z41.js";import{n as i}from"./cosmoz-slideout-Dq4ZDEru.js";import{t as a}from"./cosmoz-button-C77Od3jb.js";import{t as o}from"./cosmoz-slideout-panel-D9m1FsOa.js";import{n as s,r as c}from"./chrome-mQwnEa0m.js";var l,u,d,f,p,m,h,g;e((()=>{a(),n(),i(),o(),c(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`CosmozSlideout/Test`,component:`cosmoz-slideout`,tags:[`!autodocs`]},f={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-slideout
						aria-label="Supplier #4021"
						.opened=${n}
						@opened-changed=${e=>{n=e.detail.value,i()}}
					>
						<cosmoz-slideout-panel>
							<div slot="header">
								<h2>Supplier #4021</h2>
							</div>
							<p>Body</p>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
				>Open labelled</cosmoz-button
			>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open labelled/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`the authored aria-label names the host`,async()=>{l(i.getAttribute(`aria-label`)).toBe(`Supplier #4021`)})}},p={render:()=>{let e=document.createElement(`div`),n=document.createElement(`span`);n.dataset.testid=`open-count`,n.textContent=`0`;let i=0,a=!1,o=()=>t(r`
					<cosmoz-slideout
						.opened=${a}
						@open=${()=>{i+=1,n.textContent=String(i)}}
						@opened-changed=${e=>{a=e.detail.value,o()}}
					>
						<p style="padding: 24px">Body</p>
					</cosmoz-slideout>
				`,e);return o(),r`
			<cosmoz-button variant="primary" @click=${()=>{a=!0,o()}}>
				Open with event
			</cosmoz-button>
			${n}${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open with event/iu})),await n("dispatches `open` after the enter transition settles",async()=>{await u(()=>l(t.querySelector(`[data-testid="open-count"]`).textContent).toBe(`1`))})}},m={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-slideout
						.opened=${n}
						@opened-changed=${e=>{if(e.detail.value===!1){e.preventDefault();return}n=e.detail.value,i()}}
					>
						<cosmoz-slideout-panel><p>Body</p></cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
				>Open guarded</cosmoz-button
			>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open guarded/iu}));let i=t.querySelector(`cosmoz-slideout`);await u(()=>l(i.matches(`:popover-open`)).toBe(!0)),await n(`close is vetoed via opened-changed preventDefault`,async()=>{i.close(),l(i).toHaveAttribute(`opened`),l(i.matches(`:popover-open`)).toBe(!0)})}},h={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-slideout
						.opened=${n}
						@opened-changed=${e=>{n=e.detail.value,i()}}
					>
						<cosmoz-slideout-panel
							@request-close=${e=>e.preventDefault()}
						>
							${s(`Vetoed`,{})}
							<p>Body</p>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
				>Open vetoed X</cosmoz-button
			>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open vetoed x/iu}));let i=t.querySelector(`cosmoz-slideout`);await u(()=>l(i.matches(`:popover-open`)).toBe(!0)),await n(`the slotted close control is vetoed via request-close`,async()=>{i.querySelector(`cosmoz-button[aria-label="Close"]`).click(),l(i).toHaveAttribute(`opened`),l(i.matches(`:popover-open`)).toBe(!0)})}},g=[`ExplicitAriaLabel`,`OpenEvent`,`VetoOpenedChanged`,`VetoRequestClose`]}))();export{f as ExplicitAriaLabel,p as OpenEvent,m as VetoOpenedChanged,h as VetoRequestClose,g as __namedExportsOrder,d as default};