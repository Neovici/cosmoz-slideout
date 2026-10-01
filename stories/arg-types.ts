import type { Meta } from '@storybook/web-components';

export const slideoutArgTypes: Meta['argTypes'] = {
	opened: {
		control: 'boolean',
		description:
			'Show/hide the slideout. Reactive, two-way (bind `.opened` and listen for `opened-changed`); the element self-closes on Escape / `close()`.',
		table: { category: 'State', defaultValue: { summary: 'false' } },
	},
	'aria-label': {
		control: 'text',
		description: 'Accessible label mirrored onto the surface (role="dialog").',
		table: { category: 'Accessibility' },
	},
	'aria-labelledby': {
		control: 'text',
		description:
			'IDREF label mirrored onto the surface. The target must live in the same tree as the surface (the shell), not a slotted one.',
		table: { category: 'Accessibility' },
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
	opened: true,
	'aria-label': 'Slideout',
	'full-screen': false,
	'no-escape': false,
	width: 'min(400px, 100vw)',
};

export const panelArgTypes: Meta['argTypes'] = {
	heading: {
		control: 'text',
		description: 'Title text passed to the slotted header.',
		table: { category: 'Slotted header' },
	},
	subtitle: {
		control: 'text',
		description: 'Supporting text passed to the slotted header.',
		table: { category: 'Slotted header' },
	},
	...slideoutArgTypes,
};

export const defaultPanelArgs: Meta['args'] = {
	opened: true,
	heading: 'Supplier preview',
	subtitle: 'Supplier #4021 · Stockholm, SE',
	'aria-label': undefined,
	'full-screen': false,
	'no-escape': false,
	width: 'min(400px, 100vw)',
};
