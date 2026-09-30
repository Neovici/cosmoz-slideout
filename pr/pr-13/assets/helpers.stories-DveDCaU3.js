import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-D73yrBh3.js";import{c as i,l as a,s as o,t as s}from"./cosmoz-slideout-CNA4LyOV.js";import{t as c}from"./cosmoz-button-BcL_aa7d.js";import{n as l,r as u,t as d}from"./story-docs-CVcPOcP0.js";import{t as f}from"./cosmoz-slideout-panel-Dgw3MM34.js";var p,m,h=e((()=>{a(),o(),p=(e,n)=>t`
	<cosmoz-slideout
		class=${i(e.class)}
		style=${i(e.style)}
		.opened=${e.opened??!1}
		?full-screen=${e.fullScreen}
		?no-escape=${e.noEscape}
		?no-autofocus=${e.noAutofocus}
		aria-label=${i(e.ariaLabel)}
		aria-labelledby=${i(e.ariaLabelledby)}
		@opened-changed=${e.onOpenedChanged}
		@open=${e.onOpen}
		@close=${e.onClose}
		@full-screen-changed=${e.onFullScreenChanged}
	>
		${n}
	</cosmoz-slideout>
`,m=(e,n)=>t`
	<cosmoz-slideout-panel
		class=${i(e.class)}
		style=${i(e.style)}
	>
		${n}
	</cosmoz-slideout-panel>
`})),g,_,v,y,b;e((()=>{c(),n(),s(),f(),h(),l(),{expect:g,waitFor:_}=__STORYBOOK_MODULE_TEST__,v={title:`CosmozSlideout/Helpers`,component:`cosmoz-slideout`,tags:[`autodocs`],parameters:d("Typed render-site helpers - `slideout()` / `slideoutPanel()` - so consumers get typing and event-handler wiring without hand-writing the bindings.")},y={parameters:u("Build the same slideout + panel with the typed `slideout()` / `slideoutPanel()` helpers."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(p({opened:n,ariaLabel:`Supplier`,onOpenedChanged:e=>{n=e.detail.value,i()}},m({},t`
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open \(helpers\)/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`helper-rendered slideout opens with the panel chrome`,async()=>{await _(()=>g(a.matches(`:popover-open`)).toBe(!0));let e=i.querySelector(`cosmoz-slideout-panel`);await _(()=>g(e.shadowRoot.querySelector(`[part="header"]`).querySelector(`slot`).assignedElements()[0].textContent).toMatch(/Acme Industries/u))})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Dogfood`]}))();export{y as Dogfood,b as __namedExportsOrder,v as default};