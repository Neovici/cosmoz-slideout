import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-t4IxhJg_.js";import{t as i}from"./cosmoz-slideout-BmRMwPky.js";import{t as a}from"./cosmoz-button-BIXHsZAb.js";import{n as o,r as s}from"./story-docs-CVcPOcP0.js";import{t as c}from"./cosmoz-slideout-panel-VrOQRnND.js";import{n as l,r as u}from"./chrome-BxtIFk4o.js";var d,f,p,m,h;e((()=>{a(),n(),i(),c(),u(),o(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`CosmozSlideout/Events`,component:`cosmoz-slideout`,tags:[`autodocs`]},m={parameters:s("The surface event lifecycle: `open` / `opened-changed` / `full-screen-changed` / `close`. The element persists in the DOM across open/close cycles."),render:()=>{let e=document.createElement(`div`),n=document.createElement(`ol`);n.dataset.testid=`event-log`,n.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let i=e=>{let t=document.createElement(`li`);t.textContent=e,n.append(t)},a=e=>e.currentTarget.closest(`cosmoz-slideout`),o=!1,s=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Lifecycle"
                        .opened=${o}
                        @opened-changed=${e=>{o=e.detail.value,o&&i(`opened`),s()}}
                        @full-screen-changed=${e=>i(`full-screen: ${String(e.detail.value)}`)}
                        @close=${()=>i(`close event`)}
                    >
                        <cosmoz-slideout-panel>
                            ${l(`Lifecycle`,{subtitle:`Events and imperative methods`})}
                            <p>
                                The element persists in the DOM. It emits <code>opened-changed</code>
                                and, on close, <code>close</code> once the slide-out animation
                                completes.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end; gap: 8px;"
                            >
                                <cosmoz-button
                                    variant="secondary"
                                    @click=${e=>a(e)?.toggleFullScreen()}
                                >
                                    Toggle full screen
                                </cosmoz-button>
                                <cosmoz-button
                                    variant="primary"
                                    @click=${e=>a(e)?.close()}
                                >
                                    Close
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);s();let c=e.querySelector(`cosmoz-slideout`);return t`
            <cosmoz-button variant="primary" @click=${()=>{n.replaceChildren(),c.open()}}>
                Open lifecycle panel
            </cosmoz-button>
            ${n}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout`);await n(`logs opened when the surface opens`,async()=>{await f(()=>d(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await f(()=>d(i()).toContain(`full-screen: true`))}),await n(`fires close when the animation finishes`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await f(()=>d(a.matches(`:popover-open`)).toBe(!1)),await f(()=>d(i()).toContain(`close event`))})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('The surface event lifecycle: \`open\` / \`opened-changed\` / ' + '\`full-screen-changed\` / \`close\`. The element ' + 'persists in the DOM across open/close cycles.'),
  render: () => {
    const mount = document.createElement('div');
    const log = document.createElement('ol');
    log.dataset.testid = 'event-log';
    log.style.cssText = 'margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);';
    const addLog = (message: string) => {
      const item = document.createElement('li');
      item.textContent = message;
      log.append(item);
    };
    const shellOf = (e: Event) => (e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl | null;
    let opened = false;
    const rerender = () => render(litHtml\`
                    <cosmoz-slideout
                        aria-label="Lifecycle"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      if (opened) addLog('opened');
      rerender();
    }}
                        @full-screen-changed=\${(e: CustomEvent) => addLog(\`full-screen: \${String(e.detail.value)}\`)}
                        @close=\${() => addLog('close event')}
                    >
                        <cosmoz-slideout-panel>
                            \${header('Lifecycle', {
      subtitle: 'Events and imperative methods'
    })}
                            <p>
                                The element persists in the DOM. It emits <code>opened-changed</code>
                                and, on close, <code>close</code> once the slide-out animation
                                completes.
                            </p>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: flex-end; gap: 8px;"
                            >
                                <cosmoz-button
                                    variant="secondary"
                                    @click=\${(e: Event) => shellOf(e)?.toggleFullScreen()}
                                >
                                    Toggle full screen
                                </cosmoz-button>
                                <cosmoz-button
                                    variant="primary"
                                    @click=\${(e: Event) => shellOf(e)?.close()}
                                >
                                    Close
                                </cosmoz-button>
                            </div>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const el = mount.querySelector('cosmoz-slideout') as SlideoutEl;
    const open = () => {
      log.replaceChildren();
      el.open();
    };
    return litHtml\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open lifecycle panel
            </cosmoz-button>
            \${log}\${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    const logItems = () => [...canvasElement.querySelectorAll('[data-testid="event-log"] li')].map(item => item.textContent);
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open lifecycle panel/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    await step('logs opened when the surface opens', async () => {
      await waitFor(() => expect(logItems()).toContain('opened'));
    });
    await step('emits full-screen-changed with state detail', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /toggle full screen/iu
      }));
      await waitFor(() => expect(logItems()).toContain('full-screen: true'));
    });
    await step('fires close when the animation finishes', async () => {
      el.querySelector<HTMLElement>('cosmoz-button:last-of-type')!.click();
      await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
      await waitFor(() => expect(logItems()).toContain('close event'));
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Events`]}))();export{m as Events,h as __namedExportsOrder,p as default};