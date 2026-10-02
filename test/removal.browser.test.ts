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
	for (const type of ['open', 'close'] as const) {
		el.addEventListener(type, () => events.push(`${type} event`));
	}
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

		// remove mid-flight, opened stays set: nothing settles detached
		el.remove();
		await vi.waitFor(
			() => {
				expect(el.matches(':popover-open')).toBe(false);
				expect(events).toEqual([]);
			},
			{ timeout: 3000 },
		);

		// re-append: the hooks rebuild fresh, the flip re-sends per the
		// attribute's truth, the settled open announces exactly once
		attach();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true));
		await vi.waitFor(() => expect(events).toEqual(['open event']), {
			timeout: 3000,
		});
		// no stragglers past the resumed settle
		await vi.waitFor(() => expect(events).toEqual(['open event']), {
			timeout: 1500,
		});

		el.close();
		await vi.waitFor(() =>
			expect(events).toEqual(['open event', 'close event']),
		);
	});

	it('removal mid-close stays silent; re-append without opened stays closed', async () => {
		const { el, events, attach } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(events).toEqual(['open event']), {
			timeout: 3000,
		});

		// close + remove within one tick: nothing settles; the open's
		// announce remains
		el.close();
		el.remove();
		await vi.waitFor(
			() => {
				expect(el.matches(':popover-open')).toBe(false);
				expect(events).toEqual(['open event']);
			},
			{ timeout: 3000 },
		);

		// re-append with opened absent: the CLOSE flip is guard-prevented
		// - no fabricated close event
		attach();
		await vi.waitFor(
			() => {
				expect(el.matches(':popover-open')).toBe(false);
				expect(events).toEqual(['open event']);
			},
			{ timeout: 3000 },
		);
	});
});
