# cosmoz-slideout

A top-layer slideout (drawer / sidebar) web component built with pionjs and lit-html.

This package ships **two custom elements**:

- **`<cosmoz-slideout>`** - the low-level shell. It renders in the browser top-layer via the
  native **Popover API** (`<div popover="manual">`), is **non-modal** (the page behind stays
  interactive), and slides in **from the right** when its reactive **`opened`** property becomes
  true. Header, buttons, footer actions, and styling are the parent's responsibility (beyond the
  sensible width/surface defaults below).
- **`<cosmoz-slideout-panel>`** - a batteries-included, design-system-styled preset built on the
  shell: a heading/subtitle, a built-in close button, and styled header/body/footer regions, from
  `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens` (which this
  package always depends on). It shares the shell's identical `opened` lifecycle, `close()`,
  events, Escape stack, and focus behavior - only the UI differs.

Both are driven by the same `opened` property: the element **does not open merely by being in the
DOM** - it stays connected and slides in/out as `opened` toggles.

## Installation

```bash
npm i @neovici/cosmoz-slideout
```

```js
// the bare shell
import "@neovici/cosmoz-slideout/cosmoz-slideout";
// the styled preset (separate entrypoint)
import "@neovici/cosmoz-slideout/cosmoz-slideout-panel";
```

## Opening & closing

`opened` is a **reactive, two-way property** (the dominant pion pattern, via `useProperty`). Bind
the **property** (`.opened=${x}`, not the `opened` attribute) and listen for `opened-changed`; the
element self-closes on Escape and `close()` and emits `opened-changed` so your state stays in sync.
The element persists in the DOM across open/close cycles - there is no add-to-open / remove-to-close
dance.

```html
<!-- lit-html two-way binding -->
<cosmoz-slideout-panel
	.opened=${this.open}
	@opened-changed=${(e) => (this.open = e.detail.value)}
	heading="Acme"
	closeable
>
	<p>…body…</p>
</cosmoz-slideout-panel>
```

Or with pion's `lift` directive: `@opened-changed=${lift(setOpen)}`. Imperatively, call `open()` /
`close()` on the element.

## API

Unless noted, everything below applies to **both** elements; the `heading` / `subtitle` /
`closeable` inputs and the styled regions are **`<cosmoz-slideout-panel>` only**.

### Attributes & properties

- `opened` - **property** (bind `.opened`): show/hide the slideout. Reactive and two-way (pairs
  with the `opened-changed` event). Default `false`. It is reflected out to an `opened` **attribute**
  for styling/devtools, but consumer input must be the property (`opened` is not an observed
  attribute).
- `heading`, `subtitle` - _(panel only)_ text for the default panel header.
- `closeable` - _(panel only)_ render the built-in close button in the panel header. This only
  controls the **button** - it is independent of Escape-to-close (below), which is still active by
  default. For a panel with no built-in dismissal at all, omit `closeable` **and** set `no-escape`.
- `full-screen` - when present the surface covers the whole document. A **parent-driven state**;
  flip the attribute or call `toggleFullScreen()`.
- `no-escape` - disable the built-in Escape-to-close.
- `no-autofocus` - do not move focus into the surface on open.
- `loading` - overlay a spinner over the content.
- `aria-label` / `aria-labelledby` - mirrored onto the surface (`role="dialog"`) to label the
  drawer. In the panel, `aria-label` defaults to `heading` when not set explicitly. Note:
  `aria-labelledby` is an IDREF and only resolves to an element in the **same tree** as the surface
  (a `slideout()` render-fn heading). A **slotted** heading lives in the light DOM, so reference it
  with `aria-label` (a plain string) instead.

### Slots

- _default_ - the body / main content (scrollable).
- `header` - non-scrolling header region. Empty unless filled. In the panel, a slotted `header`
  replaces the generated heading/subtitle but keeps the styled UI (padding, close button).
- `controls` - top-right corner controls (e.g. the parent's own close / full-screen buttons in the
  shell). Empty unless filled.
- `footer` - non-scrolling footer region (e.g. actions). Empty unless filled. In the panel it
  renders inside the styled footer (padding, divider).

The panel's regions are content-conditional and symmetric: the header renders (with its UI) when
`heading`, `subtitle`, `closeable`, or a slotted `header` is present; the footer renders when
`footer` is filled.

```html
<!-- shell: everything is hand-composed -->
<cosmoz-slideout .opened="${open}" aria-label="Edit supplier">
	<h2 slot="header">Edit supplier</h2>
	…body…
	<div slot="footer">…actions…</div>
</cosmoz-slideout>

<!-- panel: zero UI markup, styled header (heading/subtitle + close) and footer -->
<cosmoz-slideout-panel
	.opened="${open}"
	heading="Acme"
	subtitle="Supplier #4021"
	closeable
>
	<p>…body…</p>
	<div slot="footer">…actions…</div>
</cosmoz-slideout-panel>

<!-- panel with a custom title: swap the slot, keep the styled UI + close -->
<cosmoz-slideout-panel .opened="${open}" closeable>
	<my-title slot="header">…</my-title>
	<p>…body…</p>
</cosmoz-slideout-panel>

<!-- no button AND no Escape: closeable alone only removes the button -->
<cosmoz-slideout-panel .opened="${open}" heading="Guarded draft" no-escape>
	<p>…body…</p>
</cosmoz-slideout-panel>
```

### Methods

- `open()` - set `opened` to true (play the slide-in).
- `close()` - set `opened` to false (play the slide-out); `close` fires when it finishes.
- `toggleFullScreen()` - toggle the `full-screen` state (also settable via the attribute).

### Events

- `opened-changed` - dispatched when the `opened` state flips; `detail = { value }` (bubbles up as
  a plain `CustomEvent`). Use it for two-way binding. Filter on `detail.value === true` if you need
  "just opened" specifically (a benign `opened-changed(false)` fires once at construction).
- `close` - dispatched after the slide-out animation settles (bubbles). Useful for teardown timing;
  the element is **not** removed.
- `full-screen-changed` - dispatched when the `full-screen` state changes; `detail = { fullScreen }`
  (bubbles).

### Properties

- `onClose?: () => void` - a property-based alternative to the `close` event, invoked right after
  `close` fires (once the slide-out finishes). Set it on the element (`el.onClose = …`) if a callback
  is handier than a listener; the `close` event still fires either way.

### Composables

For building a richer app-specific element via the `slideout()` factory, the underlying hooks are
exported: `useClose` (the `opened` lifecycle + `open()`/`close()`) and `useFullScreen`
(`{ fullScreen, toggle }` + the `full-screen-changed` event). Deep-linking any state to the URL is
left to the consumer.

### CSS `::part()`

- `surface` - the popover panel.
- `controls` - the top-right controls slot.
- `content` - the scrollable body wrapper.
- `loading` - the loading overlay.
- `header`, `body`, `footer`, `close` - panel UI (`<cosmoz-slideout-panel>` only).

### Accessibility

The surface is a `role="dialog"` with `aria-modal="false"` (it is non-modal by design). Label it via
`aria-label` / `aria-labelledby` on the host. On open, focus moves into the surface (opt out with
`no-autofocus`); on close, focus returns to the opener **when focus was still inside the drawer at the
moment it closed** (that check is captured then, before the popover hides). Escape closes the
**top-most** open slideout only. Because the drawer is non-modal, the page behind stays reachable -
this is intentional (quick-glance panels).

The opener that focus is restored to is whatever was focused **at the moment `opened` became true**.
Set `opened` synchronously inside the opening handler (e.g. the click); if you set it after an
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

**`<cosmoz-slideout-panel>` only:**

- `--cosmoz-slideout-panel-padding-x` - header/body/footer horizontal padding (default `--cz-spacing * 4`).
- `--cosmoz-slideout-panel-gap` - vertical gap between body children (default `--cz-spacing * 6`).
- `--cosmoz-slideout-panel-heading-color` - heading text color (default `--cz-color-text-primary`).
- `--cosmoz-slideout-panel-divider` - footer top divider color (default `--cz-color-border-secondary`).

## Notes & caveats

- **Bind the property, not the attribute.** `opened` is not an observed attribute, so `?opened=${x}`
  / a bare `opened` in static HTML will **not** drive the component - use the property binding
  (`.opened=${x}`) or set `el.opened` / call `open()`/`close()`.
- **Multiple open slideouts** all render pinned to the right edge and therefore stack on top of one
  another (they share the same position). Escape targets the most-recently-opened one.
- The `controls` slot floats in the top-right corner over the header region - leave room in your
  header for it, or place your controls there instead.
- The `loading` overlay covers the body (default slot) only, not the header/footer.
- **`closeable="false"` does not disable Escape.** It only hides the panel's built-in close button;
  Escape-to-close is a separate, core behavior controlled by `no-escape` and stays active either way.
  Combine `no-escape` with omitting `closeable` for a panel with no built-in dismissal at all.
- **`<cosmoz-slideout-panel>` always pulls in its UI dependencies.** `@neovici/cosmoz-button`,
  `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens` are regular `dependencies` of this package.
  Import the shell entrypoint (`/cosmoz-slideout`) when you don't need the panel chrome.

## Development

```bash
npm i
npm run storybook:start
```

## Publishing

Uses Changesets. Add a changeset with `npm run changeset`, then open a release PR.
