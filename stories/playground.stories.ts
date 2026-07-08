import "@neovici/cosmoz-button/cosmoz-button";
import "@neovici/cosmoz-tokens";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { expect, waitFor } from "storybook/test";
import "../src/cosmoz-slideout";
import { defaultSlideoutArgs, slideoutArgTypes } from "./arg-types";

// The one interactive Controls surface. Unlike the narrative stories (fixed
// recipes), this slideout is always open and bound to the args, so toggling
// `loading` / `full-screen` or editing `width` / `aria-label` in the Controls
// tab updates it live. Dismissal is covered by the Focus & Dismiss stories — this
// one stays open as a preview.

type SlideoutEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: "CosmozSlideout/Playground",
	component: "cosmoz-slideout",
	argTypes: slideoutArgTypes,
	args: { ...defaultSlideoutArgs, "aria-label": "Playground" },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
	// keep it off the aggregated autodocs page — it renders open on mount
	tags: ["!autodocs"],
	render: (args) => html`
		<cosmoz-slideout
			aria-label=${ifDefined(args["aria-label"])}
			?loading=${args.loading}
			?full-screen=${args["full-screen"]}
			?no-escape=${args["no-escape"]}
			?no-autofocus=${args["no-autofocus"]}
			style=${`--cosmoz-slideout-width: ${args.width};`}
		>
			<h2
				slot="header"
				style="margin: 0; padding: 20px 24px 4px; font: 600 20px/1.4 system-ui;"
			>
				${args["aria-label"]}
			</h2>
			<div style="padding: 12px 24px; line-height: 1.6; color: #475467;">
				Adjust the <strong>Controls</strong> tab — <code>loading</code>,
				<code>full-screen</code>, <code>width</code> and <code>aria-label</code>
				update this surface live.
			</div>
		</cosmoz-slideout>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector("cosmoz-slideout") as SlideoutEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>("[popover]")!;
		await step("opens configured from the args", async () => {
			await waitFor(() => expect(surface.matches(":popover-open")).toBe(true));
			expect(el.shadowRoot!.querySelector("cz-spinner")).toBeNull();
		});
	},
};
