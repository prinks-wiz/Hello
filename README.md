# Portfolio

Personal portfolio for an ML / robotics engineer. Built with [Astro 4](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript. Fully static — deploy anywhere.

---

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Production build → dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Adding content

All content lives as Markdown files in `src/content/`. Drop a file in the right folder and the site picks it up automatically — no code changes needed.

### Add a project

Create `src/content/projects/your-project-slug.md`:

```markdown
---
title: "Your Project Title"
slug: "your-project-slug"          # must match the filename stem
summary: "One-sentence summary. Keep it under 200 characters."
date: 2024-06-01
techStack: ["Python", "PyTorch", "ROS 2"]
links:
  github: "https://github.com/you/your-project"
  demo:   "https://your-demo.example.com"   # optional
featured: true                              # shows on home page if true
---

Your full project writeup in Markdown goes here.
```

The detail page is automatically available at `/projects/your-project-slug`.

---

### Add a blog post

Create `src/content/writing/your-post-slug.md`:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: 2024-06-15
summary: "A one-sentence description shown in the index and meta tags."
tags: ["robotics", "ml"]   # optional
---

Your post body in Markdown goes here.
```

Available at `/writing/your-post-slug`.

---

### Add a work entry

Create `src/content/work/company-name.md`:

```markdown
---
org: "Company Name"
role: "Your Role"
startDate: 2023-01-01
# endDate: 2024-06-01   # omit or set to null for current role
description: "One-to-two sentence description of what you did and the impact."
techStack: ["Python", "C++", "PyTorch"]
location: "Boston, MA"
---
```

Entries are sorted newest-first on `/work`.

---

## Customisation checklist

Before going live:

- [ ] Replace `YOUR.NAME` in `src/components/Header.astro`
- [ ] Update coordinates in `src/components/CoordinateDisplay.astro`
- [ ] Update GitHub / LinkedIn URLs in `src/components/Footer.astro`
- [ ] Update contact details in `src/pages/about.astro`
- [ ] Update the bio paragraph in `src/pages/index.astro`
- [ ] Replace the `P` monogram in `public/favicon.svg`
- [ ] Add `public/resume.pdf` (or remove that block from `about.astro`)
- [ ] Set `site` in `astro.config.mjs` for canonical URLs (required for SEO)

---

## Deploying

### Vercel

```bash
npm i -g vercel
vercel
```

No config file needed — Vercel detects Astro automatically.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --build
```

Or connect the repo in the Netlify dashboard. Build command: `npm run build`, publish directory: `dist`.

### GitHub Pages

1. Add `base` to `astro.config.mjs` if deploying to a sub-path:
   ```js
   export default defineConfig({ base: '/repo-name', ... });
   ```
2. Use the official [Astro GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/).

---

## Design notes

- **Color tokens** live in `src/styles/global.css` as CSS custom properties.
  Dark mode swaps the values; Tailwind classes (`text-content`, `bg-surface`, etc.) adapt automatically.
- **Dark mode** persists in `localStorage`, honours `prefers-color-scheme` on first visit, and switches without flash via an inline `<script>` in `<head>`.
- **Fonts** are loaded from Google Fonts (Inter + JetBrains Mono). For a fully self-hosted build, download them and update `global.css` to use `@font-face`.
- **Section identifiers** (`§ 01 / WORK`) are rendered by the `<SectionHeader>` component.
- **Coordinates** (`LAT 40.4406 LON -79.9959`) are static text in `<CoordinateDisplay>` — update to your actual location.
