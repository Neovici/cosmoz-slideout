import{i as e}from"./preload-helper-B45gAKPr.js";import{ft as t,pt as n,ut as r}from"./iframe-B96TJTx9.js";import{B as i,C as a,D as o,E as s,I as c,S as l,W as u,_ as d,a as f,c as p,d as m,f as h,g,h as _,i as v,l as y,m as b,n as x,o as S,p as ee,r as te,s as C,t as w,u as T,v as E,x as D,y as O}from"./cosmoz-slideout-Ch6C6gpM.js";import{t as k}from"./cosmoz-button-Cjf3Nkpn.js";import{n as A,t as j}from"./trusted-6AwRJoKi.js";import{n as M,r as N,t as P}from"./story-docs-CVcPOcP0.js";import{t as F}from"./cosmoz-slideout-panel-_q7wxzkq.js";import{i as I,n as L,t as R}from"./helpers-Cvb1xpvk.js";var z,B=e((()=>{O(),z=D`
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
`})),V,H=e((()=>{s(),V=({arm:e,dismiss:t})=>{let n=c();u(()=>{let r=t=>{t.target!==n&&!n.contains(t.target)&&e()};return n.addEventListener(`beforetoggle`,t=>{t.newState===`closed`&&e()}),n.addEventListener(`toggle`,e=>{e.newState===`closed`&&n.hasAttribute(`opened`)&&t()}),document.addEventListener(`pointerdown`,r,!0),()=>document.removeEventListener(`pointerdown`,r,!0)},[e,t])}})),U,W=e((()=>{s(),_(),ee(),m(),y(),C(),f(),H(),te(),U=()=>{let[e,t]=g(`opened`),n=i(()=>t(!0),[t]),r=i(()=>t(!1),[t]);p({opened:e,close:r});let a=c(),o=h(),s=b(),l=v(`closed`,{closed:{setup:[()=>{a.dispatchEvent(new Event(`close`,{bubbles:!0})),o.restore()}],transitions:{OPEN:{to:`opening`,guard:[()=>!a.matches(`:popover-open`)]}}},opening:{setup:[o.capture,()=>a.showPopover(),({send:e})=>s.arm(()=>e(`SETTLE`))],teardown:[s.clear],transitions:{OPEN:{to:`opening`},CLOSE:{to:`closing`},SETTLE:{to:`open`}}},open:{setup:[()=>{a.dispatchEvent(new Event(`open`,{bubbles:!0})),o.restore()}],transitions:{CLOSE:{to:`closing`}}},closing:{setup:[o.arm,()=>{a.matches(`:popover-open`)&&a.hidePopover()},({send:e})=>s.arm(()=>e(`SETTLE`))],teardown:[s.clear],transitions:{CLOSE:{to:`closing`},OPEN:{to:`opening`},SETTLE:{to:`closed`}}}});u(()=>a.addEventListener(`transitionend`,e=>{e.target!==a||e.propertyName!==`translate`||l.send(`SETTLE`)}),[]),u(()=>{l.send(e?`OPEN`:`CLOSE`)},[e]),V({arm:o.arm,dismiss:i(()=>{a.dispatchEvent(new CustomEvent(`opened-changed`,{detail:{value:!1},bubbles:!0})),a.removeAttribute(`opened`)},[])});let{fullScreen:d,toggle:f}=T();return S({open:n,close:r,toggleFullScreen:f}),{opened:e,open:n,close:r,fullScreen:d,toggleFullScreen:f}}})),G,K,q=e((()=>{l(),s(),B(),x(),E(),W(),G=()=>(U(),t`<slot></slot>`),K=class extends w{connectedCallback(){super.connectedCallback(),this.setAttribute(`popover`,`auto`),this.setAttribute(`aria-modal`,`true`)}},customElements.define(`cosmoz-modal-slideout`,o(G,{baseElement:K,observedAttributes:[`opened`,`full-screen`],styleSheets:[a,d,z]}))})),J,Y,X,Z,Q,$;e((()=>{k(),n(),q(),F(),R(),M(),j(),{expect:J,waitFor:Y}=__STORYBOOK_MODULE_TEST__,X={title:`CosmozSlideout/Modal`,component:`cosmoz-modal-slideout`,tags:[`autodocs`],parameters:P('The modal personality of the slideout: rendered with `popover="auto"` and `aria-modal="true"`, a scrim backdrop, and UA-owned dismissal - Esc, the hardware back button and clicks on the backdrop close the surface natively (final; `opened-changed` syncs, non-cancelable). Programmatic `close()` and slotted `request-close` keep the vetoable funnel.')},Z={args:{opened:!1,fullScreen:!1,ariaLabel:`Modal drawer`,"--cosmoz-slideout-backdrop":void 0},argTypes:{"--cosmoz-slideout-backdrop":{control:`color`,description:"Scrim color (custom property, `::backdrop`).",table:{category:`Styling`,defaultValue:{summary:`color-mix(var(--cz-color-bg-overlay) 50%, transparent)`}}},opened:{control:`boolean`,description:`Show/hide (reactive, two-way), as on the non-modal shell.`,table:{category:`State`,defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Cover the whole viewport.`,table:{category:`State`,defaultValue:{summary:`false`}}},ariaLabel:{control:`text`,description:`Accessible label mirrored onto the surface.`,table:{category:`Accessibility`}}},render:e=>{let n=document.createElement(`div`),i=()=>r(L({opened:e.opened,fullScreen:e.fullScreen,ariaLabel:e.ariaLabel,style:e[`--cosmoz-slideout-backdrop`]?`--cosmoz-slideout-backdrop: ${e[`--cosmoz-slideout-backdrop`]}`:void 0,onOpenedChanged:t=>{e.opened=t.detail.value,i()}},I({},t`
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
        `},play:async({canvas:e,canvasElement:t,step:n,userEvent:r})=>{await r.click(await e.findByShadowRole(`button`,{name:/open modal/iu}));let i=t.querySelector(`cosmoz-modal-slideout`);await n(`opens with the scrim and modal typing`,async()=>{await Y(()=>J(i.matches(`:popover-open`)).toBe(!0)),J(i.getAttribute(`popover`)).toBe(`auto`),J(i.getAttribute(`aria-modal`)).toBe(`true`)}),await n(`Escape is the native dismissal (final, no veto)`,async()=>{let e=await A(n);e&&(await e.keyboard(`{Escape}`),await Y(()=>J(i.matches(`:popover-open`)).toBe(!1)))})}},Q={parameters:N("The scrim: `--cosmoz-slideout-backdrop` (default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), fading with the same duration/easing tokens as the surface."),render:()=>{let e=document.createElement(`div`),n=!1,i=()=>r(t`
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