import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-xlGvs9BL.js";import{t as i}from"./cosmoz-slideout-CA0lMRHx.js";import{t as a}from"./cosmoz-button-Bpk_Ofg8.js";import{r as o,t as s}from"./untitled-BPV9M_YC.js";import{t as c}from"./context-Dvv1scj5.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";var f,p,m,h,g,_,v;e((()=>{a(),s(),n(),c(),i(),l(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),h={title:`CosmozSlideout/Shell`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:d("The low-level surface: it owns the popover, the `opened` lifecycle, focus and Escape, and exposes a **single blank slot** - no UI of its own. These stories show driving it directly; for the styled preset, see **CosmozSlideoutPanel**.")},g={parameters:u("The barest usage: bind `opened` and drop content in the default slot. No header, buttons, or footer - Escape (or `close()`) dismisses it."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
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
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open bare slideout
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open bare slideout/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`opens with no built-in controls`,async()=>{await p(()=>f(a.matches(`:popover-open`)).toBe(!0)),f(i.querySelector(`cosmoz-button`)).toBeNull()}),await n(`the bare shell renders no panel UI`,async()=>{f(i.shadowRoot.querySelector(`.header`)).toBeNull(),f(i.shadowRoot.querySelector(`.body`)).toBeNull(),f(i.shadowRoot.querySelector(`.footer`)).toBeNull(),f(i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).toBeNull()}),await n(`Escape is the only dismissal`,async()=>{await null.keyboard(`{Escape}`),await p(()=>f(a.matches(`:popover-open`)).toBe(!1))})}},_={parameters:u("The full-manual path: hand-compose header/body/footer inside the single slot (one wrapper element) when you want custom chrome. For the zero-markup styled version, use `<cosmoz-slideout-panel>`."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
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
                                    @click=${m}
                                >
                                    ${o({slot:`prefix`})}
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
                                <cosmoz-button variant="secondary" @click=${m}>
                                    Cancel
                                </cosmoz-button>
                                <cosmoz-button variant="primary" @click=${m}
                                    >Save</cosmoz-button
                                >
                            </footer>
                        </div>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Edit supplier</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit supplier/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`projects hand-composed chrome into the shell`,async()=>{await p(()=>f(a.matches(`:popover-open`)).toBe(!0)),f(a).toHaveAttribute(`role`,`dialog`),await e.findByText(/Net 30 terms/u)}),await n(`closing keeps the column layout (no content cramming)`,async()=>{[...i.querySelectorAll(`cosmoz-button`)].find(e=>/^save$/iu.test((e.textContent??``).trim())).click(),await p(()=>f(a.matches(`:popover-open`)).toBe(!1)),f(getComputedStyle(a).display).toBe(`flex`),f(getComputedStyle(a).flexDirection).toBe(`column`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('The barest usage: bind \`opened\` and drop content in the default slot. ' + 'No header, buttons, or footer - Escape (or \`close()\`) dismisses it.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Release notes"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
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
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open bare slideout
            </cosmoz-button>
            \${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open bare slideout/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('opens with no built-in controls', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.querySelector('cosmoz-button')).toBeNull();
    });
    await step('the bare shell renders no panel UI', async () => {
      expect(el.shadowRoot!.querySelector('.header')).toBeNull();
      expect(el.shadowRoot!.querySelector('.body')).toBeNull();
      expect(el.shadowRoot!.querySelector('.footer')).toBeNull();
      expect(el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')).toBeNull();
    });
    await step('Escape is the only dismissal', async () => {
      // trusted key event (vitest browser-mode userEvent -> Playwright):
      // CloseWatcher is driven by the UA close-request pipeline and ignores
      // synthetic (dispatchEvent) key events
      await trustedUserEvent.keyboard('{Escape}');
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('The full-manual path: hand-compose header/body/footer inside the single ' + 'slot (one wrapper element) when you want custom chrome. For the ' + 'zero-markup styled version, use \`<cosmoz-slideout-panel>\`.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Edit supplier"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
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
                                    @click=\${closeFrom}
                                >
                                    \${xCloseIcon({
      slot: 'prefix'
    })}
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
                                <cosmoz-button variant="secondary" @click=\${closeFrom}>
                                    Cancel
                                </cosmoz-button>
                                <cosmoz-button variant="primary" @click=\${closeFrom}
                                    >Save</cosmoz-button
                                >
                            </footer>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}
                >Edit supplier</cosmoz-button
            >
            \${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /edit supplier/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('projects hand-composed chrome into the shell', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(surface).toHaveAttribute('role', 'dialog');
      await canvas.findByText(/Net 30 terms/u);
    });
    await step('closing keeps the column layout (no content cramming)', async () => {
      [...el.querySelectorAll<HTMLElement>('cosmoz-button')].find(b => /^save$/iu.test((b.textContent ?? '').trim()))!.click();
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
      // while sliding out (\`:not(:popover-open)\`) the column layout must hold
      expect(getComputedStyle(surface).display).toBe('flex');
      expect(getComputedStyle(surface).flexDirection).toBe('column');
    });
  }
}`,..._.parameters?.docs?.source}}},v=[`Minimal`,`ComposedChrome`]}))();export{_ as ComposedChrome,g as Minimal,v as __namedExportsOrder,h as default};