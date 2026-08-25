import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-DoR0vQvp.js";import{l as i}from"./src-BPtKnL2i.js";import{t as a}from"./cosmoz-slideout-panel-JPaM_H4p.js";var o,s,c,l,u;e((()=>{i(),n(),a(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={title:`CosmozSlideoutPanel/Lifecycle`,component:`cosmoz-slideout-panel`,tags:[`autodocs`]},l={render:()=>{let e=document.createElement(`div`),n=document.createElement(`ol`);n.dataset.testid=`event-log`,n.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let i=e=>{let t=document.createElement(`li`);t.textContent=e,n.append(t)},a=!1,o=()=>r(t`
                    <cosmoz-slideout-panel
                        .opened=${a}
                        heading="Lifecycle"
                        subtitle="Events and imperative callbacks"
                        closeable
                        @opened-changed=${e=>{a=e.detail.value,a&&i(`opened`),o()}}
                        @full-screen-changed=${e=>i(`full-screen: ${e.detail.fullScreen}`)}
                        @close=${()=>i(`close event`)}
                    >
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
                                @click=${e=>e.currentTarget.closest(`cosmoz-slideout-panel`).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button
                                variant="primary"
                                @click=${e=>e.currentTarget.closest(`cosmoz-slideout-panel`).close()}
                            >
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                `,e);o();let s=e.querySelector(`cosmoz-slideout-panel`);return s.onClose=()=>i(`onClose callback`),t`
            <cosmoz-button variant="primary" @click=${()=>{n.replaceChildren(),s.open()}}>
                Open lifecycle panel
            </cosmoz-button>
            ${n}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout-panel`);await n(`dispatches opened after the entrance transition`,async()=>{await s(()=>o(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await s(()=>o(i()).toContain(`full-screen: true`))}),await n(`fires close and onClose when the animation finishes`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await s(()=>o(i()).toContain(`close event`)),await s(()=>o(i()).toContain(`onClose callback`))})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    let opened = false;
    const rerender = () => render(litHtml\`
                    <cosmoz-slideout-panel
                        .opened=\${opened}
                        heading="Lifecycle"
                        subtitle="Events and imperative callbacks"
                        closeable
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      if (opened) addLog('opened');
      rerender();
    }}
                        @full-screen-changed=\${(e: CustomEvent) => addLog(\`full-screen: \${e.detail.fullScreen}\`)}
                        @close=\${() => addLog('close event')}
                    >
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
                                @click=\${(e: Event) => ((e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button
                                variant="primary"
                                @click=\${(e: Event) => ((e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl).close()}
                            >
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout-panel>
                \`, mount);
    rerender();
    const el = mount.querySelector('cosmoz-slideout-panel') as PanelEl;
    el.onClose = () => addLog('onClose callback');
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
    const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
    await step('dispatches opened after the entrance transition', async () => {
      await waitFor(() => expect(logItems()).toContain('opened'));
    });
    await step('emits full-screen-changed with state detail', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /toggle full screen/iu
      }));
      await waitFor(() => expect(logItems()).toContain('full-screen: true'));
    });
    await step('fires close and onClose when the animation finishes', async () => {
      el.querySelector<HTMLElement>('cosmoz-button:last-of-type')!.click();
      await waitFor(() => expect(logItems()).toContain('close event'));
      await waitFor(() => expect(logItems()).toContain('onClose callback'));
    });
  }
}`,...l.parameters?.docs?.source}}},u=[`Events`]}))();export{l as Events,u as __namedExportsOrder,c as default};