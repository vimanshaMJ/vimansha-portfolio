# Vimansha Jayarathna — Portfolio

Personal portfolio built with **Next.js 15 (App Router)**, **TypeScript** and **CSS Modules**,
statically exported and hosted on GitHub Pages.

## Scripts

| Command             | What it does                                  |
|---------------------|-----------------------------------------------|
| `npm run dev`       | Start the dev server at http://localhost:3000 |
| `npm run build`     | Build and export the static site to `out/`    |
| `npm start`         | Serve the exported `out/` folder locally      |
| `npm run lint`      | Run ESLint                                    |
| `npm run typecheck` | Run the TypeScript compiler (no emit)         |

## Project structure

```
.
├── public/                 # Static assets served from the site root
│   ├── photo.jpg
│   └── resume.pdf
├── src/
│   ├── app/                # App Router: layout, page, global styles
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Experience, Skills, Projects, Contact
│   │   └── ui/             # Reusable pieces (Section, Reveal, TechTags, Icons, ...)
│   ├── data/               # All site content (edit text here, not in components)
│   ├── hooks/              # useInView, useScrolled, useActiveSection
│   ├── lib/                # Small utilities (cn)
│   └── types/              # Shared TypeScript types
├── .github/workflows/      # GitHub Pages deployment
├── next.config.mjs         # output: 'export'
└── GIT_WORKFLOW.md         # Git / remotes cheat sheet
```

Each component has a co-located `*.module.css`. Design tokens (colors, fonts) live in
`src/app/globals.css` and `src/app/layout.tsx`.

## Updating content

Edit the files in `src/data/` — e.g. `experience.ts`, `projects.ts`, `skills.ts`, `site.ts`
(contact details, résumé path). Project demo/GitHub links are `'#'` placeholders in `projects.ts`.

## Deployment

The site is served from a subpath (`https://vimanshamj.github.io/vimansha-portfolio/`), so the
workflow builds with `BASE_PATH=/vimansha-portfolio`. Local `npm run dev` / `npm run build`
run at the root and need no setting. If you rename the repo, update `BASE_PATH` in the workflow.
Use `withBasePath()` from `src/lib/paths.ts` for any plain `<a>`/`<img>` URL pointing into `public/`.

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/`.
One-time setup: in the GitHub repo go to **Settings → Pages → Build and deployment → Source**
and choose **GitHub Actions**.
