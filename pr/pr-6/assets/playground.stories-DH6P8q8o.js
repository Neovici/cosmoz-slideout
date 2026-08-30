import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n}from"./iframe-DWBJWh4P.js";import{o as r,s as i,t as a}from"./cosmoz-slideout-C7zBUPKs.js";import{t as o}from"./cosmoz-slideout-panel-CGzjyQPH.js";import{n as s,r as c,t as l}from"./arg-types-D3pNWIEf.js";var u,d,f,p,m;e((()=>{n(),r(),a(),o(),s(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={title:`CosmozSlideoutPanel/Playground`,component:`cosmoz-slideout-panel`,argTypes:c,args:l},p={tags:[`!autodocs`],render:e=>t`
        <cosmoz-slideout
            .opened=${e.opened}
            aria-label=${i(e[`aria-label`])}
            ?full-screen=${e[`full-screen`]}
            ?no-escape=${e[`no-escape`]}
            ?no-autofocus=${e[`no-autofocus`]}
            style=${`--cosmoz-slideout-width: ${e.width};`}
        >
            <cosmoz-slideout-panel
                heading=${i(e.heading)}
                subtitle=${i(e.subtitle)}
                ?closeable=${e.closeable}
                ?loading=${e.loading}
            >
                <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                    Adjust the Controls tab. Heading, subtitle, closeability, loading,
                    full-screen, dismissal options, and width update this open slideout
                    live.
                </p>
                <div
                    slot="footer"
                    style="display: flex; justify-content: flex-end; gap: 8px;"
                >
                    <span style="color: var(--cz-color-text-tertiary);">
                        Footer slot preview
                    </span>
                </div>
            </cosmoz-slideout-panel>
        </cosmoz-slideout>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-slideout`).shadowRoot.querySelector(`[popover]`),r=e.querySelector(`cosmoz-slideout-panel`);await t(`opens configured from the args`,async()=>{await d(()=>u(n.matches(`:popover-open`)).toBe(!0)),u(r.shadowRoot.querySelector(`cz-spinner`)).toBeNull()})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => html\`
        <cosmoz-slideout
            .opened=\${args.opened}
            aria-label=\${ifDefined(args['aria-label'])}
            ?full-screen=\${args['full-screen']}
            ?no-escape=\${args['no-escape']}
            ?no-autofocus=\${args['no-autofocus']}
            style=\${\`--cosmoz-slideout-width: \${args.width};\`}
        >
            <cosmoz-slideout-panel
                heading=\${ifDefined(args.heading)}
                subtitle=\${ifDefined(args.subtitle)}
                ?closeable=\${args.closeable}
                ?loading=\${args.loading}
            >
                <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                    Adjust the Controls tab. Heading, subtitle, closeability, loading,
                    full-screen, dismissal options, and width update this open slideout
                    live.
                </p>
                <div
                    slot="footer"
                    style="display: flex; justify-content: flex-end; gap: 8px;"
                >
                    <span style="color: var(--cz-color-text-tertiary);">
                        Footer slot preview
                    </span>
                </div>
            </cosmoz-slideout-panel>
        </cosmoz-slideout>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const shell = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
    await step('opens configured from the args', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(panel.shadowRoot!.querySelector('cz-spinner')).toBeNull();
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`Playground`]}))();export{p as Playground,m as __namedExportsOrder,f as default};