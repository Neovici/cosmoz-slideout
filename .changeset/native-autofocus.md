---
'@neovici/cosmoz-slideout': minor
---

Focus on open is now handled entirely by the Popover API's native popover focusing steps. The
component no longer moves focus itself: mark the intended focus target with the standard
`autofocus` attribute in your content (`<cosmoz-input autofocus>` lands on its field), or put
`autofocus` on the surface itself to announce the drawer by name; with no `autofocus` anywhere,
focus does not move on open. The `no-autofocus` attribute/property is removed - there is no
component-driven focus left to opt out of. On close, focus still returns to the opener when focus
was inside the drawer.
