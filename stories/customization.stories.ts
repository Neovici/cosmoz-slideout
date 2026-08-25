import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';

type SlideoutEl = HTMLElement & { close(): void };

const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const closeControl = html`
	<cosmoz-button
		slot="controls"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${closeFrom}
	>
		✕
	</cosmoz-button>
`;

const meta: Meta = {
	title: 'CosmozSlideout/Shell/Customization',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Width: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Wide panel"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
						style="--cosmoz-slideout-width: 640px;"
					>
						${closeControl}
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Wide panel
						</h2>
						<div
							style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
						>
							The width is 640px until the viewport becomes narrower.
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
			<cosmoz-button variant="primary" @click=${open}>Open wide</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open wide/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('honors the width custom property', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			await waitFor(() =>
				expect(Math.round(surface.getBoundingClientRect().width)).toBe(
					Math.min(640, window.innerWidth)
				)
			);
		});
	},
};

const mutedSurface = [
	'--cosmoz-slideout-bg: var(--cz-color-bg-secondary)',
	'--cosmoz-slideout-shadow: -8px 0 32px rgb(0 0 0 / 40%)',
	'color: var(--cz-color-text-primary)',
].join('; ');

export const SurfaceTokens: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Muted surface"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
						style=${mutedSurface}
					>
						${closeControl}
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Muted surface
						</h2>
						<div style="padding: 12px 24px;">
							This is the bare shell (not the
							<code>&lt;cosmoz-slideout-panel&gt;</code> preset), yet its
							surface is still fully themeable. Its
							<code>--cosmoz-slideout-*</code> overrides accept either a design
							token or a plain value: here <code>--cosmoz-slideout-bg</code> and
							the text color resolve to <code>@neovici/cosmoz-tokens</code>
							<code>--cz-*</code> tokens - so the drawer stays on-theme and
							follows dark mode - while <code>--cosmoz-slideout-shadow</code> is
							a one-off value. The only difference from
							<code>&lt;cosmoz-slideout-panel&gt;</code> is that the shell
							leaves the inner UI - this header and close button - for the
							parent to author.
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
				Open muted surface
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open muted surface/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('uses the local surface background override', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(getComputedStyle(surface).backgroundColor).not.toBe('');
		});
	},
};

export const SlowMotion: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Slow panel"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
						style="--cosmoz-slideout-duration: 1.2s;"
					>
						${closeControl}
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Slow panel
						</h2>
						<div
							style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
						>
							The entrance and exit animation duration are custom properties.
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
			<cosmoz-button variant="primary" @click=${open}>Open slow</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open slow/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('applies the slower transition duration', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(
				getComputedStyle(surface).transitionDuration.split(',')[0].trim()
			).toBe('1.2s');
		});
	},
};
