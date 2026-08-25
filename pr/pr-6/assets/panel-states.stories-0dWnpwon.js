import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-DoR0vQvp.js";import{l as i}from"./src-BPtKnL2i.js";import{t as a}from"./cosmoz-slideout-panel-JPaM_H4p.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{i(),n(),a(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c=e=>e.currentTarget.closest(`cosmoz-slideout-panel`).close(),l=(e,t)=>{let n=document.createElement(`span`);n.style.color=t,e.append(n);let r=getComputedStyle(n).color;return n.remove(),r},u={title:`CosmozSlideoutPanel/States`,component:`cosmoz-slideout-panel`,tags:[`autodocs`]},d={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${n}
                        heading="Supplier detail"
                        subtitle="Fetching fresh account data"
                        closeable
                        loading
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <p style="color: var(--cz-color-text-tertiary);">
                            The loading overlay is scoped to the body, so the header and
                            footer remain readable and usable.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="secondary" @click=${c}>
                                Cancel
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open loading panel
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open loading panel/iu}));let i=t.querySelector(`cosmoz-slideout-panel`);await n(`shows a body-scoped spinner overlay`,async()=>{await s(()=>o(i.shadowRoot.querySelector(`cz-spinner`)).not.toBeNull()),o(i.shadowRoot.querySelector(`.loading`).closest(`.content`)).not.toBeNull()})}},f={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${n}
                        heading="Account workspace"
                        subtitle="Temporary full-screen review"
                        closeable
                        @opened-changed=${e=>{n=e.detail.value,i()}}
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
                                @click=${e=>e.currentTarget.closest(`cosmoz-slideout-panel`).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=${c}>
                                Done
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open workspace
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open workspace/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`[popover]`);await n(`toggles to viewport width through the public method`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await s(()=>o(i).toHaveAttribute(`full-screen`)),await s(()=>o(Math.round(a.getBoundingClientRect().width)).toBe(window.innerWidth))})}},p=[`--cosmoz-slideout-bg: var(--cz-color-bg-secondary)`,`--cosmoz-slideout-panel-divider: var(--cz-color-border-secondary)`].join(`; `),m={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${n}
                        heading="Account"
                        subtitle="Premium · since 2019"
                        closeable
                        style=${p}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <p style="color: var(--cz-color-text-tertiary);">
                            Local custom properties can tune one panel without breaking global
                            light/dark token behavior.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=${c}>
                                Done
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open themed surface
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open themed surface/iu}));let i=t.querySelector(`cosmoz-slideout-panel`),a=i.shadowRoot.querySelector(`[popover]`);await n(`resolves the local surface override through tokens`,async()=>{await s(()=>o(a.matches(`:popover-open`)).toBe(!0)),o(getComputedStyle(a).backgroundColor).toBe(l(i,`var(--cz-color-bg-secondary)`))})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading="Supplier detail"
                        subtitle="Fetching fresh account data"
                        closeable
                        loading
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
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
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
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
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    await step('shows a body-scoped spinner overlay', async () => {
      await waitFor(() => expect(el.shadowRoot!.querySelector('cz-spinner')).not.toBeNull());
      expect(el.shadowRoot!.querySelector<HTMLElement>('.loading')!.closest('.content')).not.toBeNull();
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading="Account workspace"
                        subtitle="Temporary full-screen review"
                        closeable
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
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
                                @click=\${(e: Event) => ((e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button variant="primary" @click=\${closePanel}>
                                Done
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
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('toggles to viewport width through the public method', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /toggle full screen/iu
      }));
      await waitFor(() => expect(el).toHaveAttribute('full-screen'));
      await waitFor(() => expect(Math.round(surface.getBoundingClientRect().width)).toBe(window.innerWidth));
    });
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading="Account"
                        subtitle="Premium · since 2019"
                        closeable
                        style=\${themedSurface}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
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
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
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
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('resolves the local surface override through tokens', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(getComputedStyle(surface).backgroundColor).toBe(cssColor(el, 'var(--cz-color-bg-secondary)'));
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Loading`,`FullScreen`,`ThemedSurface`]}))();export{f as FullScreen,d as Loading,m as ThemedSurface,h as __namedExportsOrder,u as default};