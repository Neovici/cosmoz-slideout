import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { skipUnlessTrusted } from './trusted';
import '../src/cosmoz-slideout';
import { componentDoc, storyDoc } from './story-docs';

type SlideoutEl = HTMLElement & { close(): void };
const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Shell',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
	parameters: componentDoc(
		'The low-level surface: it owns the popover, the `opened` lifecycle, ' +
			'focus and Escape, and exposes a **single blank slot** - no UI of its ' +
			'own. These stories show driving it directly; for the styled preset, ' +
			'see **CosmozSlideoutPanel**.'
	),
};

export default meta;

type Story = StoryObj;

export const Minimal: Story = {
	parameters: storyDoc(
		'The barest usage: bind `opened` and drop content in the default slot. ' +
			'No header, buttons, or footer - Escape (or `close()`) dismisses it.'
	),
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

		await step('opens with no built-in controls', async () => {
			await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
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
			// trusted key event (vitest browser-mode userEvent -> Playwright):
			// CloseWatcher is driven by the UA close-request pipeline and ignores
			// synthetic (dispatchEvent) key events. Static Storybook builds cannot
			// produce them - the step reports itself as skipped there.
			const trusted = await skipUnlessTrusted(step);
			if (!trusted) return;
			await trusted.keyboard('{Escape}');
			await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
		});
	},
};

export const ComposedChrome: Story = {
	parameters: storyDoc(
		'The full-manual path: hand-compose header/body/footer inside the single ' +
			'slot (one wrapper element) when you want custom chrome. For the ' +
			'zero-markup styled version, use `<cosmoz-slideout-panel>`.'
	),
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
						<div style="display: flex; flex-direction: column; height: 100%;">
							<header
								style="position: relative; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								Edit supplier
								<cosmoz-button
									style="position: absolute; top: 8px; right: 8px;"
									variant="tertiary"
									size="sm"
									aria-label="Close"
									@click=${closeFrom}
								>
									${xCloseIcon({ slot: 'prefix' })}
								</cosmoz-button>
							</header>
							<div
								style="flex: 1; min-height: 0; overflow: auto; padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
							>
								<p style="margin: 0 0 8px;">Acme Industries · Supplier #4021</p>
								<p style="margin: 0;">Net 30 terms · VAT SE556677889901.</p>
							</div>
							<footer
								style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
							>
								<cosmoz-button variant="secondary" @click=${closeFrom}>
									Cancel
								</cosmoz-button>
								<cosmoz-button variant="primary" @click=${closeFrom}
									>Save</cosmoz-button
								>
							</footer>
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

		await step('projects hand-composed chrome into the shell', async () => {
			await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
			expect(el).toHaveAttribute('role', 'dialog');
			await canvas.findByText(/Net 30 terms/u);
		});
		await step(
			'closing keeps the column layout (no content cramming)',
			async () => {
				[...el.querySelectorAll<HTMLElement>('cosmoz-button')]
					.find((b) => /^save$/iu.test((b.textContent ?? '').trim()))!
					.click();
				await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
				// while sliding out (:not(:popover-open)) the column layout must hold
				expect(getComputedStyle(el).display).toBe('flex');
				expect(getComputedStyle(el).flexDirection).toBe('column');
			}
		);
	},
};
