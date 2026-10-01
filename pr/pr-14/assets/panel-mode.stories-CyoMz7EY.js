import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-DCLQ4M3O.js";import{c as a,s as o,t as s}from"./cosmoz-slideout-qYIlw5YL.js";import{t as c}from"./cosmoz-button-gbJVCW0o.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";import{t as f}from"./cosmoz-slideout-panel-CtCd-coA.js";import{i as p,n as m,r as h,t as g}from"./chrome-BvP0t47c.js";import{n as _,r as v,t as y}from"./arg-types-CXxcK3Un.js";var b,x,S,C,w,T,E,D,O,k;e((()=>{c(),r(),o(),s(),f(),_(),h(),l(),{expect:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S=(e,r,i,o)=>t`
    <cosmoz-slideout
        .opened=${r}
        aria-label=${a(e[`aria-label`])}
        ?full-screen=${e[`full-screen`]}
        ?no-escape=${e[`no-escape`]}
        style=${`--cosmoz-slideout-width: ${e.width};`}
        @opened-changed=${e=>i(e.detail.value)}
    >
        <cosmoz-slideout-panel>
            ${o.header?m(o.header.title,{subtitle:o.header.subtitle}):n}
            ${o.body}
        </cosmoz-slideout-panel>
    </cosmoz-slideout>
`,C=(e,n,r)=>t`
    <cosmoz-button variant="primary" @click=${n}>${e}</cosmoz-button>
    ${r}
`,w={title:`CosmozSlideoutPanel`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],argTypes:v,args:y,parameters:d("Layout chrome nested inside a `<cosmoz-slideout>`: header/body/footer regions with token-backed spacing - no properties. Slot your header (with a close control dispatching `request-close`) into `header`, content into the default slot, and actions into `footer`.")},T={parameters:u(`The canonical pairing: slotted header, body, footer actions.`),args:{heading:`Acme Industries`,subtitle:`Supplier #4021 · Stockholm, SE`},render:e=>{let n=document.createElement(`div`),r=!1,a=()=>i(S(e,r,e=>{r=e,a()},{header:{title:e.heading,subtitle:e.subtitle},body:t`
                            <p>
                                Preferred vendor for packaging materials since 2019. Net 30
                                terms, VAT SE556677889901.
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
                        `}),n);return a(),C(`Open panel`,()=>{r=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`);await n(`opens with the slotted header and footer actions`,async()=>{await x(()=>b(i.matches(`:popover-open`)).toBe(!0)),await e.findByShadowText(/Acme Industries/u),b(a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`)).not.toBeNull(),await x(()=>b(a.shadowRoot.querySelector(`[part="footer"]`).querySelector(`slot[name="footer"]`).assignedElements().length).toBeGreaterThan(0))}),await n(`the slotted close control dismisses the panel`,async()=>{a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`).assignedElements()[0].querySelector(`cosmoz-button[aria-label="Close"]`).click(),await x(()=>b(i.matches(`:popover-open`)).toBe(!1))})}},E={parameters:u(`The header is whatever you slot in.`),args:{heading:`Customer health`,subtitle:`Renewal risk · Q3`,"aria-label":`Customer health`},render:e=>{let n=document.createElement(`div`),r=!1,a=()=>i(S(e,r,e=>{r=e,a()},{header:{title:e.heading,subtitle:e.subtitle},body:t`
                            <p>
                                The header region projects whatever you slot in - a header with
                                its own close control.
                            </p>
                        `}),n);return a(),C(`Open custom header`,()=>{r=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open custom header/iu}));let i=t.querySelector(`cosmoz-slideout-panel`).shadowRoot.querySelector(`[part="header"] > slot`);await n(`projects slotted header content`,async()=>{await x(()=>b(i.assignedElements().length).toBeGreaterThan(0)),await e.findByShadowText(/Customer health/u)})}},D={parameters:u(`Body-only: empty header slot; the panel just gives its body padding and gap.`),args:{heading:void 0,subtitle:void 0,"aria-label":`Notes`},render:e=>{let n=document.createElement(`div`),r=!1,a=()=>i(S(e,r,e=>{r=e,a()},{header:void 0,body:t`
                            <p>
                                A panel can be just a right-hand reading surface. With the
                                header slot empty and nothing in the footer, the regions stay
                                out of the way - <code>&lt;cosmoz-slideout-panel&gt;</code>
                                alone is what gives the body its padding and gap, independent of
                                any other affordance.
                            </p>
                            <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                        `}),n);return a(),C(`Open notes`,()=>{r=!0,a()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open notes/iu}));let i=t.querySelector(`cosmoz-slideout`),a=t.querySelector(`cosmoz-slideout-panel`);await n(`header region stays present but empty`,async()=>{await x(()=>b(i.matches(`:popover-open`)).toBe(!0)),b(a.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot[name="header"]`).assignedElements().length).toBe(0),b(a.shadowRoot.querySelector(`.body`)).not.toBeNull()})}},O={parameters:u(`Long content scrolls within the body. Header and footer stay fixed.`),args:{heading:`Activity`,subtitle:`Latest supplier events`,width:`min(520px, 100vw)`},render:e=>{let n=document.createElement(`div`),r=Array.from({length:50},(e,t)=>t+1),a=!1,o=()=>i(S(e,a,e=>{a=e,o()},{header:{title:e.heading,subtitle:e.subtitle},body:t`
                            ${r.map(e=>t`
                                    <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                        <strong style="color: var(--cz-color-text-primary);">
                                            Event ${e}
                                        </strong>
                                        · Invoice ${4200+e} matched automatically.
                                    </p>
                                `)}
                            ${g(t`<cosmoz-button variant="secondary" @click=${p}>
                                    Close
                                </cosmoz-button>`)}
                        `}),n);return o(),C(`Open activity`,()=>{a=!0,o()},n)},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open activity/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`.body`),o=i.shadowRoot.querySelector(`[part="header"]`),s=i.shadowRoot.querySelector(`[part="footer"]`);await n(`scrolls the body; header/footer stay outside it`,async()=>{await x(()=>b(a.scrollHeight).toBeGreaterThan(0)),b(o.closest(`.body`)).toBeNull(),b(s.closest(`.body`)).toBeNull()})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('The canonical pairing: slotted header, body, footer actions.'),
  args: {
    heading: 'Acme Industries',
    subtitle: 'Supplier #4021 · Stockholm, SE'
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, {
      header: {
        title: args.heading as string,
        subtitle: args.subtitle as string
      },
      body: html\`
                            <p>
                                Preferred vendor for packaging materials since 2019. Net 30
                                terms, VAT SE556677889901.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end; gap: 8px;"
                            >
                                <cosmoz-button variant="secondary" @click=\${requestClose}>
                                    Cancel
                                </cosmoz-button>
                                <cosmoz-button variant="primary" @click=\${requestClose}>
                                    Save
                                </cosmoz-button>
                            </div>
                        \`
    }), mount);
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
    await step('opens with the slotted header and footer actions', async () => {
      await waitFor(() => expect(shell.matches(':popover-open')).toBe(true));
      await canvas.findByShadowText(/Acme Industries/u);
      expect(panel.shadowRoot!.querySelector('[part="header"]')!.querySelector('slot[name="header"]')).not.toBeNull();
      await waitFor(() => expect(panel.shadowRoot!.querySelector('[part="footer"]')!.querySelector<HTMLSlotElement>('slot[name="footer"]')!.assignedElements().length).toBeGreaterThan(0));
    });
    await step('the slotted close control dismisses the panel', async () => {
      panel.shadowRoot!.querySelector('[part="header"]')!.querySelector<HTMLSlotElement>('slot[name="header"]')!.assignedElements()[0].querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(shell.matches(':popover-open')).toBe(false));
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('The header is whatever you slot in.'),
  args: {
    heading: 'Customer health',
    subtitle: 'Renewal risk · Q3',
    'aria-label': 'Customer health'
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, {
      header: {
        title: args.heading as string,
        subtitle: args.subtitle as string
      },
      body: html\`
                            <p>
                                The header region projects whatever you slot in - a header with
                                its own close control.
                            </p>
                        \`
    }), mount);
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
    const headerSlot = panel.shadowRoot!.querySelector<HTMLSlotElement>('[part="header"] > slot')!;
    await step('projects slotted header content', async () => {
      await waitFor(() => expect(headerSlot.assignedElements().length).toBeGreaterThan(0));
      await canvas.findByShadowText(/Customer health/u);
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Body-only: empty header slot; the panel just gives its body padding and gap.'),
  args: {
    heading: undefined,
    subtitle: undefined,
    'aria-label': 'Notes'
  },
  render: args => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, {
      header: undefined,
      body: html\`
                            <p>
                                A panel can be just a right-hand reading surface. With the
                                header slot empty and nothing in the footer, the regions stay
                                out of the way - <code>&lt;cosmoz-slideout-panel&gt;</code>
                                alone is what gives the body its padding and gap, independent of
                                any other affordance.
                            </p>
                            <p>Press <kbd>Esc</kbd> to dismiss it.</p>
                        \`
    }), mount);
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
    await step('header region stays present but empty', async () => {
      await waitFor(() => expect(shell.matches(':popover-open')).toBe(true));
      expect(panel.shadowRoot!.querySelector('[part="header"]')!.querySelector<HTMLSlotElement>('slot[name="header"]')!.assignedElements().length).toBe(0);
      expect(panel.shadowRoot!.querySelector('.body')).not.toBeNull();
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Long content scrolls within the body. Header and footer stay fixed.'),
  args: {
    heading: 'Activity',
    subtitle: 'Latest supplier events',
    width: 'min(520px, 100vw)'
  },
  render: args => {
    const mount = document.createElement('div');
    const rows = Array.from({
      length: 50
    }, (_, i) => i + 1); // 50 event rows
    let opened = false;
    const rerender = () => render(panelInShell(args, opened, value => {
      opened = value;
      rerender();
    }, {
      header: {
        title: args.heading as string,
        subtitle: args.subtitle as string
      },
      body: html\`
                            \${rows.map(row => html\`
                                    <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                                        <strong style="color: var(--cz-color-text-primary);">
                                            Event \${row}
                                        </strong>
                                        · Invoice \${4200 + row} matched automatically.
                                    </p>
                                \`)}
                            \${footer(html\`<cosmoz-button variant="secondary" @click=\${requestClose}>
                                    Close
                                </cosmoz-button>\`)}
                        \`
    }), mount);
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
    const header = panel.shadowRoot!.querySelector('[part="header"]')!;
    const footer = panel.shadowRoot!.querySelector('[part="footer"]')!;
    await step('scrolls the body; header/footer stay outside it', async () => {
      await waitFor(() => expect(body.scrollHeight).toBeGreaterThan(0));
      expect(header.closest('.body')).toBeNull();
      expect(footer.closest('.body')).toBeNull();
    });
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`CustomHeader`,`BodyOnly`,`ScrollableContent`]}))();export{D as BodyOnly,E as CustomHeader,T as Default,O as ScrollableContent,k as __namedExportsOrder,w as default};