import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-DoR0vQvp.js";import{d as i,l as a,u as o}from"./src-BPtKnL2i.js";import{t as s}from"./cosmoz-slideout-panel-JPaM_H4p.js";import{n as c,r as l,t as u}from"./arg-types-xF7-es9m.js";var d,f,p,m,h,g,_,v,y;e((()=>{a(),n(),o(),s(),c(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=e=>e.currentTarget.closest(`cosmoz-slideout-panel`).close(),m={title:`CosmozSlideoutPanel`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],argTypes:l,args:u},h={args:{heading:`Acme Industries`,subtitle:`Supplier #4021 · Stockholm, SE`,closeable:!0},render:e=>{let n=document.createElement(`div`),a=!1,o=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${a}
                        heading=${i(e.heading)}
                        subtitle=${i(e.subtitle)}
                        aria-label=${i(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        <p>
                            Preferred vendor for packaging materials since 2019. Net 30 terms,
                            VAT SE556677889901.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button variant="secondary" @click=${p}>
                                Cancel
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=${p}>
                                Save
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                `,n);return o(),t`
            <cosmoz-button variant="primary" @click=${()=>{a=!0,o()}}>Open panel</cosmoz-button>
            ${n}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`[popover]`);await n(`opens with built-in header UI and footer actions`,async()=>{await f(()=>d(a.matches(`:popover-open`)).toBe(!0)),d(i.shadowRoot.querySelector(`.heading`).textContent).toMatch(/Acme Industries/u),d(i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).not.toBeNull(),await f(()=>d(i.shadowRoot.querySelector(`.footer`).hidden).toBe(!1))}),await n(`the built-in close button dismisses the panel`,async()=>{i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await f(()=>d(a.matches(`:popover-open`)).toBe(!1))})}},g={args:{heading:void 0,subtitle:void 0,"aria-label":`Customer health`,closeable:!0},render:e=>{let n=document.createElement(`div`),a=!1,o=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${a}
                        heading=${i(e.heading)}
                        subtitle=${i(e.subtitle)}
                        aria-label=${i(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        <div
                            slot="header"
                            style="display: flex; flex-direction: column; gap: 4px;"
                        >
                            <strong>Customer health</strong>
                            <span style="color: var(--cz-color-text-tertiary);">
                                Renewal risk · Q3
                            </span>
                        </div>
                        <p>
                            The title slot replaces the generated heading while the panel
                            keeps its padding, close button, and body layout.
                        </p>
                    </cosmoz-slideout-panel>
                `,n);return o(),t`
            <cosmoz-button variant="primary" @click=${()=>{a=!0,o()}}>
                Open custom header
            </cosmoz-button>
            ${n}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open custom header/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`.header`);await n(`projects slotted title content inside the panel header`,async()=>{await f(()=>d(a.hidden).toBe(!1)),d(i.shadowRoot.querySelector(`.heading`)).toBeNull(),await e.findByShadowText(/Customer health/u)})}},_={args:{heading:void 0,subtitle:void 0,"aria-label":`Notes`,closeable:!1},render:e=>{let n=document.createElement(`div`),a=!1,o=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${a}
                        heading=${i(e.heading)}
                        subtitle=${i(e.subtitle)}
                        aria-label=${i(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        <p>
                            A panel can be just a right-hand reading surface. With no heading,
                            close button, custom header, or footer, the UI stays out of the
                            way - <code>&lt;cosmoz-slideout-panel&gt;</code> alone is what
                            gives the body its padding and gap, independent of any other
                            affordance.
                        </p>
                        <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                    </cosmoz-slideout-panel>
                `,n);return o(),t`
            <cosmoz-button variant="primary" @click=${()=>{a=!0,o()}}>Open notes</cosmoz-button>
            ${n}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open notes/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`[popover]`);await n(`hides empty header and footer regions`,async()=>{await f(()=>d(a.matches(`:popover-open`)).toBe(!0)),d(i.shadowRoot.querySelector(`.header`).hidden).toBe(!0),d(i.shadowRoot.querySelector(`.footer`).hidden).toBe(!0),d(i.shadowRoot.querySelector(`.body`)).not.toBeNull()})}},v={args:{heading:`Activity`,subtitle:`Latest supplier events`,closeable:!0,width:`min(520px, 100vw)`},render:e=>{let n=document.createElement(`div`),a=Array.from({length:50},(e,t)=>t+1),o=!1,s=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${o}
                        heading=${i(e.heading)}
                        subtitle=${i(e.subtitle)}
                        aria-label=${i(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @opened-changed=${e=>{o=e.detail.value,s()}}
                    >
                        ${a.map(e=>t`
                                <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                    <strong style="color: var(--cz-color-text-primary);">
                                        Event ${e}
                                    </strong>
                                    · Invoice ${4200+e} matched automatically.
                                </p>
                            `)}
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button variant="secondary" @click=${p}>
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                `,n);return s(),t`
            <cosmoz-button variant="primary" @click=${()=>{o=!0,s()}}>
                Open activity
            </cosmoz-button>
            ${n}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open activity/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`.content`),o=i.shadowRoot.querySelector(`.header`),s=i.shadowRoot.querySelector(`.footer`);await n(`scrolls the body while header and footer stay outside it`,async()=>{await f(()=>d(a.scrollHeight).toBeGreaterThan(0)),d(o.closest(`.content`)).toBeNull(),d(s.closest(`.content`)).toBeNull()})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Acme Industries',
    subtitle: 'Supplier #4021 · Stockholm, SE',
    closeable: true
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <p>
                            Preferred vendor for packaging materials since 2019. Net 30 terms,
                            VAT SE556677889901.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button variant="secondary" @click=\${closePanel}>
                                Cancel
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=\${closePanel}>
                                Save
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>Open panel</cosmoz-button>
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
      name: /open panel/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('opens with built-in header UI and footer actions', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.querySelector('.heading')!.textContent).toMatch(/Acme Industries/u);
      expect(el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')).not.toBeNull();
      await waitFor(() => expect(el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(false));
    });
    await step('the built-in close button dismisses the panel', async () => {
      el.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Customer health',
    closeable: true
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <div
                            slot="header"
                            style="display: flex; flex-direction: column; gap: 4px;"
                        >
                            <strong>Customer health</strong>
                            <span style="color: var(--cz-color-text-tertiary);">
                                Renewal risk · Q3
                            </span>
                        </div>
                        <p>
                            The title slot replaces the generated heading while the panel
                            keeps its padding, close button, and body layout.
                        </p>
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open custom header
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
      name: /open custom header/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;
    await step('projects slotted title content inside the panel header', async () => {
      await waitFor(() => expect(header.hidden).toBe(false));
      expect(el.shadowRoot!.querySelector('.heading')).toBeNull();
      await canvas.findByShadowText(/Customer health/u);
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Notes',
    closeable: false
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <p>
                            A panel can be just a right-hand reading surface. With no heading,
                            close button, custom header, or footer, the UI stays out of the
                            way - <code>&lt;cosmoz-slideout-panel&gt;</code> alone is what
                            gives the body its padding and gap, independent of any other
                            affordance.
                        </p>
                        <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>Open notes</cosmoz-button>
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
      name: /open notes/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('hides empty header and footer regions', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.querySelector<HTMLElement>('.header')!.hidden).toBe(true);
      expect(el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(true);
      expect(el.shadowRoot!.querySelector('.body')).not.toBeNull();
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Activity',
    subtitle: 'Latest supplier events',
    closeable: true,
    width: 'min(520px, 100vw)'
  },
  render: args => {
    const mount = document.createElement('div');
    const rows = Array.from({
      length: 50
    }, (_, i) => i + 1);
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        \${rows.map(row => html\`
                                <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                    <strong style="color: var(--cz-color-text-primary);">
                                        Event \${row}
                                    </strong>
                                    · Invoice \${4200 + row} matched automatically.
                                </p>
                            \`)}
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button variant="secondary" @click=\${closePanel}>
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open activity
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
      name: /open activity/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    const content = el.shadowRoot!.querySelector<HTMLElement>('.content')!;
    const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;
    const footer = el.shadowRoot!.querySelector<HTMLElement>('.footer')!;
    await step('scrolls the body while header and footer stay outside it', async () => {
      await waitFor(() => expect(content.scrollHeight).toBeGreaterThan(0));
      expect(header.closest('.content')).toBeNull();
      expect(footer.closest('.content')).toBeNull();
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`CustomHeader`,`BodyOnly`,`ScrollableContent`]}))();export{_ as BodyOnly,g as CustomHeader,h as Default,v as ScrollableContent,y as __namedExportsOrder,m as default};