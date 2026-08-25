import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-CqVTJ8_o.js";import{l as i}from"./src-BVV7ohPG.js";import{r as a,t as o}from"./untitled-DQ4LuDuD.js";import{t as s}from"./cosmoz-slideout-C5rfLSfj.js";var c,l,u,d,f,p,m;e((()=>{i(),o(),n(),s(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),d={title:`CosmozSlideout/Shell`,component:`cosmoz-slideout`,tags:[`autodocs`]},f={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open bare slideout/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`opens with no built-in controls`,async()=>{await l(()=>c(a.matches(`:popover-open`)).toBe(!0)),c(i.querySelector(`cosmoz-button`)).toBeNull()}),await n(`the bare shell renders no panel UI`,async()=>{c(i.shadowRoot.querySelector(`.header`)).toBeNull(),c(i.shadowRoot.querySelector(`.body`)).toBeNull(),c(i.shadowRoot.querySelector(`.footer`)).toBeNull(),c(i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).toBeNull()}),await n(`Escape is the only dismissal`,async()=>{await r.keyboard(`{Escape}`),await l(()=>c(a.matches(`:popover-open`)).toBe(!1))})}},p={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Edit supplier"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=${u}
                        >
                            ${a({slot:`prefix`})}
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
                            <cosmoz-button variant="secondary" @click=${u}>
                                Cancel
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=${u}
                                >Save</cosmoz-button
                            >
                        </div>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Edit supplier</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/edit supplier/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`projects header / controls / footer into the shell`,async()=>{await l(()=>c(a.matches(`:popover-open`)).toBe(!0)),c(a).toHaveAttribute(`role`,`dialog`),await e.findByText(/Net 30 terms/u)}),await n(`closing keeps the column layout (no content cramming)`,async()=>{[...i.querySelectorAll(`cosmoz-button`)].find(e=>/^save$/iu.test((e.textContent??``).trim())).click(),await l(()=>c(a.matches(`:popover-open`)).toBe(!1)),c(getComputedStyle(a).display).toBe(`flex`),c(getComputedStyle(a).flexDirection).toBe(`column`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    await step('projects header / controls / footer into the shell', async () => {
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
}`,...p.parameters?.docs?.source}}},m=[`Minimal`,`SlottedRegions`]}))();export{f as Minimal,p as SlottedRegions,m as __namedExportsOrder,d as default};