import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-input/input';
import '@neovici/cosmoz-tokens';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html as litHtml, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { slideout } from '../src/index';

// The `slideout()` factory turns a render function into an app-specific slideout
// element with the full lifecycle. The render fn fills the body and can reach the
// host (e.g. `host.close()`); chrome is positioned by the render fn (or slotted).

type SlideoutEl = HTMLElement & { close(): void };

if (!customElements.get('demo-config-slideout')) {
	customElements.define(
		'demo-config-slideout',
		slideout(
			(host: SlideoutEl) => html`
				<cosmoz-button
					variant="tertiary"
					size="sm"
					aria-label="Close"
					style="position: absolute; top: calc(var(--cz-spacing) * 3); right: calc(var(--cz-spacing) * 3); z-index: 3;"
					@click=${() => host.close()}
				>
					${xCloseIcon({ slot: 'prefix' })}
				</cosmoz-button>
				<h2
					style="
						margin: 0;
						padding: calc(var(--cz-spacing) * 6) calc(var(--cz-spacing) * 6)
							calc(var(--cz-spacing) * 1);
						font-family: var(--cz-font-body);
						font-size: var(--cz-text-lg);
						font-weight: var(--cz-font-weight-semibold);
						color: var(--cz-color-text-primary);
					"
				>
					Supplier config
				</h2>
				<div
					style="
						display: grid;
						gap: calc(var(--cz-spacing) * 4);
						padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 6);
					"
				>
					<cosmoz-input
						.label=${'Name'}
						.value=${'Acme Industries'}
					></cosmoz-input>
					<cosmoz-input
						.label=${'VAT number'}
						.value=${'SE556677889901'}
					></cosmoz-input>
					<cosmoz-input
						.label=${'Payment terms (days)'}
						type="number"
						.value=${'30'}
					></cosmoz-input>
				</div>
			`
		)
	);
}

const meta: Meta = {
	title: 'CosmozSlideout/Factory',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const ConfigForm: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				litHtml`
					<demo-config-slideout
						aria-label="Supplier config"
						@close=${() => render(nothing, mount)}
					></demo-config-slideout>
				`,
				mount
			);
		return litHtml`
			<cosmoz-button variant="primary" @click=${open}>Open config</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open config/iu })
		);
		const el = canvasElement.querySelector(
			'demo-config-slideout'
		) as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('renders the factory form in the popover shell', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			await canvas.findByShadowText(/Supplier config/u);
			expect(el.shadowRoot!.querySelectorAll('cosmoz-input')).toHaveLength(3);
		});
		await step('host.close() closes and the parent removes it', async () => {
			el.shadowRoot!.querySelector<HTMLElement>(
				'cosmoz-button[aria-label="Close"]'
			)!.click();
			await waitFor(() =>
				expect(canvasElement.querySelector('demo-config-slideout')).toBeNull()
			);
		});
	},
};
