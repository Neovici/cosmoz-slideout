import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-DWBJWh4P.js";import{a as i,o as a,s as o,t as s}from"./cosmoz-slideout-C7zBUPKs.js";import{t as c}from"./cosmoz-slideout-panel-CGzjyQPH.js";import{n as l,r as u,t as d}from"./arg-types-D3pNWIEf.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{i(),n(),a(),s(),c(),l(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m=e=>e.currentTarget.closest(`cosmoz-slideout`)?.close(),h=(e,n,r,i)=>t`
    <cosmoz-slideout
        .opened=${n}
        aria-label=${o(e[`aria-label`])}
        ?full-screen=${e[`full-screen`]}
        ?no-escape=${e[`no-escape`]}
        ?no-autofocus=${e[`no-autofocus`]}
        style=${`--cosmoz-slideout-width: ${e.width};`}
        @opened-changed=${e=>r(e.detail.value)}
    >
        <cosmoz-slideout-panel
            heading=${o(e.heading)}
            subtitle=${o(e.subtitle)}
            ?closeable=${e.closeable}
            ?loading=${e.loading}
        >
            ${i}
        </cosmoz-slideout-panel>
    </cosmoz-slideout>
`,g=(e,n,r)=>t`
    <cosmoz-button variant="primary" @click=${n}>${e}</cosmoz-button>
    ${r}
`,_={title:`CosmozSlideoutPanel`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],argTypes:u,args:d},v={args:{heading:`Acme Industries`,subtitle:`Supplier #4021 · Stockholm, SE`,closeable:!0},render:e=>{let n=document.createElement(`div`),i=!1,a=()=>r(h(e,i,e=>{i=e,a()},t`
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
                    `),n);return a(),g(`Open panel`,()=>{i=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`),o=i.shadowRoot.querySelector(`[popover]`);await n(`opens with built-in header UI and footer actions`,async()=>{await p(()=>f(o.matches(`:popover-open`)).toBe(!0)),f(a.shadowRoot.querySelector(`.heading`).textContent).toMatch(/Acme Industries/u),f(a.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`)).not.toBeNull(),await p(()=>f(a.shadowRoot.querySelector(`.footer`).hidden).toBe(!1))}),await n(`the built-in close button dismisses the panel`,async()=>{a.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await p(()=>f(o.matches(`:popover-open`)).toBe(!1))})}},y={args:{heading:void 0,subtitle:void 0,"aria-label":`Customer health`,closeable:!0},render:e=>{let n=document.createElement(`div`),i=!1,a=()=>r(h(e,i,e=>{i=e,a()},t`
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
                    `),n);return a(),g(`Open custom header`,()=>{i=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open custom header/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`.header`);await n(`projects slotted title content inside the panel header`,async()=>{await p(()=>f(a.hidden).toBe(!1)),f(i.shadowRoot.querySelector(`.heading`)).toBeNull(),await e.findByShadowText(/Customer health/u)})}},b={args:{heading:void 0,subtitle:void 0,"aria-label":`Notes`,closeable:!1},render:e=>{let n=document.createElement(`div`),i=!1,a=()=>r(h(e,i,e=>{i=e,a()},t`
                        <p>
                            A panel can be just a right-hand reading surface. With no heading,
                            close button, custom header, or footer, the UI stays out of the
                            way - <code>&lt;cosmoz-slideout-panel&gt;</code> alone is what
                            gives the body its padding and gap, independent of any other
                            affordance.
                        </p>
                        <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                    `),n);return a(),g(`Open notes`,()=>{i=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open notes/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`),o=i.shadowRoot.querySelector(`[popover]`);await n(`hides empty header and footer regions`,async()=>{await p(()=>f(o.matches(`:popover-open`)).toBe(!0)),f(a.shadowRoot.querySelector(`.header`).hidden).toBe(!0),f(a.shadowRoot.querySelector(`.footer`).hidden).toBe(!0),f(a.shadowRoot.querySelector(`.body`)).not.toBeNull()})}},x={args:{heading:`Activity`,subtitle:`Latest supplier events`,closeable:!0,width:`min(520px, 100vw)`},render:e=>{let n=document.createElement(`div`),i=Array.from({length:50},(e,t)=>t+1),a=!1,o=()=>r(h(e,a,e=>{a=e,o()},t`
                        ${i.map(e=>t`
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
                    `),n);return o(),g(`Open activity`,()=>{a=!0,o()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open activity/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`.body`),o=i.shadowRoot.querySelector(`.header`),s=i.shadowRoot.querySelector(`.footer`);await n(`scrolls the body while header and footer stay outside it`,async()=>{await p(()=>f(a.scrollHeight).toBeGreaterThan(0)),f(o.closest(`.body`)).toBeNull(),f(s.closest(`.body`)).toBeNull()})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Acme Industries',
    subtitle: 'Supplier #4021 · Stockholm, SE',
    closeable: true
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, html\`
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
                    \`), mount);
    rerender();
    return trigger('Open panel', () => {
      opened = true;
      rerender();
    }, mount);
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
    const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;
    const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
    const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('opens with built-in header UI and footer actions', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(panel.shadowRoot!.querySelector('.heading')!.textContent).toMatch(/Acme Industries/u);
      expect(panel.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')).not.toBeNull();
      await waitFor(() => expect(panel.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(false));
    });
    await step('the built-in close button dismisses the panel', async () => {
      panel.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Customer health',
    closeable: true
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, html\`
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
                    \`), mount);
    rerender();
    return trigger('Open custom header', () => {
      opened = true;
      rerender();
    }, mount);
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
    const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
    const header = panel.shadowRoot!.querySelector<HTMLElement>('.header')!;
    await step('projects slotted title content inside the panel header', async () => {
      await waitFor(() => expect(header.hidden).toBe(false));
      expect(panel.shadowRoot!.querySelector('.heading')).toBeNull();
      await canvas.findByShadowText(/Customer health/u);
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Notes',
    closeable: false
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, html\`
                        <p>
                            A panel can be just a right-hand reading surface. With no heading,
                            close button, custom header, or footer, the UI stays out of the
                            way - <code>&lt;cosmoz-slideout-panel&gt;</code> alone is what
                            gives the body its padding and gap, independent of any other
                            affordance.
                        </p>
                        <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                    \`), mount);
    rerender();
    return trigger('Open notes', () => {
      opened = true;
      rerender();
    }, mount);
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
    const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;
    const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
    const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('hides empty header and footer regions', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(panel.shadowRoot!.querySelector<HTMLElement>('.header')!.hidden).toBe(true);
      expect(panel.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(true);
      expect(panel.shadowRoot!.querySelector('.body')).not.toBeNull();
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, html\`
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
                    \`), mount);
    rerender();
    return trigger('Open activity', () => {
      opened = true;
      rerender();
    }, mount);
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
    const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
    const body = panel.shadowRoot!.querySelector<HTMLElement>('.body')!;
    const header = panel.shadowRoot!.querySelector<HTMLElement>('.header')!;
    const footer = panel.shadowRoot!.querySelector<HTMLElement>('.footer')!;
    await step('scrolls the body while header and footer stay outside it', async () => {
      await waitFor(() => expect(body.scrollHeight).toBeGreaterThan(0));
      expect(header.closest('.body')).toBeNull();
      expect(footer.closest('.body')).toBeNull();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CustomHeader`,`BodyOnly`,`ScrollableContent`]}))();export{b as BodyOnly,y as CustomHeader,v as Default,x as ScrollableContent,S as __namedExportsOrder,_ as default};