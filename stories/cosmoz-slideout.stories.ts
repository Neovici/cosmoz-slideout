import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-tokens';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';

// The raw, dumb shell. It opens the moment it is added to the DOM, so each story
// renders a trigger and mounts the (literal) slideout on click — otherwise the
// autodocs page would pop every story at once. The parent owns lifecycle: it
// wires its own close to `el.close()` and clears the mount on `close`.
//
// For a styled, batteries-included drawer, see `cosmoz-slideout-panel`; this
// section documents the bare shell + its raw slots (the full-manual path).

type SlideoutEl = HTMLElement & { close(): void };
const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// The barest possible slideout: no controls, no chrome — just the dumb defaults
// (token/white surface, sane width) and default-slot content. With nothing to
// click, Escape is the only way out (the built-in dismissal).
export const Bare: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Release notes"
						@close=${() => render(nothing, mount)}
					>
						<div style="padding: 24px; line-height: 1.6; color: #475467;">
							<p style="margin: 0 0 12px;">
								A bare slideout — no header, no buttons, no footer. Just the
								default surface and whatever you drop inside it.
							</p>
							<p style="margin: 0;">Press <kbd>Esc</kbd> to dismiss it.</p>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
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
		await step('Escape is the only dismissal and removes it', async () => {
			await userEvent.keyboard('{Escape}');
			await waitFor(() =>
				expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull()
			);
		});
	},
};

// The full-manual path: chrome composed by hand via the `controls` / `header` /
// `footer` slots. (For zero-markup styled chrome, use `cosmoz-slideout-panel`.)
export const Slotted: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Edit supplier"
						@close=${() => render(nothing, mount)}
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
						<div style="padding: 12px 24px; line-height: 1.6; color: #475467;">
							<p style="margin: 0 0 8px;">Acme Industries · Supplier #4021</p>
							<p style="margin: 0;">Net 30 terms · VAT SE556677889901.</p>
						</div>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid #e9eaeb;"
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
				// popover is now :not(:popover-open) but still animating out; display is
				// held at flex and flex-direction must stay column (regression guard)
				expect(surface.matches(':popover-open')).toBe(false);
				expect(getComputedStyle(surface).display).toBe('flex');
				expect(getComputedStyle(surface).flexDirection).toBe('column');
				await waitFor(() =>
					expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull()
				);
			}
		);
	},
};
