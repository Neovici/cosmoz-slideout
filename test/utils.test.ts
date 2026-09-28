import { afterEach, describe, expect, it, vi } from 'vitest';
import { FALLBACK_BUFFER_MS, animationTimeoutMs, dropFrom } from '../src/utils';

describe('dropFrom', () => {
	it('removes the item in place', () => {
		const arr = ['a', 'b', 'c'];
		dropFrom(arr, 'b');
		expect(arr).toEqual(['a', 'c']);
	});

	it('is a no-op when the item is absent', () => {
		const arr = ['a', 'b'];
		dropFrom(arr, 'z');
		expect(arr).toEqual(['a', 'b']);
	});

	it('removes only the first occurrence', () => {
		const arr = ['a', 'b', 'a'];
		dropFrom(arr, 'a');
		expect(arr).toEqual(['b', 'a']);
	});
});

describe('animationTimeoutMs', () => {
	afterEach(() => vi.restoreAllMocks());

	const mockComputed = (transitionDuration: string, transitionDelay: string) =>
		vi.spyOn(window, 'getComputedStyle').mockReturnValue({
			transitionDuration,
			transitionDelay,
		} as CSSStyleDeclaration);

	const surface = document.createElement('div');

	it('converts seconds to ms and adds the buffer', () => {
		mockComputed('0.3s', '0s');
		expect(animationTimeoutMs(surface)).toBe(300 + FALLBACK_BUFFER_MS);
	});

	it('picks the slowest of several comma-separated transitions (duration + delay)', () => {
		mockComputed('0.2s, 0.5s', '0s, 0.1s');
		// max(200+0, 500+100) = 600
		expect(animationTimeoutMs(surface)).toBe(600 + FALLBACK_BUFFER_MS);
	});

	it('falls back to just the buffer under reduced motion (no transition)', () => {
		mockComputed('', ''); // parseFloat('') -> NaN -> || 0
		expect(animationTimeoutMs(surface)).toBe(FALLBACK_BUFFER_MS);
	});

	it('honors a custom buffer', () => {
		mockComputed('0.1s', '0s');
		expect(animationTimeoutMs(surface, 20)).toBe(120);
	});
});
