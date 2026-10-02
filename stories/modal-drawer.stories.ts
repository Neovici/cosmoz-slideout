import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-modal-slideout';
import '../src/cosmoz-slideout-panel';
import { modalSlideout, slideoutPanel } from '../src/helpers';
import { storyDoc } from './story-docs';
import { skipUnlessTrusted } from './trusted';

type SlideoutEl = HTMLElement & { open(): void; close(): void };

const meta: Meta = {
	title: 'CosmozSlideout/Modal',
	component: 'cosmoz-modal-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
	parameters: storyDoc(
		'The modal drawer: an autonomous wrapper around a native `dialog` ' +
			'promoted with `showModal()` - the page behind is inert, focus is ' +
			'trapped, and the scrim backdrop absorbs its clicks. Esc arrives as ' +
			'the dialog `cancel` (cancelable, bridged through `opened-changed`; ' +
			'the veto holds) and the flip is recorded by the dialog `close`. ' +
			'Programmatic `close()` and slotted `request-close` use the same funnel.',
	),
	args: {
		opened: false,
		fullScreen: false,
		ariaLabel: 'Modal drawer',
		'--cosmoz-slideout-backdrop': undefined,
	},
	argTypes: {
		'--cosmoz-slideout-backdrop': {
			control: 'color',
			description: 'Scrim color (custom property, `::backdrop`).',
			table: {
				category: 'Styling',
				defaultValue: {
					summary: 'color-mix(var(--cz-color-bg-overlay) 50%, transparent)',
				},
			},
		},
		opened: {
			control: 'boolean',
			description: 'Show/hide (reactive, two-way), as on the non-modal shell.',
			table: { category: 'State', defaultValue: { summary: 'false' } },
		},
		fullScreen: {
			control: 'boolean',
			description: 'Cover the whole viewport.',
			table: { category: 'State', defaultValue: { summary: 'false' } },
		},
		ariaLabel: {
			control: 'text',
			description: 'Accessible label mirrored onto the surface.',
			table: { category: 'Accessibility' },
		},
	},
	render: (args) => {
		const mount = document.createElement('div');
		const rerender = () =>
			render(
				modalSlideout(
					{
						opened: args.opened,
						fullScreen: args.fullScreen,
						ariaLabel: args.ariaLabel,
						style: args['--cosmoz-slideout-backdrop']
							? `--cosmoz-slideout-backdrop: ${args['--cosmoz-slideout-backdrop']}`
							: undefined,
						onOpenedChanged: (e) => {
							args.opened = e.detail.value;
							rerender();
						},
					},
					slideoutPanel(
						{},
						html`
							<div slot="header">
								<h2 class="demo-heading">Modal slideout</h2>
							</div>
							<p>
								<strong>Esc</strong>, the <strong>backdrop</strong>, or the
								header's close control dismiss it natively. The scrim is
								<code>--cosmoz-slideout-backdrop</code>.
							</p>
						`,
					),
				),
				mount,
			);
		rerender();
		return html`
			<cosmoz-button
				variant="primary"
				@click=${() => {
					args.opened = true;
					rerender();
				}}
			>
				Open modal slideout
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open modal/iu }),
		);
		const el = canvasElement.querySelector(
			'cosmoz-modal-slideout',
		) as SlideoutEl;
		const dialog = el.shadowRoot!.querySelector('dialog')!;
		await step('opens with the scrim and modal typing', async () => {
			await waitFor(() => expect(dialog.open).toBe(true));
			expect(dialog.matches(':modal')).toBe(true);
			expect(el.getAttribute('aria-modal')).toBe('true');
		});
		await step('Escape is the native dismissal (final, no veto)', async () => {
			const trusted = await skipUnlessTrusted(step);
			if (!trusted) return;
			await trusted.keyboard('{Escape}');
			await waitFor(() => expect(dialog.open).toBe(false));
		});
	},
};

export const Backdrop: Story = {
	parameters: storyDoc(
		'The scrim: `--cosmoz-slideout-backdrop` (default ' +
			'`color-mix(in srgb, var(--cz-color-bg-overlay) 50%, transparent)`), ' +
			'fading with the same duration/easing tokens as the surface. It is ' +
			'the dialog\'s `::backdrop`: a click on it closes the drawer and is ' +
			'absorbed - the page behind never sees it.',
	),
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-modal-slideout
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
						style="--cosmoz-slideout-backdrop: rgb(0 90 156 / 40%)"
					>
						<cosmoz-slideout-panel>
							<p>The scrim is overridden: brand-blue at 40%.</p>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
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
				Open (brand-blue scrim)
			</cosmoz-button>
			${mount}
		`;
	},
};
