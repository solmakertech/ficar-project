# Repository Guidelines

## Project Structure & Module Organization
- `backend/`: NestJS API. Source in `backend/src`, tests in `backend/test`.
- `frontend/`: Next.js app router. Source in `frontend/src/app`, static assets in `frontend/public`.
- `database/`: Prisma schema and migrations in `database/prisma` plus DB docs in `database/README.md`.
- Root: `docker-compose.yml` and `docker-compose.dev.yml` for local orchestration, `.env.exemplo` for env template.

## Build, Test, and Development Commands
Run commands from root unless otherwise noted.
- `npm run docker:dev` (root): start full stack with Docker Compose.
- `npm run prisma:generate` (root or `backend/`): generate Prisma client from `database/prisma/schema.prisma`.
- `npm run prisma:migrate` (root or `backend/`): apply Prisma migrations.
- `npm run start:dev` (`backend/`): run NestJS API with watch mode.
- `npm run dev` (`frontend/`): run Next.js dev server.
- `npm run build` (`backend/` or `frontend/`): build for production. Backend uses SWC (`nest build`).

## Coding Style & Naming Conventions
- TypeScript across backend and frontend.
- Backend formatting uses Prettier: `npm run format` in `backend/`.
- Linting: `npm run lint` in `backend/` and `frontend/`.
- Follow NestJS and Next.js conventions. Use `PascalCase` for classes and `camelCase` for variables/functions. Tests use `*.spec.ts`.

## Testing Guidelines
- Backend uses Jest (`npm run test`, `test:watch`, `test:cov`, `test:e2e`).
- Place unit tests in `backend/src` with `*.spec.ts`; e2e tests live in `backend/test`.
- Frontend has no test harness configured yet; add tests only after choosing a framework.

## Commit & Pull Request Guidelines
- Git history shows a loose Conventional Commits pattern: `feat:`, `chore:` (e.g., `feat: estrutura inicial...`).
- Prefer Conventional Commit prefixes and short, specific messages.
- PRs should include: summary, how to test, and screenshots for UI changes. Link relevant issues if any.

## Architecture Overview
- Client requests flow `frontend/` (Next.js) → `backend/` (NestJS API) → `database/` (MariaDB via Prisma).
- The backend owns business rules and data access; the frontend focuses on UI and API integration.
- Docker Compose is the primary local orchestration path for the full stack.

## Security & Configuration Tips
- Keep secrets out of Git; copy `.env.exemplo` to `.env` and fill values locally.
- Update Prisma schema changes with a migration and regenerate the client.
