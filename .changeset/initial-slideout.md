---
"@neovici/cosmoz-slideout": minor
---

Initial release: a top-layer slideout (drawer / sidebar) component. It renders in the top-layer via the native Popover API (`<div popover="manual">`), is non-modal (the page stays interactive), and slides in from the right when its reactive `opened` property becomes true - it stays in the DOM and slides in/out as `opened` toggles. It owns the surface, the slide-in/out animation, and the close lifecycle.

- Two elements: `<cosmoz-slideout>` is the low-level shell - content, header, buttons, and styling are the parent's responsibility via the `header` / `controls` / default / `footer` slots, all empty by default.
- `<cosmoz-slideout-panel>` (separate `/cosmoz-slideout-panel` entrypoint) is a batteries-included, Untitled-UI-styled preset built on the shell: a `heading` / `subtitle`, a built-in close button (`closeable`), and styled header/body/footer regions, from `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens` (all regular `dependencies` of this package). Both share identical `opened` lifecycle, events, Escape stack, and focus behavior.
- Sane, overridable defaults via CSS custom properties (`--cosmoz-slideout-width`, `-bg`, `-shadow`, …).
- Reactive, two-way `opened` property (bind `.opened`, listen for `opened-changed`); self-closes on Escape / `close()`. `open()` / `close()` methods + animated slide-out; emits `close` after the slide-out settles (the element is not removed).
- Escape-to-close by default (opt-out with `no-escape`).
- Opt-in `full-screen` state (parent-driven, via the `full-screen` attribute or the exposed `toggleFullScreen()`), which emits a `full-screen-changed` event, plus a `loading` spinner overlay.
- Exposes a `slideout()` factory and the `useClose` / `useFullScreen` composables, plus the `<cosmoz-slideout>` and `<cosmoz-slideout-panel>` elements.
- Untitled-UI-aligned defaults: the CSS custom properties resolve to `@neovici/cosmoz-tokens` `--cz-*` tokens when the app loads them (dark-mode-ready), and every embellishment (border/shadow/motion) is opt-out by overriding its variable.
- `renderSlideout(host, …)` accepts a `regions({ controls, header, content, footer })` object (via the exported `regions()` helper) so factory elements can render non-scrolling UI; a plain template is still treated as the body.
