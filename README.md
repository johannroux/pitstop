# Pitstop

The marketplace for armpit lovers — MVP static site.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Deploy to Cloudflare Pages

1. Connect this repository in the Cloudflare Pages dashboard.
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy.

Node.js 22+ is required (`engines` in `package.json`).

## Content

- Posts and creators: `src/data/*.json` (includes `imagePrompt` fields for future asset generation)
- Concepts: `src/content/concepts/*.md`

Replace `imageUrl` values with local paths under `public/images/` when you generate real assets.

## Docs

See [docs/PRD.md](docs/PRD.md) for product requirements.
