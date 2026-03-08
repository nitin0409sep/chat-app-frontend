# Chat App Frontend

A real-time chat application frontend built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | React framework (App Router) |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Biome | 2.4.6 | Linter, formatter, and code assist |
| pnpm | - | Package manager |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script | Command | Description |
|---|---|---|
| `pnpm dev` | `next dev` | Start the development server with hot reload |
| `pnpm build` | `next build` | Create an optimized production build |
| `pnpm start` | `next start` | Start the production server (run `build` first) |
| `pnpm lint` | `biome check --reporter=summary` | Run linter + formatter checks and show a summary report |
| `pnpm lint:fix` | `biome check --fix` | Auto-fix all safe lint and format issues |
| `pnpm lint:unsafe` | `biome check --fix --unsafe` | Auto-fix including unsafe fixes (review changes carefully) |
| `pnpm format` | `biome format` | Check formatting without applying changes |
| `pnpm format:fix` | `biome format --fix` | Auto-format all files |
| `pnpm check` | `biome check` | Run full Biome check (lint + format + assist) with detailed output |
| `pnpm check:fix` | `biome check --fix` | Fix all auto-fixable issues |
| `pnpm check:ci` | `biome ci` | CI mode — exits with error code on any issue (use in pipelines) |
| `pnpm type-check` | `tsc --noEmit` | Run TypeScript compiler checks without emitting files |

### Recommended Workflow

```bash
# During development — check for issues
pnpm lint

# Before committing — auto-fix everything
pnpm lint:fix

# In CI/CD pipelines
pnpm check:ci && pnpm type-check
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & Tailwind
├── public/                 # Static assets
├── biome.json              # Biome configuration (lint + format)
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS + Tailwind plugin
├── package.json            # Dependencies & scripts
└── pnpm-lock.yaml          # Dependency lock file
```

## Code Quality

This project uses **Biome** as the single toolchain for linting, formatting, and import organization. See [biome.config.md](biome.config.md) for a detailed breakdown of every rule and configuration option.

### Editor Setup

Install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) for real-time linting and format-on-save.

Add to your VS Code settings (`.vscode/settings.json`):

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": "explicit",
    "quickfix.biome": "explicit"
  }
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Biome Documentation](https://biomejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React 19](https://react.dev)
