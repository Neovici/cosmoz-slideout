---
'@neovici/cosmoz-slideout': minor
---

Initial release: a top-layer slideout (drawer / sidebar) component built on the Popover API, pionjs and lit-html.

- `<cosmoz-slideout>`: stateful surface - the element is itself the top-layer popover (`popover="manual"`, `role="dialog"`) with the `opened` lifecycle, animation, Escape/back-button, focus management, and a single blank slot.
- `<cosmoz-slideout-panel>`: property-free layout chrome (`header` / body / `footer` slots), invisible when empty; close controls and titles come from slotting in your own header component dispatching `request-close`.
- Two-way reactive `opened` (property / attribute / `open()` / `close()`); every close source funnels through the cancelable `opened-changed` (`preventDefault()` to veto) and cancelable `request-close`.
- `open` / `close` settle events; opt-in `full-screen` with `toggleFullScreen()` and `full-screen-changed`; `no-escape` opt-out.
- Typed render helpers `slideout()` / `slideoutPanel()` (`/helpers`).
- Token-backed, overridable defaults (`--cosmoz-slideout-*`); runtime deps: `@pionjs/pion`, `lit-html`, `@neovici/cosmoz-tokens`, `@neovici/cosmoz-utils`.
