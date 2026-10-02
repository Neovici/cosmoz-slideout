# The settle machine

Why `src/use-state-machine.ts` is a per-phase cleanup ledger rather than a
reducer, and when the reverse choice is right.

## What it is

Each row declares what its phase owns (`enter`, run on every entry) and the
symmetric undo of exactly that (`exit`, run on every exit and on the
element's disconnect), so cleanup is declared once per phase instead of
scattered through effects and timers. A transition runs synchronously -
guard, the current row's exit, the flip, the destination row's enter - and
the only state the machine keeps is which phase is in flight: the minimum
needed to know what to undo.

The state is bookkeeping, not view state. The user-visible truth lives in
the DOM (the `opened` attribute, `:popover-open`, focus); the machine's
guards read that truth at dispatch time, and no render is scheduled by any
of it.

An action with no edge from the current state returns `null` and nothing
runs - a late settle after the phase resolved is a no-op, so races degrade
instead of firing stale side effects.

## When a reducer is the right call

A reducer computes a next state value for the view: the state is the point,
and transitions batch with rendering. That is exactly right for value-driven
UI - counters, forms, wizard steps.

The slideout's lifecycle is the reverse shape: the state is not displayed
anywhere, every consumer (`transitionend`, the settle-cap timer, `close()`)
is event-driven rather than render-driven, and the hard requirements - undo
what this phase established, on every exit including the element's
disconnect; a late settle firing after a flip must be prevented by
construction - are cleanup contracts, not view contracts. Expressing those
with a reducer means hand-writing a cleanup effect per phase and
re-deriving the disconnect and flip-race cases; the ledger declares them.

If the slideout someday needs a render-visible phase (transition progress
driven from state rather than CSS), add a reducer for that view layer and
keep the ledger for the cleanup contract: they compose, they solve opposite
problems.

## The contract in code

`src/use-slideout.ts` is the reference composition; its table reads:

```ts
const machine = useStateMachine('closed', {
	closed: {
		enter: [
			() => {
				host.dispatchEvent(new Event('close', { bubbles: true }));
				focus.restore();
			},
		],
		transitions: {
			OPEN: { to: 'opening', guard: [() => !host.matches(':popover-open')] },
		},
	},
	opening: {
		// capture the opener before showPopover - the browser's popover
		// focusing steps read it synchronously
		enter: [
			focus.capture,
			() => host.showPopover(),
			({ send }) => timer.arm(() => send('SETTLE')),
		],
		exit: [timer.clear],
		transitions: {
			OPEN: { to: 'opening' }, // re-append resume: per the attribute's truth
			CLOSE: { to: 'closing' },
			SETTLE: { to: 'open' },
		},
	},
	open: {/* enter: announce + focus.restore; CLOSE guarded */},
	closing: {/* mirror of opening; SETTLE: to closed */},
});
```

Run order per transition: `guard` (any returning `false` prevents the
transition entirely) → the current row's `exit` → the flip → the
destination row's `enter`. The machine is ref-carried: stable identity, no
render subscriptions; the element's disconnect runs the current row's
`exit`.
