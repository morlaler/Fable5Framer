# Fable5Framer — MATTTER® Studio Clone

High-fidelity recreation of the MATTTER® creative-studio Framer template
(https://mattter.framer.website/), rebuilt from reference screenshots as a
React single-page application.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Framer Motion](https://www.framer.com/motion/) for scroll-linked and layout animations
- Plain CSS design tokens (no framework) mirroring the original design system

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Structure

```
public/assets/      images, videos, fonts and SVG logos used by the site
src/
  components/      shared UI (Navbar, Footer, Marquee, FitText, …)
  sections/        homepage sections (Hero, Services, Pricing, FAQ, …)
  pages/           routes: /, /studio, /projects, /blog, /contact
  data/site.ts     all copy and content data in one place
  styles/          global design tokens and typography scale
```
