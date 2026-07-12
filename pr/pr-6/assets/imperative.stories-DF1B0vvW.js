import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n}from"./iframe-C9FwPToW.js";import{f as r}from"./src-DKiyH0AA.js";import{t as i}from"./cosmoz-slideout-JpLFWnb0.js";var a,o,s,c,l;e((()=>{r(),n(),i(),{expect:a,waitFor:o}=__STORYBOOK_MODULE_TEST__,s={title:`CosmozSlideout/Advanced/Imperative`,component:`cosmoz-slideout`,tags:[`autodocs`]},c={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>{let t=document.createElement(`cosmoz-slideout`);t.setAttribute(`variant`,`panel`),t.setAttribute(`heading`,`Acme Industries`),t.setAttribute(`subtitle`,`Supplier #4021 · Stockholm, SE`),t.setAttribute(`closeable`,``),t.innerHTML=`
                <p style="
                    margin: 0;
                    color: var(--cz-color-text-tertiary);
                    font-family: var(--cz-font-body);
                    font-size: var(--cz-text-sm);
                ">
                    Built with <code>document.createElement</code> and <code>innerHTML</code> -
                    no framework. The heading, close and footer are the element's own chrome.
                </p>
                <div slot="footer" style="display: flex; justify-content: flex-end;">
                    <button data-close style="
                        padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 4);
                        border: 0;
                        border-radius: var(--cz-radius-md);
                        background: var(--cz-color-bg-brand-solid);
                        color: var(--cz-color-text-on-brand);
                        font: inherit;
                        cursor: pointer;
                    ">
                        Done
                    </button>
                </div>
            `,t.querySelector(`[data-close]`).addEventListener(`click`,()=>t.close()),t.addEventListener(`close`,()=>t.remove()),e.append(t)}}>
                Open (imperative)
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open \(imperative\)/iu}));let i=t.querySelector(`cosmoz-slideout`),s=i.shadowRoot.querySelector(`[popover]`);await n(`mounts and opens with its styled chrome`,async()=>{await o(()=>a(s.matches(`:popover-open`)).toBe(!0)),a(i.shadowRoot.querySelector(`.heading`).textContent).toMatch(/Acme Industries/u),await e.findByShadowText(/no framework/u)}),await n(`the wired action closes and self-removes`,async()=>{i.querySelector(`[data-close]`).click(),await o(()=>a(t.querySelector(`cosmoz-slideout`)).toBeNull())})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const host = document.createElement('div');
    const open = () => {
      const el = document.createElement('cosmoz-slideout') as PanelEl;
      el.setAttribute('variant', 'panel');
      el.setAttribute('heading', 'Acme Industries');
      el.setAttribute('subtitle', 'Supplier #4021 · Stockholm, SE');
      el.setAttribute('closeable', '');
      el.innerHTML = \`
                <p style="
                    margin: 0;
                    color: var(--cz-color-text-tertiary);
                    font-family: var(--cz-font-body);
                    font-size: var(--cz-text-sm);
                ">
                    Built with <code>document.createElement</code> and <code>innerHTML</code> -
                    no framework. The heading, close and footer are the element's own chrome.
                </p>
                <div slot="footer" style="display: flex; justify-content: flex-end;">
                    <button data-close style="
                        padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 4);
                        border: 0;
                        border-radius: var(--cz-radius-md);
                        background: var(--cz-color-bg-brand-solid);
                        color: var(--cz-color-text-on-brand);
                        font: inherit;
                        cursor: pointer;
                    ">
                        Done
                    </button>
                </div>
            \`;
      el.querySelector('[data-close]')!.addEventListener('click', () => el.close());
      el.addEventListener('close', () => el.remove());
      host.append(el);
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open (imperative)
            </cosmoz-button>
            \${host}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open \\(imperative\\)/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('mounts and opens with its styled chrome', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.querySelector('.heading')!.textContent).toMatch(/Acme Industries/u);
      await canvas.findByShadowText(/no framework/u);
    });
    await step('the wired action closes and self-removes', async () => {
      el.querySelector<HTMLButtonElement>('[data-close]')!.click();
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
    });
  }
}`,...c.parameters?.docs?.source}}},l=[`Imperative`]}))();export{c as Imperative,l as __namedExportsOrder,s as default};