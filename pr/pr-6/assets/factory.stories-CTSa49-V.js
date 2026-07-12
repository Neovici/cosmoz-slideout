import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a,h as o,l as s,r as c,s as l,t as u}from"./src-DKiyH0AA.js";import{t as d}from"./cosmoz-input-vzBqGLpA.js";var f,p,m,h,g;e((()=>{a(),l(),d(),o(),r(),u(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,customElements.get(`demo-config-slideout`)||customElements.define(`demo-config-slideout`,c(e=>t`
                <cosmoz-button
                    variant="tertiary"
                    size="sm"
                    aria-label="Close"
                    style="position: absolute; top: calc(var(--cz-spacing) * 3); right: calc(var(--cz-spacing) * 3); z-index: 3;"
                    @click=${()=>e.close()}
                >
                    ${s({slot:`prefix`})}
                </cosmoz-button>
                <h2
                    style="
                        margin: 0;
                        padding: calc(var(--cz-spacing) * 6) calc(var(--cz-spacing) * 6)
                            calc(var(--cz-spacing) * 1);
                        font-family: var(--cz-font-body);
                        font-size: var(--cz-text-lg);
                        font-weight: var(--cz-font-weight-semibold);
                        color: var(--cz-color-text-primary);
                    "
                >
                    Supplier config
                </h2>
                <div
                    style="
                        display: grid;
                        gap: calc(var(--cz-spacing) * 4);
                        padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 6);
                    "
                >
                    <cosmoz-input
                        .label=${`Name`}
                        .value=${`Acme Industries`}
                    ></cosmoz-input>
                    <cosmoz-input
                        .label=${`VAT number`}
                        .value=${`SE556677889901`}
                    ></cosmoz-input>
                    <cosmoz-input
                        .label=${`Payment terms (days)`}
                        type="number"
                        .value=${`30`}
                    ></cosmoz-input>
                </div>
            `)),m={title:`CosmozSlideout/Advanced/Factory`,tags:[`autodocs`]},h={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <demo-config-slideout
                        aria-label="Supplier config"
                        @close=${()=>i(n,e)}
                    ></demo-config-slideout>
                `,e)}>Open config</cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open config/iu}));let i=t.querySelector(`demo-config-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`renders the factory form in the popover shell`,async()=>{await p(()=>f(a.matches(`:popover-open`)).toBe(!0)),await e.findByShadowText(/Supplier config/u),f(i.shadowRoot.querySelectorAll(`cosmoz-input`)).toHaveLength(3)}),await n(`host.close() closes and the parent removes it`,async()=>{i.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await p(()=>f(t.querySelector(`demo-config-slideout`)).toBeNull())})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(litHtml\`
                    <demo-config-slideout
                        aria-label="Supplier config"
                        @close=\${() => render(nothing, mount)}
                    ></demo-config-slideout>
                \`, mount);
    return litHtml\`
            <cosmoz-button variant="primary" @click=\${open}>Open config</cosmoz-button>
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
      name: /open config/iu
    }));
    const el = canvasElement.querySelector('demo-config-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('renders the factory form in the popover shell', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await canvas.findByShadowText(/Supplier config/u);
      expect(el.shadowRoot!.querySelectorAll('cosmoz-input')).toHaveLength(3);
    });
    await step('host.close() closes and the parent removes it', async () => {
      el.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(canvasElement.querySelector('demo-config-slideout')).toBeNull());
    });
  }
}`,...h.parameters?.docs?.source}}},g=[`ConfigForm`]}))();export{h as ConfigForm,g as __namedExportsOrder,m as default};