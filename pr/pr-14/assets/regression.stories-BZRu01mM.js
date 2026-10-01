import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-Dp3nFETT.js";import{t as i}from"./cosmoz-slideout-DO9bglUk.js";import{t as a}from"./cosmoz-button-DQe12kHP.js";import{t as o}from"./cosmoz-slideout-panel-kOtHlKOa.js";import{n as s,r as c}from"./chrome-BN1DCgj5.js";var l,u,d,f,p,m,h,g;e((()=>{a(),n(),i(),o(),c(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`CosmozSlideout/Test`,component:`cosmoz-slideout`,tags:[`!autodocs`]},f={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        aria-label="Supplier #4021"
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel>
                            <div slot="header">
                                <h2>Supplier #4021</h2>
                            </div>
                            <p>Body</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Open labelled</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open labelled/iu}));let i=t.querySelector(`cosmoz-slideout`);await n(`the authored aria-label names the host`,async()=>{l(i.getAttribute(`aria-label`)).toBe(`Supplier #4021`)})}},p={render:()=>{let e=document.createElement(`div`),n=document.createElement(`span`);n.dataset.testid=`open-count`,n.textContent=`0`;let i=0,a=!1,o=()=>r(t`
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open with event/iu})),await n("dispatches `open` after the enter transition settles",async()=>{await u(()=>l(t.querySelector(`[data-testid="open-count"]`).textContent).toBe(`1`))})}},m={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{if(e.detail.value===!1){e.preventDefault();return}n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel><p>Body</p></cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Open guarded</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open guarded/iu}));let i=t.querySelector(`cosmoz-slideout`);await u(()=>l(i.matches(`:popover-open`)).toBe(!0)),await n(`close is vetoed via opened-changed preventDefault`,async()=>{i.close(),l(i).toHaveAttribute(`opened`),l(i.matches(`:popover-open`)).toBe(!0)})}},h={render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-slideout
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                    >
                        <cosmoz-slideout-panel
                            @request-close=${e=>e.preventDefault()}
                        >
                            ${s(`Vetoed`,{})}
                            <p>Body</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}
                >Open vetoed X</cosmoz-button
            >
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open vetoed x/iu}));let i=t.querySelector(`cosmoz-slideout`);await u(()=>l(i.matches(`:popover-open`)).toBe(!0)),await n(`the slotted close control is vetoed via request-close`,async()=>{i.querySelector(`cosmoz-button[aria-label="Close"]`).click(),l(i).toHaveAttribute(`opened`),l(i.matches(`:popover-open`)).toBe(!0)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Supplier #4021"
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                    >
                        <cosmoz-slideout-panel>
                            <div slot="header">
                                <h2>Supplier #4021</h2>
                            </div>
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
    await step('the authored aria-label names the host', async () => {
      expect(el.getAttribute('aria-label')).toBe('Supplier #4021');
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                        <cosmoz-slideout-panel><p>Body</p></cosmoz-slideout-panel>
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
    await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
    await step('close is vetoed via opened-changed preventDefault', async () => {
      el.close();
      // the veto bails inside set() before the attribute is touched, synchronously
      expect(el).toHaveAttribute('opened');
      expect(el.matches(':popover-open')).toBe(true);
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
                            @request-close=\${(e: Event) => e.preventDefault()}
                        >
                            \${header('Vetoed', {})}
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
    await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
    await step('the slotted close control is vetoed via request-close', async () => {
      el.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      expect(el).toHaveAttribute('opened');
      expect(el.matches(':popover-open')).toBe(true);
    });
  }
}`,...h.parameters?.docs?.source}}},g=[`ExplicitAriaLabel`,`OpenEvent`,`VetoOpenedChanged`,`VetoRequestClose`]}))();export{f as ExplicitAriaLabel,p as OpenEvent,m as VetoOpenedChanged,h as VetoRequestClose,g as __namedExportsOrder,d as default};