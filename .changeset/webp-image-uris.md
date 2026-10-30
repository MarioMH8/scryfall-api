---
"scryfall-api": major
---

Add WebP `image_uris` keys and deprecate the legacy JPEG ones

Scryfall now serves `thumb`, `grid`, `display`, `crop`, `art` and `jpeg` image variants. The `small`, `normal`, `large`, `border_crop` and `art_crop` keys are deprecated: `small`, `large`, `border_crop` and `art_crop` will be removed on 2027-01-01, and `normal` is replaced by `grid` (WebP) or `jpeg` (JPEG).

Since the new keys are required members of the public `ImageUris` interface, this is a breaking change.
