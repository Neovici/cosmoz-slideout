import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import { defaultPanelArgs, panelArgTypes } from './arg-types';

// The `variant="panel"` preset on the same `<cosmoz-slideout>` element: styled
// header/body/footer UI, a built-in close button, and token-backed spacing/
// typography. It shares identical lifecycle, events, and Escape/focus behavior with
// the bare shell (`CosmozSlideout/Shell`) - only the UI differs.
//
// Every story below renders from its `args`, so the Controls tab actually drives it -
// change a control, then (re)click the trigger to see it (the trigger/mount pattern,
// shared with the Shell stories, replays the whole render on open so autodocs doesn't
// pop every story at once; an already-open instance won't update live). Each story
// still sets its own `args` override for the specific values its narrative depends on.

type PanelEl = HTMLElement & { close(): void };

const closePanel = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as PanelEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Panel Mode',
	component: 'cosmoz-slideout',
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
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						variant=${ifDefined((args.variant as string) || undefined)}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@close=${() => render(nothing, mount)}
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
					</cosmoz-slideout>
				`,
				mount
			);

		return html`
			<cosmoz-button variant="primary" @click=${open}>Open panel</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open panel/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
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
			await waitFor(() =>
				expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull()
			);
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
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						variant=${ifDefined((args.variant as string) || undefined)}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@close=${() => render(nothing, mount)}
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
					</cosmoz-slideout>
				`,
				mount
			);

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
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
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
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						variant=${ifDefined((args.variant as string) || undefined)}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@close=${() => render(nothing, mount)}
					>
						<p>
							A panel can be just a right-hand reading surface. With no heading,
							close button, custom header, or footer, the UI stays out of the
							way - <code>variant="panel"</code> alone is what gives the body
							its padding and gap, independent of any other affordance.
						</p>
						<p>Press <kbd>Esc</kbd> to dismiss it.</p>
					</cosmoz-slideout>
				`,
				mount
			);

		return html`
			<cosmoz-button variant="primary" @click=${open}>Open notes</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open notes/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
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
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						variant=${ifDefined((args.variant as string) || undefined)}
						heading=${ifDefined(args.heading as string | undefined)}
						subtitle=${ifDefined(args.subtitle as string | undefined)}
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						?closeable=${args.closeable}
						?loading=${args.loading}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						?no-autofocus=${args['no-autofocus']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@close=${() => render(nothing, mount)}
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
					</cosmoz-slideout>
				`,
				mount
			);

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
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
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
