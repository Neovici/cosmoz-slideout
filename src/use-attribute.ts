import { useLayoutEffect } from '@pionjs/pion';

const toCamelCase = (name: string) =>
	name.replace(/-([a-z])/gu, (_, c: string) => c.toUpperCase());

export const useAttribute = (
	host: HTMLElement,
	name: string,
	eventName: string = `${name}-changed`,
): readonly [
	boolean,
	(next: boolean | ((current: boolean) => boolean)) => boolean,
] => {
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
		const event = new CustomEvent(eventName, {
			detail: { value: next },
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
