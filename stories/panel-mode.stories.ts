import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout-panel';
import { defaultPanelArgs, panelArgTypes } from './arg-types';

// `<cosmoz-slideout-panel>` is a separate, batteries-included element: styled
// header/body/footer UI, a built-in close button, and token-backed spacing/
// typography. It shares identical lifecycle, events, and Escape/focus behavior with
// the bare shell (`CosmozSlideout/Shell`) - only the UI differs.
//
// Every story below renders from its `args`, so the Controls tab actually drives it -
// change a control, then (re)click the trigger to see it. The element stays mounted
// and reacts to its `opened` property (two-way via `opened-changed`); the trigger
// flips `opened` to true and the panel self-closes back to false on Escape / close.

type PanelEl = HTMLElement & { close(): void; opened?: boolean };

const closePanel = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideoutPanel',
	component: 'cosmoz-slideout-panel',
	tags: ['autodocs'],
	argTypes: panelArgTypes,
	args: defaultPanelArgs,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	args: {
		heading: 'Acme Industries',
		subtitle: 'Supplier #4021 · Stockholm, SE',
		closeable: true,
	},
	render: (args) => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p>
							Preferred vendor for packaging materials since 2019. Net 30 terms,
							VAT SE556677889901.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end; gap: 8px;"
						>
							<cosmoz-button variant="secondary" @click=${closePanel}>
								Cancel
							</cosmoz-button>
							<cosmoz-button variant="primary" @click=${closePanel}>
								Save
							</cosmoz-button>
						</div>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		rerender();
		const open = () => {
			opened = true;
			rerender();
		};

		return html`
			<cosmoz-button variant="primary" @click=${open}>Open panel</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open panel/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('opens with built-in header UI and footer actions', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(el.shadowRoot!.querySelector('.heading')!.textContent).toMatch(
				/Acme Industries/u
			);
			expect(
				el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')
			).not.toBeNull();
			await waitFor(() =>
				expect(
					el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden
				).toBe(false)
			);
		});
		await step('the built-in close button dismisses the panel', async () => {
			el.shadowRoot!.querySelector<HTMLElement>(
				'cosmoz-button[aria-label="Close"]'
			)!.click();
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
		});
	},
};

export const CustomHeader: Story = {
	args: {
		heading: undefined,
		subtitle: undefined,
		'aria-label': 'Customer health',
		closeable: true,
	},
	render: (args) => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<div
							slot="header"
							style="display: flex; flex-direction: column; gap: 4px;"
						>
							<strong>Customer health</strong>
							<span style="color: var(--cz-color-text-tertiary);">
								Renewal risk · Q3
							</span>
						</div>
						<p>
							The title slot replaces the generated heading while the panel
							keeps its padding, close button, and body layout.
						</p>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		rerender();
		const open = () => {
			opened = true;
			rerender();
		};

		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open custom header
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open custom header/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;

		await step(
			'projects slotted title content inside the panel header',
			async () => {
				await waitFor(() => expect(header.hidden).toBe(false));
				expect(el.shadowRoot!.querySelector('.heading')).toBeNull();
				await canvas.findByShadowText(/Customer health/u);
			}
		);
	},
};

export const BodyOnly: Story = {
	args: {
		heading: undefined,
		subtitle: undefined,
		'aria-label': 'Notes',
		closeable: false,
	},
	render: (args) => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p>
							A panel can be just a right-hand reading surface. With no heading,
							close button, custom header, or footer, the UI stays out of the
							way - <code>&lt;cosmoz-slideout-panel&gt;</code> alone is what
							gives the body its padding and gap, independent of any other
							affordance.
						</p>
						<p>Press <kbd>Esc</kbd> to dismiss it.</p>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		rerender();
		const open = () => {
			opened = true;
			rerender();
		};

		return html`
			<cosmoz-button variant="primary" @click=${open}>Open notes</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open notes/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('hides empty header and footer regions', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(el.shadowRoot!.querySelector<HTMLElement>('.header')!.hidden).toBe(
				true
			);
			expect(el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(
				true
			);
			expect(el.shadowRoot!.querySelector('.body')).not.toBeNull();
		});
	},
};

export const ScrollableContent: Story = {
	args: {
		heading: 'Activity',
		subtitle: 'Latest supplier events',
		closeable: true,
		width: 'min(520px, 100vw)',
	},
	render: (args) => {
		const mount = document.createElement('div');
		const rows = Array.from({ length: 50 }, (_, i) => i + 1);
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						${rows.map(
							(row) => html`
								<p style="margin: 0; color: var(--cz-color-text-tertiary);">
									<strong style="color: var(--cz-color-text-primary);">
										Event ${row}
									</strong>
									· Invoice ${4200 + row} matched automatically.
								</p>
							`
						)}
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end; gap: 8px;"
						>
							<cosmoz-button variant="secondary" @click=${closePanel}>
								Close
							</cosmoz-button>
						</div>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		rerender();
		const open = () => {
			opened = true;
			rerender();
		};

		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open activity
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open activity/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const content = el.shadowRoot!.querySelector<HTMLElement>('.content')!;
		const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;
		const footer = el.shadowRoot!.querySelector<HTMLElement>('.footer')!;

		await step(
			'scrolls the body while header and footer stay outside it',
			async () => {
				await waitFor(() => expect(content.scrollHeight).toBeGreaterThan(0));
				expect(header.closest('.content')).toBeNull();
				expect(footer.closest('.content')).toBeNull();
			}
		);
	},
};
