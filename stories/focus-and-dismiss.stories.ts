import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-input/input';
import '@neovici/cosmoz-tokens';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-slideout';

// On close, focus returns to the element that opened the drawer (`restoreFocus`
// in use-close.ts) — the a11y contract. On the raw core so the mechanics are
// visible; styled with cosmoz-tokens + cosmoz-input to make focus tangible.

type SlideoutEl = HTMLElement & { close(): void };
const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest('cosmoz-slideout') as SlideoutEl
	).close();

const meta: Meta = {
	title: 'CosmozSlideout/Focus & Dismiss',
	component: 'cosmoz-slideout',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const FocusRestore: Story = {
	render: () => {
		const mount = document.createElement('div');
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Edit profile"
						@close=${() => render(nothing, mount)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							${xCloseIcon({ slot: 'prefix' })}
						</cosmoz-button>
						<h2
							slot="header"
							style="
								margin: 0;
								padding: calc(var(--cz-spacing) * 6) calc(var(--cz-spacing) * 6)
									calc(var(--cz-spacing) * 1);
								font-family: var(--cz-font-body);
								font-size: var(--cz-text-lg);
								font-weight: var(--cz-font-weight-semibold);
								color: var(--cz-color-text-primary);
							"
						>
							Edit profile
						</h2>
						<div
							style="
								display: grid;
								gap: calc(var(--cz-spacing) * 4);
								padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 6);
							"
						>
							<cosmoz-input
								.label=${'Full name'}
								.value=${'Alex Karlsson'}
							></cosmoz-input>
							<cosmoz-input
								.label=${'Email'}
								.value=${'alex@acme.se'}
							></cosmoz-input>
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}
				>Edit profile</cosmoz-button
			>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const trigger = await canvas.findByShadowRole('button', {
			name: /edit profile/iu,
		});
		await userEvent.click(trigger);
		const el = canvasElement.querySelector('cosmoz-slideout') as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>('[popover]')!;

		await step('opens and moves focus into the surface', async () => {
			await waitFor(() => expect(surface.matches(':popover-open')).toBe(true));
			await waitFor(() => expect(el.shadowRoot!.activeElement).toBe(surface));
		});
		await step('closing returns focus to the opener', async () => {
			el.querySelector<HTMLElement>(
				'cosmoz-button[aria-label="Close"]'
			)!.click();
			await waitFor(() =>
				expect(canvasElement.querySelector('cosmoz-slideout')).toBeNull()
			);
			// after removal the only cosmoz-button left is the trigger, which
			// restoreFocus re-focused before the parent removed the drawer
			await waitFor(() =>
				expect(document.activeElement).toBe(
					canvasElement.querySelector('cosmoz-button')
				)
			);
		});
	},
};
