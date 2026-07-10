import '@neovici/cosmoz-tokens';
import { html } from 'lit-html';
import { within as withinShadow } from 'shadow-dom-testing-library';

const isDarkBackground = (backgrounds) => {
	const value = backgrounds?.value ?? backgrounds;

	return ['dark', '#333', '#333333', 'rgb(51, 51, 51)'].includes(
		String(value ?? '').toLowerCase()
	);
};

export default {
	parameters: {
		docs: {
			source: {
				excludeDecorators: true,
				type: 'code',
				transform: (source) => {
					const match = source.match(/html`([\s\S]*?)`/u);
					return match?.[1]?.trim() ?? source;
				},
			},
		},
	},
	decorators: [
		(story, context) => {
			const isDark = isDarkBackground(context.globals?.backgrounds);
			document.documentElement.classList.toggle('dark-mode', isDark);

			return html`
				<style>
					@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
					@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

					.story-root {
						font-family: var(--cz-font-body);
						color: var(--cz-color-text-primary);
						background: var(--cz-color-bg-primary);
						padding: calc(var(--cz-spacing) * 4);
						min-height: 100%;
						transition: background-color 0.2s, color 0.2s;
					}
				</style>
				<div class="story-root">${story()}</div>
			`;
		},
	],

	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},
};
