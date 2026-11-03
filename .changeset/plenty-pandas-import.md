---
'scryfall-api': patch
---

Fix the `exports` map so importers resolve the runtime entry point instead of the type declarations. `import { Cards } from 'scryfall-api'` works again with Bun, Rollup, Deno and any resolver that honours `exports`.
