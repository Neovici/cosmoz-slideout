import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-lkyprYIf.js";import{B as i,C as a,D as o,E as s,I as c,S as l,W as u,_ as d,a as f,c as p,d as m,f as h,g,h as _,i as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O,x as k,y as A}from"./cosmoz-slideout-BqdY8s57.js";import{t as j}from"./cosmoz-button-51RK0twr.js";import{n as M,t as N}from"./trusted-6AwRJoKi.js";import{n as P,r as F,t as I}from"./story-docs-CVcPOcP0.js";import{t as L}from"./cosmoz-slideout-panel-CTHLhMyj.js";import{i as R,n as z,t as B}from"./helpers-BYVc8PeY.js";var V,H=e((()=>{A(),V=k`
	:host::backdrop {
		background: transparent;
		transition:
			display var(--_dur) allow-discrete,
			overlay var(--_dur) allow-discrete,
			background-color var(--_dur) var(--_ease);
	}

	:host(:popover-open)::backdrop {
		background: var(
			--cosmoz-slideout-backdrop,
			color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)
		);

		@starting-style {
			background: transparent;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:host::backdrop {
			transition: none;
		}
	}
`})),U,W=e((()=>{s(),_(),C(),m(),y(),T(),f(),w(),U=()=>{let[e,t,n]=g(`opened`),r=i(()=>t(!0),[t]),a=i(()=>t(!1),[t]);p({opened:e,close:a});let o=c(),s=h(),l=b(),d=v(`closed`,{closed:{setup:[()=>{o.dispatchEvent(new Event(`close`,{bubbles:!0})),s.restore()}],transitions:{OPEN:{to:`opening`,guard:[()=>!o.matches(`:popover-open`)]}}},opening:{setup:[s.capture,()=>o.showPopover(),({send:e})=>l.arm(()=>e(`SETTLE`))],teardown:[l.clear],transitions:{OPEN:{to:`opening`},CLOSE:{to:`closing`},SETTLE:{to:`open`}}},open:{setup:[()=>{o.dispatchEvent(new Event(`open`,{bubbles:!0})),s.restore()}],transitions:{CLOSE:{to:`closing`}}},closing:{setup:[s.arm,()=>{o.matches(`:popover-open`)&&o.hidePopover()},({send:e})=>l.arm(()=>e(`SETTLE`))],teardown:[l.clear],transitions:{CLOSE:{to:`closing`},OPEN:{to:`opening`},SETTLE:{to:`closed`}}}});u(()=>o.addEventListener(`transitionend`,e=>{e.target!==o||e.propertyName!==`translate`||d.send(`SETTLE`)}),[]),u(()=>{d.send(e?`OPEN`:`CLOSE`)},[e]),u(()=>{let e=e=>{e.newState===`closed`&&o.hasAttribute(`opened`)&&n(!1)};return o.addEventListener(`toggle`,e),()=>o.removeEventListener(`toggle`,e)},[n]);let{fullScreen:f,toggle:m}=D();return S({open:r,close:a,toggleFullScreen:m}),{opened:e,open:r,close:a,fullScreen:f,toggleFullScreen:m}}})),G,K,q=e((()=>{l(),s(),H(),x(),O(),W(),G=()=>(U(),t`<slot></slot>`),K=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute(`popover`,`auto`),this.setAttribute(`aria-modal`,`true`)}},customElements.define(`cosmoz-modal-slideout`,o(G,{baseElement:K,observedAttributes:[`opened`,`full-screen`],styleSheets:[a,d,V]}))})),J,Y,X,Z,Q,$;e((()=>{j(),n(),q(),L(),B(),P(),N(),{expect:J,waitFor:Y}=__STORYBOOK_MODULE_TEST__,X={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:I('The modal personality of the slideout: rendered with `popover="auto"` and `aria-modal="true"`, a scrim backdrop, and UA-owned dismissal - Esc, the hardware back button and clicks on the backdrop close the surface natively (final; `opened-changed` syncs, non-cancelable). Programmatic `close()` and slotted `request-close` keep the vetoable funnel.')},Z={args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>r(z({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},R({},t`
                            <div slot="header">
                                <h2 class="demo-heading">Modal slideout</h2>
                            </div>
                            <p>
                                <strong>Esc</strong>, the <strong>backdrop</strong>, or the
                                header's close control dismiss it natively. The scrim is
                                <code>--cosmoz-slideout-backdrop</code>.
                            </p>
                        `)),n);return i(),t`
            <cosmoz-button
                variant="primary"
                @click=${()=>{e.opened=!0,i()}}
            >
                Open modal slideout
            </cosmoz-button>
            ${n}
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`);await n(`opens with the scrim and modal typing`,async()=>{await Y(()=>J(i.matches(`:popover-open`)).toBe(!0)),J(i.getAttribute(`popover`)).toBe(`auto`),J(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await M(n);e&&(await e.keyboard(`{Escape}`),await Y(()=>J(i.matches(`:popover-open`)).toBe(!1)))})}},Q={parameters:F("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens as the surface."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
                    <cosmoz-modal-slideout
                        .opened=${n}
                        @opened-changed=${e=>{n=e.detail.value,i()}}
                        style="--cosmoz-slideout-backdrop: rgb(0 90 156 / 40%)"
                    >
                        <cosmoz-slideout-panel>
                            <p>The scrim is overridden: brand-blue at 40%.</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-modal-slideout>
                `,e);return i(),t`
            <cosmoz-button variant="primary" @click=${()=>{n=!0,i()}}>
                Open (brand-blue scrim)
            </cosmoz-button>
            ${e}
        `}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    fullScreen: false,
    ariaLabel: 'Modal drawer',
    '--cosmoz-slideout-backdrop': undefined
  },
  argTypes: {
    '--cosmoz-slideout-backdrop': {
      control: 'color',
      description: 'Scrim color (custom property, \`::backdrop\`).',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'color-mix(var(--cz-color-bg-overlay) 50%, transparent)'
        }
      }
    },
    opened: {
      control: 'boolean',
      description: 'Show/hide (reactive, two-way), as on the non-modal shell.',
      table: {
        category: 'State',
        defaultValue: {
          summary: 'false'
        }
      }
    },
    fullScreen: {
      control: 'boolean',
      description: 'Cover the whole viewport.',
      table: {
        category: 'State',
        defaultValue: {
          summary: 'false'
        }
      }
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label mirrored onto the surface.',
      table: {
        category: 'Accessibility'
      }
    }
  },
  render: args => {
    const mount = document.createElement('div');
    const rerender = () => render(modalSlideout({
      opened: args.opened,
      fullScreen: args.fullScreen,
      ariaLabel: args.ariaLabel,
      style: args['--cosmoz-slideout-backdrop'] ? \`--cosmoz-slideout-backdrop: \${args['--cosmoz-slideout-backdrop']}\` : undefined,
      onOpenedChanged: e => {
        args.opened = e.detail.value;
        rerender();
      }
    }, slideoutPanel({}, html\`
                            <div slot="header">
                                <h2 class="demo-heading">Modal slideout</h2>
                            </div>
                            <p>
                                <strong>Esc</strong>, the <strong>backdrop</strong>, or the
                                header's close control dismiss it natively. The scrim is
                                <code>--cosmoz-slideout-backdrop</code>.
                            </p>
                        \`)), mount);
    rerender();
    return html\`
            <cosmoz-button
                variant="primary"
                @click=\${() => {
      args.opened = true;
      rerender();
    }}
            >
                Open modal slideout
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
      name: /open modal/iu
    }));
    const el = canvasElement.querySelector('cosmoz-modal-slideout') as SlideoutEl;
    await step('opens with the scrim and modal typing', async () => {
      await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
      expect(el.getAttribute('popover')).toBe('auto');
      expect(el.getAttribute('aria-modal')).toBe('true');
    });
    await step('Escape is the native dismissal (final, no veto)', async () => {
      const trusted = await skipUnlessTrusted(step);
      if (!trusted) return;
      await trusted.keyboard('{Escape}');
      await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: storyDoc('The scrim: \`--cosmoz-slideout-backdrop\` (default ' + '\`color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)\`), ' + 'fading with the same duration/easing tokens as the surface.'),
  render: () => {
    const mount = document.createElement('div');
    let opened = false;
    const rerender = () => render(html\`
                    <cosmoz-modal-slideout
                        .opened=\${opened}
                        @opened-changed=\${(e: CustomEvent) => {
      opened = e.detail.value;
      rerender();
    }}
                        style="--cosmoz-slideout-backdrop: rgb(0 90 156 / 40%)"
                    >
                        <cosmoz-slideout-panel>
                            <p>The scrim is overridden: brand-blue at 40%.</p>
                        </cosmoz-slideout-panel>
                    </cosmoz-modal-slideout>
                \`, mount);
    rerender();
    const open = () => {
      opened = true;
      rerender();
    };
    return html\`
            <cosmoz-button variant="primary" @click=\${open}>
                Open (brand-blue scrim)
            </cosmoz-button>
            \${mount}
        \`;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`Backdrop`]}))();export{Q as Backdrop,Z as Playground,$ as __namedExportsOrder,X as default};