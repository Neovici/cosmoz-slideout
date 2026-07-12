import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a,h as o,r as s,t as c}from"./src-DKiyH0AA.js";import{t as l}from"./cosmoz-slideout-JpLFWnb0.js";var u,d,f,p,m,h;e((()=>{a(),o(),r(),l(),c(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,customElements.get(`demo-labeled-slideout`)||customElements.define(`demo-labeled-slideout`,s(e=>t`
                <cosmoz-button
                    variant="tertiary"
                    size="sm"
                    aria-label="Close"
                    style="position: absolute; top: 12px; right: 12px; z-index: 3;"
                    @click=${()=>e.close()}
                >
                    ✕
                </cosmoz-button>
                <h2
                    id="dialog-title"
                    style="margin: 0; padding: 24px 24px 4px; font: 600 20px/1.4 system-ui;"
                >
                    Same-tree label
                </h2>
                <div style="padding: 12px 24px; color: var(--cz-color-text-tertiary);">
                    <code>aria-labelledby</code> works here because the title is rendered
                    in the same shadow tree as the dialog surface.
                </div>
            `)),f={title:`CosmozSlideout/Lifecycle`,component:`cosmoz-slideout`,tags:[`autodocs`]},p={render:()=>{let e=document.createElement(`div`),r=document.createElement(`ol`);r.dataset.testid=`event-log`,r.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let a=e=>{let t=document.createElement(`li`);t.textContent=e,r.append(t)};return t`
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>[...t.querySelectorAll(`[data-testid="event-log"] li`)].map(e=>e.textContent);await r.click(await e.findByShadowRole(`button`,{name:/open lifecycle panel/iu}));let a=t.querySelector(`cosmoz-slideout`);await n(`dispatches opened after the entrance transition`,async()=>{await d(()=>u(i()).toContain(`opened`))}),await n(`emits full-screen-changed with state detail`,async()=>{await r.click(await e.findByShadowRole(`button`,{name:/toggle full screen/iu})),await d(()=>u(i()).toContain(`full-screen: true`))}),await n(`fires close and onClose when the animation finishes`,async()=>{a.querySelector(`cosmoz-button:last-of-type`).click(),await d(()=>u(i()).toContain(`close event`)),await d(()=>u(i()).toContain(`onClose callback`))})}},m={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <demo-labeled-slideout
                        aria-labelledby="dialog-title"
                        @close=${()=>i(n,e)}
                    ></demo-labeled-slideout>
                `,e)}>
                Open labelled factory slideout
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open labelled factory slideout/iu}));let i=t.querySelector(`demo-labeled-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await n(`mirrors aria-labelledby onto the same-tree dialog surface`,async()=>{await d(()=>u(a.matches(`:popover-open`)).toBe(!0)),u(a).toHaveAttribute(`aria-labelledby`,`dialog-title`),u(i.shadowRoot.querySelector(`#dialog-title`)).not.toBeNull()})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(litHtml\`
                    <demo-labeled-slideout
                        aria-labelledby="dialog-title"
                        @close=\${() => render(nothing, mount)}
                    ></demo-labeled-slideout>
                \`, mount);
    return litHtml\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open labelled factory slideout
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
      name: /open labelled factory slideout/iu
    }));
    const el = canvasElement.querySelector('demo-labeled-slideout') as LabeledEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('mirrors aria-labelledby onto the same-tree dialog surface', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(surface).toHaveAttribute('aria-labelledby', 'dialog-title');
      expect(el.shadowRoot!.querySelector('#dialog-title')).not.toBeNull();
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Events`,`AriaLabelledbyFactory`]}))();export{m as AriaLabelledbyFactory,p as Events,h as __namedExportsOrder,f as default};