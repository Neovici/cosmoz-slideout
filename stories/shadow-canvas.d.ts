import type { within as shadowWithin } from 'shadow-dom-testing-library';

type ShadowQueries = ReturnType<typeof shadowWithin>;

declare module 'storybook/internal/csf' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface Canvas extends ShadowQueries {}
}
