import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-Bcd-qXPO.js";import{i,n as a,r as o,t as s}from"./cosmoz-slideout-B9klV7rt.js";import{t as c}from"./cosmoz-button-B4_sA9_N.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";import{t as f}from"./cosmoz-slideout-panel-DS-tkFRp.js";var p,m,h,g,_;e((()=>{c(),n(),s(),f(),a(),l(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`CosmozSlideout/Helpers`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:d("Typed render-site helpers - `slideout()` / `slideoutPanel()` - so consumers get typing and event-handler wiring without hand-writing the bindings.")},g={parameters:u("Build the same slideout + panel with the typed `slideout()` / `slideoutPanel()` helpers."),render:()=>{let e=document.createElement(`div`),n=!1,a=()=>r(o({opened:n,ariaLabel:`Supplier`,onOpenedChanged:e=>{n=e.detail.value,a()}},i({},t`
                            <div slot="header">
                                <h2 class="demo-heading">Acme Industries</h2>
                            </div>
                            <p>
                                Rendered via the typed <code>slideout()</code> /
                                <code>slideoutPanel()</code> helpers - no hand-written bindings.
                            </p>
                        `)),e);return a(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,a()}}>
                Open (helpers)
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open \(helpers\)/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`helper-rendered slideout opens with the panel chrome`,async()=>{await m(()=>p(a.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-slideout-panel`);await m(()=>p(e.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot`).assignedElements()[0].textContent).toMatch(/Acme Industries/u))})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('helper-rendered slideout opens with the panel chrome', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      const panel = el.querySelector('cosmoz-slideout-panel')!;
      await waitFor(() => expect(panel.shadowRoot!.querySelector('[part="header"]')!.querySelector('slot')!.assignedElements()[0]!.textContent).toMatch(/Acme Industries/u));
    });
  }
}`,...g.parameters?.docs?.source}}},_=[`Dogfood`]}))();export{g as Dogfood,_ as __namedExportsOrder,h as default};