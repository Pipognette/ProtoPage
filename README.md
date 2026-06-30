# Qantev Pages template

A minimal scaffolding for hosting multiple prototype apps on GitHub Pages with one workflow.

- **Auto-detects** which top-level app folder changed on each push
- **Builds** Vite or Angular apps with the right base path
- **Deploys** to `/<branch>/<app>/` on the `gh-pages` branch
- **Portal** at `/` (deployed from `main`) lists all live versions, sorted by recency

## Setup on a new repo (~10 minutes)

### 1. Create the repo

Create an **empty** repo on GitHub. Public for free Pages, private if you have Pro.

```bash
git clone git@github.com:<owner>/<repo>.git
cd <repo>
```

### 2. Drop the template contents in

Copy **everything** in this `personal-template/` folder (including the hidden `.github/` and `.gitignore`) into the root of your new repo:

```bash
# from the source repo
cp -R personal-template/. /path/to/your/<repo>/
```

After copy, the new repo root should look like:

```
<repo>/
├── .github/workflows/deploy-pages.yml
├── home/index.html
├── hello-world/                ← starter app; rename or delete once you add your own
├── scripts/update-versions.js
├── CLAUDE.md
├── README.md
└── .gitignore
```

### 3. Enable GitHub Pages

In the new repo on github.com:

- **Settings → Pages → Source**: "Deploy from a branch" → branch `gh-pages` / folder `/ (root)`.
  (The branch won't exist yet — that's fine, the first deploy creates it. Come back here after the first push to set the source.)
- **Settings → Actions → General → Workflow permissions**: "Read and write permissions".

### 4. First push

```bash
git checkout -b first-deploy
git add -A
git commit -m "Initial deploy from template"
git push -u origin first-deploy
```

Workflow runs ~30 seconds. When it finishes, your app is live at:

```
https://<owner>.github.io/<repo>/first-deploy/hello-world/
```

### 5. (Optional) Deploy the portal home page

Push to `main` to publish `home/index.html` at the root:

```bash
git checkout main
git merge first-deploy   # or rebase / cherry-pick
git push origin main
```

The portal becomes available at `https://<owner>.github.io/<repo>/` and lists every `branch+app` pair in `versions.json`.

## Adding more apps

Create another top-level folder, drop a Vite or Angular scaffold inside, push. The workflow picks it up automatically.

Vite apps must read `VITE_BASE_PATH` so their built assets resolve under `/<branch>/<app>/`:

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
});
```

Angular apps work out of the box — the workflow passes `--base-href` automatically.

## What you might still want to customize

- **`SKIP` regex** in `.github/workflows/deploy-pages.yml` — list any other non-app top-level folders so they're never treated as apps to build.
- **Portal branding** — edit the `<header>` and `<title>` in `home/index.html`.
- **Deploy URL in the workflow logs** — the workflow constructs `https://<owner>.github.io/<repo>/...` automatically from GitHub context. If your repo is a user-site (`<owner>.github.io`), the path is just `https://<owner>.github.io/` without the repo suffix — adapt the `PAGES_URL_BASE` env var accordingly.

## Notes

- The portal home page is only re-deployed on **`main`** pushes. `versions.json` is updated on **every branch** push, so the portal listing always reflects what's deployed — even if you never push to `main`.
- The `gh-pages` branch is managed entirely by the workflow. Don't push to it manually.
- Branch names with slashes (e.g. `feature/foo`) work but produce nested URLs (`/feature/foo/<app>/`). Stick to flat branch names if you want short URLs.
