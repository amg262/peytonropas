# peytonropas

A small static site for Peyton. No build step — plain HTML, CSS, and one JS file.

## Local preview

```bash
python3 -m http.server 3000
```

Then open http://localhost:3000

## Adding a photo

The hero has an optional portrait slot. To use it:

1. Save the image (one she's fine with being on a public page) to `assets/peyton.jpg`
2. In `index.html`, remove the `hidden` attribute from `<figure class="portrait" hidden>`

## Editing the compliments

They live in the `lines` array at the top of `script.js`. Add or swap freely.

## Deploy

Static site, no framework. Vercel serves the repo root as-is.
