import { useCallback, useHost, useLayoutEffect } from '@pionjs/pion';

const toCamelCase = (name: string) =>
	name.replace(/-([a-z])/gu, (_, c: string) => c.toUpperCase());

const eventName = (name: string) => `${name}-changed`;

/**
 * Reactive boolean attribute holder. The read side is the property
 * (e.g. `host.opened`), mirrored from the attribute by
 * `attributeChangedCallback`.
 *
 * `set()` dispatches the cancelable `name-changed` event before the
 * write; `reflect()` is the same write, silent.
 */
export const useAttribute = (
	name: string,
): readonly [
	boolean,
	(next: boolean | ((current: boolean) => boolean)) => boolean,
	(next: boolean) => void,
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

	/**
	 * Silent write: the platform flips the state without touching the
	 * attribute; the record is the platform's own event.
	 */
	const reflect = useCallback(
		(next: boolean) => {
			if (next === read()) {
				return;
			}
			host.toggleAttribute(name, next);
		},
		[name],
	);

	useLayoutEffect(() => {
		host.toggleAttribute(name, read());
	}, [value]);

	return [value, set, reflect] as const;
};
