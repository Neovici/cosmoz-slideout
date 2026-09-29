import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-C-Wxb5QC.js";import{c as i,t as a}from"./cosmoz-slideout-BQP69ErK.js";import{t as o}from"./cosmoz-slideout-panel-DI07MGvV.js";var s,c,l,u,d,f,p,m;e((()=>{i(),n(),a(),o(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`CosmozSlideout/Test`,component:`cosmoz-slideout`,tags:[`!autodocs`]},u={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel heading="Supplier #4021" closeable>
                            <p>Body</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Open labelled</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open labelled/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`shell mirrors the panel heading onto its own aria-label and the dialog`,async()=>{await c(()=>s(i.getAttribute(`aria-label`)).toBe(`Supplier #4021`));let e=i.shadowRoot.querySelector(`[popover]`);s(e.getAttribute(`aria-label`)).toBe(`Supplier #4021`)})}},d={render:()=>{let e=document.createElement(`div`),n=document.createElement(`span`);n.dataset.testid=`open-count`,n.textContent=`0`;let i=0,a=!1,o=()=>r(t`
                    <cosmoz-slideout
                        .opened=${a}
                        @open=${()=>{i+=1,n.textContent=String(i)}}
                        @opened-changed=${e=>{a=e.detail.value,o()}}
                    >
                        <p style="padding: 24px">Body</p>
                    </cosmoz-slideout>
                `,e);return o(),t`
            <cosmoz-button variant="primary" @click=${()=>{a=!0,o()}}>
                Open with event
            </cosmoz-button>
            ${n}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open with event/iu})),await n("dispatches `open` after the enter transition settles",async()=>{await c(()=>s(t.querySelector(`[data-testid="open-count"]`).textContent).toBe(`1`))})}},f={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{if(e.detail.value===!1){e.preventDefault();return}n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel closeable><p>Body</p></cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Open guarded</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open guarded/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.shadowRoot.querySelector(`[popover]`);await c(()=>s(a.matches(`:popover-open`)).toBe(!0)),await n(`close is vetoed via opened-changed preventDefault`,async()=>{i.close(),s(i).toHaveAttribute(`opened`),s(a.matches(`:popover-open`)).toBe(!0)})}},p={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel
                            closeable
                            @request-close=${e=>e.preventDefault()}
                        >
                            <p>Body</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Open vetoed X</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open vetoed x/iu}));let i=t.querySelector(`cosmoz-slideout`),a=i.querySelector(`cosmoz-slideout-panel`),o=i.shadowRoot.querySelector(`[popover]`);await c(()=>s(o.matches(`:popover-open`)).toBe(!0)),await n(`the built-in close button is vetoed via request-close`,async()=>{a.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),s(i).toHaveAttribute(`opened`),s(o.matches(`:popover-open`)).toBe(!0)})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel heading="Supplier #4021" closeable>
                            <p>Body</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}
                >Open labelled</cosmoz-button
            >
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
      name: /open labelled/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    await step('shell mirrors the panel heading onto its own aria-label and the dialog', async () => {
      await waitFor(() => expect(el.getAttribute('aria-label')).toBe('Supplier #4021'));
      // the actual role="dialog" node must carry the name too
      const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
      expect(surface.getAttribute('aria-label')).toBe('Supplier #4021');
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const status = document.createElement('span');
    status.dataset.testid = 'open-count';
    status.textContent = '0';
    let count = 0;
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @open=\${() => {
      count += 1;
      status.textContent = String(count);
    }}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <p style="padding: 24px">Body</p>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open with event
            </cosmoz-button>
            \${status}\${mount}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open with event/iu
    }));
    await step('dispatches \`open\` after the enter transition settles', async () => {
      await waitFor(() => expect(canvasElement.querySelector('[data-testid="open-count"]')!.textContent).toBe('1'));
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      if (e.detail.value === false) {
        e.preventDefault(); // veto the close
        return;
      }
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel closeable><p>Body</p></cosmoz-slideout-panel>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}
                >Open guarded</cosmoz-button
            >
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
      name: /open guarded/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
    await step('close is vetoed via opened-changed preventDefault', async () => {
      el.close();
      // the veto bails inside set() before the attribute is touched, synchronously
      expect(el).toHaveAttribute('opened');
      expect(surface.matches(':popover-open')).toBe(true);
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel
                            closeable
                            @request-close=\${(e: Event) => e.preventDefault()}
                        >
                            <p>Body</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}
                >Open vetoed X</cosmoz-button
            >
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
      name: /open vetoed x/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const panel = el.querySelector('cosmoz-slideout-panel')!;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
    await step('the built-in close button is vetoed via request-close', async () => {
      panel.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      expect(el).toHaveAttribute('opened');
      expect(surface.matches(':popover-open')).toBe(true);
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`AriaLabelFromHeading`,`OpenEvent`,`VetoOpenedChanged`,`VetoRequestClose`]}))();export{u as AriaLabelFromHeading,d as OpenEvent,f as VetoOpenedChanged,p as VetoRequestClose,m as __namedExportsOrder,l as default};