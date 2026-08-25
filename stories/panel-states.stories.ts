import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout-panel';

type PanelEl = HTMLElement & {
	close(): void;
	toggleFullScreen(): void;
	opened?: boolean;
};

const closePanel = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout-panel') as PanelEl
	).close();

const cssColor = (scope: HTMLElement, value: string) => {
	const probe = document.createElement('span');
	probe.style.color = value;
	scope.append(probe);
	const color = getComputedStyle(probe).color;
	probe.remove();
	return color;
};

const meta: Meta = {
	title: 'CosmozSlideoutPanel/States',
	component: 'cosmoz-slideout-panel',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Loading: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading="Supplier detail"
						subtitle="Fetching fresh account data"
						closeable
						loading
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p style="color: var(--cz-color-text-tertiary);">
							The loading overlay is scoped to the body, so the header and
							footer remain readable and usable.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end;"
						>
							<cosmoz-button variant="secondary" @click=${closePanel}>
								Cancel
							</cosmoz-button>
						</div>
					</cosmoz-slideout-panel>
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
				Open loading panel
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open loading panel/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;

		await step('shows a body-scoped spinner overlay', async () => {
			await waitFor(() =>
				expect(el.shadowRoot!.querySelector('cz-spinner')).not.toBeNull()
			);
			expect(
				el
					.shadowRoot!.querySelector<HTMLElement>('.loading')!
					.closest('.content')
			).not.toBeNull();
		});
	},
};

export const FullScreen: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading="Account workspace"
						subtitle="Temporary full-screen review"
						closeable
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p>
							Use full screen for dense review tasks. The state is still owned
							by the parent; this story wires a footer action to the public
							method.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end; gap: 8px;"
						>
							<cosmoz-button
								variant="secondary"
								@click=${(e: Event) =>
									(
										(e.currentTarget as HTMLElement).closest(
											'cosmoz-slideout-panel'
										) as PanelEl
									).toggleFullScreen()}
							>
								Toggle full screen
							</cosmoz-button>
							<cosmoz-button variant="primary" @click=${closePanel}>
								Done
							</cosmoz-button>
						</div>
					</cosmoz-slideout-panel>
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
				Open workspace
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open workspace/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'toggles to viewport width through the public method',
			async () => {
				await userEvent.click(
					await canvas.findByShadowRole('button', {
						name: /toggle full screen/iu,
					})
				);
				await waitFor(() => expect(el).toHaveAttribute('full-screen'));
				await waitFor(() =>
					expect(Math.round(surface.getBoundingClientRect().width)).toBe(
						window.innerWidth
					)
				);
			}
		);
	},
};

const themedSurface = [
	'--cosmoz-slideout-bg: var(--cz-color-bg-secondary)',
	'--cosmoz-slideout-panel-divider: var(--cz-color-border-secondary)',
].join('; ');

export const ThemedSurface: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading="Account"
						subtitle="Premium · since 2019"
						closeable
						style=${themedSurface}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p style="color: var(--cz-color-text-tertiary);">
							Local custom properties can tune one panel without breaking global
							light/dark token behavior.
						</p>
						<div
							slot="footer"
							style="display: flex; justify-content: flex-end;"
						>
							<cosmoz-button variant="primary" @click=${closePanel}>
								Done
							</cosmoz-button>
						</div>
					</cosmoz-slideout-panel>
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
				Open themed surface
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open themed surface/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'resolves the local surface override through tokens',
			async () => {
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(true)
				);
				expect(getComputedStyle(surface).backgroundColor).toBe(
					cssColor(el, 'var(--cz-color-bg-secondary)')
				);
			}
		);
	},
};
