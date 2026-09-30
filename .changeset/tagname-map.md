---
'@neovici/cosmoz-slideout': minor
---

Add typed element interfaces and `HTMLElementTagNameMap` augmentation for `cosmoz-slideout` and `cosmoz-slideout-panel`, so `querySelector('cosmoz-slideout')` returns a fully typed element (props like `opened`, `fullScreen`, methods `open` / `close`, ... readable in JS). New exported types `PanelProps` / `PanelElement` (the panel is property-free; the interface anchors the tag-name map, same as the resizable pattern).
