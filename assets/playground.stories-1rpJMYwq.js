import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n}from"./iframe-CRNUb-Kg.js";import{c as r,s as i,t as a}from"./cosmoz-slideout-Ra0aqB7x.js";import{t as o}from"./cosmoz-slideout-panel-CK1QDnpX.js";import{n as s,r as c,t as l}from"./arg-types-CXxcK3Un.js";var u,d,f,p,m;e((()=>{n(),i(),a(),o(),s(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={title:`CosmozSlideoutPanel/Playground`,component:`cosmoz-slideout-panel`,argTypes:c,args:l},p={tags:[`!autodocs`],render:e=>t`
        <cosmoz-slideout
            .opened=${e.opened}
            aria-label=${r(e[`aria-label`])}
            ?full-screen=${e[`full-screen`]}
            ?no-escape=${e[`no-escape`]}
            style=${`--cosmoz-slideout-width: ${e.width};`}
        >
            <cosmoz-slideout-panel>
                <div slot="header">
                    <h2
                        style="margin: 0; font-size: var(--cz-text-lg, 1.125rem); font-weight: var(--cz-font-weight-medium, 500); color: var(--cz-color-text-primary);"
                    >
                        ${e.heading??`Panel`}
                    </h2>
                </div>
                <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                    Adjust the Controls tab. The slotted header title, full-screen,
                    dismissal options, and width update this open slideout live.
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
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-slideout`);await t(`opens configured from the args`,async()=>{await d(()=>u(n.matches(`:popover-open`)).toBe(!0))})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => html\`
        <cosmoz-slideout
            .opened=\${args.opened}
            aria-label=\${ifDefined(args['aria-label'])}
            ?full-screen=\${args['full-screen']}
            ?no-escape=\${args['no-escape']}
            style=\${\`--cosmoz-slideout-width: \${args.width};\`}
        >
            <cosmoz-slideout-panel>
                <div slot="header">
                    <h2
                        style="margin: 0; font-size: var(--cz-text-lg, 1.125rem); font-weight: var(--cz-font-weight-medium, 500); color: var(--cz-color-text-primary);"
                    >
                        \${args.heading ?? 'Panel'}
                    </h2>
                </div>
                <p style="margin: 0; color: var(--cz-color-text-tertiary);">
                    Adjust the Controls tab. The slotted header title, full-screen,
                    dismissal options, and width update this open slideout live.
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
    const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
    await step('opens configured from the args', async () => {
      await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`Playground`]}))();export{p as Playground,m as __namedExportsOrder,f as default};