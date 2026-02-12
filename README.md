# Quizmaker Frontend

Skeleton React frontend for the Quizmaker app.

## Tech stack

- **Node.js**: 22+
- **React**: 19
- **Build**: Vite 6
- **Styling**: Tailwind CSS 4, ShadCN (components ready via `components.json`)
- **Language**: TypeScript

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Runs the app at **http://localhost:5173**. The dev server proxies `/api` to the backend at `http://localhost:8080`, so start the backend first to see the welcome message.

## Build

```bash
npm run build
```

## Adding ShadCN components

The project is configured for ShadCN UI. Add components with:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

See [ShadCN installation](https://ui.shadcn.com/docs/installation/vite) for details.
