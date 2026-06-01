# Aethria Landing

Static Astro landing page for Aethria, with English and Vietnamese localized routes.

## Routes

- `/` redirects users to `/en/` or `/vi/` from saved language preference or browser language.
- `/en/` English landing page.
- `/vi/` Vietnamese landing page.
- `/robots.txt` crawler policy.
- `/sitemap.xml` sitemap for localized landing pages.

## Environment

Create `.env` from `.env.example` and set:

```sh
PUBLIC_SITE_URL=https://landing.example.com
PUBLIC_CHAT_URL=https://chat.example.com
```

`PUBLIC_SITE_URL` is required for canonical URLs, sitemap, robots, Open Graph, Twitter cards, and structured data.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```
