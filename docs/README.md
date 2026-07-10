# cosmoz-slideout

A top-layer slideout (drawer / sidebar) web component built with pionjs and lit-html, `<cosmoz-slideout>`.

It renders in the browser top-layer via the native **Popover API** (`<div popover="manual">`), is
**non-modal** (the page behind stays interactive), and slides in **from the right** the moment it is
added to the DOM - like a dialog, there is no `opened` property. It owns the top-layer surface, the slide
animation, and the close lifecycle.

The default mode is a low-level shell: header, buttons, footer actions, and styling are the parent's
responsibility (beyond the sensible width/surface defaults below). Set `variant="panel"` on the same
element to opt into a batteries-included, design-system-styled preset - a heading/subtitle, a built-in
close button, and styled header/body/footer regions - built on `@neovici/cosmoz-button`,
`@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens`, which this package always depends on. Both modes
share one implementation - identical `close()`, lifecycle, events, Escape stack, and focus behavior; only
the UI differs.

## Installation

```bash
npm i @neovici/cosmoz-slideout
```

## API

### Attributes

- `variant` - `"panel"` opts into the styled preset (heading/subtitle, built-in close button, styled
  header/body/footer). Omit it (or any other value) for the bare shell. This is the only defined value
  today. Every attribute on this element also works as a property binding (e.g. lit-html's
  `.variant=${'panel'}`) - the component reads the live property either way, and panel mode's own CSS
  is scoped to its rendered structure (`.header`/`.body`/`.footer`), not to the `variant` attribute, so
  it renders correctly however `variant` was set.
- `heading`, `subtitle` - text for the default panel header. Only rendered when `variant="panel"`.
- `closeable` - render the built-in close button in the panel header. Only applies when `variant="panel"`.
  This only controls the **button** - it is independent of Escape-to-close (below), which is still active
  by default. For a panel with no built-in dismissal at all, omit `closeable` **and** set `no-escape`.
- `full-screen` - when present the surface covers the whole document. This is a **parent-driven
  state** - there is no built-in toggle; the parent flips the attribute (e.g. from its own button).
- `no-escape` - disable the built-in Escape-to-close. Applies regardless of `variant`/`closeable`.
- `no-autofocus` - do not move focus into the surface on open.
- `loading` - overlay a spinner over the content.
- `aria-label` / `aria-labelledby` - mirrored onto the surface (`role="dialog"`) to label the drawer. In
  panel mode, `aria-label` defaults to `heading` when not set explicitly. Note: `aria-labelledby` is an
  IDREF and only resolves to an element in the **same tree** as the surface - i.e. a heading rendered by a
  `slideout()` render fn. A **slotted** heading lives in the light DOM, so reference it with `aria-label`
  (a plain string) instead.

### Slots

- _default_ - the body / main content (scrollable).
- `header` - non-scrolling header region. Empty unless filled. In panel mode, a slotted `header`
  replaces the generated heading/subtitle but keeps the styled UI (padding, close button).
- `controls` - top-right corner controls (e.g. the parent's own close / full-screen buttons in shell
  mode). Empty unless filled.
- `footer` - non-scrolling footer region (e.g. actions). Empty unless filled. In panel mode it renders
  inside the styled footer (padding, divider).

Panel-mode regions are content-conditional and symmetric: the header renders (with its UI) when
`heading`, `subtitle`, `closeable`, or a slotted `header` is present; the footer renders when `footer` is
filled.

```html
<!-- shell: everything is hand-composed -->
<cosmoz-slideout aria-label="Edit supplier">
	<h2 slot="header">Edit supplier</h2>
	…body…
	<div slot="footer">…actions…</div>
</cosmoz-slideout>

<!-- panel: zero UI markup, styled header (heading/subtitle + close) and footer -->
<cosmoz-slideout
	variant="panel"
	heading="Acme"
	subtitle="Supplier #4021"
	closeable
>
	<p>…body…</p>
	<div slot="footer">…actions…</div>
</cosmoz-slideout>

<!-- panel with a custom title: swap the slot, keep the styled UI + close -->
<cosmoz-slideout variant="panel" closeable>
	<my-title slot="header">…</my-title>
	<p>…body…</p>
</cosmoz-slideout>

<!-- no button AND no Escape: closeable alone only removes the button -->
<cosmoz-slideout variant="panel" heading="Guarded draft" no-escape>
	<p>…body…</p>
</cosmoz-slideout>
```

### Methods

- `close()` - play the slide-out animation; `close` fires when it finishes.
- `toggleFullScreen()` - toggle the `full-screen` state (also settable via the attribute).

### Events

- `opened` - dispatched once the slide-in animation settles (bubbles).
- `close` - dispatched after the slide-out animation (bubbles). The parent removes the element here.
- `full-screen-changed` - dispatched when the `full-screen` state changes;
  `detail = { fullScreen }` (bubbles).

### Properties

- `onClose?: () => void` - a property-based alternative to the `close` event, invoked right after
  `close` fires (once the slide-out finishes). Set it on the element (`el.onClose = …`) if a callback
  is handier than a listener; the `close` event still fires either way.

### Composables

For building a richer app-specific element via the `slideout()` factory, the underlying hooks are
exported: `useClose` (open/close lifecycle + `close()`) and `useFullScreen` (`{ fullScreen, toggle }` +
the `full-screen-changed` event). Deep-linking the full-screen state to the URL is left to the consumer.

### CSS `::part()`

- `surface` - the popover panel.
- `controls` - the top-right controls slot.
- `content` - the scrollable body wrapper.
- `loading` - the loading overlay.
- `header`, `body`, `footer`, `close` - panel-mode UI (only present when `variant="panel"`).

### Accessibility

The surface is a `role="dialog"` with `aria-modal="false"` (it is non-modal by design). Label it via
`aria-label` / `aria-labelledby` on the host. On open, focus moves into the surface (opt out with
`no-autofocus`); on close, focus returns to the opener **when focus was still inside the drawer at the
moment `close()` was triggered** (that check is captured then, before the popover hides). Escape closes
the **top-most** open slideout only. Because the drawer is non-modal, the page behind stays reachable -
this is intentional (quick-glance panels).

The opener that focus is restored to is whatever was focused **when the element was inserted**. Append
the slideout synchronously inside the opening handler (e.g. the click); if you append it after an
`await`, the original opener may no longer be focused and restoration is skipped.

### CSS custom properties

Set these like any custom property - e.g. `<cosmoz-slideout style="--cosmoz-slideout-width: 30vw">`,
`el.style.setProperty('--cosmoz-slideout-width', '600px')`, or a `cosmoz-slideout { … }` rule.

Each default resolves to a [`@neovici/cosmoz-tokens`](https://github.com/Neovici/cosmoz-tokens) `--cz-*`
token **when the consumer app loads cosmoz-tokens** (so a bare slideout matches the design system and
honors dark mode), and falls back to the plain value shown below otherwise. Every visual embellishment is
**opt-out**: override its property (e.g. `--cosmoz-slideout-border: none`) to remove it.

- `--cosmoz-slideout-width` - width (default `min(400px, 100vw)`; capped at `100vw`, so it goes full-width
  once the viewport is narrower than the panel).
- `--cosmoz-slideout-bg` - background (default `--cz-color-bg-primary`, else `#fff`).
- `--cosmoz-slideout-color` - text color (default `--cz-color-text-primary`, else `inherit`).
- `--cosmoz-slideout-shadow` - box-shadow (default `--cz-shadow-xl`, else `-8px 0 24px rgb(0 0 0 / 12%)`).
- `--cosmoz-slideout-border` - left edge / ring (default `1px solid --cz-color-border-secondary`; set
  `none` to remove).
- `--cosmoz-slideout-full-screen-width` - width when `full-screen` (default `100vw`).
- `--cosmoz-slideout-loading-color` - loading overlay background (default a 70% `--cz-color-bg-primary`).
- `--cosmoz-slideout-duration` - enter (slide-in) duration (default `0.3s`).
- `--cosmoz-slideout-exit-duration` - close (slide-out) duration (default: same as `-duration`).
- `--cosmoz-slideout-easing` - transition easing (default `cubic-bezier(0.4, 0, 0.2, 1)`).

`prefers-reduced-motion: reduce` disables the transition regardless.

**Panel mode (`variant="panel"`) only:**

- `--cosmoz-slideout-panel-padding-x` - header/body/footer horizontal padding (default `--cz-spacing * 4`).
- `--cosmoz-slideout-panel-gap` - vertical gap between body children (default `--cz-spacing * 6`).
- `--cosmoz-slideout-panel-heading-color` - heading text color (default `--cz-color-text-primary`).
- `--cosmoz-slideout-panel-divider` - footer top divider color (default `--cz-color-border-secondary`).

## Notes & caveats

- **Multiple open slideouts** all render pinned to the right edge and therefore stack on top of one
  another (they share the same position). Escape targets the most-recently-opened one.
- The `controls` slot floats in the top-right corner over the header region - leave room in your
  header for it, or place your controls there instead.
- The `loading` overlay covers the body (default slot) only, not the header/footer.
- **Removing the element without calling `close()` first** skips the slide-out animation and does
  **not** dispatch `close` or call `onClose`. If you rely on either, always `close()` and remove the
  element on the `close` event.
- **`closeable="false"` does not disable Escape.** It only hides the panel's built-in close button;
  Escape-to-close is a separate, core behavior controlled by `no-escape` and stays active either way.
  Combine `no-escape` with omitting `closeable` for a panel with no built-in dismissal at all.
- **Panel mode always pulls in its UI dependencies.** `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`,
  and `@neovici/cosmoz-tokens` are regular `dependencies` of this package, imported by the single
  `cosmoz-slideout` module regardless of whether any instance uses `variant="panel"`. There is no
  separate, dependency-free entrypoint for the shell.

## Development

```bash
npm i
npm run storybook:start
```

## Publishing

Uses Changesets. Add a changeset with `npm run changeset`, then open a release PR.
