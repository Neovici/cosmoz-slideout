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

## Two channels

- **Intent - `opened-changed`, the element's.** Dispatched by the funnel
  (`useAttribute`'s `set()`), before the write, cancelable. Every
  element-initiated change goes through it exactly once: `open()`/
  `close()`, Escape and hardware back (`CloseWatcher`), `request-close`,
  attribute reconcile. `preventDefault()` vetoes.
- **Record - `toggle`/`beforetoggle`, the platform's.** Fired at the flip
  whatever the closer (the funnel, Esc, light dismiss, devtools attribute
  writes, a direct `hidePopover()`), never cancelable - correct, since a
  record cannot be vetoed, only an intent can.

The split gives each event one meaning. `opened-changed` used to carry
both roles with the cancelability encoding the source ("two cancelability
modes, by close source") - a wart the modal had to document. Now: veto on
`opened-changed`, observe on `toggle`; native dismissals dispatch no
custom event at all.

`useAttribute`'s `reflect()` is the silent write (no event) - used by the
modal's `toggle`-to-attribute bridge: for `popover="auto"` the UA flips
`:popover-open` without touching the attribute, so the element listens for
`toggle` and records the dismissal into `opened`; the write re-renders,
the reconcile finds agreement, done. The platform's `toggle` is already
the record of that flip; dispatching an element event on top would repeat
it.
