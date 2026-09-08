# Tokonomics · AI Technical Product Portfolio

A public-safe, recruiter-facing case-study site for the Tokonomics VS Code extension. The site presents product judgment, evidence quality, responsible-AI thinking, and end-to-end product practice without exposing proprietary architecture or implementation details.

## What the site communicates

- The developer problem and deliberately narrow product promise
- The product thesis and simplified user experience
- The benchmark result that was rejected after a task-success regression
- The decisions and launch gates that followed
- A 15-artifact AI Technical Product Management portfolio

All quantitative claims are labeled by evidence maturity. The current evidence does **not** support a quality-preserving dollar-savings claim, and the site says so explicitly.

## Local development

Requirements: Node.js 22 LTS (22.13 or newer). Vinext currently triggers a
Windows shutdown assertion under Node.js 24 after exporting successfully, so
the deployment workflow is deliberately pinned to Node.js 22.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Validation:

```bash
npm run lint
npm run build
```

The static export is created in `dist/client`.

## Personalize before publishing

1. Replace `[Your Name]` in `app/page.tsx`.
2. Add only contact links you want to make public.
3. Re-run the benchmark before changing any result shown on the site.
4. Keep the product status as “controlled beta” until the launch gates are met.
5. Do not copy private architecture, security findings, source code, or internal planning files into this public repository.

## Publish as a separate GitHub Pages repository

This directory is intentionally self-contained so it can become a separate public repository, for example `tokonomics-product-case-study`.

1. Copy the contents of `portfolio-site` into a new repository.
2. Use `main` as the default branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. Push to `main`. The included workflow validates, builds, and deploys the site.

The build automatically applies the repository base path for a project site such as `username.github.io/tokonomics-product-case-study/`. It leaves the base path empty for a user site named `username.github.io`.

## Public/private boundary

The public site is a curated product narrative. The complete PM document set remains in the private product workspace under `docs/portfolio/`. Review and sanitize any document independently before deciding to publish it.

## Technology

React, TypeScript, Vinext, Tailwind CSS, and a static GitHub Pages export. The page uses semantic HTML, keyboard-visible focus states, responsive layouts, reduced-motion support, and no remote tracking or data collection.
