import '@neovici/cosmoz-button/cosmoz-button';
import '@neovici/cosmoz-tokens';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';

// Mix-and-match the component's *state* knobs (`full-screen`, `loading`) and
// watch the outcome change. Each story drives one combination and its `play` fn
// asserts the difference it makes. The parent owns the state — the slideout just
// reflects it — so the controls here flip attributes / call the exposed methods.

type SlideoutEl = HTMLElement & { close(): void; toggleFullScreen(): void };
const slideoutOf = (e: Event) =>
	(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl;
const closeFrom = (e: Event) => slideoutOf(e).close();
const toggleFsFrom = (e: Event) => slideoutOf(e).toggleFullScreen();
const toggleLoadingFrom = (e: Event) =>
	slideoutOf(e).toggleAttribute('loading');

const meta: Meta = {
	title: 'CosmozSlideout/Behaviors',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// full-screen is parent-driven: there's no built-in button, so we slot our own
// and wire it to the exposed `toggleFullScreen()`. Toggling it widens the
// surface to the viewport and emits `full-screen-changed`.
export const FullScreen: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="User profile"
						@close=${() => render(nothing, mount)}
					>
						<div slot="controls" style="display: flex; gap: 4px;">
							<cosmoz-button
								variant="tertiary"
								size="sm"
								aria-label="Toggle full screen"
								@click=${toggleFsFrom}
							>
								⤢
							</cosmoz-button>
							<cosmoz-button
								variant="tertiary"
								size="sm"
								aria-label="Close"
								@click=${closeFrom}
							>
								✕
							</cosmoz-button>
						</div>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							User profile
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							Toggle full screen (⤢) — the parent drives the
							<code>full-screen</code> state; the component reflects it and
							emits <code>full-screen-changed</code>.
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Open profile</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open profile/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('toggling covers the viewport and emits the event', async () => {
			let lastDetail: boolean | undefined;
			el.addEventListener('full-screen-changed', (e) => {
				lastDetail = (e as CustomEvent).detail.fullScreen;
			});
			el.querySelector<HTMLElement>(
				'cosmoz-button[aria-label="Toggle full screen"]'
			)!.click();
			await waitFor(() => expect(el).toHaveAttribute('full-screen'));
			await waitFor(() => expect(lastDetail).toBe(true));
			await waitFor(() =>
				expect(Math.round(surface.getBoundingClientRect().width)).toBe(
					window.innerWidth
				)
			);
		});
	},
};

// `loading` overlays a spinner over the body slot. It's a plain reflected
// attribute, so the parent flips it while it fetches.
export const Loading: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Loading supplier"
						loading
						@close=${() => render(nothing, mount)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Loading…
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							Set <code>loading</code> while the content is fetched; a spinner
							overlays the body.
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Open (loading)</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open \(loading\)/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		await step('overlays a spinner scoped to the body only', async () => {
			await waitFor(() =>
				expect(el.shadowRoot!.querySelector('cz-spinner')).not.toBeNull()
			);
			const overlay = el.shadowRoot!.querySelector<HTMLElement>('.loading')!;
			// the overlay lives inside .content, so it never covers header/footer
			expect(overlay.closest('.content')).not.toBeNull();
			expect(
				el.shadowRoot!.querySelector('slot[name="header"]')!.closest('.content')
			).toBeNull();
		});
	},
};

// The other outcome of `loading`: flip it off (as a fetch resolving would) and
// the spinner disappears, revealing the content underneath.
export const LoadThenReady: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Supplier detail"
						loading
						@close=${() => render(nothing, mount)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Acme Industries
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							<p style="margin: 0 0 12px;">Loaded supplier detail.</p>
							<cosmoz-button
								variant="secondary"
								size="sm"
								@click=${toggleLoadingFrom}
							>
								Toggle loading
							</cosmoz-button>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Open (fetching)</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open \(fetching\)/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const spinner = () => el.shadowRoot!.querySelector('cz-spinner');

		await step('starts with a spinner', async () => {
			await waitFor(() => expect(spinner()).not.toBeNull());
		});
		await step('clearing loading reveals the content', async () => {
			[...el.querySelectorAll<HTMLElement>('cosmoz-button')]
				.find((b) => /toggle loading/iu.test((b.textContent ?? '').trim()))!
				.click();
			await waitFor(() => expect(spinner()).toBeNull());
		});
	},
};

// Both state knobs at once: a viewport-covering surface with the spinner over it.
export const FullScreenLoading: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Importing"
						full-screen
						loading
						@close=${() => render(nothing, mount)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Importing…
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							A full-screen surface with the loading overlay on top.
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Open import</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open import/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('covers the viewport and shows the spinner', async () => {
			await waitFor(() =>
				expect(el.shadowRoot!.querySelector('cz-spinner')).not.toBeNull()
			);
			await waitFor(() =>
				expect(Math.round(surface.getBoundingClientRect().width)).toBe(
					window.innerWidth
				)
			);
		});
	},
};
