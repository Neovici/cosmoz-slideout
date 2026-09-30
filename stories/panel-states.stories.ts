import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { header, requestClose } from './chrome';
import { componentDoc, storyDoc } from './story-docs';

type ShellEl = HTMLElement & {
	close(): void;
	toggleFullScreen(): void;
	opened?: boolean;
};

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
	parameters: componentDoc(
		'Common panel states - full-screen and local token theming. Busy/loading ' +
			'states are the author\'s own slotted UI; the panel is property-free.',
	),
};

export default meta;

type Story = StoryObj;

export const FullScreen: Story = {
	parameters: storyDoc(
		'`full-screen` (here via `toggleFullScreen()`): the surface covers the whole viewport.',
	),
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const closePanel = (e: Event) =>
			(e.currentTarget as HTMLElement)
				.closest<ShellEl>('cosmoz-slideout')
				?.close();
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Account workspace"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel>
							${header('Account workspace', {
								subtitle: 'Temporary full-screen review',
							})}
							<p>
								Use full screen for dense review tasks. The state is owned by
								the shell; this story wires a footer action to its public
								method.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end; gap: 8px;"
							>
								<cosmoz-button
									variant="secondary"
									@click=${(e: Event) =>
										(e.currentTarget as HTMLElement)
											.closest<ShellEl>('cosmoz-slideout')
											?.toggleFullScreen()}
								>
									Toggle full screen
								</cosmoz-button>
								<cosmoz-button variant="primary" @click=${closePanel}>
									Done
								</cosmoz-button>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,
				mount,
			);

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
			await canvas.findByShadowRole('button', { name: /open workspace/iu }),
		);
		const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;

		await step(
			'toggles to viewport width through the public method',
			async () => {
				await userEvent.click(
					await canvas.findByShadowRole('button', {
						name: /toggle full screen/iu,
					}),
				);
				await waitFor(() => expect(shell).toHaveAttribute('full-screen'));
				await waitFor(() =>
					expect(Math.round(shell.getBoundingClientRect().width)).toBe(
						window.innerWidth,
					),
				);
			},
		);
	},
};

const themedSurface = [
	'--cosmoz-slideout-bg: var(--cz-color-bg-secondary)',
	'--cosmoz-slideout-panel-divider: var(--cz-color-border-secondary)',
].join('; ');

export const ThemedSurface: Story = {
	parameters: storyDoc(
		'Theme one panel with local `--cosmoz-slideout-*` / `--cz-*` token overrides (dark-mode-safe).',
	),
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Account"
						.opened=${opened}
						style=${themedSurface}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel>
							${header('Account', { subtitle: 'Premium · since 2019' })}
							<p style="color: var(--cz-color-text-tertiary);">
								Local custom properties can tune one panel without breaking
								global light/dark token behavior.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end;"
							>
								<cosmoz-button variant="primary" @click=${requestClose}>
									Done
								</cosmoz-button>
							</div>
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
			<cosmoz-button variant="primary" @click=${open}>
				Open themed surface
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', {
				name: /open themed surface/iu,
			}),
		);
		const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;

		await step(
			'resolves the local override through tokens',
			async () => {
				await waitFor(() => expect(shell.matches(':popover-open')).toBe(true));
				expect(getComputedStyle(shell).backgroundColor).toBe(
					cssColor(shell, 'var(--cz-color-bg-secondary)'),
				);
			},
		);
	},
};
