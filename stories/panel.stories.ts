import '@neovici/cosmoz-button/cosmoz-button';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';
import '../src/cosmoz-slideout-panel';
import { defaultPanelArgs, panelArgTypes } from './arg-types';
import { footer, header, requestClose } from './chrome';
import { componentDoc, storyDoc } from './story-docs';

type ShellEl = HTMLElement & { close(): void; opened?: boolean };

const panelInShell = (
	args: Args,
	opened: boolean,
	onOpenedChanged: (value: boolean) => void,
) => {
	const rows = Number(args.rows ?? 0);
	return html`
		<cosmoz-slideout
			.opened=${opened}
			aria-label=${ifDefined(args['aria-label'] as string | undefined)}
			?full-screen=${args['full-screen']}
			?no-escape=${args['no-escape']}
			style=${`--cosmoz-slideout-width: ${args.width};`}
			@opened-changed=${(e: CustomEvent) => onOpenedChanged(e.detail.value)}
		>
			<cosmoz-slideout-panel>
				${
					args.heading
						? header(args.heading as string, {
								subtitle: args.subtitle as string | undefined,
							})
						: nothing
				}
				${
					rows
						? html`${Array.from({ length: rows }, (_, i) => i + 1).map(
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
							)}`
						: html`
								<p>
									Adjust the Controls: heading slotted into the header, rows for
									scrollable body content, full-screen, the width custom
									property.
								</p>
								<div
									slot="footer"
									style="display: flex; justify-content: flex-end;"
								>
									<cosmoz-button variant="primary" @click=${requestClose}>
										Done
									</cosmoz-button>
								</div>
							`
				}
			</cosmoz-slideout-panel>
		</cosmoz-slideout>
	`;
};

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
			'regions with token-backed spacing - no properties. Slot your header ' +
			'(with a close control dispatching `request-close`) into `header`, ' +
			'content into the default slot, and actions into `footer`. The ' +
			'Playground drives it from the Controls - empty `heading` shows the ' +
			'invisible empty-header region, `rows` fills a scrollable body.',
	),
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
	parameters: storyDoc(
		'Everything is a control: `heading`/`subtitle` slot the header (empty ' +
			'`heading` = header region present but invisible), `rows` fills a ' +
			'scrollable body with header and footer fixed, `full-screen` covers ' +
			'the viewport, `width` sets the `--cosmoz-slideout-width` custom ' +
			'property.',
	),
	render: (args) => {
		const mount = document.createElement('div');
		let opened = args.opened ?? false;
		const rerender = () =>
			render(
				panelInShell(args, opened, (value) => {
					opened = value;
					args.opened = value;
					rerender();
				}),
				mount,
			);
		rerender();
		return trigger(
			'Open panel',
			() => {
				opened = true;
				args.opened = true;
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

		await step('opens with the slotted header and footer actions', async () => {
			await waitFor(() => expect(shell.matches(':popover-open')).toBe(true));
			// the panel gives the body padding and gap; empty slots stay
			// invisible (their wrappers have no box of their own)
			await canvas.findByShadowText(/Supplier preview/u);
		});
		await step('the slotted close control dismisses the panel', async () => {
			panel
				.shadowRoot!.querySelector('[part="header"]')!
				.querySelector<HTMLSlotElement>('slot[name="header"]')!
				.assignedElements()[0]
				.querySelector<HTMLElement>('cosmoz-button[aria-label="Close"]')!
				.click();
			await waitFor(() => expect(shell.matches(':popover-open')).toBe(false));
		});
	},
};
