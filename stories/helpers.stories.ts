import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { slideout, slideoutPanel } from '../src/helpers';
import { componentDoc, storyDoc } from './story-docs';

type SlideoutEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: 'CosmozSlideout/Helpers',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
	parameters: componentDoc(
		'Typed render-site helpers - `slideout()` / `slideoutPanel()` - so consumers ' +
			'get typing and event-handler wiring without hand-writing the bindings.',
	),
};

export default meta;

type Story = StoryObj;

export const Dogfood: Story = {
	parameters: storyDoc(
		'Build the same slideout + panel with the typed `slideout()` / `slideoutPanel()` helpers.',
	),
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				slideout(
					{
						opened,
						ariaLabel: 'Supplier',
						onOpenedChanged: (e) => {
							opened = e.detail.value;
							rerender();
						},
					},
					slideoutPanel(
						{},
						html`
							<div slot="header">
								<h2 class="demo-heading">Acme Industries</h2>
							</div>
							<p>
								Rendered via the typed <code>slideout()</code> /
								<code>slideoutPanel()</code> helpers - no hand-written bindings.
							</p>
						`,
					),
				),
				mount,
			);
		rerender();
		const open = () => {
			opened = true;
			rerender();
		};

		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open (helpers)
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open \(helpers\)/iu }),
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step(
			'helper-rendered slideout opens with the panel chrome',
			async () => {
				await waitFor(() =>
					expect(surface.matches(':popover-open')).toBe(true),
				);
				const panel = el.querySelector('cosmoz-slideout-panel')!;
				await waitFor(() =>
					expect(
						panel
							.shadowRoot!.querySelector('[part="header"]')!
							.querySelector('slot')!
							.assignedElements()[0]!.textContent,
					).toMatch(/Acme Industries/u),
				);
			},
		);
	},
};
