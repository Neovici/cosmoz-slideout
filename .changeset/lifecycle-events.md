---
'@neovici/cosmoz-slideout': major
---

Simplify the lifecycle: the settle state machine, the settle cap and the settled `open`/`close` events are retired. The popover flip is now an idempotent reconcile against `:popover-open`, and the contract is two channels: **`opened-changed`** (unchanged - the element's cancelable intent, vetoed with `preventDefault()`) and the platform's **`toggle`** event (the record of the flip, fired whatever the closer - funnel, Esc, light dismiss, devtools).

BREAKING CHANGES:

- The settled `open`/`close` events no longer exist. Post-flip timing rides the platform `toggle` (fires at the flip), or a `transitionend` listener (the element _is_ the popover).
- Native modal dismissals (Esc, hardware back, backdrop click, a sibling `popover="auto"` surface) no longer dispatch `opened-changed`; the platform `toggle` records them. Two-way bindings sync at dismissal via `@toggle=${(e) => (this.open = e.newState === "open")}`.
- The render helpers drop `onOpen` / `onClose` (nothing to bind them to).
- `open`/`close` semantics: state announces at flip time, not after the slide transition finishes.
