---
"@neovici/cosmoz-slideout": minor
---

Initial release: a top-layer `cosmoz-slideout` (drawer / sidebar) component. It renders in the top-layer via the native Popover API (`<div popover="manual">`), is non-modal (the page stays interactive), and slides in from the right the moment it is added to the DOM. It owns the surface, the slide-in/out animation, and the close lifecycle.

- Default mode is a low-level shell: content, header, buttons, and styling are the parent's responsibility via the `header` / `controls` / default / `footer` slots, all empty by default.
- Set `variant="panel"` on the same element to opt into a batteries-included, Untitled-UI-styled preset: a `heading` / `subtitle`, a built-in close button (`closeable`), and styled header/body/footer regions, built on `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens` (all regular `dependencies` of this package - there is no separate, dependency-free entrypoint). Both modes share identical lifecycle, events, Escape stack, and focus behavior.
- Sane, overridable defaults via CSS custom properties (`--cosmoz-slideout-width`, `-bg`, `-shadow`, …).
- `close()` method + animated slide-out; emits `close` when done (the parent removes the element - the component never self-removes) and `opened` after slide-in.
- Escape-to-close by default (opt-out with `no-escape`).
- Opt-in `full-screen` state (parent-driven, via the `full-screen` attribute or the exposed `toggleFullScreen()`), which emits a `full-screen-changed` event, plus a `loading` spinner overlay.
- Exposes a `slideout()` factory and the `useClose` / `useFullScreen` composables, plus the drop-in `<cosmoz-slideout>` element.
- Untitled-UI-aligned defaults: the CSS custom properties resolve to `@neovici/cosmoz-tokens` `--cz-*` tokens when the app loads them (dark-mode-ready), and every embellishment (border/shadow/motion) is opt-out by overriding its variable.
- `renderSlideout(host, …)` accepts a `regions({ controls, header, content, footer })` object (via the exported `regions()` helper) so factory elements can render non-scrolling UI; a plain template is still treated as the body.
