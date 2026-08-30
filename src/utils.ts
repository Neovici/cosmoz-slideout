export const FALLBACK_BUFFER_MS = 80;

export const dropFrom = <T>(arr: T[], item: T) => {
	const i = arr.indexOf(item);
	if (i !== -1) arr.splice(i, 1);
};

export const animationTimeoutMs = (
	surface: HTMLElement,
	buffer = FALLBACK_BUFFER_MS
) => {
	const cs = getComputedStyle(surface);
	const toMs = (v: string) =>
		v.split(',').map((s) => parseFloat(s) * 1000 || 0);
	const durations = toMs(cs.transitionDuration);
	const delays = toMs(cs.transitionDelay);
	const longest = durations.reduce(
		(max, d, i) => Math.max(max, d + (delays[i] ?? 0)),
		0
	);
	return longest + buffer;
};
