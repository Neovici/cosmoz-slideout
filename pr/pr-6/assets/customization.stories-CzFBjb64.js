import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a}from"./src-DKiyH0AA.js";import{t as o}from"./cosmoz-slideout-JpLFWnb0.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{a(),r(),o(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),u=t`
    <cosmoz-button
        slot="controls"
        variant="tertiary"
        size="sm"
        aria-label="Close"
        @click=${l}
    >
        ✕
    </cosmoz-button>
`,d={title:`CosmozSlideout/Shell/Customization`,component:`cosmoz-slideout`,tags:[`autodocs`]},f={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="Wide panel"
                        style="--cosmoz-slideout-width: 640px;"
                        @close=${()=>i(n,e)}
                    >
                        ${u}
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Wide panel
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The width is 640px until the viewport becomes narrower.
                        </div>
                    </cosmoz-slideout>
                `,e)}>Open wide</cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open wide/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`honors the width custom property`,async()=>{await c(()=>s(i.matches(`:popover-open`)).toBe(!0)),await c(()=>s(Math.round(i.getBoundingClientRect().width)).toBe(Math.min(640,window.innerWidth)))})}},p=[`--cosmoz-slideout-bg: var(--cz-color-bg-secondary)`,`--cosmoz-slideout-shadow: -8px 0 32px rgb(0 0 0 / 40%)`,`color: var(--cz-color-text-primary)`].join(`; `),m={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="Muted surface"
                        style=${p}
                        @close=${()=>i(n,e)}
                    >
                        ${u}
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Muted surface
                        </h2>
                        <div style="padding: 12px 24px;">
                            The raw shell uses the same token-backed custom properties as the
                            panel, but all chrome is still supplied by the parent.
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open muted surface
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open muted surface/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`uses the local surface background override`,async()=>{await c(()=>s(i.matches(`:popover-open`)).toBe(!0)),s(getComputedStyle(i).backgroundColor).not.toBe(``)})}},h={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="Slow panel"
                        style="--cosmoz-slideout-duration: 1.2s;"
                        @close=${()=>i(n,e)}
                    >
                        ${u}
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Slow panel
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The entrance and exit animation duration are custom properties.
                        </div>
                    </cosmoz-slideout>
                `,e)}>Open slow</cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open slow/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`applies the slower transition duration`,async()=>{await c(()=>s(i.matches(`:popover-open`)).toBe(!0)),s(getComputedStyle(i).transitionDuration.split(`,`)[0].trim()).toBe(`1.2s`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Wide panel"
                        style="--cosmoz-slideout-width: 640px;"
                        @close=\${() => render(nothing, mount)}
                    >
                        \${closeControl}
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Wide panel
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The width is 640px until the viewport becomes narrower.
                        </div>
                    </cosmoz-slideout>
                \`, mount);
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
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Muted surface"
                        style=\${mutedSurface}
                        @close=\${() => render(nothing, mount)}
                    >
                        \${closeControl}
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Muted surface
                        </h2>
                        <div style="padding: 12px 24px;">
                            The raw shell uses the same token-backed custom properties as the
                            panel, but all chrome is still supplied by the parent.
                        </div>
                    </cosmoz-slideout>
                \`, mount);
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Slow panel"
                        style="--cosmoz-slideout-duration: 1.2s;"
                        @close=\${() => render(nothing, mount)}
                    >
                        \${closeControl}
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Slow panel
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The entrance and exit animation duration are custom properties.
                        </div>
                    </cosmoz-slideout>
                \`, mount);
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
}`,...h.parameters?.docs?.source}}},g=[`Width`,`SurfaceTokens`,`SlowMotion`]}))();export{h as SlowMotion,m as SurfaceTokens,f as Width,g as __namedExportsOrder,d as default};