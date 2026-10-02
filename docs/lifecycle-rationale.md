# The lifecycle: reconcile against DOM truth

The open flip is an idempotent reconcile, and the two channels (intent,
record) are owned one each by the element and the platform. This file
covers the shared shape; the modal drawer's platform primitive is its own
topic ([the modal drawer's dialog](#the-modal-drawers-dialog)).

## The reconcile

Nothing here is announced after the CSS transition finishes
(`transitionend` is the consumer's, not the element's), so there is no
settle to await - a phase's only remaining job would be bookkeeping "what
to undo", and nothing is left running once the flip is done. The
lifecycle is a reconcile effect (shown for the non-modal surface):

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
and no guards are needed. The element's disconnect runs no cleanup,
because the reconcile establishes nothing that outlives it.

## Two channels

- **Intent - `opened-changed`, the element's.** Dispatched by the funnel
  (`useAttribute`'s `set()`), before the write, cancelable. Every
  element-initiated change goes through it exactly once: `open()`/
  `close()`, Escape, `request-close`, backdrop clicks, attribute
  reconcile. `preventDefault()` vetoes - on both flavors, every close
  source.
- **Record - the platform's.** Fired at the flip whatever the closer,
  never cancelable - correct, since a record cannot be vetoed, only an
  intent can. Per flavor: the non-modal surface records through
  `toggle`/`beforetoggle`; the modal drawer records through the inner
  dialog's `close` event.

The split gives each event one meaning: `opened-changed` is the veto
channel (an intent to change `opened`), the platform's record event is
the observation channel (the flip, whatever the closer). On the modal
flavor the platform's dismissal itself funnels (the dialog's `cancel`
precedes its `close`), so no non-cancelable intent exists anywhere.

`useAttribute`'s `reflect()` is the silent write (no event) - the
platform-flip-to-attribute bridge: a platform flip leaves the attribute
untouched, so the element listens for the record event and writes
`opened` (the modal drawer's case; the write re-renders, the reconcile
finds agreement, done). The platform's record is already out; dispatching
an element event on top would repeat it.
