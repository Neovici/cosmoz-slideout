import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a,l as o,s}from"./src-DKiyH0AA.js";import{t as c}from"./cosmoz-slideout-JpLFWnb0.js";var l,u,d,f,p,m,h;e((()=>{a(),s(),r(),c(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),f={title:`CosmozSlideout/Shell`,component:`cosmoz-slideout`,tags:[`autodocs`]},p={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="Release notes"
                        @close=${()=>i(n,e)}
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
                `,e)}>
                Open bare slideout
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open bare slideout/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`opens with no built-in controls`,async()=>{await u(()=>l(a.matches(`:popover-open`)).toBe(!0)),l(i.querySelector(`cosmoz-button`)).toBeNull()}),await n(`renders no panel chrome without variant="panel"`,async()=>{l(i.shadowRoot.querySelector(`.header`)).toBeNull(),l(i.shadowRoot.querySelector(`.body`)).toBeNull(),l(i.shadowRoot.querySelector(`.footer`)).toBeNull(),l(i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).toBeNull()}),await n(`Escape is the only dismissal and removes it`,async()=>{await r.keyboard(`{Escape}`),await u(()=>l(t.querySelector(`cosmoz-slideout`)).toBeNull())})}},m={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="Edit supplier"
                        @close=${()=>i(n,e)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=${d}
                        >
                            ${o({slot:`prefix`})}
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Edit supplier
                        </h2>
                        <div
                            style="padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
                        >
                            <p style="margin: 0 0 8px;">Acme Industries · Supplier #4021</p>
                            <p style="margin: 0;">Net 30 terms · VAT SE556677889901.</p>
                        </div>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
                        >
                            <cosmoz-button variant="secondary" @click=${d}>
                                Cancel
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=${d}
                                >Save</cosmoz-button
                            >
                        </div>
                    </cosmoz-slideout>
                `,e)}
                >Edit supplier</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit supplier/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`projects header / controls / footer into the shell`,async()=>{await u(()=>l(a.matches(`:popover-open`)).toBe(!0)),l(a).toHaveAttribute(`role`,`dialog`),await e.findByText(/Net 30 terms/u)}),await n(`closing keeps the column layout (no content cramming)`,async()=>{[...i.querySelectorAll(`cosmoz-button`)].find(e=>/^save$/iu.test((e.textContent??``).trim())).click(),l(a.matches(`:popover-open`)).toBe(!1),l(getComputedStyle(a).display).toBe(`flex`),l(getComputedStyle(a).flexDirection).toBe(`column`),await u(()=>l(t.querySelector(`cosmoz-slideout`)).toBeNull())})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Release notes"
                        @close=\${() => render(nothing, mount)}
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
    await step('renders no panel chrome without variant="panel"', async () => {
      expect(el.shadowRoot!.querySelector('.header')).toBeNull();
      expect(el.shadowRoot!.querySelector('.body')).toBeNull();
      expect(el.shadowRoot!.querySelector('.footer')).toBeNull();
      expect(el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')).toBeNull();
    });
    await step('Escape is the only dismissal and removes it', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Edit supplier"
                        @close=\${() => render(nothing, mount)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=\${closeFrom}
                        >
                            \${xCloseIcon({
      slot: 'prefix'
    })}
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Edit supplier
                        </h2>
                        <div
                            style="padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
                        >
                            <p style="margin: 0 0 8px;">Acme Industries · Supplier #4021</p>
                            <p style="margin: 0;">Net 30 terms · VAT SE556677889901.</p>
                        </div>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
                        >
                            <cosmoz-button variant="secondary" @click=\${closeFrom}>
                                Cancel
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=\${closeFrom}
                                >Save</cosmoz-button
                            >
                        </div>
                    </cosmoz-slideout>
                \`, mount);
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
    await step('projects header / controls / footer into the shell', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(surface).toHaveAttribute('role', 'dialog');
      await canvas.findByText(/Net 30 terms/u);
    });
    await step('closing keeps the column layout (no content cramming)', async () => {
      [...el.querySelectorAll<HTMLElement>('cosmoz-button')].find(b => /^save$/iu.test((b.textContent ?? '').trim()))!.click();
      expect(surface.matches(':popover-open')).toBe(false);
      expect(getComputedStyle(surface).display).toBe('flex');
      expect(getComputedStyle(surface).flexDirection).toBe('column');
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Minimal`,`SlottedRegions`]}))();export{p as Minimal,m as SlottedRegions,h as __namedExportsOrder,f as default};