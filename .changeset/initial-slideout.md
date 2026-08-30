---
"@neovici/cosmoz-slideout": minor
---

Initial release: a top-layer slideout (drawer / sidebar) component. It renders in the top-layer via the native Popover API (`<div popover="manual">`), is non-modal (the page stays interactive), and slides in from the right when its reactive `opened` property becomes true - it stays in the DOM and slides in/out as `opened` toggles.

- Two elements that **compose**: `<cosmoz-slideout>` is the surface - it owns everything around the content (the surface, the slide-in/out animation, the `opened` / `full-screen` lifecycle, the Escape stack, and focus management) and exposes a single blank slot.
- `<cosmoz-slideout-panel>` (separate `/cosmoz-slideout-panel` entrypoint) is a presentational, Untitled-UI-styled content preset meant to be slotted **inside** a `<cosmoz-slideout>`: a `heading` / `subtitle`, a built-in close button (`closeable`), a `loading` spinner overlay, and styled header/body/footer regions, from `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens` (all regular `dependencies` of this package). It holds no open/close lifecycle of its own.
- Reactive, two-way `opened` property on the surface (bind `.opened`, listen for `opened-changed`); self-closes on Escape / `close()`. `open()` / `close()` methods + animated slide-out; emits `close` after the slide-out settles (the element is not removed).
- A descendant asks the surface to close by dispatching a bubbling `request-close` event (the panel's built-in close button does this) - no reference to the slideout required.
- Escape-to-close by default (opt-out with `no-escape`).
- Opt-in `full-screen` state on the surface (via the `full-screen` attribute or the exposed `toggleFullScreen()`), which emits a `full-screen-changed` event.
- Sane, overridable defaults via CSS custom properties (`--cosmoz-slideout-width`, `-bg`, `-shadow`, …). The Untitled-UI-aligned defaults resolve to `@neovici/cosmoz-tokens` `--cz-*` tokens when the app loads them (dark-mode-ready), and every embellishment (border/shadow/motion) is opt-out by overriding its variable.
- Exposes a `slideout()` factory and the `useClose` / `useFullScreen` composables, plus the `<cosmoz-slideout>` and `<cosmoz-slideout-panel>` elements.
