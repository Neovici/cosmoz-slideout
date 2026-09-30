import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-CQY3s6R1.js";import{t as i}from"./cosmoz-slideout-SjsC9XPP.js";import{t as a}from"./cosmoz-button-BYdRjbUk.js";import{n as o,r as s}from"./story-docs-CVcPOcP0.js";var c,l,u,d,f,p,m;e((()=>{a(),n(),i(),o(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),d=t`
    <cosmoz-button
        style="position: absolute; top: 8px; right: 8px; z-index: 1;"
        variant="tertiary"
        size="sm"
        aria-label="Close"
        @click=${u}
    >
        ✕
    </cosmoz-button>
`,f={title:`CosmozSlideout/Shell/Customization`,component:`cosmoz-slideout`,tags:[`autodocs`]},p={parameters:s("Size and tune the surface with the `--cosmoz-slideout-*` custom properties (here `--cosmoz-slideout-width`). Point them at `@neovici/cosmoz-tokens` `--cz-*` tokens to track the design system and dark mode."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Wide panel"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                        style="--cosmoz-slideout-width: 640px;"
                    >
                        <div
                            style="position: relative; display: flex; flex-direction: column; height: 100%;"
                        >
                            ${d}
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open wide/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`honors the width custom property`,async()=>{await l(()=>c(i.matches(`:popover-open`)).toBe(!0)),await l(()=>c(Math.round(i.getBoundingClientRect().width)).toBe(Math.min(640,window.innerWidth)))})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Size and tune the surface with the \`--cosmoz-slideout-*\` custom ' + 'properties (here \`--cosmoz-slideout-width\`). Point them at ' + '\`@neovici/cosmoz-tokens\` \`--cz-*\` tokens to track the design system ' + 'and dark mode.'),
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
}`,...p.parameters?.docs?.source}}},m=[`Width`]}))();export{p as Width,m as __namedExportsOrder,f as default};