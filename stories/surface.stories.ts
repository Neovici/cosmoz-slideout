import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-input/input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { defaultSlideoutArgs, slideoutArgTypes } from './arg-types';
import { header } from './chrome';
import { componentDoc, storyDoc } from './story-docs';
import { skipUnlessTrusted } from './trusted';

type SlideoutEl = HTMLElement & {
	close(): void;
	toggleFullScreen(): void;
	open(): void;
};

const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
	argTypes: {
		...slideoutArgTypes,
		panel: {
			control: 'boolean',
			description:
				'Use `<cosmoz-slideout-panel>` chrome (off: hand-composed chrome).',
			table: { category: 'Content', defaultValue: { summary: 'true' } },
		},
		heading: {
			control: 'text',
			description: 'Slotted panel header title (panel chrome).',
			table: { category: 'Content' },
		},
	},
	args: { ...defaultSlideoutArgs, panel: true, heading: 'Supplier' },
	parameters: componentDoc(
		'The low-level surface: it owns the popover, the `opened` lifecycle, ' +
			'focus and Escape, and exposes a **single blank slot** - no UI of its ' +
			'own. The Playground drives everything from the Controls: `opened`, ' +
			'`full-screen`, `no-escape`, the width, the `aria-label` and the ' +
			'slotted chrome (panel vs hand-composed).',
	),
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
	parameters: storyDoc(
		'Drive `opened` from the Controls or the buttons - the element is ' +
			'non-modal, so the page behind stays interactive (the counter ' +
			'proves it). `no-escape` holds against Esc; `full-screen` covers ' +
			'the viewport; the width and label are the `--cosmoz-slideout-*` / ' +
			'`aria-label` knobs. "Panel chrome" swaps hand-composed chrome for ' +
			'`<cosmoz-slideout-panel>`.',
	),
	render: (args) => {
		const mount = document.createElement('div');
		const status = document.createElement('p');
		status.dataset.testid = 'bg-count';
		status.style.cssText = 'margin: 0; color: var(--cz-color-text-tertiary);';
		let count = 0;
		status.textContent = 'Background clicks: 0';
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label=${ifDefined(args['aria-label'] as string | undefined)}
						.opened=${args.opened ?? false}
						?full-screen=${args['full-screen']}
						?no-escape=${args['no-escape']}
						style=${`--cosmoz-slideout-width: ${args.width};`}
						@opened-changed=${(e: CustomEvent) => {
							args.opened = e.detail.value;
							rerender();
						}}
					>
						${
							args.panel
								? html`
										<cosmoz-slideout-panel>
											${header((args.heading as string) ?? 'Supplier', {
												subtitle: 'Supplier #4021 · Malmö, SE',
											})}
											<p style="color: var(--cz-color-text-tertiary);">
												Slotted into the single blank slot.
											</p>
											<div
												slot="footer"
												style="display: flex; justify-content: flex-end;"
											>
												<cosmoz-button variant="primary" @click=${closeFrom}>
													Done
												</cosmoz-button>
											</div>
										</cosmoz-slideout-panel>
									`
								: html`
										<div
											style="display: flex; flex-direction: column; height: 100%;"
										>
											<header
												style="position: relative; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
											>
												Edit supplier
												<cosmoz-button
													style="position: absolute; top: 8px; right: 8px;"
													variant="tertiary"
													size="sm"
													aria-label="Close"
													@click=${closeFrom}
												>
													${xCloseIcon({ slot: 'prefix' })}
												</cosmoz-button>
											</header>
											<div
												style="flex: 1; min-height: 0; overflow: auto; padding: 12px 24px; line-height: 1.6; color: var(--cz-color-text-tertiary);"
											>
												<p style="margin: 0 0 8px;">
													Acme Industries · Supplier #4021
												</p>
												<p style="margin: 0;">
													Net 30 terms · VAT SE556677889901.
												</p>
											</div>
											<footer
												style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px 24px; border-top: 1px solid var(--cz-color-border-secondary);"
											>
												<cosmoz-button variant="secondary" @click=${closeFrom}>
													Cancel
												</cosmoz-button>
												<cosmoz-button variant="primary" @click=${closeFrom}
													>Save</cosmoz-button
												>
											</footer>
										</div>
									`
						}
					</cosmoz-slideout>
				`,
				mount,
			);
		rerender();
		const bump = () => {
			status.textContent = `Background clicks: ${++count}`;
		};
		return html`
			<div
				style="display: flex; gap: calc(var(--cz-spacing) * 3); align-items: center;"
			>
				<cosmoz-button
					variant="primary"
					@click=${() => {
						args.opened = true;
						rerender();
					}}
				>
					Open
				</cosmoz-button>
				<cosmoz-button
					variant="secondary"
					@click=${() => {
						args.opened = false;
						rerender();
					}}
				>
					Close
				</cosmoz-button>
				<cosmoz-button variant="secondary" @click=${bump}>
					Background action
				</cosmoz-button>
				${status}
			</div>
			${mount}
		`;
	},
	play: async ({ args, canvas, canvasElement, step, userEvent }) => {
		await step('opens from the args / the Open button', async () => {
			const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
			await userEvent.click(
				await canvas.findByShadowRole('button', { name: /^open$/iu }),
			);
			await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
		});
		await step('the page behind stays interactive (non-modal)', async () => {
			await userEvent.click(
				await canvas.findByShadowRole('button', {
					name: /background action/iu,
				}),
			);
			expect(
				canvasElement.querySelector('[data-testid="bg-count"]')!.textContent,
			).toBe('Background clicks: 1');
		});
		await step('Esc honors the `no-escape` control', async () => {
			const trusted = await skipUnlessTrusted(step);
			if (!trusted) return;
			const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
			await trusted.keyboard('{Escape}');
			await new Promise((r) => window.setTimeout(r, 100));
			expect(el.matches(':popover-open')).toBe(args['no-escape'] ?? false);
			if (!args['no-escape']) {
				await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
			}
		});
	},
};

export const FocusRestore: Story = {
	parameters: storyDoc(
		'Focus moves into the first marked field on open, back to the opener on close.',
	),
	render: () => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Edit profile"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							rerender();
						}}
					>
						<cosmoz-slideout-panel>
							${header('Edit profile', {
								subtitle: 'Focus returns to the opener on close',
							})}
							<div style="display: grid; gap: calc(var(--cz-spacing) * 4);">
								<cosmoz-input
									autofocus
									.label=${'Full name'}
									.value=${'Alex Karlsson'}
								></cosmoz-input>
								<cosmoz-input
									.label=${'Email'}
									.value=${'alex@acme.se'}
								></cosmoz-input>
							</div>
						</cosmoz-slideout-panel>
					</cosmoz-slideout>
				`,
				mount,
			);
		rerender();
		return html`
			<cosmoz-button
				variant="primary"
				@click=${() => {
					opened = true;
					rerender();
				}}
			>
				Edit profile
			</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /edit profile/iu }),
		);
		const el = canvasElement.querySelector<SlideoutEl>('cosmoz-slideout')!;

		await step(
			'focus is delegated to the first focusable content',
			async () => {
				await waitFor(() => expect(el.matches(':popover-open')).toBe(true));
				// autofocus on the first cosmoz-input: the popover focusing steps
				// delegate through its DF shadow to the inner native input
				const firstInput = el.querySelector('cosmoz-input')!;
				await waitFor(() => expect(document.activeElement).toBe(firstInput));
			},
		);
		await step('returns focus to the opener after close', async () => {
			canvasElement
				.querySelector('cosmoz-slideout-panel')!
				.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!
				.click();
			await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
			await waitFor(
				() =>
					expect(document.activeElement).toBe(
						canvasElement.querySelector('cosmoz-button'),
					),
				{ timeout: 3000 },
			);
		});
	},
};

export const Stacking: Story = {
	parameters: storyDoc(
		'Multiple slideouts stack; Escape closes only the top-most.',
	),
	render: () => {
		const mountA = document.createElement('div');
		const mountB = document.createElement('div');
		let openedA = false;
		let openedB = false;
		const rerenderB = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Second"
						.opened=${openedB}
						style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: var(--cz-color-bg-secondary);"
						@opened-changed=${(e: CustomEvent) => {
							openedB = e.detail.value;
							rerenderB();
						}}
					>
						<div style="display: flex; flex-direction: column; height: 100%;">
							<cosmoz-button
								variant="tertiary"
								size="sm"
								aria-label="Close"
								style="position: absolute; top: 8px; right: 8px; z-index: 3;"
								@click=${closeFrom}
							>
								✕
							</cosmoz-button>
							<h2
								style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								Second
							</h2>
							<div
								style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
							>
								The top-most slideout. Press Esc to close just this one.
							</div>
						</div>
					</cosmoz-slideout>
				`,
				mountB,
			);
		const openB = () => {
			openedB = true;
			rerenderB();
		};
		const rerenderA = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="First"
						.opened=${openedA}
						@opened-changed=${(e: CustomEvent) => {
							openedA = e.detail.value;
							rerenderA();
						}}
					>
						<div style="display: flex; flex-direction: column; height: 100%;">
							<cosmoz-button
								variant="tertiary"
								size="sm"
								aria-label="Close"
								style="position: absolute; top: 8px; right: 8px; z-index: 3;"
								@click=${closeFrom}
							>
								✕
							</cosmoz-button>
							<h2
								style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
							>
								First
							</h2>
							<div
								style="padding: 12px 24px; color: var(--cz-color-text-tertiary);"
							>
								<p style="margin: 0 0 12px;">The underlying slideout.</p>
								<cosmoz-button variant="secondary" size="sm" @click=${openB}>
									Open a second slideout
								</cosmoz-button>
							</div>
						</div>
					</cosmoz-slideout>
				`,
				mountA,
			);
		rerenderA();
		rerenderB();
		return html`
			<cosmoz-button
				variant="primary"
				@click=${() => {
					openedA = true;
					rerenderA();
				}}
			>
				Open first
			</cosmoz-button>
			${mountA}${mountB}
		`;
	},
	play: async ({ canvas, canvasElement, step }) => {
		const openSurfaces = () =>
			[...canvasElement.querySelectorAll('cosmoz-slideout')].filter((s) =>
				s.matches(':popover-open'),
			);
		const labels = () =>
			openSurfaces().map((s) => s.getAttribute('aria-label'));
		// the stacked close-request sessions need real user activation at
		// their creation: synthetic clicks (storybook userEvent) create
		// none and the user agent then groups the watchers, so one close
		// request would close every surface; the open clicks use the
		// Playwright-backed trusted input for that guarantee
		const trusted = await skipUnlessTrusted(step);
		if (!trusted) return;
		await trusted.click(
			await canvas.findByShadowRole('button', { name: /open first/iu }),
		);
		await step('opens a second slideout above the first', async () => {
			await waitFor(() => expect(openSurfaces().length).toBe(1));
			await trusted.click(
				await canvas.findByShadowRole('button', {
					name: /open a second slideout/iu,
				}),
			);
			await waitFor(() => expect(openSurfaces().length).toBe(2));
		});
		await step('Escape closes the most recent slideout first', async () => {
			await trusted.keyboard('{Escape}');
			await waitFor(() => expect(labels()).toEqual(['First']));
		});
	},
};

export const Events: Story = {
	parameters: storyDoc(
		'The surface event lifecycle: `opened-changed` (the cancelable intent) / ' +
			'`full-screen-changed` / `toggle` (the platform record). The element ' +
			'persists in the DOM across open/close cycles.',
	),
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
				'cosmoz-slideout',
			) as SlideoutEl | null;
		let opened = false;
		const rerender = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Lifecycle"
						.opened=${opened}
						@opened-changed=${(e: CustomEvent) => {
							opened = e.detail.value;
							if (opened) addLog('opened');
							rerender();
						}}
						@full-screen-changed=${(e: CustomEvent) =>
							addLog(`full-screen: ${String(e.detail.value)}`)}
						@toggle=${(e: ToggleEvent) => addLog(`toggle: ${e.newState}`)}
					>
						<cosmoz-slideout-panel>
							${header('Lifecycle', {
								subtitle: 'Events and imperative methods',
							})}
							<p>
								The element persists in the DOM. It emits
								<code>opened-changed</code> (cancelable intent) as it opens, and
								the platform's <code>toggle</code> as the recorded flip.
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
				mount,
			);
		rerender();
		const el = mount.querySelector('cosmoz-slideout') as SlideoutEl;
		const open = () => {
			log.replaceChildren();
			el.open();
		};

		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open lifecycle panel
			</cosmoz-button>
			${log}${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const logItems = () =>
			[...canvasElement.querySelectorAll('[data-testid="event-log"] li')].map(
				(item) => item.textContent,
			);

		await userEvent.click(
			await canvas.findByShadowRole('button', {
				name: /open lifecycle panel/iu,
			}),
		);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;

		await step('logs opened when the surface opens', async () => {
			await waitFor(() => expect(logItems()).toContain('opened'));
		});
		await step('emits full-screen-changed with state detail', async () => {
			await userEvent.click(
				await canvas.findByShadowRole('button', {
					name: /toggle full screen/iu,
				}),
			);
			await waitFor(() => expect(logItems()).toContain('full-screen: true'));
		});
		await step('records the flip through the platform toggle', async () => {
			el.querySelector<HTMLElement>('cosmoz-button:last-of-type')!.click();
			await waitFor(() => expect(el.matches(':popover-open')).toBe(false));
			await waitFor(() => expect(logItems()).toContain('toggle: closed'));
		});
	},
};
