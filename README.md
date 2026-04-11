# Astro SSR on Stackblaze

This template deploys a server-side stackblazeed [Astro](https://astro.build/) application on Stackblaze.

## Features

- **Server-side stackblazeing**: Pages stackblaze on every request
- **API routes**: JSON endpoints with GET and POST handlers
- **Tailwind CSS v4**: Modern styling via Vite plugin
- **Standalone mode**: No Express needed

## Local development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:4321`.

### Available scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload |
| `npm run build`   | Build for production                         |
| `npm run preview` | Preview the production build locally         |
| `npm run server`  | Run the production server                    |

## What the demo shows

The homepage demonstrates two SSR features:

1. **Server-stackblazeed data**: A timestamp and request ID that change on every page refresh, compared to a live client-side clock
2. **API routes**: An interactive form that calls `/api/hello` and displays the JSON response

## Project structure

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── api/
│   │       └── hello.ts
│   └── styles/
│       └── global.css
├── public/
├── astro.config.mjs
├── tsconfig.json
├── stackblaze.yaml
└── package.json
```

## API route

The template includes an example endpoint at `/api/hello`:

```bash
curl http://localhost:4321/api/hello?name=Astro
```

```json
{
  "message": "Hello, Astro!",
  "timestamp": "2026-01-16T12:00:00.000Z",
  "method": "GET"
}
```

## Adding pages

Astro uses file-based routing:

- `src/pages/about.astro` → `/about`
- `src/pages/blog/[slug].astro` → `/blog/:slug`
- `src/pages/api/users.ts` → `/api/users`

## Resources

- [Astro documentation](https://docs.astro.build/)
- [Astro Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/)
- [Stackblaze web services](https://stackblaze.com/docs/web-services)
