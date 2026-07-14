# lbaker.dev

A personal portfolio and "living resume" for **Lawrence Baker**, Staff Backend Software Engineer.

Built as a fast, accessible, single-page site. Content is stored as typed,
structured data — separate from presentation — so the resume is easy to keep
up to date.

## Tech stack

- **[Astro](https://astro.build)** — static site generation (`output: 'static'`)
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling, via the
  [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/using-vite)
  plugin (the current recommended integration for Astro)
- **TypeScript** — strict mode
- **Prettier** (+ `prettier-plugin-astro`) — formatting

## Getting started

Requires Node.js 18.20.8+, 20.3.0+, or 22+.

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:4321
```

## Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the local dev server               |
| `npm run build`        | Build the production site to `./dist/`   |
| `npm run preview`      | Preview the production build locally     |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check formatting without writing changes |

## Editing content

All resume content lives in a single typed file:

```
src/data/resume.ts
```

It exports a `resume` object typed as `Resume`, composed of `Profile`,
`Experience[]`, `SkillGroup[]`, `Education[]`, and `ContactLink[]`. Update the
objects there and the page re-renders automatically. Placeholder copy is marked
with `TODO`.

## Project structure

```
lbaker-dev/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ExperienceItem.astro
│   │   ├── Footer.astro
│   │   ├── Nav.astro
│   │   └── Section.astro
│   ├── data/
│   │   └── resume.ts          # typed resume content (single source of truth)
│   ├── layouts/
│   │   └── BaseLayout.astro    # <head>, meta, SEO, Open Graph, theme bootstrap
│   ├── pages/
│   │   └── index.astro         # the single-page living resume
│   └── styles/
│       └── global.css          # Tailwind entry + design tokens + base styles
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Deploying to Vercel

This site builds to static files, so no adapter is required.

1. Push the repository to GitHub.
2. In [Vercel](https://vercel.com), **Add New → Project** and import the repo.
3. Vercel auto-detects Astro. Confirm the settings:
   - **Framework preset:** Astro
   - **Build command:** `astro build` (or `npm run build`)
   - **Output directory:** `dist`
4. Deploy.

### Custom domain (lbaker.dev)

1. In the Vercel project, go to **Settings → Domains** and add `lbaker.dev`
   (and optionally `www.lbaker.dev`).
2. Update DNS at your registrar as Vercel instructs:
   - **Apex (`lbaker.dev`):** an `A` record to `76.76.21.21`, _or_ use Vercel's
     nameservers for automatic management.
   - **`www`:** a `CNAME` record to `cname.vercel-dns.com`.
3. Vercel provisions an SSL certificate automatically once DNS resolves.

> If server-rendered routes are ever needed, install `@astrojs/vercel` and set
> `output: 'server'` (or `'hybrid'`) in `astro.config.mjs`.

## Accessibility & performance notes

- Semantic HTML landmarks, a skip-to-content link, and visible focus styles.
- Respects `prefers-reduced-motion`.
- Class-based light/dark theme that follows the OS preference and persists a
  manual choice, with no flash of the wrong theme on load.
