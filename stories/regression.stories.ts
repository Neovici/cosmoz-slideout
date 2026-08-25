import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';

type PanelEl = HTMLElement & { close(): void };

const cssColor = (scope: HTMLElement, value: string) => {
	const probe = document.createElement('span');
	probe.style.color = value;
	scope.append(probe);
	const color = getComputedStyle(probe).color;
	probe.remove();
	return color;
};

const meta: Meta = {
	title: 'CosmozSlideout/Test',
	component: 'cosmoz-slideout',
	tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

export const GlobalDarkMode: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading="Theme check"
						subtitle="Follows root token mode"
						closeable
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p>The open panel should follow root token changes immediately.</p>
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
				Open theme check
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const wasDark = document.documentElement.classList.contains('dark-mode');
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open theme check/iu })
		);
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		try {
			await step(
				'recomputes surface colors when root theme changes',
				async () => {
					document.documentElement.classList.toggle('dark-mode', !wasDark);
					await waitFor(() =>
						expect(getComputedStyle(surface).backgroundColor).toBe(
							cssColor(el, 'var(--cz-color-bg-primary)')
						)
					);
				}
			);
		} finally {
			document.documentElement.classList.toggle('dark-mode', wasDark);
		}
	},
};

export const PropertyBoundFullScreen: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Property-bound full screen"
						.opened=${opened}
						.fullScreen=${true}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<p>Full-screen width must apply without a full-screen attribute.</p>
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
				Open property-bound full screen
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', {
				name: /open property-bound full screen/iu,
			})
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'syncs the full-screen attribute and width from the property alone',
			async () => {
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(true)
				);
				expect(el).toHaveAttribute('full-screen');
				await waitFor(() =>
					expect(Math.round(surface.getBoundingClientRect().width)).toBe(
						window.innerWidth
					)
				);
			}
		);
	},
};

export const FocusRestoreWithNoAutofocus: Story = {
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						no-autofocus
						aria-label="Guarded draft"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-button id="inner">Focus me</cosmoz-button>
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
				Open guarded draft
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const opener = await canvas.findByShadowRole('button', {
			name: /open guarded draft/iu,
		});
		await userEvent.click(opener);
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
		await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));

		await step(
			'restores focus to the opener when the user focused inside despite no-autofocus',
			async () => {
				el.querySelector<HTMLButtonElement>('#inner')!.focus();
				expect(el.contains(document.activeElement)).toBe(true);
				el.close();
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(false)
				);

				await waitFor(() => {
					const active = document.activeElement as
						| (Element & { shadowRoot?: ShadowRoot | null })
						| null;
					expect(active?.shadowRoot?.activeElement).toBe(opener);
				});
			}
		);
	},
};
