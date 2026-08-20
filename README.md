# Dimension Group — Next.js site

New design direction: paper-white + grid-paper background, cobalt blue / copper accent,
Poppins sans-serif across display, body, labels, and data. Three.js renders a rotating
wireframe "yield ribbon" (torus knot) in the hero as the signature visual — mouse-reactive,
representing compounding growth. Anime.js drives scroll-triggered reveals across every section.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- three.js — hero visual (`components/Hero3D.tsx`)
- animejs — scroll reveals (`components/Reveal.tsx`)

## Structure

```
app/
  layout.tsx     — fonts + metadata
  page.tsx        — full one-page site (sections match dimensiongroup.co.in nav)
  globals.css
components/
  Nav.tsx
  Ticker.tsx
  Hero3D.tsx
  Reveal.tsx
  ServiceCard.tsx
```
