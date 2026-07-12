import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a,m as o,p as s}from"./src-DKiyH0AA.js";import{t as c}from"./cosmoz-slideout-JpLFWnb0.js";import{n as l,r as u,t as d}from"./arg-types-IejsG4U-.js";var f,p,m,h,g,_,v,y,b;e((()=>{a(),r(),s(),c(),l(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),h={title:`CosmozSlideout/Panel Mode`,component:`cosmoz-slideout`,tags:[`autodocs`],argTypes:u,args:d},g={args:{heading:`Acme Industries`,subtitle:`Supplier #4021 · Stockholm, SE`,closeable:!0},render:e=>{let r=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant=${o(e.variant||void 0)}
                        heading=${o(e.heading)}
                        subtitle=${o(e.subtitle)}
                        aria-label=${o(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @close=${()=>i(n,r)}
                    >
                        <p>
                            Preferred vendor for packaging materials since 2019. Net 30 terms,
                            VAT SE556677889901.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button variant="secondary" @click=${m}>
                                Cancel
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=${m}>
                                Save
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,r)}>Open panel</cosmoz-button>
            ${r}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`opens with built-in header chrome and footer actions`,async()=>{await p(()=>f(a.matches(`:popover-open`)).toBe(!0)),f(i.shadowRoot.querySelector(`.heading`).textContent).toMatch(/Acme Industries/u),f(i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).not.toBeNull(),await p(()=>f(i.shadowRoot.querySelector(`.footer`).hidden).toBe(!1))}),await n(`the built-in close button dismisses the panel`,async()=>{i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await p(()=>f(t.querySelector(`cosmoz-slideout`)).toBeNull())})}},_={args:{heading:void 0,subtitle:void 0,"aria-label":`Customer health`,closeable:!0},render:e=>{let r=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant=${o(e.variant||void 0)}
                        heading=${o(e.heading)}
                        subtitle=${o(e.subtitle)}
                        aria-label=${o(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @close=${()=>i(n,r)}
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
                    </cosmoz-slideout>
                `,r)}>
                Open custom header
            </cosmoz-button>
            ${r}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open custom header/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`.header`);await n(`projects slotted title content inside the panel header`,async()=>{await p(()=>f(a.hidden).toBe(!1)),f(i.shadowRoot.querySelector(`.heading`)).toBeNull(),await e.findByShadowText(/Customer health/u)})}},v={args:{heading:void 0,subtitle:void 0,"aria-label":`Notes`,closeable:!1},render:e=>{let r=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant=${o(e.variant||void 0)}
                        heading=${o(e.heading)}
                        subtitle=${o(e.subtitle)}
                        aria-label=${o(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @close=${()=>i(n,r)}
                    >
                        <p>
                            A panel can be just a right-hand reading surface. With no heading,
                            close button, custom header, or footer, the chrome stays out of
                            the way - <code>variant="panel"</code> alone is what gives the
                            body its padding and gap, independent of any other affordance.
                        </p>
                        <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                    </cosmoz-slideout>
                `,r)}>Open notes</cosmoz-button>
            ${r}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open notes/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`hides empty header and footer regions`,async()=>{await p(()=>f(a.matches(`:popover-open`)).toBe(!0)),f(i.shadowRoot.querySelector(`.header`).hidden).toBe(!0),f(i.shadowRoot.querySelector(`.footer`).hidden).toBe(!0),f(i.shadowRoot.querySelector(`.body`)).not.toBeNull()})}},y={args:{heading:`Activity`,subtitle:`Latest supplier events`,closeable:!0,width:`min(520px, 100vw)`},render:e=>{let r=document.createElement(`div`),a=Array.from({length:18},(e,t)=>t+1);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant=${o(e.variant||void 0)}
                        heading=${o(e.heading)}
                        subtitle=${o(e.subtitle)}
                        aria-label=${o(e[`aria-label`])}
                        ?closeable=${e.closeable}
                        ?loading=${e.loading}
                        ?full-screen=${e[`full-screen`]}
                        ?no-escape=${e[`no-escape`]}
                        ?no-autofocus=${e[`no-autofocus`]}
                        style=${`--cosmoz-slideout-width: ${e.width};`}
                        @close=${()=>i(n,r)}
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
                            <cosmoz-button variant="secondary" @click=${m}>
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,r)}>
                Open activity
            </cosmoz-button>
            ${r}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open activity/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`.content`),o=i.shadowRoot.querySelector(`.header`),s=i.shadowRoot.querySelector(`.footer`);await n(`scrolls the body while header and footer stay outside it`,async()=>{await p(()=>f(a.scrollHeight).toBeGreaterThan(0)),f(o.closest(`.content`)).toBeNull(),f(s.closest(`.content`)).toBeNull()})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Acme Industries',
    subtitle: 'Supplier #4021 · Stockholm, SE',
    closeable: true
  },
  render: args => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant=\${ifDefined(args.variant as string || undefined)}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @close=\${() => render(nothing, mount)}
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
                    </cosmoz-slideout>
                \`, mount);
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
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('opens with built-in header chrome and footer actions', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.querySelector('.heading')!.textContent).toMatch(/Acme Industries/u);
      expect(el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')).not.toBeNull();
      await waitFor(() => expect(el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(false));
    });
    await step('the built-in close button dismisses the panel', async () => {
      el.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Customer health',
    closeable: true
  },
  render: args => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant=\${ifDefined(args.variant as string || undefined)}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @close=\${() => render(nothing, mount)}
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
                    </cosmoz-slideout>
                \`, mount);
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
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;
    await step('projects slotted title content inside the panel header', async () => {
      await waitFor(() => expect(header.hidden).toBe(false));
      expect(el.shadowRoot!.querySelector('.heading')).toBeNull();
      await canvas.findByShadowText(/Customer health/u);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Notes',
    closeable: false
  },
  render: args => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant=\${ifDefined(args.variant as string || undefined)}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>
                            A panel can be just a right-hand reading surface. With no heading,
                            close button, custom header, or footer, the chrome stays out of
                            the way - <code>variant="panel"</code> alone is what gives the
                            body its padding and gap, independent of any other affordance.
                        </p>
                        <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                    </cosmoz-slideout>
                \`, mount);
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
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('hides empty header and footer regions', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.querySelector<HTMLElement>('.header')!.hidden).toBe(true);
      expect(el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(true);
      expect(el.shadowRoot!.querySelector('.body')).not.toBeNull();
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Activity',
    subtitle: 'Latest supplier events',
    closeable: true,
    width: 'min(520px, 100vw)'
  },
  render: args => {
    const mount = document.createElement('div');
    const rows = Array.from({
      length: 18
    }, (_, i) => i + 1);
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant=\${ifDefined(args.variant as string || undefined)}
                        heading=\${ifDefined(args.heading as string | undefined)}
                        subtitle=\${ifDefined(args.subtitle as string | undefined)}
                        aria-label=\${ifDefined(args['aria-label'] as string | undefined)}
                        ?closeable=\${args.closeable}
                        ?loading=\${args.loading}
                        ?full-screen=\${args['full-screen']}
                        ?no-escape=\${args['no-escape']}
                        ?no-autofocus=\${args['no-autofocus']}
                        style=\${\`--cosmoz-slideout-width: \${args.width};\`}
                        @close=\${() => render(nothing, mount)}
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
                    </cosmoz-slideout>
                \`, mount);
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
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const content = el.shadowRoot!.querySelector<HTMLElement>('.content')!;
    const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;
    const footer = el.shadowRoot!.querySelector<HTMLElement>('.footer')!;
    await step('scrolls the body while header and footer stay outside it', async () => {
      await waitFor(() => expect(content.scrollHeight).toBeGreaterThan(0));
      expect(header.closest('.content')).toBeNull();
      expect(footer.closest('.content')).toBeNull();
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`CustomHeader`,`BodyOnly`,`ScrollableContent`]}))();export{v as BodyOnly,_ as CustomHeader,g as Default,y as ScrollableContent,b as __namedExportsOrder,h as default};