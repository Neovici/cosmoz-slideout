import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-CXTWcQPs.js";import{t as a,u as o}from"./cosmoz-slideout-5l254dyi.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{o(),r(),a(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),u=(e,t)=>{let n=document.createElement(`span`);n.style.color=t,e.append(n);let r=getComputedStyle(n).color;return n.remove(),r},d={title:`CosmozSlideout/Panel Mode/States`,component:`cosmoz-slideout`,tags:[`autodocs`]},f={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Supplier detail"
                        subtitle="Fetching fresh account data"
                        closeable
                        loading
                        @close=${()=>i(n,e)}
                    >
                        <p style="color: var(--cz-color-text-tertiary);">
                            The loading overlay is scoped to the body, so the header and
                            footer remain readable and usable.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="secondary" @click=${l}>
                                Cancel
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open loading panel
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open loading panel/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`shows a body-scoped spinner overlay`,async()=>{await c(()=>s(i.shadowRoot.querySelector(`cz-spinner`)).not.toBeNull()),s(i.shadowRoot.querySelector(`.loading`).closest(`.content`)).not.toBeNull()})}},p={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Account workspace"
                        subtitle="Temporary full-screen review"
                        closeable
                        @close=${()=>i(n,e)}
                    >
                        <p>
                            Use full screen for dense review tasks. The state is still owned
                            by the parent; this story wires a footer action to the public
                            method.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button
                                variant="secondary"
                                @click=${e=>e.currentTarget.closest(`cosmoz-slideout`).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=${l}>
                                Done
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open workspace
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open workspace/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`toggles to viewport width through the public method`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await c(()=>s(i).toHaveAttribute(`full-screen`)),await c(()=>s(Math.round(a.getBoundingClientRect().width)).toBe(window.innerWidth))})}},m=[`--cosmoz-slideout-bg: var(--cz-color-bg-secondary)`,`--cosmoz-slideout-panel-divider: var(--cz-color-border-secondary)`].join(`; `),h={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Account"
                        subtitle="Premium · since 2019"
                        closeable
                        style=${m}
                        @close=${()=>i(n,e)}
                    >
                        <p style="color: var(--cz-color-text-tertiary);">
                            Local custom properties can tune one panel without breaking global
                            light/dark token behavior.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=${l}>
                                Done
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open themed surface
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open themed surface/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`resolves the local surface override through tokens`,async()=>{await c(()=>s(a.matches(`:popover-open`)).toBe(!0)),s(getComputedStyle(a).backgroundColor).toBe(u(i,`var(--cz-color-bg-secondary)`))})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Supplier detail"
                        subtitle="Fetching fresh account data"
                        closeable
                        loading
                        @close=\${() => render(nothing, mount)}
                    >
                        <p style="color: var(--cz-color-text-tertiary);">
                            The loading overlay is scoped to the body, so the header and
                            footer remain readable and usable.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="secondary" @click=\${closePanel}>
                                Cancel
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open loading panel
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
      name: /open loading panel/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    await step('shows a body-scoped spinner overlay', async () => {
      await waitFor(() => expect(el.shadowRoot!.querySelector('cz-spinner')).not.toBeNull());
      expect(el.shadowRoot!.querySelector<HTMLElement>('.loading')!.closest('.content')).not.toBeNull();
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Account workspace"
                        subtitle="Temporary full-screen review"
                        closeable
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>
                            Use full screen for dense review tasks. The state is still owned
                            by the parent; this story wires a footer action to the public
                            method.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button
                                variant="secondary"
                                @click=\${(e: Event) => ((e.currentTarget as HTMLElement).closest('cosmoz-slideout') as PanelEl).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=\${closePanel}>
                                Done
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open workspace
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
      name: /open workspace/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('toggles to viewport width through the public method', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /toggle full screen/iu
      }));
      await waitFor(() => expect(el).toHaveAttribute('full-screen'));
      await waitFor(() => expect(Math.round(surface.getBoundingClientRect().width)).toBe(window.innerWidth));
    });
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Account"
                        subtitle="Premium · since 2019"
                        closeable
                        style=\${themedSurface}
                        @close=\${() => render(nothing, mount)}
                    >
                        <p style="color: var(--cz-color-text-tertiary);">
                            Local custom properties can tune one panel without breaking global
                            light/dark token behavior.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=\${closePanel}>
                                Done
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open themed surface
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
      name: /open themed surface/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('resolves the local surface override through tokens', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(getComputedStyle(surface).backgroundColor).toBe(cssColor(el, 'var(--cz-color-bg-secondary)'));
    });
  }
}`,...h.parameters?.docs?.source}}},g=[`Loading`,`FullScreen`,`ThemedSurface`]}))();export{p as FullScreen,f as Loading,h as ThemedSurface,g as __namedExportsOrder,d as default};