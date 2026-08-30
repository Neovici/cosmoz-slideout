import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-DWBJWh4P.js";import{a as i,t as a}from"./cosmoz-slideout-C7zBUPKs.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{i(),n(),a(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),l=t`
    <cosmoz-button
        style="position: absolute; top: 8px; right: 8px; z-index: 1;"
        variant="tertiary"
        size="sm"
        aria-label="Close"
        @click=${c}
    >
        ✕
    </cosmoz-button>
`,u={title:`CosmozSlideout/Shell/Customization`,component:`cosmoz-slideout`,tags:[`autodocs`]},d={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Wide panel"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                        style="--cosmoz-slideout-width: 640px;"
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            ${l}
                            <h2
                                style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                            >
                                Wide panel
                            </h2>
                            <div
                                style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                            >
                                The width is 640px until the viewport becomes narrower.
                            </div>
                        </div>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>Open wide</cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open wide/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`honors the width custom property`,async()=>{await s(()=>o(i.matches(`:popover-open`)).toBe(!0)),await s(()=>o(Math.round(i.getBoundingClientRect().width)).toBe(Math.min(640,window.innerWidth)))})}},f=[`--cosmoz-slideout-bg: var(--cz-color-bg-secondary)`,`--cosmoz-slideout-shadow: -8px 0 32px rgb(0 0 0 / 40%)`,`color: var(--cz-color-text-primary)`].join(`; `),p={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Muted surface"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                        style=${f}
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            ${l}
                            <h2
                                style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                            >
                                Muted surface
                            </h2>
                            <div style="padding: 12px 24px;">
                                This is the bare shell (not the
                                <code>&lt;cosmoz-slideout-panel&gt;</code> preset), yet its
                                surface is still fully themeable. Its
                                <code>--cosmoz-slideout-*</code> overrides accept either a
                                design token or a plain value: here
                                <code>--cosmoz-slideout-bg</code> and the text color resolve to
                                <code>@neovici/cosmoz-tokens</code> <code>--cz-*</code> tokens -
                                so the drawer stays on-theme and follows dark mode - while
                                <code>--cosmoz-slideout-shadow</code> is a one-off value. The
                                only difference from
                                <code>&lt;cosmoz-slideout-panel&gt;</code> is that the shell
                                leaves the inner UI - this header and close button - for the
                                parent to author.
                            </div>
                        </div>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open muted surface
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open muted surface/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`uses the local surface background override`,async()=>{await s(()=>o(i.matches(`:popover-open`)).toBe(!0)),o(getComputedStyle(i).backgroundColor).not.toBe(``)})}},m={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Slow panel"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                        style="--cosmoz-slideout-duration: 1.2s;"
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            ${l}
                            <h2
                                style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                            >
                                Slow panel
                            </h2>
                            <div
                                style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                            >
                                The entrance and exit animation duration are custom properties.
                            </div>
                        </div>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>Open slow</cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open slow/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`applies the slower transition duration`,async()=>{await s(()=>o(i.matches(`:popover-open`)).toBe(!0)),o(getComputedStyle(i).transitionDuration.split(`,`)[0].trim()).toBe(`1.2s`)})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Wide panel"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                        style="--cosmoz-slideout-width: 640px;"
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            \${closeControl}
                            <h2
                                style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                            >
                                Wide panel
                            </h2>
                            <div
                                style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                            >
                                The width is 640px until the viewport becomes narrower.
                            </div>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>Open wide</cosmoz-button>
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
      name: /open wide/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('honors the width custom property', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await waitFor(() => expect(Math.round(surface.getBoundingClientRect().width)).toBe(Math.min(640, window.innerWidth)));
    });
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Muted surface"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                        style=\${mutedSurface}
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            \${closeControl}
                            <h2
                                style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                            >
                                Muted surface
                            </h2>
                            <div style="padding: 12px 24px;">
                                This is the bare shell (not the
                                <code>&lt;cosmoz-slideout-panel&gt;</code> preset), yet its
                                surface is still fully themeable. Its
                                <code>--cosmoz-slideout-*</code> overrides accept either a
                                design token or a plain value: here
                                <code>--cosmoz-slideout-bg</code> and the text color resolve to
                                <code>@neovici/cosmoz-tokens</code> <code>--cz-*</code> tokens -
                                so the drawer stays on-theme and follows dark mode - while
                                <code>--cosmoz-slideout-shadow</code> is a one-off value. The
                                only difference from
                                <code>&lt;cosmoz-slideout-panel&gt;</code> is that the shell
                                leaves the inner UI - this header and close button - for the
                                parent to author.
                            </div>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open muted surface
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
      name: /open muted surface/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('uses the local surface background override', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(getComputedStyle(surface).backgroundColor).not.toBe('');
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Slow panel"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                        style="--cosmoz-slideout-duration: 1.2s;"
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            \${closeControl}
                            <h2
                                style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                            >
                                Slow panel
                            </h2>
                            <div
                                style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                            >
                                The entrance and exit animation duration are custom properties.
                            </div>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>Open slow</cosmoz-button>
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
      name: /open slow/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('applies the slower transition duration', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(getComputedStyle(surface).transitionDuration.split(',')[0].trim()).toBe('1.2s');
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Width`,`SurfaceTokens`,`SlowMotion`]}))();export{m as SlowMotion,p as SurfaceTokens,d as Width,h as __namedExportsOrder,u as default};