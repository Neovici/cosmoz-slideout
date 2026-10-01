import { useHost, useLayoutEffect } from '@pionjs/pion';
import type { SlideoutElement } from './types';

const toCamelCase = (name: string) =>
	name.replace(/-([a-z])/gu, (_, c: string) => c.toUpperCase());

const eventName = (name: string) => `${name}-changed`;

/**
 * Reactive boolean attribute holder, reusable as a virtual (no host arg):
 * `set()` applies a change through the cancelable `name-changed` event
 * (`preventDefault()` vetoes the write) and reflects the attribute.
 */
export const useAttribute = (
	name: string,
	options: { host?: HTMLElement } = {},
): readonly [
	boolean,
	(next: boolean | ((current: boolean) => boolean)) => boolean,
] => {
	const host = options.host ?? useHost<SlideoutElement>();
	const camel = toCamelCase(name);
	const read = () =>
		Boolean((host as unknown as Record<string, unknown>)[camel]);
	const value = read();

	const set = (next: boolean | ((current: boolean) => boolean)): boolean => {
		const current = read();
		const value = typeof next === 'function' ? next(current) : next;
		if (value === current) {
			return false;
		}
		const event = new CustomEvent(eventName(name), {
			detail: { value },
			cancelable: true,
			bubbles: true,
		});
		host.dispatchEvent(event);
		if (event.defaultPrevented) {
			return false;
		}
		host.toggleAttribute(name, value);
		return true;
	};

	useLayoutEffect(() => {
		host.toggleAttribute(name, read());
	}, [value]);

	return [value, set] as const;
};
