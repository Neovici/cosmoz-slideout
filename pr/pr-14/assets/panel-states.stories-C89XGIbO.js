import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-BJeoyn2d.js";import{t as i}from"./cosmoz-slideout-Ddk11ucN.js";import{t as a}from"./cosmoz-button-D5dCiMd7.js";import{n as o,r as s,t as c}from"./story-docs-CVcPOcP0.js";import{t as l}from"./cosmoz-slideout-panel-C07unT8Q.js";import{i as u,n as d,r as f}from"./chrome-BV2qBtG3.js";var p,m,h,g,_,v,y,b;e((()=>{a(),n(),i(),l(),f(),o(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h=(e,t)=>{let n=document.createElement(`span`);n.style.color=t,e.append(n);let r=getComputedStyle(n).color;return n.remove(),r},g={title:`CosmozSlideoutPanel/States`,component:`cosmoz-slideout-panel`,tags:[`autodocs`],parameters:c(`Common panel states - full-screen and local token theming. Busy/loading states are the author's own slotted UI; the panel is property-free.`)},_={parameters:s("`full-screen` (here via `toggleFullScreen()`): the surface covers the whole viewport."),render:()=>{let e=document.createElement(`div`),n=!1,i=e=>e.currentTarget.closest(`cosmoz-slideout`)?.close(),a=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Account workspace"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,a()}}
                    >
                        <cosmoz-slideout-panel>
                            ${d(`Account workspace`,{subtitle:`Temporary full-screen review`})}
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
                                <cosmoz-button variant="primary" @click=${i}>
                                    Done
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,a()}}>
                Open workspace
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open workspace/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`toggles to viewport width through the public method`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await m(()=>p(i).toHaveAttribute(`full-screen`)),await m(()=>p(Math.round(i.getBoundingClientRect().width)).toBe(window.innerWidth))})}},v=[`--cosmoz-slideout-bg: var(--cz-color-bg-secondary)`,`--cosmoz-slideout-panel-divider: var(--cz-color-border-secondary)`].join(`; `),y={parameters:s("Theme one panel with local `--cosmoz-slideout-*` / `--cz-*` token overrides (dark-mode-safe)."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Account"
                        .opened=${n}
                        style=${v}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel>
                            ${d(`Account`,{subtitle:`Premium · since 2019`})}
                            <p style="color: var(--cz-color-text-tertiary);">
                                Local custom properties can tune one panel without breaking
                                global light/dark token behavior.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="primary" @click=${u}>
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open themed surface/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`resolves the local override through tokens`,async()=>{await m(()=>p(i.matches(`:popover-open`)).toBe(!0)),p(getComputedStyle(i).backgroundColor).toBe(h(i,`var(--cz-color-bg-secondary)`))})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('\`full-screen\` (here via \`toggleFullScreen()\`): the surface covers the whole viewport.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const closePanel = (e: Event) => (e.currentTarget as HTMLElement).closest<ShellEl>('cosmoz-slideout')?.close();
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Account workspace"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel>
                            \${header('Account workspace', {
      subtitle: 'Temporary full-screen review'
    })}
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
    await step('toggles to viewport width through the public method', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /toggle full screen/iu
      }));
      await waitFor(() => expect(shell).toHaveAttribute('full-screen'));
      await waitFor(() => expect(Math.round(shell.getBoundingClientRect().width)).toBe(window.innerWidth));
    });
  }
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Theme one panel with local \`--cosmoz-slideout-*\` / \`--cz-*\` token overrides (dark-mode-safe).'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Account"
                        .opened=\${opened}
                        style=\${themedSurface}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel>
                            \${header('Account', {
      subtitle: 'Premium · since 2019'
    })}
                            <p style="color: var(--cz-color-text-tertiary);">
                                Local custom properties can tune one panel without breaking
                                global light/dark token behavior.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end;"
                            >
                                <cosmoz-button variant="primary" @click=\${requestClose}>
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
    await step('resolves the local override through tokens', async () => {
      await waitFor(() => expect(shell.matches(':popover-open')).toBe(true));
      expect(getComputedStyle(shell).backgroundColor).toBe(cssColor(shell, 'var(--cz-color-bg-secondary)'));
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`FullScreen`,`ThemedSurface`]}))();export{_ as FullScreen,y as ThemedSurface,b as __namedExportsOrder,g as default};