# Peyton Pours — Brand Kit

Portfolio-ready identity package. Open `index.html` in any browser — it is a self-contained case-study page (no build step, no server needed).

## Putting it on a portfolio site

**Option A — drop the folder in.** Upload the whole `peyton-pours-brand-kit/` folder to your site and link to `index.html`. It works as-is on Vercel, Netlify, GitHub Pages, Squarespace file hosting, etc.

**Option B — pull the pieces out.** Use the assets directly in your existing case-study layout:
- `logo/*.svg` — scalable, crisp at any size, tiny file size. Use these on the web.
- `logo/*.png` — fallbacks for tools that don't accept SVG.
- `business-cards/*.png`, `bar-sign/bar-sign-8x10.png` — mockup imagery.

## Contents

```
index.html              self-contained case-study page
logo/
  martini-mark.svg      primary mark
  icon-badge.svg        avatar / social icon
  logo-lockup.svg       mark + wordmark + tagline
  favicon.svg           browser icon
  *.png                 raster fallbacks
business-cards/         light + dark, front + back, 300 DPI with bleed
bar-sign/               8 × 10 framed bar sign
website/                deployable one-page site
brand-tokens.md         all colors, fonts and values in text
```

## Fonts

Cormorant Garamond (display) and Work Sans (body) — both free on Google Fonts. `index.html` loads them from Google's CDN.

## Credits line

> **Peyton Pours** — brand identity, collateral and website for a private-event bartending service in Lake Country, Wisconsin.
