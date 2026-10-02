import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	// pre-bundle the browser projects' runtime deps: the optimizer must
	// settle before tests start - a cold-cache mid-test re-optimization
	// reloads the page and kills running tests (ci flake, runs 36992182908)
	optimizeDeps: {
		include: [
			'@neovici/cosmoz-utils',
			'@neovici/cosmoz-utils/hooks/use-meta',
			'@neovici/cosmoz-utils/array',
			'@pionjs/pion',
			'lit-html',
			'lit-html/directives/if-defined.js',
			'@vitest/browser/context',
		],
	},
	test: {
		passWithNoTests: true,
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					include: ['src/**/*.test.ts'],
					environment: 'jsdom',
				},
			},
			// Browser tests: real Chromium, components directly (no
			// storybook) - lifecycle/semantics coverage
			{
				extends: true,
				test: {
					name: 'browser',
					include: ['test/**/*.browser.test.ts'],
					browser: {
						enabled: true,
						provider: playwright({ headless: true }),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
				},
			},
			// Storybook tests: component rendering and interactions
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						storybookScript: 'npm run storybook:start -- --no-open',
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						provider: playwright({}),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['./.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
