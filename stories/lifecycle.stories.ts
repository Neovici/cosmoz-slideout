import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html as litHtml, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';

type SlideoutEl = HTMLElement & {
	open(): void;
	close(): void;
	toggleFullScreen(): void;
	onClose?: () => void;
};

const meta: Meta = {
	title: 'CosmozSlideoutPanel/Lifecycle',
	component: 'cosmoz-slideout-panel',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Events: Story = {
	render: () => {
		const mount = document.createElement('div');
		const log = document.createElement('ol');
		log.dataset.testid = 'event-log';
		log.style.cssText =
			'margin: calc(var(--cz-spacing) * 3) 0 0; color: var(--cz-color-text-tertiary); font-family: var(--cz-font-body); font-size: var(--cz-text-sm);';
		const addLog = (message: string) => {
			const item = document.createElement('li');
			item.textContent = message;
			log.append(item);
		};
		const shellOf = (e: Event) =>
			(e.currentTarget as HTMLElement).closest(
				'cosmoz-slideout'
			) as SlideoutEl | null;
		let opened = false;
		const rerender = () =>
			render(
				litHtml`
					<cosmoz-slideout
						aria-label="Lifecycle"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							if (opened) addLog('opened');
							rerender();
						}}
						@full-screen-changed=${(e: CustomEvent) =>
							addLog(`full-screen: ${e.detail.fullScreen}`)}
						@close=${() => addLog('close event')}
					>
						<cosmoz-slideout-panel
							heading="Lifecycle"
							subtitle="Events and imperative callbacks"
							closeable
						>
							<p>
								The element persists in the DOM. It emits <code>opened-changed</code>
								and, on close, <code>close</code> once the slide-out animation
								completes.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end; gap: 8px;"
							>
								<cosmoz-button
									variant="secondary"
									@click=${(e: Event) => shellOf(e)?.toggleFullScreen()}
								>
									Toggle full screen
								</cosmoz-button>
								<cosmoz-button
									variant="primary"
									@click=${(e: Event) => shellOf(e)?.close()}
								>
									Close
								</cosmoz-button>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,
				mount
			);
		rerender();
		const el = mount.querySelector('cosmoz-slideout') as SlideoutEl;
		el.onClose = () => addLog('onClose callback');
		const open = () => {
			log.replaceChildren();
			el.open();
		};

		return litHtml`
			<cosmoz-button variant="primary" @click=${open}>
				Open lifecycle panel
			</cosmoz-button>
			${log}${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const logItems = () =>
			[...canvasElement.querySelectorAll('[data-testid="event-log"] li')].map(
				(item) => item.textContent
			);

		await userEvent.click(
			await canvas.findByShadowRole('button', {
				name: /open lifecycle panel/iu,
			})
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;

		await step('logs opened when the surface opens', async () => {
			await waitFor(() => expect(logItems()).toContain('opened'));
		});
		await step('emits full-screen-changed with state detail', async () => {
			await userEvent.click(
				await canvas.findByShadowRole('button', {
					name: /toggle full screen/iu,
				})
			);
			await waitFor(() => expect(logItems()).toContain('full-screen: true'));
		});
		await step(
			'fires close and onClose when the animation finishes',
			async () => {
				el.querySelector<HTMLElement>('cosmoz-button:last-of-type')!.click();
				await waitFor(() => expect(logItems()).toContain('close event'));
				await waitFor(() => expect(logItems()).toContain('onClose callback'));
			}
		);
	},
};
