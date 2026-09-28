import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';

type SlideoutEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: 'CosmozSlideout/Test',
	component: 'cosmoz-slideout',
	tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

export const AriaLabelFromHeading: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel heading="Supplier #4021" closeable>
							<p>Body</p>
						</cosmoz-slideout-panel>
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
				>Open labelled</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open labelled/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		await step(
			'shell mirrors the panel heading onto its own aria-label and the dialog',
			async () => {
				await waitFor(() =>
					expect(el.getAttribute('aria-label')).toBe('Supplier #4021')
				);
				// the actual role="dialog" node must carry the name too
				const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
				expect(surface.getAttribute('aria-label')).toBe('Supplier #4021');
			}
		);
	},
};

export const OpenEvent: Story = {
	render: () => {
		const mount = document.createElement('div');
		const status = document.createElement('span');
		status.dataset.testid = 'open-count';
		status.textContent = '0';
		let count = 0;
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						.opened=${opened}
						@open=${() => {
							count += 1;
							status.textContent = String(count);
						}}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p style="padding: 24px">Body</p>
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
				Open with event
			</cosmoz-button>
			${status}${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open with event/iu })
		);
		await step(
			'dispatches `open` after the enter transition settles',
			async () => {
				await waitFor(() =>
					expect(
						canvasElement.querySelector('[data-testid="open-count"]')!
							.textContent
					).toBe('1')
				);
			}
		);
	},
};

export const VetoOpenedChanged: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							if (e.detail.value === false) {
								e.preventDefault(); // veto the close
								return;
							}
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel closeable><p>Body</p></cosmoz-slideout-panel>
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
				>Open guarded</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open guarded/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
		await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));

		await step(
			'close is vetoed via opened-changed preventDefault',
			async () => {
				el.close();
				// the veto bails inside set() before the attribute is touched, synchronously
				expect(el).toHaveAttribute('opened');
				expect(surface.matches(':popover-open')).toBe(true);
			}
		);
	},
};

export const VetoRequestClose: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel
							closeable
							@request-close=${(e: Event) => e.preventDefault()}
						>
							<p>Body</p>
						</cosmoz-slideout-panel>
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
				>Open vetoed X</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open vetoed x/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const panel = el.querySelector('cosmoz-slideout-panel')!;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
		await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));

		await step(
			'the built-in close button is vetoed via request-close',
			async () => {
				panel
					.shadowRoot!.querySelector<HTMLElement>(
						'cosmoz-button[aria-label="Close"]'
					)!
					.click();
				expect(el).toHaveAttribute('opened');
				expect(surface.matches(':popover-open')).toBe(true);
			}
		);
	},
};
