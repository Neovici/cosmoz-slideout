import '@neovici/cosmoz-button/cosmoz-button';
import '@neovici/cosmoz-input/input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';

type SlideoutEl = HTMLElement & { close(): void };

const closeSlideout = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Interaction',
	component: 'cosmoz-slideout',
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
					<cosmoz-slideout
						variant="panel"
						heading="Supplier"
						subtitle="Quick preview"
						closeable
						@close=${() => render(nothing, mount)}
					>
						<p style="margin: 0; color: var(--cz-color-text-tertiary);">
							The page behind remains interactive. This is useful for
							quick-glance panels that should not block the current workflow.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end;"
						>
							<cosmoz-button variant="secondary" @click=${closeSlideout}>
								Close
							</cosmoz-button>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);

		return html`
			<div
				style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
			>
				<cosmoz-button variant="primary" @click=${open}>
					Open panel
				</cosmoz-button>
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
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('background controls remain clickable while open', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			await userEvent.click(
				await canvas.findByShadowRole('button', { name: /background action/iu })
			);
			expect(
				canvasElement.querySelector('[data-testid="bg-count"]')!.textContent
			).toMatch(/Background clicks: 1/u);
		});
	},
};

export const FocusRestore: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						variant="panel"
						heading="Edit profile"
						subtitle="Focus returns to the opener on close"
						closeable
						@close=${() => render(nothing, mount)}
					>
						<div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
							<cosmoz-input
								.label=${'Full name'}
								.value=${'Alex Karlsson'}
							></cosmoz-input>
							<cosmoz-input
								.label=${'Email'}
								.value=${'alex@acme.se'}
							></cosmoz-input>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);

		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Edit profile
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const trigger = await canvas.findByShadowRole('button', {
			name: /edit profile/iu,
		});
		await userEvent.click(trigger);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('moves focus into the dialog surface', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			await waitFor(() => expect(el.shadowRoot!.activeElement).toBe(surface));
		});
		await step('returns focus to the opener after close', async () => {
			el.shadowRoot!.querySelector<HTMLElement>(
				'cosmoz-button[aria-label="Close"]'
			)!.click();
			await waitFor(() =>
				expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull()
			);
			await waitFor(() =>
				expect(document.activeElement).toBe(
					canvasElement.querySelector('cosmoz-button')
				)
			);
		});
	},
};

export const DismissalOptions: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						variant="panel"
						heading="Guarded draft"
						subtitle="Escape disabled, autofocus disabled"
						closeable
						no-escape
						no-autofocus
						@close=${() => render(nothing, mount)}
					>
						<p>
							Use <code>no-escape</code> when accidental dismissal would be
							destructive. Use <code>no-autofocus</code> when the opener should
							keep focus until the user explicitly moves it.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end;"
						>
							<cosmoz-button variant="primary" @click=${closeSlideout}>
								Close explicitly
							</cosmoz-button>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);

		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open guarded draft
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const trigger = await canvas.findByShadowRole('button', {
			name: /open guarded draft/iu,
		});
		await userEvent.click(trigger);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('opens without stealing focus from the trigger', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(el.shadowRoot!.activeElement).not.toBe(surface);
			expect(document.activeElement).not.toBe(el);
		});
		await step('Escape does not close the guarded panel', async () => {
			await userEvent.keyboard('{Escape}');
			expect(surface.matches(':popover-open')).toBe(true);
		});
	},
};

export const Stacking: Story = {
	render: () => {
		const mountA = document.createElement('div');
		const mountB = document.createElement('div');

		const openB = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Second"
						style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
						@close=${() => render(nothing, mountB)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeSlideout}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Second
						</h2>
						<div
							style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
						>
							The top-most slideout. Press Esc to close just this one.
						</div>
					</cosmoz-slideout>
				`,
				mountB
			);

		const openA = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="First"
						@close=${() => render(nothing, mountA)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeSlideout}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							First
						</h2>
						<div
							style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
						>
							<p style="margin: 0 0 12px;">The underlying slideout.</p>
							<cosmoz-button variant="secondary" size="sm" @click=${openB}>
								Open a second slideout
							</cosmoz-button>
						</div>
					</cosmoz-slideout>
				`,
				mountA
			);

		return html`
			<cosmoz-button variant="primary" @click=${openA}>
				Open first
			</cosmoz-button>
			${mountA}${mountB}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const count = () =>
			canvasElement.querySelectorAll('cosmoz-slideout').length;
		const labels = () =>
			[...canvasElement.querySelectorAll('cosmoz-slideout')].map((s) =>
				s.getAttribute('aria-label')
			);

		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open first/iu })
		);
		await step('opens a second slideout above the first', async () => {
			await waitFor(() => expect(count()).toBe(1));
			await userEvent.click(
				await canvas.findByShadowRole('button', {
					name: /open a second slideout/iu,
				})
			);
			await waitFor(() => expect(count()).toBe(2));
		});
		await step('Escape closes the most recent slideout first', async () => {
			await userEvent.keyboard('{Escape}');
			await waitFor(() => expect(labels()).toEqual(['First']));
		});
	},
};
