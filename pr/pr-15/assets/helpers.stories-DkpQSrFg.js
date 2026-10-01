import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-BkuFqfmG.js";import{n as i}from"./cosmoz-slideout-DVzJveQz.js";import{t as a}from"./cosmoz-button-Dr2cNjoJ.js";import{n as o,r as s,t as c}from"./story-docs-CVcPOcP0.js";import{t as l}from"./cosmoz-slideout-panel-7Qcjp5_2.js";import{i as u,r as d,t as f}from"./helpers-DQ8RHK1K.js";var p,m,h,g,_;e((()=>{a(),n(),i(),l(),f(),o(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`CosmozSlideout/Helpers`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:c("Typed render-site helpers - `slideout()` / `slideoutPanel()` - so consumers get typing and event-handler wiring without hand-writing the bindings.")},g={parameters:s("Build the same slideout + panel with the typed `slideout()` / `slideoutPanel()` helpers."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(d({opened:n,ariaLabel:`Supplier`,onOpenedChanged:e=>{n=e.detail.value,i()}},u({},t`
                            <div slot="header">
                                <h2 class="demo-heading">Acme Industries</h2>
                            </div>
                            <p>
                                Rendered via the typed <code>slideout()</code> /
                                <code>slideoutPanel()</code> helpers - no hand-written bindings.
                            </p>
                        `)),e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open (helpers)
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open \(helpers\)/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`helper-rendered slideout opens with the panel chrome`,async()=>{await m(()=>p(i.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-slideout-panel`);await m(()=>p(e.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot`).assignedElements()[0].textContent).toMatch(/Acme Industries/u))})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('Build the same slideout + panel with the typed \`slideout()\` / \`slideoutPanel()\` helpers.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(slideout({
      opened,
      ariaLabel: 'Supplier',
      onOpenedChanged: e => {
        opened = e.detail.value;
        rerender();
      }
    }, slideoutPanel({}, html\`
                            <div slot="header">
                                <h2 class="demo-heading">Acme Industries</h2>
                            </div>
                            <p>
                                Rendered via the typed <code>slideout()</code> /
                                <code>slideoutPanel()</code> helpers - no hand-written bindings.
                            </p>
                        \`)), mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open (helpers)
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
      name: /open \\(helpers\\)/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    await step('helper-rendered slideout opens with the panel chrome', async () => {
      await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
      const panel = el.querySelector('cosmoz-slideout-panel')!;
      await waitFor(() => expect(panel.shadowRoot!.querySelector('[part="header"]')!.querySelector('slot')!.assignedElements()[0]!.textContent).toMatch(/Acme Industries/u));
    });
  }
}`,...g.parameters?.docs?.source}}},_=[`Dogfood`]}))();export{g as Dogfood,_ as __namedExportsOrder,h as default};