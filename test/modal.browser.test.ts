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

/** The inner dialog: the top-layer surface. */
const dialogOf = (el: Surface) =>
	el.shadowRoot!.querySelector('dialog') as HTMLDialogElement;

const boot = () => {
	const opener = document.createElement('button');
	opener.className = 'm-outside';
	opener.textContent = 'opener';
	// the surface fills from the right, so trusted outside clicks must
	// land on an element it covers; the backdrop absorbs them
	opener.style.cssText = 'position:fixed;left:4px;top:4px';
	document.body.append(opener);
	opener.focus();

	const el = document.createElement('cosmoz-modal-slideout') as Surface;
	// narrow band: the viewport is small; the backdrop covers the rest
	el.style.setProperty('--cosmoz-slideout-width', '120px');
	const events: string[] = [];
	const openedChanged = vi.fn();
	el.addEventListener('opened-changed', openedChanged);
	el.innerHTML = '<input id="field-in" />';
	document.body.append(el);

	const field = () => el.querySelector<HTMLInputElement>('#field-in')!;

	return { el, opener, events, openedChanged, field, dialogOf };
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

	it('opens modal: dialog shown with showModal, backdrop painted, slot forwards', async () => {
		const { el, openedChanged, field } = boot();
		el.innerHTML = '<input id="field-in" autofocus />';
		await readyWait(el);

		expect(el.hasAttribute('popover')).toBe(false);
		expect(el.getAttribute('aria-modal')).toBe('true');

		el.open();
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(true), {
			timeout: 3000,
		});
		// showModal() promotes the inner dialog, not the host
		expect(dialogOf(el).matches(':modal')).toBe(true);
		expect(el.matches(':popover-open')).toBe(false);
		await vi.waitFor(() => expect(document.activeElement).toBe(field()), {
			timeout: 3000,
		});
		await vi.waitFor(
			() =>
				expect(openedChanged.mock.calls[0][0].detail).toEqual({ value: true }),
			{ timeout: 3000 },
		);
	});

	it('Esc (trusted): cancelable funnel records the close, focus walks home', async () => {
		const { el, opener, openedChanged, field } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(true));

		field().focus();
		expect(el.contains(document.activeElement)).toBe(true);

		// a veto on the funnel holds: the dialog stays open. The veto's
		// oc notify still fires (the mock precedes the vetoer, so its
		// recorded event is not prevented) - the dialog's cancel is
		// prevented after the funnel dispatch
		let veto = true;
		el.addEventListener('opened-changed', (e: Event) => {
			if (veto) {
				e.preventDefault();
			}
		});
		await userEvent!.keyboard('{Escape}');
		await tick(100);
		expect(dialogOf(el).open).toBe(true);

		veto = false;
		await userEvent!.keyboard('{Escape}');
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(false), {
			timeout: 3000,
		});
		// three notifies: the vetoed Esc's intent (the mock precedes the
		// vetoer, so it records the event un-prevented) + the allowed
		// Esc's intent and record
		expect(openedChanged).toHaveBeenCalledTimes(3);
		expect(openedChanged.mock.calls[1][0].detail).toEqual({ value: false });
		expect(el.hasAttribute('opened')).toBe(false);
		// the platform restored focus to the pre-show element
		await vi.waitFor(() => expect(document.activeElement).toBe(opener));
	});

	it('programmatic close(): cancelable funnel intact, reopen works', async () => {
		const { el, openedChanged } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(true));

		// the funnel veto holds on the programmatic path, and the
		// attribute write reopens through the same reconcile
		let veto = true;
		el.addEventListener('opened-changed', (e: Event) => {
			if (veto) {
				e.preventDefault();
			}
		});
		el.close();
		await tick(100);
		// the veto bailed inside set(): the attribute is untouched
		expect(dialogOf(el).open).toBe(true);

		// reopen through the attribute (the reactive spine, external
		// write included): remove then set - each write re-renders, the
		// reconcile follows the read
		veto = false;
		el.removeAttribute('opened');
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(false), {
			timeout: 3000,
		});
		el.setAttribute('opened', '');
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(true), {
			timeout: 3000,
		});
		const details = openedChanged.mock.calls.map((c) => c[0].detail.value);
		expect(details).toEqual([true, false]);
		expect(openedChanged.mock.calls[1][0].defaultPrevented).toBe(true);
	});

	it('backdrop click (trusted): the dialog is the click target, close funneled', async () => {
		const { el, openedChanged, dialogOf } = boot();
		await readyWait(el);

		el.open();
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(true));

		// a trusted outside gesture cannot be produced past a modal's
		// inertness (Playwright refuses the intercepted click); the
		// backdrop's click lands on the dialog element itself, which is
		// the condition the click handler keys on
		const dialog = dialogOf(el);
		dialog.dispatchEvent(
			new MouseEvent('click', { bubbles: true, composed: true }),
		);

		await vi.waitFor(() => expect(dialog.open).toBe(false), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(el.hasAttribute('opened')).toBe(false), {
			timeout: 3000,
		});
		expect(openedChanged.mock.calls.at(-1)![0].detail).toEqual({
			value: false,
		});
	});

	it('backdrop click is absorbed: the element behind stays inert', async () => {
		const { el, field, dialogOf } = boot();
		const outside = document.createElement('button');
		outside.textContent = 'behind the backdrop';
		document.body.append(outside);
		const clicked = vi.fn();
		outside.addEventListener('click', clicked);

		await readyWait(el);
		el.open();
		await vi.waitFor(() => expect(dialogOf(el).open).toBe(true));
		field().focus();

		// the backdrop intercepts the click (the dialog is the target),
		// and showModal() inerts the page behind
		el.shadowRoot!.querySelector('dialog')!.click();
		await tick(50);
		expect(clicked).not.toHaveBeenCalled();
		expect(dialogOf(el).open).toBe(false);
		expect(document.activeElement).not.toBe(outside);
	});

	it('stacked modals: dialogs stack (no sibling close); one Esc closes all (cancel broadcast)', async () => {
		const { el: a, field } = boot();
		const b = document.createElement('cosmoz-modal-slideout') as Surface;
		b.innerHTML = '<input id="field-b" autofocus />';
		document.body.append(b);

		await readyWait(a);
		await readyWait(b);

		a.open();
		await vi.waitFor(() => expect(dialogOf(a).open).toBe(true));
		field().focus();

		// B opens above A - dialogs do not light-dismiss one another, so
		// A stays open underneath; the funnel hears nothing of it
		b.open();
		await vi.waitFor(() => expect(dialogOf(b).open).toBe(true));
		expect(dialogOf(a).open).toBe(true);
		await vi.waitFor(() => expect(document.activeElement?.id).toBe('field-b'), {
			timeout: 3000,
		});

		// Esc peels the newest dialog first — Chromium's Esc broadcast
		// cancels every open modal dialog in the document, so A's dialog
		// closes with B's; A's close event reflects `opened` false (the
		// dismissal is A's own too, the funnel heard it)
		await userEvent!.keyboard('{Escape}');
		await vi.waitFor(() => expect(dialogOf(b).open).toBe(false), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(dialogOf(a).open).toBe(false), {
			timeout: 3000,
		});
		await vi.waitFor(() => expect(a.hasAttribute('opened')).toBe(false), {
			timeout: 3000,
		});
	}, 10000);
});
