# peytonropas

Two static pages, no build step — plain HTML, CSS and one JS file each.

| URL | What it is |
|---|---|
| `/` | A small personal page for Peyton. `noindex`. |
| `/design` | Her design portfolio — event collateral and brand identity. Indexable. |

The two are independent: separate HTML, CSS and JS. Editing one cannot affect
the other. They share only `assets/`.

## Local preview

```bash
npx -y serve -l 3111 .
```

Then open http://localhost:3111 and http://localhost:3111/design

## Layout

```
index.html              home page
styles.css              home styling
script.js               home compliments + petals
design/
  index.html            portfolio
  styles.css            portfolio styling
  script.js             scroll reveal + sticky-bar hairline
assets/
  favicon.svg
  work/                 portfolio imagery (web-optimised)
peyton-pours-brand-kit/ the full Peyton Pours brand package (source of truth)
print-nophone/          press-ready business cards
FREELANCE-STRATEGY.md   positioning and promotion plan
```

## Asset paths — read before moving files

`design/index.html` references its own CSS, JS and images with **root-absolute**
paths (`/design/styles.css`, `/assets/work/…`), not relative ones.

This is deliberate. Vercel serves the page at `/design` with no trailing slash,
so a relative `styles.css` resolves to `/styles.css` — the *home page's*
stylesheet. That file exists, so it returns 200 rather than 404 and the wrong
CSS loads silently. Keep these paths absolute.

## Editing the portfolio

- **Projects** — each is an `<article class="project">`. Copy one to add a third.
- **Services** — the three `.card` blocks under `#services`.
- **Contact** — the `.contact__email` link.

## Images

`assets/work/` holds web-sized copies. Originals stay in
`peyton-pours-brand-kit/` and at the repo root. When replacing one, keep the
long edge near 1500px and export JPEG for anything with gradients — the two
Cousins Beach menus drop from ~4.5 MB combined to ~536 KB that way with no
visible loss.

## Discoverability

Nothing links to `/design` yet — it is reachable only by typing the URL. Add a
link from the home page, or point social profiles straight at
`peytonropas.com/design`.

## Deploy

Git-connected to Vercel. Pushing to `main` deploys to production. No framework,
no build command.
