import { useCallback, useHost, useLayoutEffect } from '@pionjs/pion';

const toCamelCase = (name: string) =>
	name.replace(/-([a-z])/gu, (_, c: string) => c.toUpperCase());

const eventName = (name: string) => `${name}-changed`;

/**
 * Reactive boolean attribute holder: `set()` applies a change through
 * the cancelable `name-changed` event (`preventDefault()` vetoes the
 * write); the read side reflects the attribute.
 */
export const useAttribute = (
	name: string,
): readonly [
	boolean,
	(next: boolean | ((current: boolean) => boolean)) => boolean,
] => {
	const host = useHost();
	const camel = toCamelCase(name);
	const read = () => camel in host && Boolean(host[camel as keyof HTMLElement]);
	const value = read();

	const set = useCallback(
		(next: boolean | ((current: boolean) => boolean)): boolean => {
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
		},
		[name],
	);

	useLayoutEffect(() => {
		host.toggleAttribute(name, read());
	}, [value]);

	return [value, set] as const;
};
