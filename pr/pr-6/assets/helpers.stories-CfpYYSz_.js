import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-B2weqZig.js";import{c as i,i as a,n as o,r as s,t as c}from"./cosmoz-slideout-6fMMxWgr.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";import{t as f}from"./cosmoz-slideout-panel-tP8_8518.js";var p,m,h,g,_;e((()=>{i(),n(),c(),f(),o(),l(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`CosmozSlideout/Helpers`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:d("Typed render-site helpers - `slideout()` / `slideoutPanel()` - so consumers get typing and event-handler wiring without hand-writing the bindings.")},g={parameters:u("Build the same slideout + panel with the typed `slideout()` / `slideoutPanel()` helpers."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(s({opened:n,ariaLabel:`Supplier`,onOpenedChanged:e=>{n=e.detail.value,i()}},a({heading:`Acme Industries`,subtitle:`Supplier #4021`,closeable:!0},t`
                            <p>
                                Rendered via the typed <code>slideout()</code> /
                                <code>slideoutPanel()</code> helpers - no hand-written bindings.
                            </p>
                        `)),e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open (helpers)
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open \(helpers\)/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`helper-rendered slideout opens with the panel UI`,async()=>{await m(()=>p(a.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-slideout-panel`);p(e.shadowRoot.querySelector(`.heading`).textContent).toMatch(/Acme Industries/u)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    }, slideoutPanel({
      heading: 'Acme Industries',
      subtitle: 'Supplier #4021',
      closeable: true
    }, html\`
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
    await step('helper-rendered slideout opens with the panel UI', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      const panel = el.querySelector('cosmoz-slideout-panel')!;
      expect(panel.shadowRoot!.querySelector('.heading')!.textContent).toMatch(/Acme Industries/u);
    });
  }
}`,...g.parameters?.docs?.source}}},_=[`Dogfood`]}))();export{g as Dogfood,_ as __namedExportsOrder,h as default};