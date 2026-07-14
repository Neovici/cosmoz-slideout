import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-rxxicwRP.js";import{t as a,u as o}from"./cosmoz-slideout-Bx0QNqgs.js";var s,c,l,u,d;e((()=>{o(),r(),a(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`CosmozSlideout/Lifecycle`,component:`cosmoz-slideout`,tags:[`autodocs`]},u={render:()=>{let e=document.createElement(`div`),r=document.createElement(`ol`);r.dataset.testid=`event-log`,r.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let a=e=>{let t=document.createElement(`li`);t.textContent=e,r.append(t)};return t`
            <cosmoz-button variant="primary" @click=${()=>{r.replaceChildren(),i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Lifecycle"
                        subtitle="Events and imperative callbacks"
                        closeable
                        @opened=${()=>a(`opened`)}
                        @full-screen-changed=${e=>a(`full-screen: ${e.detail.fullScreen}`)}
                        @close=${()=>{a(`close event`),i(n,e)}}
                    >
                        <p>
                            The parent owns removal. It waits for <code>close</code>, then clears
                            the mount point after the slide-out animation completes.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button
                                variant="secondary"
                                @click=${e=>e.currentTarget.closest(`cosmoz-slideout`).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button
                                variant="primary"
                                @click=${e=>e.currentTarget.closest(`cosmoz-slideout`).close()}
                            >
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e);let o=e.querySelector(`cosmoz-slideout`);o.onClose=()=>a(`onClose callback`)}}>
                Open lifecycle panel
            </cosmoz-button>
            ${r}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout`);await n(`dispatches opened after the entrance transition`,async()=>{await c(()=>s(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await c(()=>s(i()).toContain(`full-screen: true`))}),await n(`fires close and onClose when the animation finishes`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await c(()=>s(i()).toContain(`close event`)),await c(()=>s(i()).toContain(`onClose callback`))})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const open = () => {
      log.replaceChildren();
      render(litHtml\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Lifecycle"
                        subtitle="Events and imperative callbacks"
                        closeable
                        @opened=\${() => addLog('opened')}
                        @full-screen-changed=\${(e: CustomEvent) => addLog(\`full-screen: \${e.detail.fullScreen}\`)}
                        @close=\${() => {
        addLog('close event');
        render(nothing, mount);
      }}
                    >
                        <p>
                            The parent owns removal. It waits for <code>close</code>, then clears
                            the mount point after the slide-out animation completes.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end; gap: 8px;"
                        >
                            <cosmoz-button
                                variant="secondary"
                                @click=\${(e: Event) => ((e.currentTarget as HTMLElement).closest('cosmoz-slideout') as PanelEl).toggleFullScreen()}
                            >
                                Toggle full screen
                            </cosmoz-button>
                            <cosmoz-button
                                variant="primary"
                                @click=\${(e: Event) => ((e.currentTarget as HTMLElement).closest('cosmoz-slideout') as PanelEl).close()}
                            >
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
      const el = mount.querySelector('cosmoz-slideout') as PanelEl;
      el.onClose = () => addLog('onClose callback');
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
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
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
}`,...u.parameters?.docs?.source}}},d=[`Events`]}))();export{u as Events,d as __namedExportsOrder,l as default};