import '@neovici/cosmoz-button/cosmoz-button';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { defaultPanelArgs, panelArgTypes } from './arg-types';
import { footer, header, requestClose } from './chrome';
import { componentDoc, storyDoc } from './story-docs';

// Layout chrome inside a `<cosmoz-slideout>`; header and close control
// are slotted in (see stories/chrome.ts, the cz-header pattern).

type ShellEl = HTMLElement & { close(): void; opened?: boolean };

// shell (surface + lifecycle) wrapping the panel (content) - the canonical pairing
const panelInShell = (
	args: Args,
	opened: boolean,
	onOpenedChanged: (value: boolean) => void,
	content: {
		header?: { title: string; subtitle?: string };
		body: unknown;
	},
) => html`
	<cosmoz-slideout
		.opened=${opened}
		aria-label=${ifDefined(args['aria-label'] as string | undefined)}
		?full-screen=${args['full-screen']}
		?no-escape=${args['no-escape']}
		?no-autofocus=${args['no-autofocus']}
		style=${`--cosmoz-slideout-width: ${args.width};`}
		@opened-changed=${(e: CustomEvent) => onOpenedChanged(e.detail.value)}
	>
		<cosmoz-slideout-panel>
			${content.header !== undefined &&
			header(content.header.title, { subtitle: content.header.subtitle })}
			${content.body}
		</cosmoz-slideout-panel>
	</cosmoz-slideout>
`;

const trigger = (label: string, open: () => void, mount: HTMLElement) => html`
	<cosmoz-button variant="primary" @click=${open}>${label}</cosmoz-button>
	${mount}
`;

const meta: Meta = {
	title: 'CosmozSlideoutPanel',
	component: 'cosmoz-slideout-panel',
	tags: ['autodocs'],
	argTypes: panelArgTypes,
	args: defaultPanelArgs,
	parameters: componentDoc(
		'Layout chrome nested inside a `<cosmoz-slideout>`: header/body/footer ' +
			'regions with token-backed spacing - no properties. Slot a `cz-header` ' +
			'(or your own markup) into `header`, content into the default slot, and ' +
			'actions into `footer`. Drive it from the Controls tab.',
	),
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	parameters: storyDoc(
		'The canonical pairing: slotted header, body, footer actions.',
	),
	args: {
		heading: 'Acme Industries',
		subtitle: 'Supplier #4021 · Stockholm, SE',
	},
	render: (args) => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				panelInShell(
					args,
					opened,
					(value) => {
						opened = value;
						rerender();
					},
					{
						header: {
							title: args.heading as string,
							subtitle: args.subtitle as string,
						},
						body: html`
							<p>
								Preferred vendor for packaging materials since 2019. Net 30
								terms, VAT SE556677889901.
							</p>
							<div
								slot="footer"
								style="display: flex; justify-content: flex-end; gap: 8px;"
							>
								<cosmoz-button variant="secondary" @click=${requestClose}>
									Cancel
								</cosmoz-button>
								<cosmoz-button variant="primary" @click=${requestClose}>
									Save
								</cosmoz-button>
							</div>
						`,
					},
				),
				mount,
			);
		rerender();
		return trigger(
			'Open panel',
			() => {
				opened = true;
				rerender();
			},
			mount,
		);
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open panel/iu }),
		);
		const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;
		const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
		const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;


		await step('opens with the slotted header and footer actions', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			await canvas.findByShadowText(/Acme Industries/u);
			expect(
				panel
					.shadowRoot!.querySelector('[part="header"]')!
					.querySelector('slot[name="header"]'),
			).not.toBeNull();
			await waitFor(() =>
				expect(
					panel
						.shadowRoot!.querySelector('[part="footer"]')!
						.querySelector<HTMLSlotElement>('slot[name="footer"]')!
						.assignedElements().length,
				).toBeGreaterThan(0),
			);
		});
		await step('the slotted close control dismisses the panel', async () => {
			panel
				.shadowRoot!.querySelector('[part="header"]')!
				.querySelector<HTMLSlotElement>('slot[name="header"]')!
				.assignedElements()[0]
				.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!
				.click();
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(false));
		});
	},
};

export const CustomHeader: Story = {
	parameters: storyDoc(
		'The header is whatever you slot in (a cz-header element in the real app).',
	),
	args: {
		heading: 'Customer health',
		subtitle: 'Renewal risk · Q3',
		'aria-label': 'Customer health',
	},
	render: (args) => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				panelInShell(
					args,
					opened,
					(value) => {
						opened = value;
						rerender();
					},
					{
						header: {
							title: args.heading as string,
							subtitle: args.subtitle as string,
						},
						body: html`
							<p>
								The header region projects whatever you slot in - a
								<code>cz-header</code> stand-in with its own close control.
							</p>
						`,
					},
				),
				mount,
			);
		rerender();
		return trigger(
			'Open custom header',
			() => {
				opened = true;
				rerender();
			},
			mount,
		);
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open custom header/iu }),
		);
		const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
		const headerSlot = panel.shadowRoot!.querySelector<HTMLSlotElement>(
			'[part="header"] > slot',
		)!;

		await step('projects slotted header content', async () => {
			await waitFor(() =>
				expect(headerSlot.assignedElements().length).toBeGreaterThan(0),
			);
			await canvas.findByShadowText(/Customer health/u);
		});
	},
};

export const BodyOnly: Story = {
	parameters: storyDoc(
		'Body-only: empty header slot; the panel just gives its body padding and gap.',
	),
	args: {
		heading: undefined,
		subtitle: undefined,
		'aria-label': 'Notes',
	},
	render: (args) => {
		const mount = document.createElement('div');
		let opened = false;
		const rerender = () =>
			render(
				panelInShell(
					args,
					opened,
					(value) => {
						opened = value;
						rerender();
					},
					{
						header: undefined,
						body: html`
							<p>
								A panel can be just a right-hand reading surface. With the
								header slot empty and nothing in the footer, the regions stay
								out of the way - <code>&lt;cosmoz-slideout-panel&gt;</code>
								alone is what gives the body its padding and gap, independent of
								any other affordance.
							</p>
							<p>Press <kbd>Esc</kbd> to dismiss it.</p>
						`,
					},
				),
				mount,
			);
		rerender();
		return trigger(
			'Open notes',
			() => {
				opened = true;
				rerender();
			},
			mount,
		);
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open notes/iu }),
		);
		const shell = canvasElement.querySelector('cosmoz-slideout') as ShellEl;
		const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
		const surface = shell.shadowRoot!.querySelector<HTMLElement>('[popover]')!;


		await step('header region stays present but empty', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			expect(
				panel
					.shadowRoot!.querySelector('[part="header"]')!
					.querySelector<HTMLSlotElement>('slot[name="header"]')!
					.assignedElements().length,
			).toBe(0);
			expect(panel.shadowRoot!.querySelector('.body')).not.toBeNull();
		});
	},
};

export const ScrollableContent: Story = {
	parameters: storyDoc(
		'Long content scrolls within the body. Header and footer stay fixed.',
	),
	args: {
		heading: 'Activity',
		subtitle: 'Latest supplier events',
		width: 'min(520px, 100vw)',
	},
	render: (args) => {
		const mount = document.createElement('div');
		const rows = Array.from({ length: 50 }, (_, i) => i + 1); // 50 event rows
		let opened = false;
		const rerender = () =>
			render(
				panelInShell(
					args,
					opened,
					(value) => {
						opened = value;
						rerender();
					},
					{
						header: {
							title: args.heading as string,
							subtitle: args.subtitle as string,
						},
						body: html`
							${rows.map(
								(row) => html`
									<p style="margin: 0; color: var(--cz-color-text-tertiary);">
										<strong style="color: var(--cz-color-text-primary);">
											Event ${row}
										</strong>
										· Invoice ${4200 + row} matched automatically.
									</p>
								`,
							)}
							${footer(
								html`<cosmoz-button variant="secondary" @click=${requestClose}>
									Close
								</cosmoz-button>`,
							)}
						`,
					},
				),
				mount,
			);
		rerender();
		return trigger(
			'Open activity',
			() => {
				opened = true;
				rerender();
			},
			mount,
		);
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole('button', { name: /open activity/iu }),
		);
		const panel = canvasElement.querySelector('cosmoz-slideout-panel')!;
		const body = panel.shadowRoot!.querySelector<HTMLElement>('.body')!;
		const header = panel.shadowRoot!.querySelector('[part="header"]')!;
		const footer = panel.shadowRoot!.querySelector('[part="footer"]')!;

		await step('scrolls the body; header/footer stay outside it', async () => {
			await waitFor(() => expect(body.scrollHeight).toBeGreaterThan(0));
			expect(header.closest('.body')).toBeNull();
			expect(footer.closest('.body')).toBeNull();
		});
	},
};
