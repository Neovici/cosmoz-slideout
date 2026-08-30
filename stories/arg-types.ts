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
	opened: true,
	'aria-label': 'Slideout',
	'full-screen': false,
	'no-escape': false,
	'no-autofocus': false,
	width: 'min(400px, 100vw)',
};

export const panelArgTypes: Meta['argTypes'] = {
	heading: {
		control: 'text',
		description: 'Default header title rendered inside the panel UI.',
		table: { category: 'Panel' },
	},
	subtitle: {
		control: 'text',
		description: 'Optional supporting text rendered below the heading.',
		table: { category: 'Panel' },
	},
	closeable: {
		control: 'boolean',
		description: 'Render the built-in close button in the header UI.',
		table: { category: 'Panel', defaultValue: { summary: 'false' } },
	},
	loading: {
		control: 'boolean',
		description: 'Overlay a spinner over the panel body.',
		table: { category: 'Panel', defaultValue: { summary: 'false' } },
	},
	...slideoutArgTypes,
};

export const defaultPanelArgs: Meta['args'] = {
	opened: true,
	heading: 'Supplier preview',
	subtitle: 'Supplier #4021 · Stockholm, SE',
	closeable: true,
	'aria-label': undefined,
	loading: false,
	'full-screen': false,
	'no-escape': false,
	'no-autofocus': false,
	width: 'min(400px, 100vw)',
};
