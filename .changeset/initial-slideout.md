---
'@neovici/cosmoz-slideout': minor
---

Initial release: a non-modal, top-layer slideout/ drawer component built on the Popover API, pionjs and lit-html.

- `<cosmoz-slideout>`: stateful surface (top-layer popover, `opened` lifecycle, animation, Escape/back-button via `CloseWatcher`, focus management) with a single blank slot.
- `<cosmoz-slideout-panel>`: property-free layout chrome (`header` / body / `footer` slots), invisible when empty; close controls and titles come from slotting in your own header component dispatching `request-close`.
- Two-way reactive `opened` (property / attribute / `open()` / `close()`); every close source funnels through the cancelable `opened-changed` (`preventDefault()` to veto) and cancelable `request-close`.
- `open` / `close` settle events; opt-in `full-screen` with `toggleFullScreen()` and `full-screen-changed`; `no-escape` / `no-autofocus` opt-outs.
- Typed render helpers `slideout()` / `slideoutPanel()` (`/helpers`).
- Token-backed, overridable defaults (`--cosmoz-slideout-*`); runtime deps: `@pionjs/pion`, `lit-html`, `@neovici/cosmoz-tokens`, `@neovici/cosmoz-utils`.
