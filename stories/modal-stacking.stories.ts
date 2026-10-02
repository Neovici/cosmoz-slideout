import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-modal-slideout';
import '../src/cosmoz-slideout-panel';
import { header } from './chrome';
import { componentDoc, storyDoc } from './story-docs';
import { skipUnlessTrusted } from './trusted';

type SlideoutEl = HTMLElement & { open(): void; close(): void };

const dialogOf = (el: SlideoutEl) =>
	el.shadowRoot!.querySelector('dialog') as HTMLDialogElement;

const meta: Meta = {
	title: 'CosmozSlideout/Modal',
	component: 'cosmoz-modal-slideout',
	tags: ['autodocs'],
	parameters: componentDoc(
		'The modal drawer: an autonomous wrapper around a native `dialog` ' +
			'promoted with `showModal()` - the page behind is inert, focus is ' +
			'trapped, and the scrim backdrop absorbs its clicks. Esc arrives as ' +
			'the dialog `cancel` (cancelable, bridged through `opened-changed`; ' +
			'the veto holds) and the flip is recorded by the dialog `close`. ' +
			'Programmatic `close()` and slotted `request-close` use the same funnel.',
	),
};

export default meta;

type Story = StoryObj;

export const Stacking: Story = {
	parameters: storyDoc(
		'Modal drawers stack: opening one does not close another (there is ' +
			'no light-dismiss among dialogs). One Esc closes every open modal ' +
			'drawer - the platform `cancel` broadcast reaches each dialog, ' +
			'each recording through its own funnel.',
	),
	render: () => {
		const mountA = document.createElement('div');
		const mountB = document.createElement('div');
		let openedA = false;
		let openedB = false;
		const rerenderA = () =>
			render(
				html`
					<cosmoz-modal-slideout
						aria-label="First drawer"
						.opened=${openedA}
						@opened-changed=${(e: CustomEvent) => {
							openedA = e.detail.value;
							rerenderA();
						}}
					>
						<cosmoz-slideout-panel>
							${header('First drawer', {
								subtitle: 'Opened first; sits underneath',
							})}
							<p>
								Dialogs do not light-dismiss one another: the second drawer
								stacks on top, and this one stays open underneath.
							</p>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
				`,
				mountA,
			);
		const rerenderB = () =>
			render(
				html`
					<cosmoz-modal-slideout
						aria-label="Second drawer"
						.opened=${openedB}
						@opened-changed=${(e: CustomEvent) => {
							openedB = e.detail.value;
							rerenderB();
						}}
					>
						<cosmoz-slideout-panel>
							${header('Second drawer', {
								subtitle: 'Opened second; on top',
							})}
							<p>
								The newest drawer is the interactive one; the first is inert
								beneath it. One Esc closes both - the platform broadcasts cancel
								to every open dialog.
							</p>
						</cosmoz-slideout-panel>
					</cosmoz-modal-slideout>
				`,
				mountB,
			);
		rerenderA();
		rerenderB();
		const openA = () => {
			openedA = true;
			rerenderA();
		};
		const openB = () => {
			openedB = true;
			rerenderB();
		};
		return html`
			<cosmoz-button variant="primary" @click=${openA}>
				Open first
			</cosmoz-button>
			<cosmoz-button variant="secondary" @click=${openB}>
				Open second
			</cosmoz-button>
			${mountA}${mountB}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const [a, b] = [
			...canvasElement.querySelectorAll<SlideoutEl>('cosmoz-modal-slideout'),
		];

		await step('both drawers stack, A beneath inert', async () => {
			await userEvent.click(
				await canvas.findByShadowRole('button', { name: /open first/iu }),
			);
			await waitFor(() => expect(dialogOf(a).open).toBe(true));
			await userEvent.click(
				await canvas.findByShadowRole('button', { name: /open second/iu }),
			);
			await waitFor(() => expect(dialogOf(b).open).toBe(true));
			// no sibling close: A is still open underneath
			expect(dialogOf(a).open).toBe(true);
			expect(dialogOf(a).matches(':modal')).toBe(true);
			expect(dialogOf(b).matches(':modal')).toBe(true);
		});

		await step('one Esc closes both, each through its own funnel', async () => {
			// the broadcast needs a trusted key (vitest browser mode);
			// static Storybook builds skip here
			const trusted = await skipUnlessTrusted(step);
			if (!trusted) return;
			await trusted.keyboard('{Escape}');
			await waitFor(() => expect(dialogOf(b).open).toBe(false));
			await waitFor(() => expect(dialogOf(a).open).toBe(false));
		});
	},
};
