# A B Abhirama — Portfolio

A dark, minimal developer portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/` — deploy that folder anywhere (Vercel, Netlify, GitHub Pages, etc).

### Deploy on Vercel
1. Push this folder to a GitHub repo.
2. Import it on vercel.com — it auto-detects Vite. No config needed.

### Deploy on Netlify
1. Drag-and-drop the `dist/` folder onto netlify.com after running `npm run build`, or connect the repo with build command `npm run build` and publish directory `dist`.

## Editing content

All text (name, bio, tech stack, projects, contact links) lives in `src/data.js` — edit that one file to update the site.
