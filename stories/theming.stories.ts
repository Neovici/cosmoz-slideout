import "@neovici/cosmoz-button/cosmoz-button";
import "@neovici/cosmoz-tokens";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing, render } from "lit-html";
import { expect, waitFor } from "storybook/test";
import "../src/cosmoz-slideout";

// The surface's defaults are all overridable CSS custom properties, set like any
// property — inline on the element, or from a `cosmoz-slideout { … }` rule. Each
// story overrides a different one and asserts the resulting computed style.

type SlideoutEl = HTMLElement & { close(): void };
const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest("cosmoz-slideout") as SlideoutEl
	).close();
const closeControl = html`
	<cosmoz-button
		slot="controls"
		variant="tertiary"
		size="sm"
		aria-label="Close"
		@click=${closeFrom}
	>
		✕
	</cosmoz-button>
`;

const meta: Meta = {
	title: "CosmozSlideout/Theming",
	component: "cosmoz-slideout",
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

// A wider panel via `--cosmoz-slideout-width`.
export const CustomWidth: Story = {
	render: () => {
		const mount = document.createElement("div");
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Wide panel"
						style="--cosmoz-slideout-width: 640px;"
						@close=${() => render(nothing, mount)}
					>
						${closeControl}
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Wide panel
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							A 640px-wide surface (capped at the viewport).
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}>Open wide</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole("button", { name: /open wide/iu })
		);
		const el = canvasElement.querySelector("cosmoz-slideout") as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>("[popover]")!;

		await step("honors the width custom property", async () => {
			await waitFor(() => expect(surface.matches(":popover-open")).toBe(true));
			await waitFor(() =>
				expect(Math.round(surface.getBoundingClientRect().width)).toBe(
					Math.min(640, window.innerWidth)
				)
			);
		});
	},
};

// A dark surface via `--cosmoz-slideout-bg` (+ a matching shadow).
export const DarkPanel: Story = {
	render: () => {
		const mount = document.createElement("div");
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Dark panel"
						style="--cosmoz-slideout-bg: #1f2937; --cosmoz-slideout-shadow: -8px 0 32px rgb(0 0 0 / 40%); color: #e5e7eb;"
						@close=${() => render(nothing, mount)}
					>
						${closeControl}
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Dark panel
						</h2>
						<div style="padding: 12px 24px;">
							The surface background and shadow are custom properties too.
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}>Open dark</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole("button", { name: /open dark/iu })
		);
		const el = canvasElement.querySelector("cosmoz-slideout") as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>("[popover]")!;

		await step("honors the background custom property", async () => {
			await waitFor(() => expect(surface.matches(":popover-open")).toBe(true));
			expect(getComputedStyle(surface).backgroundColor).toBe("rgb(31, 41, 55)");
		});
	},
};

// A slower slide via `--cosmoz-slideout-duration`.
export const SlowMotion: Story = {
	render: () => {
		const mount = document.createElement("div");
		const open = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Slow panel"
						style="--cosmoz-slideout-duration: 1.2s;"
						@close=${() => render(nothing, mount)}
					>
						${closeControl}
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Slow panel
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							Slides in (and out) over 1.2s.
						</div>
					</cosmoz-slideout>
				`,
				mount
			);
		return html`
			<cosmoz-button variant="primary" @click=${open}>Open slow</cosmoz-button>
			${mount}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole("button", { name: /open slow/iu })
		);
		const el = canvasElement.querySelector("cosmoz-slideout") as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>("[popover]")!;

		await step("applies the slower transition duration", async () => {
			await waitFor(() => expect(surface.matches(":popover-open")).toBe(true));
			expect(
				getComputedStyle(surface).transitionDuration.split(",")[0].trim()
			).toBe("1.2s");
		});
		await step(
			"still closes cleanly (allowing for the longer animation)",
			async () => {
				el.querySelector<HTMLElement>(
					'cosmoz-button[aria-label="Close"]'
				)!.click();
				await waitFor(
					() =>
						expect(canvasElement.querySelector("cosmoz-slideout")).toBeNull(),
					{ timeout: 3000 }
				);
			}
		);
	},
};
