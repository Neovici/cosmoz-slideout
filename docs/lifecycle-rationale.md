# The lifecycle: reconcile against DOM truth

Why the slideout has no state machine - the popover flip is an idempotent
reconcile, and the two channels (intent, record) are owned one each by the
element and the platform.

## No machine

The lifecycle used to be a four-state settle machine (`closed` / `opening`
/ `open` / `closing`, plus `SETTLE` from `transitionend` or a 1s cap). It
existed to support one contract: settled `open`/`close` events, announced
after the CSS transition finished. The in-flight states, the exit cleanup
ledger, the timer, and the no-edge null (a late settle after a flip must
not fire) all served that contract.

The contract is gone; `toggle` (the platform's own `ToggleEvent`, fired at
the popover flip whatever the closer) replaces it. What remains is a
reconcile effect:

```ts
useEffect(() => {
	const isOpen = host.matches(':popover-open');
	if (opened && !isOpen) {
		focus.capture(); // precedes showPopover: the focusing steps read it
		host.showPopover();
	} else if (!opened && isOpen) {
		focus.arm();
		host.hidePopover();
		focus.restore();
	}
}, [opened]);
```

Idempotent against DOM truth: agreement (both say open, both say closed)
is a no-op, so churn re-runs, reconnect resumes, and echo writes all
degrade to nothing. The truth check and the platform call happen in one
synchronous block - nothing can interleave in a synchronous effect - so
the throwing cases (`showPopover()` on a showing popover) cannot arise,
and no guards are needed. There are no asynchronous phases, hence
nothing to track and nothing to undo: the element's disconnect runs no
cleanup, because the reconcile establishes nothing that outlives it.

## No machine, per flavor

The non-modal surface is the element itself (`popover="manual"`): the
reconcile above is its whole lifecycle. The modal drawer's surface is an
inner native `dialog` (`showModal()` - the only primitive that owns
inertness, a focus trap and an absorbing `::backdrop`): the same
reconcile runs against `dialog.open`, and the bridges map the platform's
dismissal paths onto the same two channels - `cancel` (cancelable) runs
the funnel, so a veto holds the drawer open; `close` (the record) writes
`opened` silently; a backdrop click is funneled as a close intent (its
target _is_ the dialog). The modal element fires no `toggle`; its record
is the dialog's own `close` event.

## Two channels

- **Intent - `opened-changed`, the element's.** Dispatched by the funnel
  (`useAttribute`'s `set()`), before the write, cancelable. Every
  element-initiated change goes through it exactly once: `open()`/
  `close()`, Escape (`CloseWatcher` / the dialog's `cancel`),
  `request-close`, backdrop clicks, attribute reconcile.
  `preventDefault()` vetoes - on both flavors, every close source.
- **Record - per flavor, the platform's.** The non-modal surface records
  through `toggle`/`beforetoggle` (fired at the popover flip whatever the
  closer, never cancelable); the modal drawer records through the inner
  dialog's own `close` event. Correct, since a record cannot be vetoed,
  only an intent can.

The split gives each event one meaning. `opened-changed` used to carry
both roles with the cancelability encoding the source ("two cancelability
modes, by close source") - a wart the modal had to document. Now: veto on
`opened-changed`, observe on the platform's record event; on the modal
flavor the platform's dismissal itself funnels (its `cancel` precedes the
flip), so no non-cancelable intent exists anywhere.

`useAttribute`'s `reflect()` is the silent write (no event) - the modal's
`close`-to-attribute bridge: the dialog's flip leaves the attribute
untouched, so the element listens for `close` and records the dismissal
into `opened`; the write re-renders, the reconcile finds agreement, done.
The dialog's `close` is already the record of that flip; dispatching an
element event on top would repeat it.
