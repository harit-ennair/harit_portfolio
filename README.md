# Harit Ennair — Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` and then `npm start`.

## Customize

- `data/portfolio.ts` contains the profile links, navigation, experience, project descriptions, skills, and education.
- `app/page.tsx` contains the page sections and abstract project illustrations.
- `app/globals.css` contains the visual system and responsive styles.
- `components/` contains the mobile menu and motion wrapper.
- `app/layout.tsx` contains the page title, description, and Open Graph metadata.

To add a CV download, put a PDF you are comfortable sharing publicly in `public/` (for example, `public/harit-ennair-cv.pdf`) and add a link to `/harit-ennair-cv.pdf` in the page. Anything in `public/` is publicly accessible when deployed.
