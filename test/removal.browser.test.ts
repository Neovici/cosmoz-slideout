import { beforeEach, describe, expect, it, vi } from 'vitest';
import '../src/cosmoz-slideout';

// eslint-disable-next-line no-duplicate-imports -- type + side-effect from one module
import type { SlideoutBase } from '../src/cosmoz-slideout';

type Surface = SlideoutBase & {
	controls?: { open(): void; close(): void };
};

const tick = (ms = 20) => new Promise((r) => setTimeout(r, ms));

const boot = () => {
	const el = document.createElement('cosmoz-slideout') as Surface;
	const events: string[] = [];
	el.addEventListener('toggle', () =>
		events.push(el.matches(':popover-open') ? 'toggle:open' : 'toggle:closed'),
	);
	el.innerHTML = '<p>x</p>';
	const parent = document.createElement('div');
	document.body.append(parent, el);

	return {
		el,
		events,
		parent,
		/** Appends el into the owning parent (a stable re-append home). */
		attach: () => parent.append(el),
	};
};

const readyWait = async (el: Surface) => {
	for (let i = 0; !el.controls && i < 100; i++) await tick();
};

describe('cosmoz-slideout removal + re-append', () => {
	beforeEach(() => vi.clearAllMocks());

	it('removal while open is silent; re-append resumes per attribute', async () => {
		const { el, events, attach } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true));

		// remove mid-open, opened stays set: the platform hides the
		// popover on disconnect, but the flip records once (both phases
		// are the element's show/hide, so the records match the flips)
		el.remove();
		await vi.waitFor(
			() => {
				expect(el.matches(':popover-open')).toBe(false);
				expect(events).toEqual(['toggle:open']);
			},
			{ timeout: 3000 },
		);

		// re-append: the hooks rebuild fresh, the reconcile re-shows per
		// the attribute's truth - a second flip, recorded as such
		attach();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true));
		await tick(100);
		// no stragglers past the resumed flip
		expect(events).toEqual(['toggle:open', 'toggle:open']);

		el.close();
		await vi.waitFor(() =>
			expect(events).toEqual(['toggle:open', 'toggle:open', 'toggle:closed']),
		);
	});

	it('removal mid-close stays silent; re-append without opened stays closed', async () => {
		const { el, events, attach } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(events).toEqual(['toggle:open']), {
			timeout: 3000,
		});

		// close + remove within one tick: nothing settles detached; the
		// open flip's record remains
		el.close();
		el.remove();
		await vi.waitFor(
			() => {
				expect(el.matches(':popover-open')).toBe(false);
				expect(events).toEqual(['toggle:open']);
			},
			{ timeout: 3000 },
		);

		// re-append with opened absent: the reconcile finds agreement
		// (hidden, closed) - no flip, no fabricated record
		attach();
		await vi.waitFor(
			() => {
				expect(el.matches(':popover-open')).toBe(false);
				expect(events).toEqual(['toggle:open']);
			},
			{ timeout: 3000 },
		);
	});
});
