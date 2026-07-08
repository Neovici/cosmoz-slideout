import '@neovici/cosmoz-button/cosmoz-button';
import '@neovici/cosmoz-tokens';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout-panel';

// The batteries-included preset: styled header/body/footer from `heading` /
// `subtitle` / `closeable`, every region overridable by slotting. Same summon +
// mount pattern as the core (it opens on insert; the parent removes it on close).

type PanelEl = HTMLElement & { close(): void };
const closePanel = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Panel',
	component: 'cosmoz-slideout-panel',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// Zero chrome markup — heading/subtitle/close + a slotted footer.
export const Panel: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout-panel
						heading="Acme Industries"
						subtitle="Supplier #4021 · Stockholm, SE"
						closeable
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
							<cosmoz-button variant="primary" @click=${closePanel}
								>Save</cosmoz-button
							>
						</div>
					</cosmoz-slideout-panel>
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
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('renders the styled header, close and footer', async () => {
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
		await step('the built-in close dismisses the panel', async () => {
			el.shadowRoot!.querySelector<HTMLElement>(
				'cosmoz-button[aria-label="Close"]'
			)!.click();
			await waitFor(() =>
				expect(canvasElement.querySelector('cosmoz-slideout-panel')).toBeNull()
			);
		});
	},
};

// Swap the title content via slot="header"; the styled chrome + close remain.
export const OverriddenHeader: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout-panel
						aria-label="Custom header"
						closeable
						@close=${() => render(nothing, mount)}
					>
						<div
							slot="header"
							style="display: flex; align-items: center; gap: 8px;"
						>
							<strong>Custom title</strong>
							<span style="color: #6b7280;">with markup</span>
						</div>
						<p>
							The header chrome (padding + close) is kept; only its content
							changed.
						</p>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open (custom header)
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', {
				name: /open \(custom header\)/iu,
			})
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const header = el.shadowRoot!.querySelector<HTMLElement>('.header')!;

		await step('projects the custom header inside the chrome', async () => {
			await waitFor(() => expect(header.hidden).toBe(false));
			expect(el.shadowRoot!.querySelector('.heading')).toBeNull(); // no heading attr
			await canvas.findByShadowText(/Custom title/u);
			expect(
				el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')
			).not.toBeNull();
		});
	},
};

// No heading/subtitle/closeable/footer ⇒ header and footer regions stay hidden.
export const BodyOnly: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout-panel
						aria-label="Notes"
						@close=${() => render(nothing, mount)}
					>
						<p>
							A panel with only a body — no header or footer chrome renders.
						</p>
						<p>Press <kbd>Esc</kbd> to dismiss.</p>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Open (body only)</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open \(body only\)/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('header and footer regions are absent', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(el.shadowRoot!.querySelector<HTMLElement>('.header')!.hidden).toBe(
				true
			);
			expect(el.shadowRoot!.querySelector<HTMLElement>('.footer')!.hidden).toBe(
				true
			);
		});
		await step('Escape dismisses it', async () => {
			await userEvent.keyboard('{Escape}');
			await waitFor(() =>
				expect(canvasElement.querySelector('cosmoz-slideout-panel')).toBeNull()
			);
		});
	},
};

// Token overrides drive a dark panel (subsumes the old AccountOverview showcase).
const darkTokens = [
	'--cz-color-bg-primary: #1f2937',
	'--cz-color-text-primary: #f9fafb',
	'--cz-color-text-tertiary: #9ca3af',
	'--cosmoz-slideout-panel-divider: #374151',
	'color-scheme: dark',
].join('; ');

export const Themed: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout-panel
						heading="Account"
						subtitle="Premium · since 2019"
						closeable
						style=${darkTokens}
						@close=${() => render(nothing, mount)}
					>
						<p style="color: #cbd5e1;">
							The surface, text, divider and header all follow overridden
							<code>--cz-*</code> tokens.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end; gap: 8px;"
						>
							<cosmoz-button variant="primary" @click=${closePanel}
								>Done</cosmoz-button
							>
						</div>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Open (themed)</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open \(themed\)/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'the surface honors the overridden token background',
			async () => {
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(true)
				);
				expect(getComputedStyle(surface).backgroundColor).toBe(
					'rgb(31, 41, 55)'
				);
			}
		);
	},
};
