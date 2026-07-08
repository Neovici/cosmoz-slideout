import "@neovici/cosmoz-button/cosmoz-button";
import "@neovici/cosmoz-tokens";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";
import { expect, waitFor } from "storybook/test";
import "../src/cosmoz-slideout-panel";

// Framework-free usage: build the styled preset with plain DOM — set attributes
// for the chrome, `innerHTML` for the body, wire `close` → `remove()`, append.

type PanelEl = HTMLElement & { close(): void };

const meta: Meta = {
	title: "CosmozSlideout/Imperative",
	component: "cosmoz-slideout-panel",
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Imperative: Story = {
	render: () => {
		const host = document.createElement("div");
		const open = () => {
			const el = document.createElement("cosmoz-slideout-panel") as PanelEl;
			el.setAttribute("heading", "Acme Industries");
			el.setAttribute("subtitle", "Supplier #4021 · Stockholm, SE");
			el.setAttribute("closeable", "");
			el.innerHTML = `
				<p style="
					margin: 0;
					color: var(--cz-color-text-tertiary);
					font-family: var(--cz-font-body);
					font-size: var(--cz-text-sm);
				">
					Built with <code>document.createElement</code> and <code>innerHTML</code> —
					no framework. The heading, close and footer are the element's own chrome.
				</p>
				<div slot="footer" style="display: flex; justify-content: flex-end;">
					<button data-close style="
						padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 4);
						border: 0;
						border-radius: var(--cz-radius-md);
						background: var(--cz-color-bg-brand-solid);
						color: #fff;
						font: inherit;
						cursor: pointer;
					">
						Done
					</button>
				</div>
			`;
			el.querySelector("[data-close]")!.addEventListener("click", () =>
				el.close()
			);
			// the parent removes the element once the close animation has finished
			el.addEventListener("close", () => el.remove());
			host.append(el);
		};
		return html`
			<cosmoz-button variant="primary" @click=${open}>
				Open (imperative)
			</cosmoz-button>
			${host}
		`;
	},
	play: async ({ canvas, canvasElement, step, userEvent }) => {
		await userEvent.click(
			await canvas.findByShadowRole("button", { name: /open \(imperative\)/iu })
		);
		const el = canvasElement.querySelector("cosmoz-slideout-panel") as PanelEl;
		const surface = el.shadowRoot!.querySelector<HTMLElement>("[popover]")!;

		await step("mounts and opens with its styled chrome", async () => {
			await waitFor(() => expect(surface.matches(":popover-open")).toBe(true));
			expect(el.shadowRoot!.querySelector(".heading")!.textContent).toMatch(
				/Acme Industries/u
			);
			await canvas.findByShadowText(/no framework/u);
		});
		await step("the wired action closes and self-removes", async () => {
			el.querySelector<HTMLButtonElement>("[data-close]")!.click();
			await waitFor(() =>
				expect(canvasElement.querySelector("cosmoz-slideout-panel")).toBeNull()
			);
		});
	},
};
