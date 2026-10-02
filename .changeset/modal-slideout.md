---
'@neovici/cosmoz-slideout': minor
---

Introduce `<cosmoz-modal-slideout>`: a modal drawer - the slideout surface rendered
`popover="auto"` + `aria-modal="true"` with a scrim `::backdrop`
(`--cosmoz-slideout-backdrop`, default `color-mix(in srgb, var(--cz-color-bg-overlay) 50%,
transparent)`, fading with the surface's duration/easing tokens).

Dismissal is the platform's: Esc, hardware back, and backdrop clicks hide the surface natively and
sync `opened` via a **non-cancelable** `opened-changed` (there is nothing to veto once the
platform dismissed); `close()`, `request-close`, and attribute writes keep the cancelable funnel.
`no-escape` does not exist on this element (Escape is platform semantics there).

New exports: the `cosmoz-modal-slideout` element, `modalSlideout` helper, `ModalSlideoutProps`,
`ModalElement`. Focus behavior: key dismissals restore focus natively (the platform's hide
steps); pointer dismissals leave focus where the user's gesture put it; programmatic closes
restore the opener when focus was still inside. Opening a second modal drawer closes the first
(the platform's `popover="auto"` rule) - the first settles and announces `close` without taking
focus back.
