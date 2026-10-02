import{i as e}from"./preload-helper-B45gAKPr.js";import{dt as t,mt as n,pt as r}from"./iframe-BLzy1uNf.js";import{t as i}from"./cosmoz-button-DgQU59TQ.js";import{n as a,r as o,t as s}from"./story-docs-CVcPOcP0.js";import{n as c,t as l}from"./trusted-6AwRJoKi.js";import{r as u,t as d}from"./untitled-C8XDacY5.js";import{t as f}from"./cosmoz-slideout-i9v0B8Lk.js";var p,m,h,g,_,v,y;e((()=>{i(),d(),n(),f(),a(),l(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),g={title:`CosmozSlideout`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:s("The low-level surface: it owns the popover, the `opened` lifecycle, focus and Escape, and exposes a **single blank slot** - no UI of its own. These stories show driving it directly; for the styled preset, see **CosmozSlideoutPanel**.")},_={parameters:o("The barest usage: bind `opened` and drop content in the default slot. No header, buttons, or footer - Escape (or `close()`) dismisses it."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-slideout
						aria-label="Release notes"
						.opened=${n}
						@opened-changed=${e=>{n=e.detail.value,i()}}
					>
						<div
							style="padding: 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
						>
							<p style="margin: 0 0 12px;">
								A bare slideout - no header, no buttons, no footer. Just the
								default surface and whatever you drop inside it.
							</p>
							<p style="margin: 0;">Press <kbd>Esc</kbd> to dismiss it.</p>
						</div>
					</cosmoz-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
				Open bare slideout
			</cosmoz-button>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open bare slideout/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`opens with no built-in controls`,async()=>{await m(()=>p(i.matches(`:popover-open`)).toBe(!0)),p(i.querySelector(`cosmoz-button`)).toBeNull()}),await n(`the bare shell renders no panel UI`,async()=>{p(i.shadowRoot.querySelector(`.header`)).toBeNull(),p(i.shadowRoot.querySelector(`.body`)).toBeNull(),p(i.shadowRoot.querySelector(`.footer`)).toBeNull(),p(i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).toBeNull()}),await n(`Escape is the only dismissal`,async()=>{let e=await c(n);e&&(await e.keyboard(`{Escape}`),await m(()=>p(i.matches(`:popover-open`)).toBe(!1)))})}},v={parameters:o("The full-manual path: hand-compose header/body/footer inside the single slot (one wrapper element) when you want custom chrome. For the zero-markup styled version, use `<cosmoz-slideout-panel>`."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>t(r`
					<cosmoz-slideout
						aria-label="Edit supplier"
						.opened=${n}
						@opened-changed=${e=>{n=e.detail.value,i()}}
					>
						<div style="display: flex; flex-direction: column; height: 100%;">
							<header
								style="position: relative; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								Edit supplier
								<cosmoz-button
									style="position: absolute; top: 8px; right: 8px;"
									variant="tertiary"
									size="sm"
									aria-label="Close"
									@click=${h}
								>
									${u({slot:`prefix`})}
								</cosmoz-button>
							</header>
							<div
								style="flex: 1; min-height: 0; overflow: auto; padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
							>
								<p style="margin: 0 0 8px;">Acme Industries · Supplier #4021</p>
								<p style="margin: 0;">Net 30 terms · VAT SE556677889901.</p>
							</div>
							<footer
								style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
							>
								<cosmoz-button variant="secondary" @click=${h}>
									Cancel
								</cosmoz-button>
								<cosmoz-button variant="primary" @click=${h}
									>Save</cosmoz-button
								>
							</footer>
						</div>
					</cosmoz-slideout>
				`,e);return i(),r`
			<cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
				>Edit supplier</cosmoz-button
			>
			${e}
		`},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit supplier/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`projects hand-composed chrome into the shell`,async()=>{await m(()=>p(i.matches(`:popover-open`)).toBe(!0)),p(i).toHaveAttribute(`role`,`dialog`),await e.findByText(/Net 30 terms/u)}),await n(`closing keeps the column layout (no content cramming)`,async()=>{[...i.querySelectorAll(`cosmoz-button`)].find(e=>/^save$/iu.test((e.textContent??``).trim())).click(),await m(()=>p(i.matches(`:popover-open`)).toBe(!1)),p(getComputedStyle(i).display).toBe(`flex`),p(getComputedStyle(i).flexDirection).toBe(`column`)})}},y=[`Minimal`,`ComposedChrome`]}))();export{v as ComposedChrome,_ as Minimal,y as __namedExportsOrder,g as default};