import "@neovici/cosmoz-button/cosmoz-button";
import "@neovici/cosmoz-tokens";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing, render } from "lit-html";
import { expect, waitFor } from "storybook/test";
import "../src/cosmoz-slideout";

// Multiple slideouts all pin to the right edge and stack on top of each other.
// The component keeps a stack of open surfaces, so Escape peels the top-most one
// first — open A, open B from inside A, then Escape closes B (leaving A), and a
// second Escape closes A.

type SlideoutEl = HTMLElement & { close(): void };
const closeFrom = (e: Event) =>
	(
		(e.currentTarget as HTMLElement).closest("cosmoz-slideout") as SlideoutEl
	).close();

const meta: Meta = {
	title: "CosmozSlideout/Stacking",
	component: "cosmoz-slideout",
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Stacked: Story = {
	render: () => {
		const mountA = document.createElement("div");
		const mountB = document.createElement("div");

		const openB = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="Second"
						style="--cosmoz-slideout-width: min(320px, 100vw); --cosmoz-slideout-bg: #f9fafb;"
						@close=${() => render(nothing, mountB)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							Second
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							The top-most slideout. Press Esc to close just this one.
						</div>
					</cosmoz-slideout>
				`,
				mountB
			);

		const openA = () =>
			render(
				html`
					<cosmoz-slideout
						aria-label="First"
						@close=${() => render(nothing, mountA)}
					>
						<cosmoz-button
							slot="controls"
							variant="tertiary"
							size="sm"
							aria-label="Close"
							@click=${closeFrom}
						>
							✕
						</cosmoz-button>
						<h2
							slot="header"
							style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
						>
							First
						</h2>
						<div style="padding: 12px 24px; color: #475467;">
							<p style="margin: 0 0 12px;">The underlying slideout.</p>
							<cosmoz-button variant="secondary" size="sm" @click=${openB}>
								Open a second slideout
							</cosmoz-button>
						</div>
					</cosmoz-slideout>
				`,
				mountA
			);

		return html`
			<cosmoz-button variant="primary" @click=${openA}
				>Open first</cosmoz-button
			>
			${mountA}${mountB}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		const count = () =>
			canvasElement.querySelectorAll("cosmoz-slideout").length;
		const labels = () =>
			[...canvasElement.querySelectorAll("cosmoz-slideout")].map((s) =>
				s.getAttribute("aria-label")
			);

		await userEvent.click(
			await canvas.findByShadowRole("button", { name: /open first/iu })
		);
		await step("open a second slideout from within the first", async () => {
			await waitFor(() => expect(count()).toBe(1));
			(
				await canvas.findByShadowRole("button", {
					name: /open a second slideout/iu,
				})
			).click();
			await waitFor(() => expect(count()).toBe(2));
		});
		await step("Escape closes the top-most (Second) first", async () => {
			await userEvent.keyboard("{Escape}");
			await waitFor(() => expect(labels()).toEqual(["First"]));
		});
		await step("a second Escape closes the remaining one", async () => {
			await userEvent.keyboard("{Escape}");
			await waitFor(() => expect(count()).toBe(0));
		});
	},
};
