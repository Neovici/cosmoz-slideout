import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-CqVTJ8_o.js";import{l as i}from"./src-BVV7ohPG.js";import{t as a}from"./cosmoz-slideout-C5rfLSfj.js";import{t as o}from"./cosmoz-slideout-panel-D522LWGK.js";var s,c,l,u,d,f,p,m;e((()=>{i(),n(),a(),o(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=(e,t)=>{let n=document.createElement(`span`);n.style.color=t,e.append(n);let r=getComputedStyle(n).color;return n.remove(),r},u={title:`CosmozSlideout/Test`,component:`cosmoz-slideout`,tags:[`!autodocs`]},d={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${n}
                        heading="Theme check"
                        subtitle="Follows root token mode"
                        closeable
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <p>The open panel should follow root token changes immediately.</p>
                    </cosmoz-slideout-panel>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open theme check
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=document.documentElement.classList.contains(`dark-mode`);await r.click(await e.findByShadowRole(`button`,{name:/open theme check/iu}));let a=t.querySelector(`cosmoz-slideout-panel`),o=a.shadowRoot.querySelector(`[popover]`);try{await n(`recomputes surface colors when root theme changes`,async()=>{document.documentElement.classList.toggle(`dark-mode`,!i),await c(()=>s(getComputedStyle(o).backgroundColor).toBe(l(a,`var(--cz-color-bg-primary)`)))})}finally{document.documentElement.classList.toggle(`dark-mode`,i)}}},f={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Property-bound full screen"
                        .opened=${n}
                        .fullScreen=${!0}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <p>Full-screen width must apply without a full-screen attribute.</p>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open property-bound full screen
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open property-bound full screen/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`syncs the full-screen attribute and width from the property alone`,async()=>{await c(()=>s(a.matches(`:popover-open`)).toBe(!0)),s(i).toHaveAttribute(`full-screen`),await c(()=>s(Math.round(a.getBoundingClientRect().width)).toBe(window.innerWidth))})}},p={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        no-autofocus
                        aria-label="Guarded draft"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-button id="inner">Focus me</cosmoz-button>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open guarded draft
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=await e.findByShadowRole(`button`,{name:/open guarded draft/iu});await r.click(i);let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);await c(()=>s(o.matches(`:popover-open`)).toBe(!0)),await n(`restores focus to the opener when the user focused inside despite no-autofocus`,async()=>{a.querySelector(`#inner`).focus(),s(a.contains(document.activeElement)).toBe(!0),a.close(),await c(()=>s(o.matches(`:popover-open`)).toBe(!1)),await c(()=>{let e=document.activeElement;s(e?.shadowRoot?.activeElement).toBe(i)})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading="Theme check"
                        subtitle="Follows root token mode"
                        closeable
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <p>The open panel should follow root token changes immediately.</p>
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
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
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
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
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Property-bound full screen"
                        .opened=\${opened}
                        .fullScreen=\${true}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <p>Full-screen width must apply without a full-screen attribute.</p>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        no-autofocus
                        aria-label="Guarded draft"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-button id="inner">Focus me</cosmoz-button>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
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
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
      await waitFor(() => {
        const active = document.activeElement as (Element & {
          shadowRoot?: ShadowRoot | null;
        }) | null;
        expect(active?.shadowRoot?.activeElement).toBe(opener);
      });
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`GlobalDarkMode`,`PropertyBoundFullScreen`,`FocusRestoreWithNoAutofocus`]}))();export{p as FocusRestoreWithNoAutofocus,d as GlobalDarkMode,f as PropertyBoundFullScreen,m as __namedExportsOrder,u as default};