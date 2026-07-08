# cosmoz-slideout

A reusable, **dumb** top-layer slideout (drawer / sidebar) web component built with pionjs and lit-html.

It renders in the browser top-layer via the native **Popover API** (`<div popover="manual">`), is
**non-modal** (the page behind stays interactive), and slides in **from the right** the moment it is
added to the DOM — like a dialog, there is no `opened` property. It is deliberately agnostic: it owns
only the top-layer surface, the slide animation, and the close lifecycle. **Everything inside — header,
buttons, footer actions, styling — is the parent's responsibility.** Sensible defaults (white
background, a responsive width) come from overridable CSS custom properties, so a bare instance already
looks right.

## Installation

```bash
npm install @neovici/cosmoz-slideout
```

## Usage

### Drop-in element

```javascript
import "@neovici/cosmoz-slideout/cosmoz-slideout";
```

Add it to the DOM and it slides in. The parent supplies the content (including any close button) and
owns lifecycle: call `el.close()` to play the slide-out, then remove the element when `close` fires.

```javascript
const el = document.createElement("cosmoz-slideout");

// parent supplies the chrome it wants
el.innerHTML = `
	<div slot="header" class="my-header">
		<h2>Supplier</h2>
		<button data-close aria-label="Close">✕</button>
	</div>
	<supplier-summary></supplier-summary>
`;
el.querySelector("[data-close]").addEventListener("click", () => el.close());

// the parent removes the element once the close animation has finished
el.addEventListener("close", () => el.remove());

document.body.append(el);
```

### Factory (render function)

For content that wants access to the host (e.g. to call `host.close()`), define an element via the
`slideout()` factory:

```javascript
import { slideout } from "@neovici/cosmoz-slideout";
import { html } from "@pionjs/pion";

customElements.define(
	"supplier-config-slideout",
	slideout(
		(host) => html`
			<button
				aria-label="Close"
				style="position: absolute; top: 8px; right: 8px;"
				@click=${() => host.close()}
			>
				✕
			</button>
			<supplier-form .id=${host.supplierId}></supplier-form>
		`
	)
);
```

**The render function fills the _body_.** It renders into the content region, so `slot="…"` attributes
_inside_ it are inert — position chrome yourself (as above), or project it from the element's own
**light-DOM** children, which still flow into the `controls` / `header` / `footer` slots:

```html
<supplier-config-slideout aria-label="Supplier">
	<button slot="controls" aria-label="Close">✕</button>
	<h2 slot="header">Acme Industries</h2>
</supplier-config-slideout>
```

#### Rendering into individual regions

A render fn can also fill the **non-scrolling** `controls` / `header` / `footer` regions (not just the
body) by returning a **regions object** wrapped in the exported `regions()` helper. Any region left out
falls back to its bare `<slot name="…">` (so consumers can still project light-DOM children into it). A
plain lit template (not wrapped in `regions()`) is treated as the body, as above — this is how
`cosmoz-slideout-panel` is built.

```javascript
import { slideout, regions } from "@neovici/cosmoz-slideout";
import { html } from "@pionjs/pion";

customElements.define(
	"supplier-config-slideout",
	slideout((host) =>
		regions({
			header: html`<header class="my-header">Supplier</header>`,
			content: html`<supplier-form .id=${host.supplierId}></supplier-form>`,
			// controls / footer omitted → bare <slot name="…"> fallbacks
		})
	)
);
```

## API

### Slots

- _default_ — the body / main content (scrollable).
- `header` — non-scrolling header region (e.g. a title). Empty unless filled.
- `controls` — top-right corner controls (e.g. the parent's close / full-screen buttons). Empty
  unless filled.
- `footer` — non-scrolling footer region (e.g. actions). Empty unless filled.

### Attributes

- `full-screen` — when present the surface covers the whole document. This is a **parent-driven
  state** — there is no built-in toggle; the parent flips the attribute (e.g. from its own button).
- `no-escape` — disable the built-in Escape-to-close.
- `no-autofocus` — do not move focus into the surface on open.
- `loading` — overlay a spinner over the content.
- `aria-label` / `aria-labelledby` — mirrored onto the surface (`role="dialog"`) to label the drawer.
  Note: `aria-labelledby` is an IDREF and only resolves to an element in the **same tree** as the
  surface — i.e. a heading rendered by a `slideout()` render fn. A **slotted** heading lives in the
  light DOM, so reference it with `aria-label` (a plain string) instead.

### Methods

- `close()` — play the slide-out animation; `close` fires when it finishes.
- `toggleFullScreen()` — toggle the `full-screen` state (also settable via the attribute).

### Events

- `opened` — dispatched once the slide-in animation settles (bubbles).
- `close` — dispatched after the slide-out animation (bubbles). The parent removes the element here.
- `full-screen-changed` — dispatched when the `full-screen` state changes;
  `detail = { fullScreen }` (bubbles).

### Properties

- `onClose?: () => void` — a property-based alternative to the `close` event, invoked right after
  `close` fires (once the slide-out finishes). Set it on the element (`el.onClose = …`) if a callback
  is handier than a listener; the `close` event still fires either way.

### Composables

For building a richer element via the `slideout()` factory, the underlying hooks are exported:
`useClose` (open/close lifecycle + `close()`) and `useFullScreen` (`{ fullScreen, toggle }` + the
`full-screen-changed` event). Deep-linking the full-screen state to the URL is left to the consumer.

### CSS `::part()`

- `surface` — the popover panel.
- `controls` — the top-right controls slot.
- `content` — the scrollable body wrapper.
- `loading` — the loading overlay.

### Accessibility

The surface is a `role="dialog"` with `aria-modal="false"` (it is non-modal by design). Label it via
`aria-label` / `aria-labelledby` on the host. On open, focus moves into the surface (opt out with
`no-autofocus`); on close, focus returns to the opener **when focus was still inside the drawer at the
moment `close()` was triggered** (that check is captured then, before the popover hides). Escape closes
the **top-most** open slideout only. Because the drawer is non-modal, the page behind stays reachable —
this is intentional (quick-glance panels).

The opener that focus is restored to is whatever was focused **when the element was inserted**. Append
the slideout synchronously inside the opening handler (e.g. the click); if you append it after an
`await`, the original opener may no longer be focused and restoration is skipped.

### CSS custom properties

Set these like any custom property — e.g. `<cosmoz-slideout style="--cosmoz-slideout-width: 30vw">`,
`el.style.setProperty('--cosmoz-slideout-width', '600px')`, or a `cosmoz-slideout { … }` rule.

Each default resolves to a [`@neovici/cosmoz-tokens`](https://github.com/Neovici/cosmoz-tokens) `--cz-*`
token **when the consumer app loads cosmoz-tokens** (so a bare slideout matches the design system and
honors dark mode), and falls back to the plain value shown below otherwise. Every visual embellishment is
**opt-out**: override its property (e.g. `--cosmoz-slideout-border: none`) to remove it.

- `--cosmoz-slideout-width` — width (default `min(400px, 100vw)`; capped at `100vw`, so it goes full-width
  once the viewport is narrower than the panel).
- `--cosmoz-slideout-bg` — background (default `--cz-color-bg-primary`, else `#fff`).
- `--cosmoz-slideout-color` — text color (default `--cz-color-text-primary`, else `inherit`).
- `--cosmoz-slideout-shadow` — box-shadow (default `--cz-shadow-xl`, else `-8px 0 24px rgb(0 0 0 / 12%)`).
- `--cosmoz-slideout-border` — left edge / ring (default `1px solid --cz-color-border-secondary`; set
  `none` to remove).
- `--cosmoz-slideout-full-screen-width` — width when `full-screen` (default `100vw`).
- `--cosmoz-slideout-loading-color` — loading overlay background (default a 70% `--cz-color-bg-primary`).
- `--cosmoz-slideout-duration` — enter (slide-in) duration (default `0.3s`).
- `--cosmoz-slideout-exit-duration` — close (slide-out) duration (default: same as `-duration`).
- `--cosmoz-slideout-easing` — transition easing (default `cubic-bezier(0.4, 0, 0.2, 1)`).

`prefers-reduced-motion: reduce` disables the transition regardless.

## Styled preset — `cosmoz-slideout-panel`

A batteries-included, [Untitled UI](https://www.untitledui.com/)-styled drawer built on
[`@neovici/cosmoz-tokens`](https://github.com/Neovici/cosmoz-tokens) and
[`@neovici/cosmoz-icons`](https://github.com/Neovici/cosmoz-icons). It is **composed from the same core
building blocks** (`useSlideout` + `renderSlideout`), so it _is_ a slideout — identical `close()`,
lifecycle, events, Escape stack and focus behavior — just with a styled header / body / footer out of the
box. The bare `cosmoz-slideout` stays the raw, unopinionated shell; reach for the panel when you want the
design-system chrome without hand-authoring it.

```javascript
import "@neovici/cosmoz-slideout/cosmoz-slideout-panel";
```

> The design-system look needs the consumer app to load `@neovici/cosmoz-tokens` (its `--cz-*` variables
> cascade into the panel). Without them, the token fallbacks apply and it still renders sensibly.
>
> Importing this entry pulls in `@neovici/cosmoz-button`, `@neovici/cosmoz-icons` and
> `@neovici/cosmoz-tokens` (they are `dependencies`). The bare `./cosmoz-slideout` entry imports none of
> them, so apps that only use the core tree-shake them out of the bundle.

```html
<!-- zero chrome markup: styled header (heading/subtitle + close) and footer -->
<cosmoz-slideout-panel heading="Acme" subtitle="Supplier #4021" closeable>
	<p>…body…</p>
	<div slot="footer">…actions…</div>
</cosmoz-slideout-panel>

<!-- swap the title content; the styled chrome + close remain -->
<cosmoz-slideout-panel closeable>
	<my-title slot="header">…</my-title>
	<p>…body…</p>
</cosmoz-slideout-panel>
```

**Regions are content-conditional and symmetric:** the header renders (with its chrome) when `heading`,
`subtitle`, `closeable`, or a slotted `slot="header"` is present; the footer renders when `slot="footer"`
is filled. A slotted region _fills inside_ the styled chrome (padding, divider, close are kept) — for a
fully-raw region, use the bare `cosmoz-slideout`.

- **Attributes:** `heading`, `subtitle` (text for the default header), `closeable` (adds the X-close). It
  also honors all the core attributes (`full-screen`, `no-escape`, `no-autofocus`, `loading`, `aria-label`
  — which defaults to `heading`).
- **Slots:** `header` (overrides the default title inside the chrome), _default_ (body), `footer`.
- **Methods / events:** same as the core — `close()`, `toggleFullScreen()`; `opened`, `close`,
  `full-screen-changed`. The parent removes the element on `close`, as usual.
- **`::part()`:** `header`, `body`, `footer`, `close` — plus the inherited `surface`, `controls`,
  `content`, `loading`.
- **CSS custom properties:** all the core `--cosmoz-slideout-*` still apply, plus
  `--cosmoz-slideout-panel-padding-x`, `--cosmoz-slideout-panel-gap`,
  `--cosmoz-slideout-panel-heading-color`, and `--cosmoz-slideout-panel-divider` (each defaults to a
  `--cz-*` token).

## Notes & caveats

- **Multiple open slideouts** all render pinned to the right edge and therefore stack on top of one
  another (they share the same position). Escape targets the most-recently-opened one.
- The `controls` slot floats in the top-right corner over the header region — leave room in your
  header for it, or place your controls there instead.
- The `loading` overlay covers the body (default slot) only, not the header/footer.
- **Removing the element without calling `close()` first** skips the slide-out animation and does
  **not** dispatch `close` or call `onClose`. If you rely on either, always `close()` and remove the
  element on the `close` event.

## Out of scope

**Drag-to-resize is intentionally not part of this component** — it is the concern of the upcoming
[`cosmoz-resizable`](https://github.com/Neovici/cosmoz-resizable), which will wrap / compose with the
slideout to add adjustable, persisted width.

## Development

```bash
npm install
npm run storybook:start
```

## Testing

Behavior is covered by `test:storybook` (browser interaction tests written as `play` functions),
since the component's logic depends on the Popover API and the DOM. Pure helpers (`dropFrom`,
`animationTimeoutMs`) are unit-tested in `test/utils.test.ts` under the `test:unit` (jsdom) project. Never
`import from 'vitest'` in story files — use `'storybook/test'`.

## Publishing

Uses Changesets. Add a changeset with `npm run changeset`, then open a release PR.
