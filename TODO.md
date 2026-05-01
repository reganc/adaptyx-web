# Deferred work

## Dependency hygiene — moderate-severity advisories

Picked up by `npm audit` after the next 15.0.3 → 15.5.15 bump
(commit 5dab5f7). Left for a separate PR.

- `postcss` — transitive via `next`. Resolves when next ships an
  updated postcss range or when we move to next 16.x.
- `uuid` <14 — transitive via `resend` → `svix`. Resolves when
  `resend` updates its svix dependency.

To re-check:

```
npm audit
```

Address with `npm audit fix` once non-breaking patches are available,
or pin overrides in `package.json` if the upstream is slow.
