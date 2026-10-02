---
'@neovici/cosmoz-slideout': major
---

Simplify the lifecycle: the lifecycle is an idempotent reconcile against `:popover-open`, and the contract is two channels: **`opened-changed`** (unchanged - the element's cancelable intent, vetoed with `preventDefault()`) and the platform's record event (the non-modal surface's `toggle`). The settled `open`/`close` events and the settle cap are gone with the settled contract they served.

`<cosmoz-modal-slideout>` is rebuilt on the platform's modal primitive: an autonomous wrapper around a native `dialog`, promoted with `showModal()`. The page behind is inert, focus is trapped, the scrim `::backdrop` **absorbs its clicks**, and dismissal is vetoes-able on every source: Esc arrives as the dialog's cancelable `cancel`, bridged through `opened-changed`; the flip is recorded by the dialog's `close`.

BREAKING CHANGES:

- The settled `open`/`close` events no longer exist. Post-flip timing rides the platform `toggle` (fires at the flip), or a `transitionend` listener (the element _is_ the popover).
- The non-modal surface's native dismissals no longer dispatch `opened-changed`; the platform `toggle` records them. Two-way bindings sync at dismissal via `@toggle=${(e) => (this.open = e.newState === "open")}`.
- `<cosmoz-modal-slideout>` no longer carries `popover="auto"`: the host is a plain wrapper; the surface is its inner `dialog` (`dialog.matches(':modal')`, not `host.matches(':popover-open')`; `part="dialog"` exposes the surface for `::part()` styling). `aria-label` on the host mirrors onto the dialog; `aria-labelledby` is not offered (ids in slotted light DOM cannot resolve across the shadow boundary). Native dismissal semantics change: Esc and a backdrop click funnel through the **cancelable** `opened-changed` (veto holds!); modal drawers stack instead of sibling-closing, and one Esc closes every open modal drawer.
- The render helpers drop `onOpen` / `onClose` (nothing to bind them to), and `modalSlideout()` additionally drops `ariaLabelledby` (`ModalSlideoutProps` shrinks accordingly).
- `open`/`close` semantics: state announces at flip time, not after the slide transition finishes.
