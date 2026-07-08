import '@neovici/cosmoz-button/cosmoz-button';
import '@neovici/cosmoz-tokens';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout-panel';

// The drawer is non-modal (`aria-modal="false"`): the page behind an open panel
// stays fully interactive — a deliberate design choice for quick-glance panels.

type PanelEl = HTMLElement & { close(): void };
const closePanel = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Design',
	component: 'cosmoz-slideout-panel',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const NonModal: Story = {
	render: () => {
		const mount = document.createElement('div');
		const status = document.createElement('p');
		status.dataset.testid = 'bg-count';
		status.style.cssText =
			'margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);';
		let count = 0;
		status.textContent = 'Background clicks: 0';
		const bump = () => {
			count += 1;
			status.textContent = `Background clicks: ${count}`;
		};
		const open = () =>
			render(
				html`
					<cosmoz-slideout-panel
						heading="Supplier"
						subtitle="Quick preview"
						closeable
						@close=${() => render(nothing, mount)}
					>
						<p style="margin: 0; color: var(--cz-color-text-tertiary);">
							The page behind stays interactive — click “Background action” with
							this panel open and watch the counter tick.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end;"
						>
							<cosmoz-button variant="secondary" @click=${closePanel}
								>Close</cosmoz-button
							>
						</div>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		return html`
			<div
				style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
			>
				<cosmoz-button variant="primary" @click=${open}
					>Open panel</cosmoz-button
				>
				<cosmoz-button variant="secondary" @click=${bump}>
					Background action
				</cosmoz-button>
			</div>
			${status}${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open panel/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'the background stays clickable while the panel is open',
			async () => {
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(true)
				);
				await userEvent.click(
					await canvas.findByShadowRole('button', {
						name: /background action/iu,
					})
				);
				expect(
					canvasElement.querySelector('[data-testid="bg-count"]')!.textContent
				).toMatch(/Background clicks: 1/u);
			}
		);
	},
};
