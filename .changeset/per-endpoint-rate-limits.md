---
"scryfall-api": minor
---

Respect Scryfall's per-endpoint rate limits

`Cards.byName`, `Cards.random`, `Cards.collection` and `Cards.search` (including pagination) are now limited to 2 requests per second each, as required by the Scryfall API. Every request still counts against the global 10 requests per second limit.
