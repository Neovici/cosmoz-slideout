import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import { storyDoc } from './story-docs';

type SlideoutEl = HTMLElement & { close(): void };

const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const closeControl = html`
	<cosmoz-button
		style="position: absolute; top: 8px; right: 8px; z-index: 1;"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${closeFrom}
	>
		✕
	</cosmoz-button>
`;

const meta: Meta = {
	title: 'CosmozSlideout/Customization',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Width: Story = {
	parameters: storyDoc(
		'Size and tune the surface with the `--cosmoz-slideout-*` custom ' +
			'properties (here `--cosmoz-slideout-width`). Point them at ' +
			'`@neovici/cosmoz-tokens` `--cz-*` tokens to track the design system ' +
			'and dark mode.',
	),
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
						<div
							style="position: relative; display: flex; flex-direction: column; height: 100%;"
						>
							${closeControl}
							<h2
								style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								Wide panel
							</h2>
							<div
								style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
							>
								The width is 640px until the viewport becomes narrower.
							</div>
						</div>
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
			<cosmoz-button variant="primary" @click=${open}>Open wide</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open wide/iu }),
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;

		await step('honors the width custom property', async () => {
			await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
			await waitFor(() =>
				expect(Math.round(el.getBoundingClientRect().width)).toBe(
					Math.min(640, window.innerWidth),
				),
			);
		});
	},
};
