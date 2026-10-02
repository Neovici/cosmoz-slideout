/* eslint-disable no-duplicate-imports -- type + side-effect from one module */
import '../src/cosmoz-modal-slideout';
import type { ModalSlideoutBase } from '../src/cosmoz-modal-slideout';
/* eslint-enable no-duplicate-imports */
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { trustedUserEvent } from '../stories/trusted';

type Surface = ModalSlideoutBase & {
	controls?: { open(): void; close(): void };
};

const tick = (ms = 20) => new Promise((r) => setTimeout(r, ms));

const readyWait = async (el: Surface) => {
	for (let i = 0; !el.controls && i < 100; i++) await tick();
};

/**
 * One boot: the element appends connected, events collected in the
 * `events` array; the opener button doubles as the outside click
 * target.
 */
const boot = () => {
	const opener = document.createElement('button');
	opener.className = 'm-outside';
	opener.textContent = 'opener';
	// outside the surface covers: the trusted light-dismiss click
	// must land on it (the surface fills from the right)
	opener.style.cssText = 'position:fixed;left:4px;top:4px';
	document.body.append(opener);
	opener.focus();

	const el = document.createElement('cosmoz-modal-slideout') as Surface;
	// narrow band: the viewport is small; trusted outside clicks
	// must land outside the surface covers
	el.style.setProperty('--cosmoz-slideout-width', '120px');
	const events: string[] = [];
	el.addEventListener('toggle', () =>
		events.push(`toggle:${el.matches(':popover-open') ? 'open' : 'closed'}`),
	);
	const openedChanged = vi.fn();
	el.addEventListener('opened-changed', openedChanged);
	el.innerHTML = '<input id="field-in" />';
	document.body.append(el);

	const field = () => el.querySelector<HTMLInputElement>('#field-in')!;

	return { el, opener, events, openedChanged, field };
};

describe('cosmoz-modal-slideout', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		document.body.innerHTML = '';
	});

	let userEvent: Awaited<ReturnType<typeof trustedUserEvent>>;
	beforeEach(async () => {
		userEvent = await trustedUserEvent();
		if (!userEvent) {
			throw new Error('trusted userEvent required (browser mode)');
		}
	});

	it('opens modal: popover=auto, aria-modal=true, native [autofocus] content focused', async () => {
		const { el, events, openedChanged, field } = boot();
		el.innerHTML = '<input id="field-in" autofocus />';
		await readyWait(el);

		expect(el.getAttribute('popover')).toBe('auto');
		expect(el.getAttribute('aria-modal')).toBe('true');

		el.open();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(document.activeElement).toBe(field()), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(events).toEqual(['toggle:open']), {
			timeout: 3000,
		});
		expect(openedChanged).toHaveBeenCalledTimes(1);
		expect(openedChanged.mock.calls[0][0].detail).toEqual({ value: true });
	});

	it('non-modal sibling is untouched: popover=manual, aria-modal=false', () => {
		const plain = document.createElement('cosmoz-slideout');
		plain.innerHTML = '<p>x</p>';
		document.body.append(plain);

		expect(plain.getAttribute('popover')).toBe('manual');
		expect(plain.getAttribute('aria-modal')).toBe('false');
	});

	it('Esc (trusted): once, no echo, attribute follows, focus walks home', async () => {
		const { el, opener, events, openedChanged, field } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true), {
			timeout: 3000,
		});
		// settle before Esc: a mid-flight close skips the open record
		await vi.waitFor(() => expect(events).toEqual(['toggle:open']), {
			timeout: 3000,
		});
		field().focus();
		expect(el.contains(document.activeElement)).toBe(true);

		await userEvent!.keyboard('{Escape}');

		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(false), {
			timeout: 3000,
		});
		await vi.waitFor(
			() => expect(events).toEqual(['toggle:open', 'toggle:closed']),
			{ timeout: 3000 },
		);
		// open + no dismissal notify: the native path records via
		// `toggle` only (`opened-changed` is the element's intent channel)
		expect(openedChanged).toHaveBeenCalledTimes(1);
		expect(el.hasAttribute('opened')).toBe(false);
		await vi.waitFor(() => expect(document.activeElement).toBe(opener));
	});

	it('programmatic close(): cancelable funnel intact, no toggle echo, reopen works', async () => {
		const { el, events, openedChanged } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(events).toEqual(['toggle:open']), {
			timeout: 3000,
		});

		// the funnel veto holds on the programmatic path
		let veto = true;
		el.addEventListener('opened-changed', (e) => {
			if (veto) {
				e.preventDefault();
			}
		});
		el.close();
		await tick(100);
		expect(el.matches(':popover-open')).toBe(true); // veto held

		veto = false;
		el.close();
		await vi.waitFor(
			() => expect(events).toEqual(['toggle:open', 'toggle:closed']),
			{ timeout: 3000 },
		);
		// notify order: open(true), vetoed attempt (the dispatch precedes
		// the funnel's preventDefault check), close(false)
		const details = openedChanged.mock.calls.map((c) => c[0].detail.value);
		expect(details).toEqual([true, false, false]);
		expect(openedChanged.mock.calls[1][0].defaultPrevented).toBe(true);
		el.open();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true), {
			timeout: 3000,
		});
	});

	it('backdrop click (trusted): final dismissal, no veto', async () => {
		const { el, opener, events, openedChanged, field } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(true), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(events).toEqual(['toggle:open']), {
			timeout: 3000,
		});
		field().focus();

		// a veto attempt on the native path is inert: the dismissal has
		// already happened, and the record is the platform's `toggle`
		el.addEventListener('opened-changed', (e) => e.preventDefault());

		// trusted click on the outside opener: the light-dismiss gesture
		await userEvent!.click(document.querySelector('.m-outside')!);

		await vi.waitFor(() => expect(el.matches(':popover-open')).toBe(false), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(el.hasAttribute('opened')).toBe(false), {
			timeout: 3000,
		});
		await vi.waitFor(
			() => expect(events).toEqual(['toggle:open', 'toggle:closed']),
			{ timeout: 3000 },
		);
		// the click's own focus lands on the opener (the gesture's
		// target); no restore moves it otherwise
		await vi.waitFor(() => expect(document.activeElement).toBe(opener));
		// the native path dispatches no `opened-changed`
		expect(openedChanged).toHaveBeenCalledTimes(1);
	});

	it('stacked modals: B sibling-closes A; A records via toggle without stealing focus', async () => {
		const { el: a, events: aEvents, field } = boot();
		const b = document.createElement('cosmoz-modal-slideout') as Surface;
		b.innerHTML = '<input id="field-b" autofocus />';
		const bEvents: string[] = [];
		b.addEventListener('toggle', () =>
			bEvents.push(
				b.matches(':popover-open') ? 'toggle:open' : 'toggle:closed',
			),
		);
		document.body.append(b);

		await readyWait(a);
		await readyWait(b);

		a.open();
		await vi.waitFor(() => expect(aEvents).toEqual(['toggle:open']), {
			timeout: 3000,
		});
		field().focus();

		b.open();
		await vi.waitFor(() => expect(b.matches(':popover-open')).toBe(true), {
			timeout: 3000,
		});
		// A was closed synchronously during B's show (light dismiss)
		expect(a.matches(':popover-open')).toBe(false);
		// B's focused content holds focus
		await vi.waitFor(() => expect(document.activeElement?.id).toBe('field-b'), {
			timeout: 3000,
		});

		// past A's flip: close recorded via the platform's toggle, focus unmoved
		await tick(100);
		expect(aEvents).toEqual(['toggle:open', 'toggle:closed']);
		expect(bEvents).toEqual(['toggle:open']);
		expect(document.activeElement?.id).toBe('field-b');
	}, 10000);
});
