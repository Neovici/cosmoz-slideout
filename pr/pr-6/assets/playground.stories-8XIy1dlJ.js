import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n}from"./iframe-rxxicwRP.js";import{d as r,f as i,t as a}from"./cosmoz-slideout-Bx0QNqgs.js";import{n as o,r as s,t as c}from"./arg-types-B_r0JqzP.js";var l,u,d,f,p;e((()=>{n(),r(),a(),o(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`CosmozSlideout/Playground`,component:`cosmoz-slideout`,argTypes:s,args:c},f={tags:[`!autodocs`],render:e=>t`
        <cosmoz-slideout
            variant=${i(e.variant||void 0)}
            heading=${i(e.heading)}
            subtitle=${i(e.subtitle)}
            aria-label=${i(e[`aria-label`])}
            ?closeable=${e.closeable}
            ?loading=${e.loading}
            ?full-screen=${e[`full-screen`]}
            ?no-escape=${e[`no-escape`]}
            ?no-autofocus=${e[`no-autofocus`]}
            style=${`--cosmoz-slideout-width: ${e.width};`}
        >
            <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                Adjust the Controls tab. Variant, heading, subtitle, closeability,
                loading, full-screen, dismissal options, and width update this open
                slideout live.
            </p>
            <div
                slot="footer"
                style="display: flex; justify-content: flex-end; gap: 8px;"
            >
                <span style="color: var(--cz-color-text-tertiary);">
                    Footer slot preview
                </span>
            </div>
        </cosmoz-slideout>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-slideout`),r=n.shadowRoot.querySelector(`[popover]`);await t(`opens configured from the args`,async()=>{await u(()=>l(r.matches(`:popover-open`)).toBe(!0)),l(n.shadowRoot.querySelector(`cz-spinner`)).toBeNull()})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => html\`
        <cosmoz-slideout
            variant=\${ifDefined(args.variant || undefined)}
            heading=\${ifDefined(args.heading)}
            subtitle=\${ifDefined(args.subtitle)}
            aria-label=\${ifDefined(args['aria-label'])}
            ?closeable=\${args.closeable}
            ?loading=\${args.loading}
            ?full-screen=\${args['full-screen']}
            ?no-escape=\${args['no-escape']}
            ?no-autofocus=\${args['no-autofocus']}
            style=\${\`--cosmoz-slideout-width: \${args.width};\`}
        >
            <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                Adjust the Controls tab. Variant, heading, subtitle, closeability,
                loading, full-screen, dismissal options, and width update this open
                slideout live.
            </p>
            <div
                slot="footer"
                style="display: flex; justify-content: flex-end; gap: 8px;"
            >
                <span style="color: var(--cz-color-text-tertiary);">
                    Footer slot preview
                </span>
            </div>
        </cosmoz-slideout>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
    const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
    await step('opens configured from the args', async () => {
      await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
      expect(el.shadowRoot!.querySelector('cz-spinner')).toBeNull();
    });
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`]}))();export{f as Playground,p as __namedExportsOrder,d as default};