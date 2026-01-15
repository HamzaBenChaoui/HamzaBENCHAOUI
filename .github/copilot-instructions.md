**Purpose**
- **Goal:** Help AI coding agents become productive quickly by summarizing this project's architecture, build/test/debug workflows, conventions, and important files to inspect.

**Quickstart (developer commands)**
- **Install:** `npm install` (project uses a `preinstall` hook with `npx npm-force-resolutions`). See [package.json](package.json).
- **Dev server:** `npm run dev` → starts Astro dev (default port shown in README: `http://localhost:4321`).
- **Build:** `npm run build` → outputs static site to `./dist/`.
- **Preview:** `npm run preview` to serve the production build.

**Big-picture architecture**
- **Framework:** Astro front-end with React components ([astro.config.mjs](astro.config.mjs), [package.json](package.json)).
- **Routing & pages:** Content pages live in `src/pages` (site entry: [src/pages/index.astro](src/pages/index.astro)). Pages use a common layout [src/layouts/Layout.astro](src/layouts/Layout.astro).
- **Component structure:** Reusable UI lives under `src/components` and `src/components/ui`. Home sections live in `src/components/home_sections`.
- **Content system / blog:** Uses `astro:content` with collection schema in [src/content/config.ts](src/content/config.ts). Blog posts are Markdown under `src/content/blog/`.
- **Styling:** Tailwind CSS is used (`src/styles/global.css`), with utility merging via `twMerge` and `clsx`. Helper `cn` is in [src/lib/utils.ts](src/lib/utils.ts).

**Important patterns & project-specific conventions**
- **Client directives:** Components use Astro client hydration directives extensively. Follow existing usage: `client:load`, `client:visible`, `client:idle` as in [src/pages/index.astro](src/pages/index.astro) and [src/layouts/Layout.astro](src/layouts/Layout.astro).
- **Preload & SEO:** `Layout.astro` centralizes SEO constants and preloads critical images; prefer updating constants there to avoid duplication.
- **Vite manualChunks:** Custom chunking logic exists in [astro.config.mjs](astro.config.mjs) to split `three`, `react`, `motion`, and `icons` bundles—be mindful when adding heavy deps.
- **Pinned React versions:** `package.json` uses `resolutions` to pin React/ReactDOM to `19.1.0` — do not change React version without accounting for these resolutions and app behavior on Vercel.
- **Path alias:** `@/` maps to `./src` per [tsconfig.json](tsconfig.json). Use `@/` imports for consistency.

**Integration points & externals**
- **Analytics & performance:** Vercel Analytics and Vercel Speed Insights are included in the layout (see [src/layouts/Layout.astro](src/layouts/Layout.astro)).
- **3D / heavy libs:** `@react-three/fiber` and `@react-three/drei` are present and chunked separately—treat these as optional lazy-loaded/idle components.
- **Forms & validation:** The project includes `react-hook-form` + `zod` (used for contact forms). Search `Contactsection` if you need the exact form implementation.

**Where to look for common tasks**
- **Add a new page:** `src/pages/<name>.astro` and import the shared layout.
- **Add UI component:** `src/components/ui/` for primitives; `src/components/` for page-level compositions.
- **Modify global styles:** [src/styles/global.css](src/styles/global.css).
- **Update content schema:** [src/content/config.ts](src/content/config.ts) controls blog frontmatter validation.

**Notes for editing & pull requests**
- Use the `client:*` hydration consistent with nearby examples. Prefer `client:idle` for decorative elements (StarsCanvas, SplashCursor) and `client:visible` for sections that should hydrate when visible.
- Avoid changing React versions or removing `resolutions` in `package.json` without testing a full build; the codebase expects React 19 APIs.
- When adding heavy runtime features (3D, motion), prefer lazy/idle loading and check `astro.config.mjs` chunk rules.

**Quick file references**
- Layout / global SEO: [src/layouts/Layout.astro](src/layouts/Layout.astro)
- App entry: [src/pages/index.astro](src/pages/index.astro)
- Utilities: [src/lib/utils.ts](src/lib/utils.ts)
- Content schema: [src/content/config.ts](src/content/config.ts)
- Repo config: [package.json](package.json), [astro.config.mjs](astro.config.mjs), [tsconfig.json](tsconfig.json)

If any of these sections are unclear or you want more examples (e.g., where the contact form validation lives, or how the Star background is wired), tell me which area to expand and I'll update this file.
<!-- .github/copilot-instructions.md -->
# Repository-specific Copilot Instructions

Purpose: give AI coding agents the exact, actionable context they need to be productive in this Astro + React + Tailwind portfolio site.

- Project type: Astro static site with React components. Key entry points: `src/pages/*`, `src/layouts/Layout.astro`, and `src/components/`.
- Build & dev commands (use from repo root):
  - `npm install` — install deps (project uses `preinstall` to run `npm-force-resolutions`).
  - `npm run dev` — starts Astro dev server (default port in README: `http://localhost:4321`).
  - `npm run build` — produces production output in `./dist/`.
  - `npm run preview` — preview the production build.

- Important files to read first:
  - [README.md](README.md) — high-level project summary and dev commands.
  - [package.json](package.json) — scripts, `resolutions` (forces React 19.1.0), and core deps.
  - [astro.config.mjs](astro.config.mjs) — site base URL, Vite plugins, and manual chunking rules (see `manualChunks` for `three`, `react`, `motion`, `icons`).
  - [src/layouts/Layout.astro](src/layouts/Layout.astro) — global HTML structure, theme script (localStorage-based), critical preloads, and integrations (Vercel Analytics & Speed Insights).
  - [src/pages/index.astro](src/pages/index.astro) — shows how page-level components are mounted with Astro client directives (`client:load`, `client:visible`, `client:idle`).
  - [src/lib/utils.ts](src/lib/utils.ts) — `cn()` helper (clsx + tailwind-merge) — use it for className merging.

- Project-specific conventions & gotchas (follow these precisely):
  - Absolute imports use the `@/` alias (e.g., `@/styles/global.css`, `@/components/...`). Prefer using the existing alias rather than relative paths.
  - Components are React/TSX under `src/components/` and nested sections under `src/components/home_sections/`. Many components export named components (import accordingly).
  - Astro client hydration directives are used intentionally: `client:load` (immediate), `client:visible` (once visible), `client:idle` (idle). Preserve these when changing where and how components mount.
  - Tailwind utility classes are the primary styling approach. Use `cn()` from `src/lib/utils.ts` when conditionally composing classes.
  - The project pins `react`/`react-dom` via `resolutions` in `package.json`. Avoid changing React versions or removing the resolution without verifying `preinstall` implications.
  - `astro.config.mjs` contains custom `vite.build.rollupOptions.output.manualChunks` logic — changes here affect bundle splitting for heavy libs (`three`, `react`, `motion`, `icons`). Keep modifications minimal and test builds.

- Integration points and external services:
  - Vercel: analytics and speed insights are present in `Layout.astro` and the README notes deployment to Vercel.
  - 3D rendering: `@react-three/fiber` & `@react-three/drei` are used — heavy bundles are intentionally chunked.
  - Forms: `react-hook-form` + `zod` used in contact form components — look for validation schemas in the contact-related components.

- How to make safe changes (recommended workflow for PRs):
  1. Run `npm install` locally (Node 18+ recommended).
 2. Run `npm run dev` and test interactive behavior (check theme toggle, contact form, star background, and animations).
 3. If changing build config, run `npm run build` and `npm run preview` to validate bundles and runtime.
 4. Keep client hydration directives and `@/` imports intact unless you update all callers.

- Examples for the agent when editing code:
  - To add a new UI component: create a TSX in `src/components/ui/`, export a default or named React component, import it into pages/layouts using `@/components/...`, and choose an appropriate `client:*` directive in pages if it needs hydration.
  - To update CSS usage: prefer Tailwind classes and the `cn()` helper; update `src/styles/global.css` sparingly for global tweaks.

- When you are unsure:
  - Read `astro.config.mjs` and `package.json` first (build changes are the highest-risk).
  - Run the dev server to observe behavior before opening a PR.

- Feedback: tell me which area to expand (build, animations, forms, or 3D integration).
