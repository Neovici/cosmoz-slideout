import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { defaultPanelArgs, panelArgTypes } from './arg-types';

type SlideoutEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: 'CosmozSlideoutPanel/Playground',
	component: 'cosmoz-slideout-panel',
	argTypes: panelArgTypes,
	args: defaultPanelArgs,
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
	tags: ['!autodocs'],
	render: (args) => html`
		<cosmoz-slideout
			.opened=${args.opened}
			aria-label=${ifDefined(args['aria-label'])}
			?full-screen=${args['full-screen']}
			?no-escape=${args['no-escape']}
			style=${`--cosmoz-slideout-width: ${args.width};`}
		>
			<cosmoz-slideout-panel>
				<div slot="header">
					<h2
						style="margin: 0; font-size: var(--cz-text-lg, 1.125rem); font-weight: var(--cz-font-weight-medium, 500); color: var(--cz-color-text-primary);"
					>
						${args.heading ?? 'Panel'}
					</h2>
				</div>
				<p style="margin: 0; color: var(--cz-color-text-tertiary);">
					Adjust the Controls tab. The slotted header title, full-screen,
					dismissal options, and width update this open slideout live.
				</p>
				<div
					slot="footer"
					style="display: flex; justify-content: flex-end; gap: 8px;"
				>
					<span style="color: var(--cz-color-text-tertiary);">
						Footer slot preview
					</span>
				</div>
			</cosmoz-slideout-panel>
		</cosmoz-slideout>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		await step('opens configured from the args', async () => {
			await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
		});
	},
};
