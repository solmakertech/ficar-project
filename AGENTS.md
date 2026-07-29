# AGENTS.md

## Project Structure
pnpm+Turborepo monorepo (`pnpm-workspace.yaml` → `apps/*`, `packages/*`).
- **`apps/api`** — NestJS 11 (CommonJS, SWC builder). Entry: `src/main.ts`, port 3001.
- **`apps/web`** — Next.js 16 App Router, React 19, Tailwind v4. Port 3000.
- **`apps/docs`** — Next.js 16. Port 3001 (conflicts with api in local dev without Docker).
- **`packages/database`** — Prisma schema only (`packages/database/prisma/schema.prisma`). Output to shared `node_modules/.prisma/client`.
- **`packages/ui`** — `@repo/ui` shared React components (button, card, code).
- **`packages/eslint-config`** — ESLint presets (`base`, `next-js`, `react-internal`).
- **`packages/typescript-config`** — TSConfig presets (`base`, `nextjs`, `react-library`).
- **`packages/utils`** — Empty.

## Commands (run from root unless noted)
- `npm run dev` — `turbo run dev` (all apps in parallel).
- `npm run build` — `turbo run build`.
- `npm run lint` — `turbo run lint`.
- `npm run check-types` — `turbo run check-types`.
- `npm run format` — Prettier across `*.{ts,tsx,md}`.
- `npm run docker:dev` — `docker compose -f docker-compose.dev.yml up --build`.
- `npm run prisma:generate` — `prisma generate --config=./prisma.config.ts`.
- `npm run prisma:migrate` — `prisma migrate dev --config=./prisma.config.ts`.
- **API only** (`cd apps/api`): `npm run start:dev`, `npm run test`, `npm run test:e2e`, `npm run prisma:studio`.
- **Web only** (`cd apps/web`): `npm run dev`, `npm run build`.
- **API typecheck**: `npx nest build` (SWC, no tsc --noEmit available; use `nest build` instead).
- **Order**: `lint → build` works. No strict order required between lint/typecheck/test.

## Package Manager
- **Root**: pnpm v9 (`packageManager` in root `package.json`).

## Testing
- **API**: Jest (ts-jest), tests alongside source as `*.spec.ts`. E2E in `apps/api/test/`. Run: `npm run test` / `npm run test:e2e` from `apps/api/`.
- **Web/docs**: No test framework configured.

## Docker Quirks
- `docker-compose.yml` and `docker-compose.dev.yml` use `apps/api` and `apps/web`.
- Dockerfiles use **pnpm** (`corepack`, `--filter=`), not npm. If adding deps, update `pnpm-lock.yaml` (or run `pnpm install`).
- Prisma runs with `--config=../../prisma.config.ts` from `apps/api/`.

## Key Conventions
- Conventional Commits: `feat:`, `chore:`, etc.
- NestJS conventions (decorators, modules, PascalCase classes, camelCase methods/vars).
- API ESLint disables `no-explicit-any`, warns on `no-floating-promises` and `no-unsafe-argument`.
- Tailwind v4 (PostCSS plugin `@tailwindcss/postcss`, no `tailwind.config`).
- `.env.exemplo` → copy to `.env`, fill `DATABASE_URL`.
- Only `FichaCatalografica` model in Prisma so far.
