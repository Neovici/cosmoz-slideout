# cosmoz-slideout

A top-layer slideout (drawer / sidebar) web component built with pionjs and lit-html, in a
non-modal and a modal flavor.

This package ships **three custom elements** (two that compose, one modal sibling):

- **`<cosmoz-slideout>`** - the **surface**. It **is itself the popover** (`<cosmoz-slideout popover="manual">`): the element renders in the browser top-layer via the native
  **Popover API**, is **non-modal** (the page behind stays interactive),
  and slides in **from the right** when its reactive **`opened`** state becomes true. It owns
  everything _around_ the content - the `opened` / `full-screen` lifecycle, dismissal
  requests (Escape, hardware back), and focus management - and exposes a
  **single blank slot**. It adds no chrome of its own.
- **`<cosmoz-slideout-panel>`** - layout **chrome**: a `header` region, a scrollable
  padded `body`, and a `footer` region - **no properties**. Empty slots are **completely invisible**
  (region wrappers have no box of their own; spacing and dividers are painted on the slotted elements).
  The header, its title, and any close control are slotted in. It owns no
  open/close lifecycle - it is meant to be **slotted into a `<cosmoz-slideout>`**.
- **`<cosmoz-modal-slideout>`** - the **modal drawer**: the same surface rendered
  `popover="auto"` + `aria-modal="true"` with a scrim backdrop; the platform owns
  its dismissal (Esc, hardware back, backdrop click). See
  [the modal drawer](#the-modal-drawer---cosmoz-modal-slideout).

99% of the time you use them together:

```html
<cosmoz-slideout opened full-screen aria-label="Supplier">
	<cosmoz-slideout-panel>
		<my-header slot="header">Supplier</my-header>
		<p>…body…</p>
		<div slot="footer">…actions…</div>
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
import '@neovici/cosmoz-slideout/cosmoz-slideout';
// the layout chrome (separate entrypoint)
import '@neovici/cosmoz-slideout/cosmoz-slideout-panel';
```

## Opening & closing

`opened` is a **reactive, two-way** value on `<cosmoz-slideout>` backed by the `opened` **attribute**.
Drive it however suits you - a lit **property** binding (`.opened=${x}`), a
boolean **attribute** binding (`?opened`), a bare `opened` in static HTML, or the `open()`/`close()`
methods - and listen for the cancelable **`opened-changed`** event; the surface self-closes on Escape
and `close()`, and removing the `opened` attribute (e.g. from devtools) closes it too. The element
persists in the DOM across open/close cycles - there is no add-to-open / remove-to-close dance.

```html
<!-- lit-html two-way binding -->
<cosmoz-slideout
	.opened="${this.open}"
	@opened-changed="${(e) => (this.open = e.detail.value)}"
>
	<cosmoz-slideout-panel>
		<my-header slot="header">Acme</my-header>
		<p>…body…</p>
	</cosmoz-slideout-panel>
</cosmoz-slideout>
```

Or with pion's `lift` directive: `@opened-changed=${lift(setOpen)}`. Imperatively, call `open()` /
`close()` on the **`<cosmoz-slideout>`** element.

A child asks the surface to close by dispatching a bubbling, **cancelable** **`request-close`** event -
your slotted header's close button does exactly this, so it never needs a reference to the slideout.
Your own buttons can do the same, or call `closest('cosmoz-slideout')?.close()`. To guard a close
("unsaved changes"), call `preventDefault()` on `request-close`, or on the cancelable `opened-changed`.

## The modal drawer - `<cosmoz-modal-slideout>`

A second element for drawers that block out the page: confirmations, detail panels over dense
tables. It is the same surface as `<cosmoz-slideout>` - one blank slot, the same `opened`
lifecycle, the same slide animation - with the platform's own modal machinery: `popover="auto"`,
`aria-modal="true"`, and a scrim **backdrop** behind it.

```html
<cosmoz-modal-slideout
	.opened="${this.open}"
	@opened-changed="${(e) => (this.open = e.detail.value)}"
>
	<cosmoz-slideout-panel>
		<my-header slot="header">Acme</my-header>
		<p>…body…</p>
	</cosmoz-slideout-panel>
</cosmoz-modal-slideout>
```

### `<cosmoz-modal-slideout>` API

#### Attributes & properties

- `opened` - show/hide the drawer; identical two-way reactive attribute as on `<cosmoz-slideout>`
  (`.opened=${x}`, `?opened`, bare markup, or `open()`/`close()`).
- `full-screen` - when present the drawer covers the whole document. Flip the attribute or call
  `toggleFullScreen()`.
- `aria-label` / `aria-labelledby` - label the dialog (mirrored; see the surface's guidance above).
- `popover` / `aria-modal` - set by the element itself (`auto` / `true`) and **overridden on
  reconnect**: these are the type's constants, not configuration. Use `<cosmoz-slideout>` for
  non-modal.
- **No `no-escape`.** Escape is the platform's close request here; disable-on-escape is not a
  per-instance knob.

#### Methods

- `open()` - set `opened` to true (play the slide-in).
- `close()` - set `opened` to false (play the slide-out); `close` fires when it finishes.
- `toggleFullScreen()` - toggle the `full-screen` state.

#### Events

- `opened-changed` - **two cancelability modes, by close source**:
  - programmatic changes (`close()`, `request-close`, attribute writes) dispatch it
    **cancelable** - `preventDefault()` vetoes, exactly as on `<cosmoz-slideout>`;
  - native dismissals (Esc, hardware back, backdrop click, a sibling `popover="auto"` surface
    opening) dispatch it **non-cancelable** - the dismissal has already happened, there is nothing
    left to veto; the event is the record of it, and the `opened` attribute follows.
    Both bubble; `detail = { value }`.
- `open` / `close` - dispatched when the slide animation settles, as on the surface (bubbles).
- `full-screen-changed` - dispatched when the `full-screen` state changes; `detail = { value }`
  (bubbles, cancelable).
- `request-close` - **listened for**, not emitted; identical to the surface.
- `toggle` / `beforetoggle` - the platform's own `ToggleEvent`s (listened for by the element to
  sync `opened`; they also reach your listeners: `newState` is `'open'`/`'closed'`).

#### Slot

- _default_ - the same single blank slot; drop a `<cosmoz-slideout-panel>` in for the styled
  layout, or author your own chrome.

### Dismissal model

**The UA owns dismissal.** Esc, the hardware back button (Android), and clicks/taps outside the
drawer all close it natively - through the browser's own close watcher and light dismiss,
newest-first across stacked surfaces. This path is **final**: the platform provides no veto for
`popover="auto"` dismissals, so attempting `preventDefault()` on `opened-changed` there is inert.

Programmatic closes keep the vetoable funnel - `close()`, a slotted `request-close`, and attribute
writes work exactly as on `<cosmoz-slideout>` (unsaved-changes guards).

**Sibling close is platform semantics**: opening a second `popover="auto"` surface closes the
first. The first still settles and announces `close` - and does not steal focus back from the
surface that replaced it.

### Backdrop

`::backdrop` fades with the surface's duration/easing tokens and its color is
`--cosmoz-slideout-backdrop` (default `color-mix(in srgb, --cz-color-bg-overlay 50%, transparent)`).

### Accessibility

- `role="dialog"` + `aria-modal="true"`: like `<dialog>`, popover modality does **not** make the
  page inert - tabbing can still reach the page behind the backdrop. If you need a focus trap,
  this is not the component for it.
- Focus behavior on open matches the surface (the popover focusing steps honor `autofocus` in your
  content, or on the drawer itself). On close after a **key** dismissal, the platform restores
  focus to what was focused at show time; after a **pointer** dismissal, focus stays where the
  user's gesture left it; after a programmatic close, focus returns to the opener when it was
  still inside the drawer.

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
- `aria-label` - label for the drawer. Set it
  **explicitly** - the panel carries no text of its own to name it with (and never reaches into the
  element). Note: `aria-labelledby` is an IDREF and only resolves to an element in the **same tree**
  as the element, not a slotted one - use `aria-label` (a plain string) to name the drawer.

#### Methods

- `open()` - set `opened` to true (play the slide-in).
- `close()` - set `opened` to false (play the slide-out); `close` fires when it finishes.
- `toggleFullScreen()` - toggle the `full-screen` state (also settable via the attribute).

#### Events

- `opened-changed` - dispatched (bubbling, **cancelable**) when the surface changes `opened` itself
  (`open()`/`close()`, Escape/back-button, `request-close`); `detail = { value }`. Use it for two-way
  binding; `preventDefault()` vetoes the change (an unsaved-changes guard).
- `open` - dispatched after the slide-**in** animation settles (bubbles), symmetric with `close` -
  handy for "scroll to top / focus the first field" timing.
- `close` - dispatched after the slide-**out** animation settles (bubbles). Useful for teardown
  timing; the element is **not** removed.
- `full-screen-changed` - dispatched when the `full-screen` state changes; `detail = { value }`
  (bubbles, cancelable - `preventDefault()` vetoes the flip).
- `request-close` - **listened for**, not emitted: a bubbling, **cancelable** event from any
  descendant (e.g. your slotted close button) that asks the surface to close; `preventDefault()`
  vetoes.

#### Slot

- _default_ - a single blank slot. Drop a `<cosmoz-slideout-panel>` in for the styled layout, or
  author your own chrome. The single slotted child is stretched to fill the slideout, so wrap
  hand-composed header/body/footer in **one** top-level element.

### `<cosmoz-slideout-panel>` - the layout chrome

Structural layout only; it holds no `opened`/`close()` and must live inside a
`<cosmoz-slideout>`.

#### Properties

_None._ The panel is pure layout: all content - including the header title and any close control -
is slotted in. There is nothing to configure.

#### Slots

- `header` - the non-scrolling header region (e.g. your header component with title/text
  and a close control dispatching `request-close`).
- _default_ - the body / main content (scrollable).
- `footer` - the non-scrolling footer region (e.g. actions), with a divider above it.

Empty slots are **completely invisible** - the wrappers render no box of their own; spacing, borders,
and the footer divider live on the slotted elements (`::slotted(*)`). Fill a region
only when you need it.

```html
<!-- header with a close control + body + footer actions -->
<cosmoz-slideout .opened="${open}" aria-label="Acme">
	<cosmoz-slideout-panel>
		<my-header slot="header">
			Acme Industries
			<cosmoz-button
				slot="suffix"
				aria-label="Close"
				@click="${fireRequestClose}"
				>✕</cosmoz-button
			>
		</my-header>
		<p>…body…</p>
		<div slot="footer">…actions…</div>
	</cosmoz-slideout-panel>
</cosmoz-slideout>

<!-- custom header: any slotted element with a request-close control -->
<cosmoz-slideout .opened="${open}" aria-label="Notes">
	<cosmoz-slideout-panel>
		<my-header slot="header">…</my-header>
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
import '@neovici/cosmoz-slideout/cosmoz-slideout';
import '@neovici/cosmoz-slideout/cosmoz-slideout-panel';
import { slideout, slideoutPanel } from '@neovici/cosmoz-slideout/helpers';

slideout(
	{ opened, onOpenedChanged: (e) => (opened = e.detail.value) },
	slideoutPanel(
		{},
		html`
			<my-header slot="header">Details</my-header>
			<p>…body…</p>
		`,
	),
);
```

`slideout(props, content)` accepts `opened`, `fullScreen`, `noEscape`, `ariaLabel`,
`ariaLabelledby`, `class`, `style`, and the event handlers `onOpenedChanged` / `onOpen` /
`onClose` / `onFullScreenChanged` (so plain listeners and pion's `lift` both compose). Those `on*`
props are render-helper sugar for listening to the element's events (`@close=${props.onClose}`); the
element itself has no callback properties. `slideoutPanel(props, content)` accepts only `class` and
`style` (the panel is property-free). The `SlideoutProps` type is exported from the package root.

`modalSlideout(props, content)` is the modal drawer's helper: the same props minus `noEscape`
(which does not exist on `<cosmoz-modal-slideout>`); `ModalSlideoutProps` is exported too.

### Typed lookups

`HTMLElementTagNameMap` is augmented by importing the element modules, so DOM queries return fully
typed elements:

```ts
import '@neovici/cosmoz-slideout/cosmoz-slideout';
import '@neovici/cosmoz-slideout/cosmoz-modal-slideout';

const view = document.querySelector('cosmoz-slideout');
view.opened; // typed
view.close(); // typed

const modal = document.querySelector('cosmoz-modal-slideout'); // typed
modal.open(); // typed

const panel = document.querySelector('cosmoz-slideout-panel'); // typed (property-free)
```

### CSS `::part()`

**`<cosmoz-slideout>`:** none - the element _is_ the surface; style it via `:host`-level custom
properties (below) or the `cosmoz-slideout` element selector.

**`<cosmoz-slideout-panel>`:** `header`, `body`, `footer` - the layout regions.

### Accessibility

The element carries `role="dialog"`, `aria-modal="false"` (non-modal by design), and
`tabindex="-1"` itself (set by the base class; an authored `role` wins) - the latter makes the
surface a valid focus target for the Popover API. Label it via `aria-label` on
`<cosmoz-slideout>` - set it explicitly; nothing fills it in for you. The close control (in your
slotted header) carries its own accessible name, e.g. "Close". On open, the browser's popover
focusing steps move focus: mark a focus target in your content with the standard `autofocus`
attribute (`<cosmoz-input autofocus>` lands on its field), or put `autofocus` on the surface
itself to announce the drawer by name; with no `autofocus` anywhere, focus does not move. On
close, focus returns to the opener **when focus was still inside the drawer at the moment it
closed** (that check is captured then, before the popover hides). Escape (and hardware/gesture back navigation) closes the **most recently opened**
slideout - each open element holds a close-request session with the browser (newest first
regardless of where focus is). Because the drawer is non-modal, the page behind stays reachable -
this is intentional (quick-glance panels).

The opener that focus is restored to is whatever was focused **at the moment `opened` became true**.
Set `opened` synchronously inside the opening handler (e.g. the click); if you set it after an
`await`, the original opener may no longer be focused and restoration is skipped.

#### ARIA guidance

- **Give the drawer an accessible name** - always set `aria-label` (a string):
  `<cosmoz-slideout aria-label="Supplier details">`. Without a name the dialog is announced as
  bare "dialog" and screen-reader users can't tell what it contains. Prefer `aria-label` over
  `aria-labelledby`: the labelled id must live in the light DOM (the surface is the element
  itself now, but the shadow slot content isn't addressable by IDREF reliably), while `aria-label`
  always works. If the drawer has visible heading text and the heading element can carry an
  `aria-labelledby`-addressable id in the light DOM, either is acceptable - just never leave it
  unnamed.
- **`role="dialog"` + `aria-modal="false"` is intentional on `<cosmoz-slideout>`**: non-modal dialogs
  keep the page behind interactive, so the drawer does not trap focus. Do **not** flip `aria-modal`
  to `true` by hand. For a modal drawer use `<cosmoz-modal-slideout>` - it carries
  `aria-modal="true"` and the backdrop (see its own section above; popover modality still does not
  trap focus, per the platform).
- **The drawer is a landmark-free dialog**: don't rely on `aria-expanded`/`aria-controls` wiring
  from the trigger button - instead the trigger toggles `opened`, and the `open`/`close` events
  let you announce state if you must (`aria-live`). Keep the announcements minimal: drawer
  open/close is signaled by focus movement itself.
- **Focus is the state announcer**: on open, the browser's popover focusing steps move focus to
  your `autofocus`-marked field (composite components work - `<cosmoz-input autofocus>` focuses
  its inner input) or to the surface when `autofocus` is on the element itself; on close, focus
  returns to the opener. No `autofocus` anywhere means focus does not move on open.
- **Loading states**: announce with `aria-live="polite"` on a slotted status node or
  `aria-busy` from the author's own slotted markup - the panel itself adds no busy/announcement
  attributes (property-free chrome).
- **Escape/close buttons**: every close control should have an accessible name
  (`aria-label="Close"`) and rely on the cancelable `request-close` contract so an
  unsaved-changes veto stays available to any listener.

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

**`<cosmoz-slideout-panel>` (the layout chrome):**

- `--cosmoz-slideout-panel-padding-x` - slotted header/footer + body horizontal padding (default
  `--cz-spacing * 4`).
- `--cosmoz-slideout-panel-gap` - vertical gap between body children (default `--cz-spacing * 6`).
- `--cosmoz-slideout-panel-divider` - footer top divider color (default `--cz-color-border-secondary`).

## Notes & caveats

- **`opened` is an observed attribute.** Property (`.opened`), attribute (`?opened` / bare `opened`),
  and `open()`/`close()` all drive it, and removing the attribute closes the surface. Setting `.opened`
  **before** the element's module has loaded (lazy/dynamic definition) is the one gap - a pre-upgrade
  own-property can shadow the reactive accessor; prefer the attribute (or set the property after
  definition) for markup-time state.
- **Multiple open slideouts** all render pinned to the right edge and therefore stack on top of one
  another (top-layer LIFO). Escape and back navigation target the most-recently-opened one
  (each instance holds its own close-request session with the browser - no shared state between
  instances). `<cosmoz-modal-slideout>` follows the platform's `popover="auto"` rule instead:
  opening a second one closes the first (see the modal drawer section).
- **Close controls live in your slotted header** and close by dispatching
  `request-close`. They are independent of Escape-to-close, which is a surface behavior controlled by
  `no-escape` (on `<cosmoz-slideout>`) and stays active either way.
- **`<cosmoz-slideout-panel>` pulls in only its layout.** `@neovici/cosmoz-tokens` is a regular
  `dependency` of this package; buttons/icons come from whatever you slot in.

## Development

```bash
npm i
npm run storybook:start
```

## Publishing

Uses Changesets. Add a changeset with `npm run changeset`, then open a release PR.
