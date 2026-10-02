---
'@neovici/cosmoz-slideout': major
---

Initial release: a top-layer slideout (drawer / sidebar) component built on the Popover API,
pionjs, and lit-html.

- `<cosmoz-slideout>`: stateful surface — the element is itself the top-layer popover
  (`popover="manual"`, `role="dialog"`) with the `opened` lifecycle, animation, Escape/back-button,
  and focus management; a single blank slot; every close source (`close()`, Escape, hardware back,
  `request-close`) funnels through the cancelable `opened-changed` (`preventDefault()` to veto).
- `<cosmoz-slideout-panel>`: property-free layout chrome (`header` / body / `footer` slots),
  invisible when empty; titles and close controls come from slotting in your own header component
  dispatching `request-close`.
- Two-way reactive `opened` (property / attribute / `open()` / `close()`); `open` / `close` settle
  events; opt-in `full-screen` with `toggleFullScreen()` and `full-screen-changed`; `no-escape`
  opt-out.
- Focus follows the native popover focusing steps: mark the focus target with the standard
  `autofocus` attribute in your content (composite components work — `<cosmoz-input autofocus>`
  focuses its field) or on the surface itself; on close, focus returns to the opener when it was
  still inside the drawer.
- Typed render helpers `slideout()` / `slideoutPanel()` (`/helpers`) and typed element lookups
  (`HTMLElementTagNameMap` augmented for `cosmoz-slideout` / `cosmoz-slideout-panel`; exported
  types `Props`, `SlideoutProps`, `PanelProps`, `PanelElement`).
- Token-backed, overridable defaults (`--cosmoz-slideout-*`); runtime deps: `@pionjs/pion`,
  `lit-html`, `@neovici/cosmoz-tokens`, `@neovici/cosmoz-utils`.
