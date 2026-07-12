import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a}from"./src-DKiyH0AA.js";import{t as o}from"./cosmoz-slideout-JpLFWnb0.js";var s,c,l,u,d,f,p,m,h;e((()=>{a(),r(),o(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=(e,t)=>{let n=document.createElement(`span`);n.style.color=t,e.append(n);let r=getComputedStyle(n).color;return n.remove(),r},u={title:`CosmozSlideout/Regression`,component:`cosmoz-slideout`,tags:[`!autodocs`]},d={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Theme check"
                        subtitle="Follows root token mode"
                        closeable
                        @close=${()=>i(n,e)}
                    >
                        <p>The open panel should follow root token changes immediately.</p>
                    </cosmoz-slideout>
                `,e)}>
                Open theme check
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=document.documentElement.classList.contains(`dark-mode`);await r.click(await e.findByShadowRole(`button`,{name:/open theme check/iu}));let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);try{await n(`recomputes surface colors when root theme changes`,async()=>{document.documentElement.classList.toggle(`dark-mode`,!i),await c(()=>s(getComputedStyle(o).backgroundColor).toBe(l(a,`var(--cz-color-bg-primary)`)))})}finally{document.documentElement.classList.toggle(`dark-mode`,i)}}},f={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        .variant=${`panel`}
                        .heading=${`Property-bound panel`}
                        .closeable=${!0}
                        @close=${()=>i(n,e)}
                    >
                        <p>Panel padding must apply even without a variant attribute.</p>
                    </cosmoz-slideout>
                `,e)}>
                Open property-bound panel
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open property-bound panel/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`renders panel chrome with real padding despite no variant attribute`,async()=>{await c(()=>s(a.matches(`:popover-open`)).toBe(!0)),s(i.hasAttribute(`variant`)).toBe(!1);let e=i.shadowRoot.querySelector(`.body`);s(e).not.toBeNull(),s(getComputedStyle(e).paddingLeft).not.toBe(`0px`)})}},p={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="Property-bound full screen"
                        .fullScreen=${!0}
                        @close=${()=>i(n,e)}
                    >
                        <p>Full-screen width must apply without a full-screen attribute.</p>
                    </cosmoz-slideout>
                `,e)}>
                Open property-bound full screen
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open property-bound full screen/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`syncs the full-screen attribute and width from the property alone`,async()=>{await c(()=>s(a.matches(`:popover-open`)).toBe(!0)),s(i).toHaveAttribute(`full-screen`),await c(()=>s(Math.round(a.getBoundingClientRect().width)).toBe(window.innerWidth))})}},m={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        no-autofocus
                        aria-label="Guarded draft"
                        @close=${()=>i(n,e)}
                    >
                        <button id="inner">Focus me</button>
                    </cosmoz-slideout>
                `,e)}>
                Open guarded draft
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=await e.findByShadowRole(`button`,{name:/open guarded draft/iu});await r.click(i);let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);await c(()=>s(o.matches(`:popover-open`)).toBe(!0)),await n(`restores focus to the opener when the user focused inside despite no-autofocus`,async()=>{a.querySelector(`#inner`).focus(),s(a.contains(document.activeElement)).toBe(!0),a.close(),await c(()=>s(t.querySelector(`cosmoz-slideout`)).toBeNull());let e=document.activeElement;s(e?.shadowRoot?.activeElement).toBe(i)})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Theme check"
                        subtitle="Follows root token mode"
                        closeable
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>The open panel should follow root token changes immediately.</p>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open theme check
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
    const wasDark = document.documentElement.classList.contains('dark-mode');
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open theme check/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    try {
      await step('recomputes surface colors when root theme changes', async () => {
        document.documentElement.classList.toggle('dark-mode', !wasDark);
        await waitFor(() => expect(getComputedStyle(surface).backgroundColor).toBe(cssColor(el, 'var(--cz-color-bg-primary)')));
      });
    } finally {
      document.documentElement.classList.toggle('dark-mode', wasDark);
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        .variant=\${'panel'}
                        .heading=\${'Property-bound panel'}
                        .closeable=\${true}
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>Panel padding must apply even without a variant attribute.</p>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open property-bound panel
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
      name: /open property-bound panel/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('renders panel chrome with real padding despite no variant attribute', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.hasAttribute('variant')).toBe(false);
      const body = el.shadowRoot!.querySelector<HTMLElement>('.body')!;
      expect(body).not.toBeNull();
      expect(getComputedStyle(body).paddingLeft).not.toBe('0px');
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Property-bound full screen"
                        .fullScreen=\${true}
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>Full-screen width must apply without a full-screen attribute.</p>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open property-bound full screen
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
      name: /open property-bound full screen/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('syncs the full-screen attribute and width from the property alone', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el).toHaveAttribute('full-screen');
      await waitFor(() => expect(Math.round(surface.getBoundingClientRect().width)).toBe(window.innerWidth));
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        no-autofocus
                        aria-label="Guarded draft"
                        @close=\${() => render(nothing, mount)}
                    >
                        <button id="inner">Focus me</button>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open guarded draft
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
    const opener = await canvas.findByShadowRole('button', {
      name: /open guarded draft/iu
    });
    await userEvent.click(opener);
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
    await step('restores focus to the opener when the user focused inside despite no-autofocus', async () => {
      el.querySelector<HTMLButtonElement>('#inner')!.focus();
      expect(el.contains(document.activeElement)).toBe(true);
      el.close();
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
      const active = document.activeElement as (Element & {
        shadowRoot?: ShadowRoot | null;
      }) | null;
      expect(active?.shadowRoot?.activeElement).toBe(opener);
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`GlobalDarkMode`,`PropertyBoundVariant`,`PropertyBoundFullScreen`,`FocusRestoreWithNoAutofocus`]}))();export{m as FocusRestoreWithNoAutofocus,d as GlobalDarkMode,p as PropertyBoundFullScreen,f as PropertyBoundVariant,h as __namedExportsOrder,u as default};