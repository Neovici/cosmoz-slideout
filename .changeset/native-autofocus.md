---
'@neovici/cosmoz-slideout': minor
---

Focus-on-open is now handled by the Popover API's native popover focusing steps: the surface carries an `autofocus` fallback (when `no-autofocus` is absent and no content element is marked), while an explicit `[autofocus]` anywhere in the slotted content - including composite fields whose shadow delegates focus, e.g. `<cosmoz-input autofocus>` - receives focus directly on open. No manual focus moves; on close, focus still returns to the opener when focus was inside the drawer.
