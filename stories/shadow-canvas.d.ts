import type { within as shadowWithin } from "shadow-dom-testing-library";

// `.storybook/preview.js` augments each story's `canvas` with the
// shadow-dom-testing-library queries (`findByShadowRole`, `findByShadowText`, …)
// via `Object.assign(canvas, withinShadow(canvasElement))`. Mirror that on the
// type so the queries are visible in typed `play` functions.
type ShadowQueries = ReturnType<typeof shadowWithin>;

declare module "storybook/internal/csf" {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface Canvas extends ShadowQueries {}
}
