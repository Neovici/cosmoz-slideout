---
'@neovici/cosmoz-slideout': minor
---

Initial release: a top-layer slideout (drawer / sidebar) component. It renders in the top-layer via the native Popover API (`<div popover="manual">`), is non-modal (the page stays interactive), and slides in from the right when its reactive `opened` property becomes true - it stays in the DOM and slides in/out as `opened` toggles.

- Two elements that **compose**: `<cosmoz-slideout>` is the surface - it owns everything around the content (the surface, the slide-in/out animation, the `opened` / `full-screen` lifecycle, the Escape stack, and focus management) and exposes a single blank slot.
- `<cosmoz-slideout-panel>` (separate `/cosmoz-slideout-panel` entrypoint) is property-free, `cz-card`-style layout chrome meant to be slotted **inside** a `<cosmoz-slideout>`: `header` / body / `footer` regions that are **completely invisible when empty** (spacing and the footer divider are painted on the slotted elements, as in `cz-card`). The header, its title, and any close control are slotted in (a `cz-header` element in the real app, dispatching `request-close`).
- Reactive, two-way `opened` **attribute** on the surface: bind it as a property (`.opened=${x}`) or an attribute (`?opened`), listen for the cancelable `opened-changed`, and removing the `opened` attribute (e.g. from devtools) closes it. `open()` / `close()` methods; self-closes on Escape / `close()`. Emits a bubbling `open` after the slide-in settles and `close` after the slide-out settles (the element is not removed).
- A descendant asks the surface to close by dispatching a **cancelable**, bubbling `request-close` event (the panel's built-in close button does this) - no reference to the slideout required. Guard an "unsaved changes" close by calling `preventDefault()` on either `request-close` or `opened-changed`.
- Escape-to-close by default (opt-out with `no-escape`).
- Opt-in `full-screen` state on the surface (via the `full-screen` attribute or the exposed `toggleFullScreen()`), which emits a `full-screen-changed` event.
- The surface is named only by the author's explicit `aria-label` (or `aria-labelledby`) - no auto-mirroring from slotted content.
- Sane, overridable defaults via CSS custom properties (`--cosmoz-slideout-width`, `-bg`, `-shadow`, …). The Untitled-UI-aligned defaults resolve to `@neovici/cosmoz-tokens` `--cz-*` tokens when the app loads them (dark-mode-ready), and every embellishment (border/shadow/motion) is opt-out by overriding its variable.
- Ships the `<cosmoz-slideout>` and `<cosmoz-slideout-panel>` elements, render-site typing helpers `slideout()` / `slideoutPanel()` (`/helpers`), and the `useClose` / `useFullScreen` / `useAttribute` composables (with `renderSlideout` + surface constants) for authoring custom surfaces. Exports the `SlideoutProps` type.
