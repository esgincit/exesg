# ESG Site Build Conventions

Static-export Next.js (app router) migration of the old Bootstrap site. Target: professional, modern, clean.

## Stack & rules
- Plain JSX (no TypeScript), Tailwind v4 utility classes only (globals.css has `@import "tailwindcss"`).
- NO client components, no `'use client'`, no useEffect/useState — static pages only. Links use relative `href="/route/"` (with trailing slash) or plain `<a>` inline anchors.
- Every page: `export const metadata = { title: "...", description: "..." }` + default export function with PascalCase name.
- Do NOT edit app/layout.jsx, components/, app/page.jsx, app/contact/, app/clients/ — those are done.
- Do NOT invent new marketing content; migrate copy from the old page. It is OK to split long paragraphs and tighten boilerplate navigation words, but keep all substantive facts, service lists, contact details and section headings.
- Single-quote strings with apostrophes need escaping in JSX text (&apos; or curly quotes) — e.g. "Let's" → Let&apos;s. Watch for raw `>` or `{` `}` in text.

## Available building blocks (in `components/`)
- `PageHero({ title, subtitle, image })` — banner at top. `image` is optional; use the matching `img/*_small.jpg` asset when one exists. Keep every non-hero section below max-w-7xl wrapper: `mx-auto max-w-7xl px-4 py-14`.

## Layout pattern for a page
1. `<PageHero title=... subtitle=... image=... />`
2. One or more `<section className="mx-auto max-w-7xl px-4 py-14">` blocks.
3. Section headings: `text-2xl font-bold text-brand sm:text-3xl` with `<div className="mb-8 h-1 w-16 bg-accent" />` underline.
4. Cards: `rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg` if a grid is warranted; bullet lists: `space-y-2 text-gray-700` inside `ul`.
5. Two-column detail layout: `grid gap-10 md:grid-cols-3` with image/right column in `md:col-span-1` (`rounded-lg shadow-md` img) and text in `md:col-span-2`.

## Brand tokens (Tailwind, from globals @theme)
- `text-brand`, `bg-brand`, `hover:bg-brand-dark`, `bg-brand-light`, `bg-accent` / `text-accent` (amber).

## Source content
- Raw text: `site-snapshot/text/<page>.txt` (first ~28 lines are the boilerplate nav; real content follows).
- Original HTML (for structure/nuance): `site-snapshot/<page>.html`.
- Images: copy already exists under `public/img/…` — reference with `src="/img/…"`. Use `<img>` tags (images are unoptimized in static export).

## Routes & files mapping (file → route → source text)
- app/about/page.jsx → /about/ → about.html.txt
- app/whyus/page.jsx → /whyus/ → whyus.html.txt
- app/wesupport/page.jsx → /wesupport/ → wesupport.html.txt
- app/roadmap/page.jsx → /roadmap/ → roadmap.html.txt
- app/staff-aug/page.jsx → /staff-aug/ → staff_aug.html.txt
- app/managed-services/page.jsx → /managed-services/ → man_services.html.txt
- app/value-added/page.jsx → /value-added/ → value_added.html.txt
- app/trainings/page.jsx → /trainings/ → trainings.html.txt
- app/staffing/page.jsx → /staffing/ → staff_consulting.html.txt
- app/sap/page.jsx → /sap/ → sap.html.txt
- app/oracle/page.jsx → /oracle/ → oracle.html.txt
- app/microsoft/page.jsx → /microsoft/ → ms.html.txt
- app/cloud/page.jsx → /cloud/ → cloud.html.txt
- app/big-data/page.jsx → /big-data/ → bigdata.html.txt
- app/bi-technologies/page.jsx → /bi-technologies/ → bi_technologies.html.txt
- app/ui-technologies/page.jsx → /ui-technologies/ → ui_technologies.html.txt
- app/rpa/page.jsx → /rpa/ → rpa.html.txt
- app/revpro/page.jsx → /revpro/ → revpro.html.txt
- app/careers/page.jsx → /careers/ → careers.html.txt

## Cross-links
The old pages link between themselves; update links to new routes: e.g. staff Augmentation → /staff-aug/, IT Staffing/Consulting → /staffing/, Contact → /contact/. Only add explicit "Related services" links if the old page clearly referenced them.
