---
"@neovici/cosmoz-slideout": minor
---

Initial release: a reusable, **dumb** top-layer `cosmoz-slideout` (drawer / sidebar) component. It renders in the top-layer via the native Popover API (`<div popover="manual">`), is non-modal (the page stays interactive), and slides in from the right the moment it is added to the DOM. It owns only the surface, the slide-in/out animation, and the close lifecycle — content, header, buttons, and styling are the parent's responsibility.

- `header` / `controls` / default / `footer` slots, all empty by default.
- Sane, overridable defaults via CSS custom properties (`--cosmoz-slideout-width`, `-bg`, `-shadow`, …).
- `close()` method + animated slide-out; emits `close` when done (the parent removes the element — the component never self-removes) and `opened` after slide-in.
- Escape-to-close by default (opt-out with `no-escape`).
- Opt-in `full-screen` state (parent-driven, via the `full-screen` attribute or the exposed `toggleFullScreen()`), which emits a `full-screen-changed` event, plus a `loading` spinner overlay.
- Exposes a `slideout()` factory and the `useClose` / `useFullScreen` composables, plus the drop-in `<cosmoz-slideout>` element.
- Untitled-UI-aligned defaults: the CSS custom properties resolve to `@neovici/cosmoz-tokens` `--cz-*` tokens when the app loads them (dark-mode-ready), and every embellishment (border/shadow/motion) is opt-out by overriding its variable.
- Adds `cosmoz-slideout-panel`, a batteries-included, token- and icon-styled preset composed from the same core (`heading` / `subtitle` / `closeable` + overridable header/body/footer slots). Importing it pulls in `@neovici/cosmoz-button`, `@neovici/cosmoz-icons` and `@neovici/cosmoz-tokens`; the bare core entry imports none of them.
- `renderSlideout(host, …)` accepts a `regions({ controls, header, content, footer })` object (via the exported `regions()` helper) so factory elements can render non-scrolling chrome; a plain template is still treated as the body.
- Robust close animation: the surface keeps its column layout throughout the slide-out (no content "cramming").

Drag-to-resize is intentionally out of scope — it belongs to the upcoming `cosmoz-resizable`.
