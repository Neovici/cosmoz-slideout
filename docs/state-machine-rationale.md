# The settle machine: `useReducer` inverted

Rationale for `src/use-state-machine.ts`, as decided during FE-840.
Kept next to the code it explains; update it when the machine's role changes.

## The insight, one line

`useStateMachine` is **`useReducer` inverted**: a reducer's job is to schedule
renders from actions; the machine's job is to run _effects_ from actions,
never rendering. Where the reducer **defers** consequences to the scheduler,
the machine **executes** them synchronously — guard → teardown → flip →
setup — and the only state it keeps is "what to undo".

Put another way: the reducer's output is `(nextState, rerender)`; the
machine's output is `(transition, side effects) | null`. A reducer collects
effects to run _after_ a render; this machine runs them _instead of_ the
render.

## What it is for

An **action ledger**: each phase row declares what it OWNS (`setup`) and the
symmetric undo of exactly that (`teardown`) — cleanup declared once per
phase instead of scattered through effects and timers.

Nothing renders, deliberately: the user-visible truth already lives in the
DOM (the `opened` attribute, `:popover-open`, focus). The machine writes
nothing the view reads; its guards _read_ DOM truth at dispatch time. That
is why it is a ref, not state — and why writing `self.state` schedules no
render.

## The four axes (why a reducer is wrong HERE)

1. **No render deferral.** The failure modes guarded against — a late
   `transitionend`, a settle cap firing after a flip, close-before-settle
   races — are same-tick races. Reducer dispatches land next render; stale
   dispatches reappear across frames. The machine solves in one line what
   React needs `useEffectEvent`/latest-ref machinery for: an action with no
   edge from the current state returns `null` and nothing runs.

2. **Cleanup symmetry is data, not flow.** `setup`/`teardown` per row, with
   teardown on _every_ exit — a mid-flight flip, a resume, the element's
   disconnect. A reducer cannot express "undo what _this_ state
   established" declaratively; you would hand-write `useEffect(() => () =>
cleanup)` per state and re-derive the disconnect and flip-race cases —
   the scattered-cleanup problem this exists to kill.

3. **The consumers are imperative code.** `transitionend`, the settle-cap
   timer, `close()` — events, not renders. `send()` returns the destination
   state (or `null`) synchronously, so a timer callback is literally
   `timer.arm(() => send('SETTLE'))`. A reducer wants dispatch-in-effect
   ceremony; here dispatch _is_ the effect.

4. **No second source of truth.** A reducer's state value copies DOM-derived
   truth into render state, and something must sync the copies — the
   two-sources-of-truth wars. The machine keeps only "which phase is in
   flight": the minimum needed to know what to undo.

### When a reducer IS the right call

When the state is the view: value-driven UI (counters, forms, wizard steps),
transitions batched with rendering. If the slideout someday needs a
render-visible phase (e.g. transition progress driven from state rather than
CSS), add a reducer for that view layer — and keep this ledger for the
cleanup contract. They compose; they solve opposite problems.

## The contract in code

`src/use-slideout.ts` — the table is the whole explanation:

```ts
const machine = useStateMachine('closed', {
	closed: {
		setup: [
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
		setup: [
			focus.capture,
			() => host.showPopover(),
			({ send }) => timer.arm(() => send('SETTLE')),
		],
		teardown: [timer.clear],
		transitions: {
			OPEN: { to: 'opening' }, // self-heal: resume re-runs this setup
			CLOSE: { to: 'closing' },
			SETTLE: { to: 'open' },
		},
	},
	open: {/* setup: announce + focus.restore; CLOSE guarded */},
	closing: {/* mirror of opening; SETTLE: to closed */},
});
```

Run order per transition: `guard` (any returning `false` prevents everything:
no undo, no flip) → the current row's `teardown` → the flip → the
destination row's `setup`. The element's disconnect runs the current row's
`teardown`. Ref-carried: stable identity (callbacks never churn), no render
subscriptions.
