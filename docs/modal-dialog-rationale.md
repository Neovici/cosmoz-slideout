# The modal drawer's dialog

Why `<cosmoz-modal-slideout>` wraps a native `dialog` promoted with
`showModal()` rather than being a popover like the non-modal surface -
what the platform primitive owns outright, and why the element stays
autonomous. The shared lifecycle (reconcile, the two channels) is in
[the lifecycle](./lifecycle-rationale.md).

## Why a dialog, why a wrapper

Modal is a different platform product from popover. `showModal()` is the
only primitive that owns:

- **inertness** - the page behind the drawer is untabbable, unclickable
  and out of the a11y tree, by the UA, with no bookkeeping. Marking
  `body` `inert` from script is no substitute: the drawer is inside
  `body`, inert covers its whole subtree, and nothing under an inert
  ancestor can opt out;
- a **focus trap** - correct across shadow DOM (leaky only to browser
  chrome, the platform's consensus behavior);
- an **absorbing `::backdrop`** - a popover's backdrop never receives
  pointer events; clicks fall through to the page behind (and a fast
  click both dismisses the drawer and activates what was under it).
  A dialog's backdrop is its click target: the click closes the drawer
  and reaches nothing else;
- **focus restoration** - to the pre-show element, closed-shadow-safe;
  the non-modal surface's hook supplies this itself (its popover never
  captures the focus at show time).

A dialog's dismissal is **vetoable**: Esc arrives as `cancel`, before the
flip, and `preventDefault()` holds the drawer open. A popover
(`popover="auto"`) dismissal is final - the platform has already closed
the popover when the element learns of it, so nothing can be vetoed. The
dialog's `cancel`-before-`close` is the intent/record split,
platform-provided (the vetoes bridge to `opened-changed`, so the funnel
stays the one veto channel).

The element stays autonomous (`extends HTMLElement`) and the dialog lives
in its shadow DOM because a custom element that is itself a dialog
requires a customized built-in (`{ extends: 'dialog' }`, `is=`); WebKit
opposes customized built-ins and Safari does not implement them -
`customElements.define` with an `extends` option throws there. The
autonomous wrapper works identically on Chromium, Firefox and Safari.

## What the wrapper costs

- **Surface styling**: the top-layer element is the inner `dialog`, so
  the surface selectors (`dialog`, `dialog[open]`, `::backdrop`) live in
  the modal stylesheet; `part="dialog"` exposes the surface for
  consumer `::part()` styles. The shared styles remain
  `:host([popover])`-only (the non-modal surface, which is its own
  popover).
- **The label**: `showModal()` promotes the dialog, and the dialog is
  what focus lands on, so the drawer's name mirrors from the host's
  `aria-label` onto the dialog (`useMirrorLabel`). `aria-labelledby` is
  not offered: the label element sits in slotted light DOM - a different
  tree than the dialog - and IDREF does not resolve across the shadow
  boundary. The string label is the reliable name.
- **Stacking**: dialogs do not light-dismiss one another (sibling-close
  is popover law). Modal drawers stack; one Esc closes every open modal
  drawer - the platform's `cancel` broadcast reaches each dialog, each
  recording through its own funnel.
- **Record channel**: a dialog fires no `toggle`; the modal drawer's
  record is the dialog's `close` event (the non-modal surface uses
  `toggle`).

## The lifecycle on the dialog

The same reconcile, against `dialog.open`:
`opened && !dialog.open` → `showModal()`; `!opened && dialog.open` →
`close()` (the element's own programmatic flip - no veto exists at this
point; the dialog's `close` is its record). The bridges:

```ts
dialog.addEventListener('cancel', (e) => {
	if (close() === false) {
		// the funnel; false = vetoed
		e.preventDefault(); // the platform close aborts
	}
});
dialog.addEventListener('close', () => reflectOpened(false)); // silent write
dialog.addEventListener('click', (e) => {
	if (e.target === dialog) close(); // the backdrop is the click target
});
```

`close()` (the funnel) dispatches the cancelable `opened-changed`; the
`cancel` listener's `preventDefault` aborts the platform's dismissal when
the funnel vetoes - the drawer stays open, nothing is recorded. Without
the veto, the platform's close runs and fires `close` (the record), whose
bridge writes `opened` silently; the reconcile finds agreement. The
backdrop click keys on `e.target === dialog`: only `::backdrop` hits the
bare dialog (slotted content is forwarded through the slot), and one
click closes the drawer - the funneling itself is the veto surface.

No `CloseWatcher`, no Escape fallback, no settle timer: the dialog owns
Esc on every engine.
