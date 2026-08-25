import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';

type SlideoutEl = HTMLElement & { close(): void };
const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Shell',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Minimal: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Release notes"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<div
							style="padding: 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
						>
							<p style="margin: 0 0 12px;">
								A bare slideout - no header, no buttons, no footer. Just the
								default surface and whatever you drop inside it.
							</p>
							<p style="margin: 0;">Press <kbd>Esc</kbd> to dismiss it.</p>
						</div>
					</cosmoz-slideout>
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
				Open bare slideout
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open bare slideout/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('opens with no built-in controls', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(el.querySelector('cosmoz-button')).toBeNull();
		});
		await step('the bare shell renders no panel UI', async () => {
			expect(el.shadowRoot!.querySelector('.header')).toBeNull();
			expect(el.shadowRoot!.querySelector('.body')).toBeNull();
			expect(el.shadowRoot!.querySelector('.footer')).toBeNull();
			expect(
				el.shadowRoot!.querySelector('cosmoz-button[aria-label="Close"]')
			).toBeNull();
		});
		await step('Escape is the only dismissal', async () => {
			await userEvent.keyboard('{Escape}');
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
		});
	},
};

// The full-manual path: UI composed by hand via the `controls` / `header` /
// `footer` slots. (For zero-markup styled UI, use `<cosmoz-slideout-panel>` instead.)
export const SlottedRegions: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Edit supplier"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							${xCloseIcon({ slot: 'prefix' })}
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Edit supplier
						</h2>
						<div
							style="padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
						>
							<p style="margin: 0 0 8px;">Acme Industries · Supplier #4021</p>
							<p style="margin: 0;">Net 30 terms · VAT SE556677889901.</p>
						</div>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
						>
							<cosmoz-button variant="secondary" @click=${closeFrom}>
								Cancel
							</cosmoz-button>
							<cosmoz-button variant="primary" @click=${closeFrom}
								>Save</cosmoz-button
							>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		rerender();
		const open = () => {
			opened = true;
			rerender();
		};
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Edit supplier</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /edit supplier/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'projects header / controls / footer into the shell',
			async () => {
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(true)
				);
				expect(surface).toHaveAttribute('role', 'dialog');
				await canvas.findByText(/Net 30 terms/u);
			}
		);
		await step(
			'closing keeps the column layout (no content cramming)',
			async () => {
				[...el.querySelectorAll<HTMLElement>('cosmoz-button')]
					.find((b) => /^save$/iu.test((b.textContent ?? '').trim()))!
					.click();
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(false)
				);
				// while sliding out (`:not(:popover-open)`) the column layout must hold
				expect(getComputedStyle(surface).display).toBe('flex');
				expect(getComputedStyle(surface).flexDirection).toBe('column');
			}
		);
	},
};
