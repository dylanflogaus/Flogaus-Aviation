# Flogaus Aviation

Marketing site for flight instruction in the Wilmington, DE area. Built with React, Vite, and React Router.

## Development

```bash
npm ci
cp .env.example .env   # set VITE_CAL_LINK / VITE_CAL_INTRO_LINK as needed
npm run dev
```

## Build

```bash
npm run build
```

Production output is written to `dist/`, including prerendered HTML for key routes (see `scripts/prerender.ts`).

To preview the production build locally with the same static asset behavior as production:

```bash
npm run preview
```

## Deploy

**Production** is the Cloudflare Worker [`flogaus-aviation`](https://developers.cloudflare.com/workers/), configured in [`wrangler.jsonc`](./wrangler.jsonc). Merges to `main` deploy automatically via [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) (build command: `npm run build`).

Do **not** deploy manually with `wrangler deploy`. Workers Builds is the only supported production deploy path.

Static assets are served from `./dist` with SPA-friendly routing (`html_handling`, `not_found_handling`) in `wrangler.jsonc`. There are no Netlify-style `_redirects` or `_headers` files in this repo.

Optional: [`docker-compose.yml`](./docker-compose.yml) runs the built site behind nginx for local container testing only; it is not used for production.
