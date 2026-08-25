import '@neovici/cosmoz-button/cosmoz-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html as litHtml, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout-panel';

type PanelEl = HTMLElement & {
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
		let opened = false;
		const rerender = () =>
			render(
				litHtml`
					<cosmoz-slideout-panel
						.opened=${opened}
						heading="Lifecycle"
						subtitle="Events and imperative callbacks"
						closeable
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							if (opened) addLog('opened');
							rerender();
						}}
						@full-screen-changed=${(e: CustomEvent) =>
							addLog(`full-screen: ${e.detail.fullScreen}`)}
						@close=${() => addLog('close event')}
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
								@click=${(e: Event) =>
									(
										(e.currentTarget as HTMLElement).closest(
											'cosmoz-slideout-panel'
										) as PanelEl
									).toggleFullScreen()}
							>
								Toggle full screen
							</cosmoz-button>
							<cosmoz-button
								variant="primary"
								@click=${(e: Event) =>
									(
										(e.currentTarget as HTMLElement).closest(
											'cosmoz-slideout-panel'
										) as PanelEl
									).close()}
							>
								Close
							</cosmoz-button>
						</div>
					</cosmoz-slideout-panel>
				`,
				mount
			);
		rerender();
		const el = mount.querySelector('cosmoz-slideout-panel') as PanelEl;
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
		const el = canvasElement.querySelector('cosmoz-slideout-panel') as PanelEl;

		await step('dispatches opened after the entrance transition', async () => {
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
