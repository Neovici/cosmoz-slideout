import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { header } from './chrome';

type SlideoutEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: 'CosmozSlideout/Test',
	component: 'cosmoz-slideout',
	tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

export const ExplicitAriaLabel: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Supplier #4021"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel>
							<div slot="header">
								<h2>Supplier #4021</h2>
							</div>
							<p>Body</p>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,
				mount,
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
			await canvas.findByShadowRole('button', { name: /open labelled/iu }),
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		await step('the authored aria-label names the host', async () => {
			expect(el.getAttribute('aria-label')).toBe('Supplier #4021');
		});
	},
};

export const ToggleRecord: Story = {
	render: () => {
		const mount = document.createElement('div');
		const status = document.createElement('span');
		status.dataset.testid = 'toggle-count';
		status.textContent = '0';
		let count = 0;
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						.opened=${opened}
						@toggle=${() => {
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
				mount,
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
			await canvas.findByShadowRole('button', { name: /open with event/iu }),
		);
		await step(
			'the platform `toggle` records the flip (single source, all closers)',
			async () => {
				await waitFor(() =>
					expect(
						canvasElement.querySelector('[data-testid="toggle-count"]')!
							.textContent,
					).toBe('1'),
				);
			},
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
								e.preventDefault();
								return;
							}
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel><p>Body</p></cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,
				mount,
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
			await canvas.findByShadowRole('button', { name: /open guarded/iu }),
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		await waitFor(() => expect(el.matches(':popover-open')).toBe(true));

		await step(
			'close is vetoed via opened-changed preventDefault',
			async () => {
				el.close();
				// the veto bails inside set() before the attribute is touched, synchronously
				expect(el).toHaveAttribute('opened');
				expect(el.matches(':popover-open')).toBe(true);
			},
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
							@request-close=${(e: Event) => e.preventDefault()}
						>
							${header('Vetoed', {})}
							<p>Body</p>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,
				mount,
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
			await canvas.findByShadowRole('button', { name: /open vetoed x/iu }),
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		await waitFor(() => expect(el.matches(':popover-open')).toBe(true));

		await step(
			'the slotted close control is vetoed via request-close',
			async () => {
				el.querySelector<HTMLElement>(
					'cosmoz-button[aria-label="Close"]',
				)!.click();
				expect(el).toHaveAttribute('opened');
				expect(el.matches(':popover-open')).toBe(true);
			},
		);
	},
};
