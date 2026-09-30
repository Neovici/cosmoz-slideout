# Sketch: modal variant (feature-request stub — not part of the current API)

Status: **design sketch only** — nothing here is implemented. Written to anchor
the discussion when/if a modal drawer is requested (ARIA guidance points here:
"modal should be a variant owning focus trapping, not consumers flipping aria-modal").

## API shape

```html
<!-- non-modal (unchanged, default) -->
<cosmoz-slideout opened>…</cosmoz-slideout>

<!-- modal variant -->
<cosmoz-slideout modal opened>…</cosmoz-slideout>
```

`modal` is a boolean attribute (mirrors `no-escape`'s plumbing: declared in
`Props`, in `observedAttributes`, consumed by the hooks). Flip via
`.modal=${x}` or the attribute; emits `modal-changed` if two-way is ever
needed (probably not — set at authoring time, rarely toggled live).

## What changes under `modal`

1. **`aria-modal="true"` instead of `false`** — set by `SlideoutBase`'s
   connect-time attribute pass when the attribute is present (authored value
   still wins, same rule as now).
2. **Focus containment** — the component traps Tab inside the element while
   open. Implementation budget: a `keydown` handler on the element
   (Tab → wrap from last to first focusable and vice versa, collected via
   `querySelectorAll` on light DOM + own shadow root). This is owned by the
   component so consumers never hand-roll it.
3. **Popover mode flip** — the surface is created with
   `popover="auto"` instead of `"manual"` when `modal` is set. The platform
   then owns:
   - **light dismiss** — pointer outside closes (modal dialogs close on
     backdrop interaction; the "backdrop" here is the top-layer isolation
     itself, no backdrop element needed);
   - **focus containment for free** — auto popovers get inertness-ish
     treatment of the page behind in browsers' current behavior;
   - **Escape** — routed through the browser's close-request stack as today.
   The trade to document: `request-close` stays cancelable, but the
   platform-initiated closes (light dismiss, Escape under `auto`) **cannot be
   vetoed** — same caveat as the earlier `popover="auto"` analysis. If the
   veto must survive a modal close attempt, keep manual + own backdrop +
   own focus trap instead of `auto`.
4. **Visual backdrop** (optional, cheap) — a slotted
   `<div slot="backdrop" part="backdrop">` or a `::backdrop`-like overlay via
   a light-DOM wrapper in the story; skip: `popover="auto"` in the top layer
   already dims nothing but blocks interaction, so backdrop is cosmetic and
   the consumer's page can draw one.
5. **`inert` vs non-modal page** — with `popover="auto"` the browser keeps
   the page behind reachable-but-dismissing; the *strict* modal
   (page inert) would need the manual + own-trap route. Decide when
   requesting: "close on outside click" is what most modal feature requests
   actually mean.

## Non-goals

- No `blocking` / `showModal()` (that's `<dialog>`-only).
- No focus-trap utilities dependency (the wrap logic is ~30 lines).
- No change to the non-modal behavior (default stays as is).

## Checklist when implementing

- [ ] `Props`/`observedAttributes`/helpers: `modal` plumbing
- [ ] `SlideoutBase` connect-time pass: `aria-modal` + popover mode select
- [ ] Focus trap handler + tests (tab wrap, shift-tab wrap)
- [ ] Light-dismiss veto caveat documented (README ARIA guidance)
- [ ] changeset (minor), stories (one modal story + veto behavior note)