# AJCA — SSAR website rebuild

Multi-page React + TypeScript + Tailwind CSS rebuild of the public SSAR Staffing Solutions website, powered by Vite. Tailwind is installed locally through npm and integrated with the official `@tailwindcss/vite` plugin; no CDN is used.

## Structure

- `src/pages` — page-level route components
- `src/components` — shared layout, forms, icons, and interactive UI
- `src/services` — contact submission logic
- `src/data` — reusable website content
- `src/types` — shared TypeScript types
- `public/assets` — local website images

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```
# ajca
