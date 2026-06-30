# Claude Code — Deploy Pages template

This repo hosts prototype apps and deploys them via GitHub Actions to GitHub Pages.
Every top-level app folder is deployed automatically on push.

## Repo layout

```
.
├── home/                  ← Portal index — lists all live versions (deployed from main only)
├── hello-world/           ← Starter Vite app — delete or replace once you have your own
├── scripts/
│   └── update-versions.js ← Used by the workflow to maintain versions.json on gh-pages
└── .github/workflows/
    └── deploy-pages.yml   ← Auto-detects changed app folders, builds each one
```

## Branch convention

| Branch | Purpose |
|--------|---------|
| `main` | Source of truth — updates the portal home page only (no app build) |
| any other | Deploys changed app folders under `/{branch}/{app}/` on gh-pages |

## How deployment works

Every push to a branch other than `main`:
1. Detects which top-level app folders changed (via `git diff HEAD~1 HEAD`)
2. For each changed folder with a `package.json`, detects type: **Vite** (`vite.config.*`) or **Angular** (`angular.json`)
3. Builds it with the correct base path (`/{branch}/{app}/`)
4. Deploys to `gh-pages` under `/{branch}/{app}/`
5. Updates `versions.json` — the portal home page reflects the new version immediately

Portal URL: `https://<owner>.github.io/<repo>/`
App URL pattern: `https://<owner>.github.io/<repo>/{branch}/{app}/`

## Adding a new app

1. Create a top-level folder (e.g. `my-app/`)
2. Drop a Vite or Angular scaffold inside (must have `package.json` and either `vite.config.*` or `angular.json`)
3. Make sure the Vite config reads `VITE_BASE_PATH` so assets resolve under the deploy path:
   ```js
   export default defineConfig({
     base: process.env.VITE_BASE_PATH ?? '/',
     // ...
   });
   ```
4. Push to any branch other than `main` — the workflow picks it up automatically.

## Excluding folders from auto-detection

Edit the `SKIP` regex in `.github/workflows/deploy-pages.yml` (line ~47). Anything matched is never treated as an app. Currently:
- `.github`, `home`, `scripts`, `docs`, `node_modules`

Add your own non-app top-level folders to that list.

## Saving + deploying (suggested ergonomics)

If you use Claude Code, you can add a `/checkpoint` skill (see `.claude/skills/checkpoint.md` if you copy that across) that stages, commits, pushes, and waits for the workflow — returning the live URL when done. Without it, the manual flow is:

```bash
git add -A
git commit -m "your message"
git push origin "$(git rev-parse --abbrev-ref HEAD)"
# Then watch the workflow:
gh run watch --exit-status
```

## Local dev

**Vite app:**
```bash
cd hello-world
npm install     # or pnpm install
npm run dev     # http://localhost:5173
```

## GitHub Pages settings (one-time)

- Settings → Pages → Source: **Deploy from a branch** → `gh-pages` / `(root)`
- Settings → Actions → General → Workflow permissions: **Read and write permissions**

That's all the workflow needs to push to gh-pages and have GitHub serve from it.
