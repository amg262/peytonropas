# peytonropas.com

Portfolio site for Peyton Ropas — graphic design and event collateral.

Static: plain HTML, CSS and one JS file. No build step, no dependencies.

## Local preview

```bash
npx -y serve -l 3111 .
```

Then open http://localhost:3111

## Layout

```
index.html              the site
styles.css              all styling
script.js               scroll reveal + sticky-bar hairline
assets/
  favicon.svg
  work/                 portfolio imagery (web-optimised copies)
peyton-pours-brand-kit/ the full Peyton Pours brand package (source of truth)
print-nophone/          press-ready business cards
FREELANCE-STRATEGY.md   positioning and promotion plan
```

## Editing

- **Projects** — each is an `<article class="project">` in `index.html`. Copy one to add a third.
- **Services** — the three `.card` blocks under `#services`.
- **Contact** — email lives in the `.contact__email` link and the `#contact` section.

## Images

`assets/work/` holds web-sized copies. The originals stay in
`peyton-pours-brand-kit/` and at the repo root. When replacing a portfolio
image, keep the long edge around 1500px and export JPEG for anything with
gradients — the two Cousins Beach menus drop from ~2.8 MB to ~250 KB that way
with no visible loss.

## Deploy

Vercel serves the repo root as-is. No framework, no build command.
