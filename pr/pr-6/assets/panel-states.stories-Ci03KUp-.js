import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-C-Wxb5QC.js";import{c as i,t as a}from"./cosmoz-slideout-BQP69ErK.js";import{n as o,r as s,t as c}from"./story-docs-CVcPOcP0.js";import{t as l}from"./cosmoz-slideout-panel-DI07MGvV.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{i(),n(),a(),l(),o(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f=e=>e.currentTarget.closest(`cosmoz-slideout`)?.close(),p=(e,t)=>{let n=document.createElement(`span`);n.style.color=t,e.append(n);let r=getComputedStyle(n).color;return n.remove(),r},m={title:`CosmozSlideoutPanel/States`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],parameters:c(`Common panel states - loading, full-screen, and local token theming.`)},h={parameters:s("`loading`: a body-scoped spinner overlay; the header and footer stay usable."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel
                            heading="Supplier detail"
                            subtitle="Fetching fresh account data"
                            closeable
                            loading
                        >
                            <p style="color: var(--cz-color-text-tertiary);">
                                The loading overlay is scoped to the body, so the header and
                                footer remain readable and usable.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="secondary" @click=${f}>
                                    Cancel
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open loading panel
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open loading panel/iu}));let i=t.querySelector(`cosmoz-slideout-panel`);await n(`shows a body-scoped spinner overlay`,async()=>{await d(()=>u(i.shadowRoot.querySelector(`cz-spinner`)).not.toBeNull()),u(i.shadowRoot.querySelector(`.loading`).closest(`.body`)).not.toBeNull()})}},g={parameters:s("`full-screen` (here via `toggleFullScreen()`): the surface covers the whole viewport."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel
                            heading="Account workspace"
                            subtitle="Temporary full-screen review"
                            closeable
                        >
                            <p>
                                Use full screen for dense review tasks. The state is owned by
                                the shell; this story wires a footer action to its public
                                method.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end; gap: 8px;"
                            >
                                <cosmoz-button
                                    variant="secondary"
                                    @click=${e=>e.currentTarget.closest(`cosmoz-slideout`)?.toggleFullScreen()}
                                >
                                    Toggle full screen
                                </cosmoz-button>
                                <cosmoz-button variant="primary" @click=${f}>
                                    Done
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open workspace
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open workspace/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`toggles to viewport width through the public method`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await d(()=>u(i).toHaveAttribute(`full-screen`)),await d(()=>u(Math.round(a.getBoundingClientRect().width)).toBe(window.innerWidth))})}},_=[`--cosmoz-slideout-bg: var(--cz-color-bg-secondary)`,`--cosmoz-slideout-panel-divider: var(--cz-color-border-secondary)`].join(`; `),v={parameters:s("Theme one panel with local `--cosmoz-slideout-*` / `--cz-*` token overrides (dark-mode-safe)."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        style=${_}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel
                            heading="Account"
                            subtitle="Premium · since 2019"
                            closeable
                        >
                            <p style="color: var(--cz-color-text-tertiary);">
                                Local custom properties can tune one panel without breaking
                                global light/dark token behavior.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="primary" @click=${f}>
                                    Done
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open themed surface
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open themed surface/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`resolves the local surface override through tokens`,async()=>{await d(()=>u(a.matches(`:popover-open`)).toBe(!0)),u(getComputedStyle(a).backgroundColor).toBe(p(i,`var(--cz-color-bg-secondary)`))})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('\`loading\`: a body-scoped spinner overlay; the header and footer stay usable.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel
                            heading="Supplier detail"
                            subtitle="Fetching fresh account data"
                            closeable
                            loading
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
                    </cosmoz-slideout>
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
    const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
    await step('shows a body-scoped spinner overlay', async () => {
      await waitFor(() => expect(panel.shadowRoot!.querySelector('cz-spinner')).not.toBeNull());
      expect(panel.shadowRoot!.querySelector<HTMLElement>('.loading')!.closest('.body')).not.toBeNull();
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('\`full-screen\` (here via \`toggleFullScreen()\`): the surface covers the whole viewport.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel
                            heading="Account workspace"
                            subtitle="Temporary full-screen review"
                            closeable
                        >
                            <p>
                                Use full screen for dense review tasks. The state is owned by
                                the shell; this story wires a footer action to its public
                                method.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end; gap: 8px;"
                            >
                                <cosmoz-button
                                    variant="secondary"
                                    @click=\${(e: Event) => (e.currentTarget as HTMLElement).closest<ShellEl>('cosmoz-slideout')?.toggleFullScreen()}
                                >
                                    Toggle full screen
                                </cosmoz-button>
                                <cosmoz-button variant="primary" @click=\${closePanel}>
                                    Done
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
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
    const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;
    const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('toggles to viewport width through the public method', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /toggle full screen/iu
      }));
      await waitFor(() => expect(shell).toHaveAttribute('full-screen'));
      await waitFor(() => expect(Math.round(surface.getBoundingClientRect().width)).toBe(window.innerWidth));
    });
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Theme one panel with local \`--cosmoz-slideout-*\` / \`--cz-*\` token overrides (dark-mode-safe).'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        style=\${themedSurface}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel
                            heading="Account"
                            subtitle="Premium · since 2019"
                            closeable
                        >
                            <p style="color: var(--cz-color-text-tertiary);">
                                Local custom properties can tune one panel without breaking
                                global light/dark token behavior.
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
                    </cosmoz-slideout>
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
    const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;
    const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('resolves the local surface override through tokens', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(getComputedStyle(surface).backgroundColor).toBe(cssColor(shell, 'var(--cz-color-bg-secondary)'));
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`Loading`,`FullScreen`,`ThemedSurface`]}))();export{g as FullScreen,h as Loading,v as ThemedSurface,y as __namedExportsOrder,m as default};