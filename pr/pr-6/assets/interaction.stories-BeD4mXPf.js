import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,lt as n,pt as r,ut as i}from"./iframe-C9FwPToW.js";import{f as a}from"./src-DKiyH0AA.js";import{t as o}from"./cosmoz-slideout-JpLFWnb0.js";import{t as s}from"./cosmoz-input-vzBqGLpA.js";var c,l,u,d,f,p,m,h,g;e((()=>{a(),s(),r(),o(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u=e=>e.currentTarget.closest(`cosmoz-slideout`).close(),d={title:`CosmozSlideout/Interaction`,component:`cosmoz-slideout`,tags:[`autodocs`]},f={render:()=>{let e=document.createElement(`div`),r=document.createElement(`p`);r.dataset.testid=`bg-count`,r.style.cssText=`margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);`;let a=0;return r.textContent=`Background clicks: 0`,t`
            <div
                style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
            >
                <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Supplier"
                        subtitle="Quick preview"
                        closeable
                        @close=${()=>i(n,e)}
                    >
                        <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                            The page behind remains interactive. This is useful for
                            quick-glance panels that should not block the current workflow.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="secondary" @click=${u}>
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                    Open panel
                </cosmoz-button>
                <cosmoz-button variant="secondary" @click=${()=>{a+=1,r.textContent=`Background clicks: ${a}`}}>
                    Background action
                </cosmoz-button>
            </div>
            ${r}${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open panel/iu}));let i=t.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`);await n(`background controls remain clickable while open`,async()=>{await l(()=>c(i.matches(`:popover-open`)).toBe(!0)),await r.click(await e.findByShadowRole(`button`,{name:/background action/iu})),c(t.querySelector(`[data-testid="bg-count"]`).textContent).toMatch(/Background clicks: 1/u)})}},p={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Edit profile"
                        subtitle="Focus returns to the opener on close"
                        closeable
                        @close=${()=>i(n,e)}
                    >
                        <div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
                            <cosmoz-input
                                .label=${`Full name`}
                                .value=${`Alex Karlsson`}
                            ></cosmoz-input>
                            <cosmoz-input
                                .label=${`Email`}
                                .value=${`alex@acme.se`}
                            ></cosmoz-input>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Edit profile
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=await e.findByShadowRole(`button`,{name:/edit profile/iu});await r.click(i);let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);await n(`moves focus into the dialog surface`,async()=>{await l(()=>c(o.matches(`:popover-open`)).toBe(!0)),await l(()=>c(a.shadowRoot.activeElement).toBe(o))}),await n(`returns focus to the opener after close`,async()=>{a.shadowRoot.querySelector(`cosmoz-button[aria-label="Close"]`).click(),await l(()=>c(t.querySelector(`cosmoz-slideout`)).toBeNull()),await l(()=>c(document.activeElement).toBe(t.querySelector(`cosmoz-button`)))})}},m={render:()=>{let e=document.createElement(`div`);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Guarded draft"
                        subtitle="Escape disabled, autofocus disabled"
                        closeable
                        no-escape
                        no-autofocus
                        @close=${()=>i(n,e)}
                    >
                        <p>
                            Use <code>no-escape</code> when accidental dismissal would be
                            destructive. Use <code>no-autofocus</code> when the opener should
                            keep focus until the user explicitly moves it.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=${u}>
                                Close explicitly
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open guarded draft
            </cosmoz-button>
            ${e}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=await e.findByShadowRole(`button`,{name:/open guarded draft/iu});await r.click(i);let a=t.querySelector(`cosmoz-slideout`),o=a.shadowRoot.querySelector(`[popover]`);await n(`opens without stealing focus from the trigger`,async()=>{await l(()=>c(o.matches(`:popover-open`)).toBe(!0)),c(a.shadowRoot.activeElement).not.toBe(o),c(document.activeElement).not.toBe(a)}),await n(`Escape does not close the guarded panel`,async()=>{await r.keyboard(`{Escape}`),c(o.matches(`:popover-open`)).toBe(!0)})}},h={render:()=>{let e=document.createElement(`div`),r=document.createElement(`div`),a=()=>i(t`
                    <cosmoz-slideout
                        aria-label="Second"
                        style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
                        @close=${()=>i(n,r)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=${u}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Second
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The top-most slideout. Press Esc to close just this one.
                        </div>
                    </cosmoz-slideout>
                `,r);return t`
            <cosmoz-button variant="primary" @click=${()=>i(t`
                    <cosmoz-slideout
                        aria-label="First"
                        @close=${()=>i(n,e)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=${u}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            First
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            <p style="margin: 0 0 12px;">The underlying slideout.</p>
                            <cosmoz-button variant="secondary" size="sm" @click=${a}>
                                Open a second slideout
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                `,e)}>
                Open first
            </cosmoz-button>
            ${e}${r}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{let i=()=>t.querySelectorAll(`cosmoz-slideout`).length,a=()=>[...t.querySelectorAll(`cosmoz-slideout`)].map(e=>e.getAttribute(`aria-label`));await r.click(await e.findByShadowRole(`button`,{name:/open first/iu})),await n(`opens a second slideout above the first`,async()=>{await l(()=>c(i()).toBe(1)),await r.click(await e.findByShadowRole(`button`,{name:/open a second slideout/iu})),await l(()=>c(i()).toBe(2))}),await n(`Escape closes the most recent slideout first`,async()=>{await r.keyboard(`{Escape}`),await l(()=>c(a()).toEqual([`First`]))})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const status = document.createElement('p');
    status.dataset.testid = 'bg-count';
    status.style.cssText = 'margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);';
    let count = 0;
    status.textContent = 'Background clicks: 0';
    const bump = () => {
      count += 1;
      status.textContent = \`Background clicks: \${count}\`;
    };
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Supplier"
                        subtitle="Quick preview"
                        closeable
                        @close=\${() => render(nothing, mount)}
                    >
                        <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                            The page behind remains interactive. This is useful for
                            quick-glance panels that should not block the current workflow.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="secondary" @click=\${closeSlideout}>
                                Close
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <div
                style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
            >
                <cosmoz-button variant="primary" @click=\${open}>
                    Open panel
                </cosmoz-button>
                <cosmoz-button variant="secondary" @click=\${bump}>
                    Background action
                </cosmoz-button>
            </div>
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
      name: /open panel/iu
    }));
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('background controls remain clickable while open', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /background action/iu
      }));
      expect(canvasElement.querySelector('[data-testid="bg-count"]')!.textContent).toMatch(/Background clicks: 1/u);
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Edit profile"
                        subtitle="Focus returns to the opener on close"
                        closeable
                        @close=\${() => render(nothing, mount)}
                    >
                        <div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
                            <cosmoz-input
                                .label=\${'Full name'}
                                .value=\${'Alex Karlsson'}
                            ></cosmoz-input>
                            <cosmoz-input
                                .label=\${'Email'}
                                .value=\${'alex@acme.se'}
                            ></cosmoz-input>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Edit profile
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
    const trigger = await canvas.findByShadowRole('button', {
      name: /edit profile/iu
    });
    await userEvent.click(trigger);
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('moves focus into the dialog surface', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      await waitFor(() => expect(el.shadowRoot!.activeElement).toBe(surface));
    });
    await step('returns focus to the opener after close', async () => {
      el.shadowRoot!.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!.click();
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull());
      await waitFor(() => expect(document.activeElement).toBe(canvasElement.querySelector('cosmoz-button')));
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mount = document.createElement('div');
    const open = () => render(html\`
                    <cosmoz-slideout
                        variant="panel"
                        heading="Guarded draft"
                        subtitle="Escape disabled, autofocus disabled"
                        closeable
                        no-escape
                        no-autofocus
                        @close=\${() => render(nothing, mount)}
                    >
                        <p>
                            Use <code>no-escape</code> when accidental dismissal would be
                            destructive. Use <code>no-autofocus</code> when the opener should
                            keep focus until the user explicitly moves it.
                        </p>
                        <div
                            slot="footer"
                            style="display: flex; justify-content: flex-end;"
                        >
                            <cosmoz-button variant="primary" @click=\${closeSlideout}>
                                Close explicitly
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mount);
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open guarded draft
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
    const trigger = await canvas.findByShadowRole('button', {
      name: /open guarded draft/iu
    });
    await userEvent.click(trigger);
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('opens without stealing focus from the trigger', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.activeElement).not.toBe(surface);
      expect(document.activeElement).not.toBe(el);
    });
    await step('Escape does not close the guarded panel', async () => {
      await userEvent.keyboard('{Escape}');
      expect(surface.matches(':popover-open')).toBe(true);
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mountA = document.createElement('div');
    const mountB = document.createElement('div');
    const openB = () => render(html\`
                    <cosmoz-slideout
                        aria-label="Second"
                        style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
                        @close=\${() => render(nothing, mountB)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=\${closeSlideout}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            Second
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            The top-most slideout. Press Esc to close just this one.
                        </div>
                    </cosmoz-slideout>
                \`, mountB);
    const openA = () => render(html\`
                    <cosmoz-slideout
                        aria-label="First"
                        @close=\${() => render(nothing, mountA)}
                    >
                        <cosmoz-button
                            slot="controls"
                            variant="tertiary"
                            size="sm"
                            aria-label="Close"
                            @click=\${closeSlideout}
                        >
                            ✕
                        </cosmoz-button>
                        <h2
                            slot="header"
                            style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
                        >
                            First
                        </h2>
                        <div
                            style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
                        >
                            <p style="margin: 0 0 12px;">The underlying slideout.</p>
                            <cosmoz-button variant="secondary" size="sm" @click=\${openB}>
                                Open a second slideout
                            </cosmoz-button>
                        </div>
                    </cosmoz-slideout>
                \`, mountA);
    return html\`
            <cosmoz-button variant="primary" @click=\${openA}>
                Open first
            </cosmoz-button>
            \${mountA}\${mountB}
        \`;
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    userEvent
  }) => {
    const count = () => canvasElement.querySelectorAll('cosmoz-slideout').length;
    const labels = () => [...canvasElement.querySelectorAll('cosmoz-slideout')].map(s => s.getAttribute('aria-label'));
    await userEvent.click(await canvas.findByShadowRole('button', {
      name: /open first/iu
    }));
    await step('opens a second slideout above the first', async () => {
      await waitFor(() => expect(count()).toBe(1));
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: /open a second slideout/iu
      }));
      await waitFor(() => expect(count()).toBe(2));
    });
    await step('Escape closes the most recent slideout first', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(labels()).toEqual(['First']));
    });
  }
}`,...h.parameters?.docs?.source}}},g=[`NonModal`,`FocusRestore`,`DismissalOptions`,`Stacking`]}))();export{m as DismissalOptions,p as FocusRestore,f as NonModal,h as Stacking,g as __namedExportsOrder,d as default};