import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import { defaultPanelArgs, panelArgTypes } from './arg-types';

type PanelEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: 'CosmozSlideout/Playground',
	component: 'cosmoz-slideout',
	argTypes: panelArgTypes,
	args: defaultPanelArgs,
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
	tags: ['!autodocs'],
	render: (args) => html`
		<cosmoz-slideout
			variant=${ifDefined(args.variant || undefined)}
			heading=${ifDefined(args.heading)}
			subtitle=${ifDefined(args.subtitle)}
			aria-label=${ifDefined(args['aria-label'])}
			?closeable=${args.closeable}
			?loading=${args.loading}
			?full-screen=${args['full-screen']}
			?no-escape=${args['no-escape']}
			?no-autofocus=${args['no-autofocus']}
			style=${`--cosmoz-slideout-width: ${args.width};`}
		>
			<p style="margin: 0; color: var(--cz-color-text-tertiary);">
				Adjust the Controls tab. Variant, heading, subtitle, closeability,
				loading, full-screen, dismissal options, and width update this open
				slideout live.
			</p>
			<div
				slot="footer"
				style="display: flex; justify-content: flex-end; gap: 8px;"
			>
				<span style="color: var(--cz-color-text-tertiary);">
					Footer slot preview
				</span>
			</div>
		</cosmoz-slideout>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-slideout') as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;
		await step('opens configured from the args', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(el.shadowRoot!.querySelector('cz-spinner')).toBeNull();
		});
	},
};
