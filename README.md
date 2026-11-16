# Candy birthday site (React + React Router + Tailwind CSS v4)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

Routes: `/` Home, `/memories`, `/letter`.

## Where things live
- `src/styles/tailwind.css`  Tailwind theme: brown palette, fonts (Sacramento + DM Sans), 700px breakpoint, animations, heart clip-path.
- `src/lib/ui.js`            Shared Tailwind class strings (buttons, headings, reveal animation, section spacing).
- `src/components/`, `src/pages/`, `src/layout/`   UI, styled only with Tailwind utility classes.
- `src/hooks/`               Logic (confetti, scroll reveal, YouTube music).
- `src/data/memories.js`     Photos, text, song id, letter. Edit your content here.

## Changing the look
Colours, fonts and animations are defined once in `@theme` in `src/styles/tailwind.css`.
Change e.g. `--color-saddle` and every `text-saddle` / `bg-saddle` updates.
Fonts load from the `<link>` in `index.html`.

## Hosting
`public/_redirects` makes deep links work on Netlify. On other hosts route all paths to `index.html`.
