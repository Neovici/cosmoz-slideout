import type { Meta } from '@storybook/web-components';

// Storybook can't auto-infer args for a Pion *functional* element (there's no
// Custom Elements Manifest to read attributes from), so the public API is
// declared here and shared across the story sections to populate the Controls
// tab. The `Playground` story wires these to a live slideout; the narrative
// stories list them for reference.
export const slideoutArgTypes: Meta['argTypes'] = {
	'aria-label': {
		control: 'text',
		description: 'Accessible label mirrored onto the surface (role="dialog").',
		table: { category: 'Accessibility' },
	},
	'aria-labelledby': {
		control: 'text',
		description:
			'IDREF label mirrored onto the surface. The target must be in the same tree as the surface (a `slideout()` render-fn heading), not a slotted one.',
		table: { category: 'Accessibility' },
	},
	loading: {
		control: 'boolean',
		description: 'Overlay a spinner over the body.',
		table: { category: 'State', defaultValue: { summary: 'false' } },
	},
	'full-screen': {
		control: 'boolean',
		description: 'Cover the whole viewport (parent-driven).',
		table: { category: 'State', defaultValue: { summary: 'false' } },
	},
	'no-escape': {
		control: 'boolean',
		description: 'Disable the built-in Escape-to-close.',
		table: { category: 'Behavior', defaultValue: { summary: 'false' } },
	},
	'no-autofocus': {
		control: 'boolean',
		description: 'Do not move focus into the surface on open.',
		table: { category: 'Behavior', defaultValue: { summary: 'false' } },
	},
	width: {
		control: 'text',
		description: 'Sets the `--cosmoz-slideout-width` custom property.',
		table: {
			category: 'Styling',
			defaultValue: { summary: 'min(400px, 100vw)' },
		},
	},
};

export const defaultSlideoutArgs: Meta['args'] = {
	'aria-label': 'Slideout',
	loading: false,
	'full-screen': false,
	'no-escape': false,
	'no-autofocus': false,
	width: 'min(400px, 100vw)',
};
