# cosmoz-slideout

A top-layer slideout (drawer / sidebar) web component built with pionjs and lit-html.

This package ships **two custom elements that compose**:

- **`<cosmoz-slideout>`** - the **surface**. It renders in the browser top-layer via the native
  **Popover API** (`<div popover="manual">`), is **non-modal** (the page behind stays interactive),
  and slides in **from the right** when its reactive **`opened`** property becomes true. It owns
  everything _around_ the content - the surface, the `opened` / `full-screen` lifecycle, the Escape
  stack, and focus management - and exposes a **single blank slot**. It adds no chrome of its own.
- **`<cosmoz-slideout-panel>`** - the **content preset**. Presentational only: a design-system-styled
  header/body/footer, a `heading`/`subtitle`, a built-in close button (`closeable`), and a `loading`
  overlay, from `@neovici/cosmoz-button`, `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens`. It
  owns no open/close lifecycle - it is meant to be **slotted into a `<cosmoz-slideout>`**.

99% of the time you use them together:

```html
<cosmoz-slideout opened full-screen>
	<cosmoz-slideout-panel heading="Supplier" closeable loading>
		<p>…body…</p>
	</cosmoz-slideout-panel>
</cosmoz-slideout>
```

The surface **does not open merely by being in the DOM** - it stays connected and slides in/out as
`opened` toggles.

## Installation

```bash
npm i @neovici/cosmoz-slideout
```

```js
// the surface
import "@neovici/cosmoz-slideout/cosmoz-slideout";
// the styled content preset (separate entrypoint)
import "@neovici/cosmoz-slideout/cosmoz-slideout-panel";
```

## Opening & closing

`opened` is a **reactive, two-way** value on `<cosmoz-slideout>` backed by the `opened` **attribute**
(via `useAttribute`). Drive it however suits you - a lit **property** binding (`.opened=${x}`), a
boolean **attribute** binding (`?opened`), a bare `opened` in static HTML, or the `open()`/`close()`
methods - and listen for the cancelable **`opened-changed`** event; the surface self-closes on Escape
and `close()`, and removing the `opened` attribute (e.g. from devtools) closes it too. The element
persists in the DOM across open/close cycles - there is no add-to-open / remove-to-close dance.

```html
<!-- lit-html two-way binding -->
<cosmoz-slideout
	.opened=${this.open}
	@opened-changed=${(e) => (this.open = e.detail.value)}
>
	<cosmoz-slideout-panel heading="Acme" closeable>
		<p>…body…</p>
	</cosmoz-slideout-panel>
</cosmoz-slideout>
```

Or with pion's `lift` directive: `@opened-changed=${lift(setOpen)}`. Imperatively, call `open()` /
`close()` on the **`<cosmoz-slideout>`** element.

A child asks the surface to close by dispatching a bubbling, **cancelable** **`request-close`** event -
the panel's built-in close button does exactly this, so it never needs a reference to the slideout.
Your own buttons can do the same, or call `closest('cosmoz-slideout')?.close()`. To guard a close
("unsaved changes"), call `preventDefault()` on `request-close`, or on the cancelable `opened-changed`.

## API

### `<cosmoz-slideout>` - the surface

#### Attributes & properties

- `opened` - show/hide the slideout: a reactive, two-way **attribute** (pairs with the cancelable
  `opened-changed` event). Drive it via the property (`.opened=${x}`), an attribute (`?opened`, or a
  bare `opened` in markup), or `open()`/`close()`; removing the attribute (e.g. from devtools) closes
  it. Default `false` (closed).
- `full-screen` - when present the surface covers the whole document. Flip the attribute or call
  `toggleFullScreen()`.
- `no-escape` - disable the built-in Escape-to-close.
- `no-autofocus` - do not move focus into the surface on open.
- `aria-label` / `aria-labelledby` - mirrored onto the surface (`role="dialog"`) to label the drawer.
  A nested `<cosmoz-slideout-panel>` with a `heading` mirrors it onto the surface's `aria-label`
  automatically **when you have not set one** (and never clobbers an author-provided label). Note:
  `aria-labelledby` is an IDREF and only resolves to an element in the **same tree** as the surface
  (the shell), not a slotted one - use `aria-label` (a plain string) to reference slotted content.

#### Methods

- `open()` - set `opened` to true (play the slide-in).
- `close()` - set `opened` to false (play the slide-out); `close` fires when it finishes.
- `toggleFullScreen()` - toggle the `full-screen` state (also settable via the attribute).

#### Events

- `opened-changed` - dispatched (bubbling, **cancelable**) when the surface changes `opened` itself
  (`open()`/`close()`, Escape, `request-close`); `detail = { value }`. Use it for two-way binding;
  `preventDefault()` vetoes the change (an unsaved-changes guard). External writes (a direct attribute
  edit) don't re-emit it - the mutator already knows.
- `open` - dispatched after the slide-**in** animation settles (bubbles), symmetric with `close` -
  handy for "scroll to top / focus the first field" timing.
- `close` - dispatched after the slide-**out** animation settles (bubbles). Useful for teardown
  timing; the element is **not** removed.
- `full-screen-changed` - dispatched when the `full-screen` state changes; `detail = { fullScreen }`
  (bubbles).
- `request-close` - **listened for**, not emitted: a bubbling, **cancelable** event from any
  descendant (e.g. the panel's close button) that asks the surface to close; `preventDefault()` vetoes.

`onClose?: () => void` - a property-based alternative to the `close` event, invoked right after
`close` fires. Set it on the element (`el.onClose = …`) if a callback is handier than a listener.

#### Slot

- _default_ - a single blank slot. Drop a `<cosmoz-slideout-panel>` in for the styled UI, or author
  your own chrome. The single slotted child is stretched to fill the surface, so wrap hand-composed
  header/body/footer in **one** top-level element.

### `<cosmoz-slideout-panel>` - the content preset

Presentational; it holds no `opened`/`close()` and must live inside a `<cosmoz-slideout>`.

#### Attributes & properties

- `heading`, `subtitle` - text for the default panel header.
- `closeable` - render the built-in close button in the panel header. This only controls the
  **button** (which fires `request-close`) - it is independent of Escape-to-close, which is a
  surface behavior. For no built-in dismissal at all, omit `closeable` **and** set `no-escape` on the
  surface.
- `loading` - overlay a spinner over the panel body (header/footer stay readable).

#### Slots

- _default_ - the body / main content (scrollable).
- `header` - a slotted header replaces the generated heading/subtitle but keeps the styled UI
  (padding, close button). Empty unless filled.
- `footer` - non-scrolling footer region (e.g. actions), inside the styled footer (padding, divider).
  Empty unless filled.

The panel's regions are content-conditional: the header renders (with its UI) when `heading`,
`subtitle`, `closeable`, or a slotted `header` is present; the footer renders when `footer` is filled.

```html
<!-- styled header (heading/subtitle + close) and footer -->
<cosmoz-slideout .opened="${open}">
	<cosmoz-slideout-panel heading="Acme" subtitle="Supplier #4021" closeable>
		<p>…body…</p>
		<div slot="footer">…actions…</div>
	</cosmoz-slideout-panel>
</cosmoz-slideout>

<!-- custom title: swap the slot, keep the styled UI + close -->
<cosmoz-slideout .opened="${open}">
	<cosmoz-slideout-panel closeable>
		<my-title slot="header">…</my-title>
		<p>…body…</p>
	</cosmoz-slideout-panel>
</cosmoz-slideout>

<!-- bare surface: hand-compose your own chrome in the single slot -->
<cosmoz-slideout .opened="${open}" aria-label="Edit supplier">
	<div style="display: flex; flex-direction: column; height: 100%;">
		<h2>Edit supplier</h2>
		<div>…body…</div>
		<div>…actions…</div>
	</div>
</cosmoz-slideout>
```

### Render-site helpers (`/helpers`)

Typed template helpers so consumers never hand-write the bindings - their only purpose is typing
support (they are **not** element-definition factories; import the elements separately to register
them):

```js
import "@neovici/cosmoz-slideout/cosmoz-slideout";
import "@neovici/cosmoz-slideout/cosmoz-slideout-panel";
import { slideout, slideoutPanel } from "@neovici/cosmoz-slideout/helpers";

slideout(
	{ opened, onOpenedChanged: (e) => (opened = e.detail.value) },
	slideoutPanel({ heading: "Details", closeable: true }, html`…body…`)
);
```

`slideout(props, content)` accepts `opened`, `fullScreen`, `noEscape`, `noAutofocus`, `ariaLabel`,
`ariaLabelledby`, `class`, `style`, and the event handlers `onOpenedChanged` / `onOpen` / `onClose` /
`onFullScreenChanged` (so plain listeners and pion's `lift` both compose). `slideoutPanel(props,
content)` accepts `heading`, `subtitle`, `closeable`, `loading`. Types `SlideoutProps`, `PanelProps`,
`SlideoutElement`, and `PanelElement` are exported from the package root.

### Composables

For authoring a custom surface element (your own tag) with pion's `component()`, the building blocks
are exported from the package root: `useClose` (the `opened` lifecycle + `open()`/`close()` + the
`request-close` listener), `useFullScreen` (`{ fullScreen, toggle }` + `full-screen-changed`),
`useSurfaceLabel` (mirror a slotted panel's `heading` onto the host's `aria-label`), the generic
`useAttribute` (a reactive boolean attribute with a cancelable `*-changed` event), and `renderSlideout`
(the popover-surface template). `useSlideout` bundles the first three.

### CSS `::part()`

**`<cosmoz-slideout>`:** `surface` - the popover panel.

**`<cosmoz-slideout-panel>`:** `header`, `body`, `footer`, `close` - the panel UI; `loading` - the
loading overlay.

### Accessibility

The surface is a `role="dialog"` with `aria-modal="false"` (it is non-modal by design). Label it via
`aria-label` / `aria-labelledby` on `<cosmoz-slideout>` (a nested panel's `heading` fills this in when
you don't). On open, focus moves into the surface (opt out with `no-autofocus`); on close, focus
returns to the opener **when focus was still inside the drawer at the moment it closed** (that check
is captured then, before the popover hides). Escape closes the **top-most** open slideout only.
Because the drawer is non-modal, the page behind stays reachable - this is intentional (quick-glance
panels).

The opener that focus is restored to is whatever was focused **at the moment `opened` became true**.
Set `opened` synchronously inside the opening handler (e.g. the click); if you set it after an
`await`, the original opener may no longer be focused and restoration is skipped.

### CSS custom properties

Set these like any custom property - e.g. `<cosmoz-slideout style="--cosmoz-slideout-width: 30vw">`.
Each default resolves to a [`@neovici/cosmoz-tokens`](https://github.com/Neovici/cosmoz-tokens)
`--cz-*` token **when the consumer app loads cosmoz-tokens** (so a bare slideout matches the design
system and honors dark mode), and falls back to the plain value shown below otherwise. Every visual
embellishment is **opt-out**: override its property (e.g. `--cosmoz-slideout-border: none`).

**`<cosmoz-slideout>` (the surface):**

- `--cosmoz-slideout-width` - width (default `min(400px, 100vw)`; capped at `100vw`, so it goes
  full-width once the viewport is narrower than the panel).
- `--cosmoz-slideout-bg` - background (default `--cz-color-bg-primary`, else `#fff`).
- `--cosmoz-slideout-color` - text color (default `--cz-color-text-primary`, else `inherit`).
- `--cosmoz-slideout-shadow` - box-shadow (default `--cz-shadow-xl`, else `-8px 0 24px rgb(10 13 18 / 18%)`).
- `--cosmoz-slideout-border` - left edge / ring (default `1px solid --cz-color-border-secondary`; set
  `none` to remove).
- `--cosmoz-slideout-full-screen-width` - width when `full-screen` (default `100vw`).
- `--cosmoz-slideout-duration` - enter (slide-in) duration (default `0.3s`).
- `--cosmoz-slideout-exit-duration` - close (slide-out) duration (default: same as `-duration`).
- `--cosmoz-slideout-easing` - transition easing (default `cubic-bezier(0.4, 0, 0.2, 1)`).

`prefers-reduced-motion: reduce` disables the transition regardless.

**`<cosmoz-slideout-panel>` (the content preset):**

- `--cosmoz-slideout-panel-padding-x` - header/body/footer horizontal padding (default `--cz-spacing * 4`).
- `--cosmoz-slideout-panel-gap` - vertical gap between body children (default `--cz-spacing * 6`).
- `--cosmoz-slideout-panel-heading-color` - heading text color (default `--cz-color-text-primary`).
- `--cosmoz-slideout-panel-divider` - footer top divider color (default `--cz-color-border-secondary`).
- `--cosmoz-slideout-loading-color` - loading overlay background (default a 70% `--cz-color-bg-primary`).

## Notes & caveats

- **`opened` is an observed attribute.** Property (`.opened`), attribute (`?opened` / bare `opened`),
  and `open()`/`close()` all drive it, and removing the attribute closes the surface. Setting `.opened`
  **before** the element's module has loaded (lazy/dynamic definition) is the one gap - a pre-upgrade
  own-property can shadow the reactive accessor; prefer the attribute (or set the property after
  definition) for markup-time state.
- **Multiple open slideouts** all render pinned to the right edge and therefore stack on top of one
  another (they share the same position). Escape targets the most-recently-opened one.
- The `loading` overlay covers the panel body only, not the header/footer, and sets `aria-busy` on
  the body region while active.
- **`closeable="false"` does not disable Escape.** It only hides the panel's built-in close button;
  Escape-to-close is a separate surface behavior controlled by `no-escape` (on `<cosmoz-slideout>`)
  and stays active either way.
- **`<cosmoz-slideout-panel>` always pulls in its UI dependencies.** `@neovici/cosmoz-button`,
  `@neovici/cosmoz-icons`, and `@neovici/cosmoz-tokens` are regular `dependencies` of this package.
  Import only the surface entrypoint (`/cosmoz-slideout`) when you don't need the panel chrome.

## Development

```bash
npm i
npm run storybook:start
```

## Publishing

Uses Changesets. Add a changeset with `npm run changeset`, then open a release PR.
