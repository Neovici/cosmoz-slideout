import { useCallback, useHost, useLayoutEffect } from '@pionjs/pion';

const toCamelCase = (name: string) =>
	name.replace(/-([a-z])/gu, (_, c: string) => c.toUpperCase());

const eventName = (name: string) => `${name}-changed`;

/**
 * Reactive boolean attribute holder. The read side is the **property**
 * (e.g. `host.opened`), mirrored from the attribute by
 * `attributeChangedCallback` - reads track attribute writes (external
 * ones included) only through that reflection.
 *
 * `set()` applies a change through the cancelable `name-changed` event
 * (`preventDefault()` vetoes the write).
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
	 * Silent write: for changes that already happened (the platform
	 * did them - e.g. a `popover="auto"` dismissal). No event: the
	 * element's own `opened-changed` is the intent channel, the
	 * platform's `toggle` is the record channel.
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
