FROM node:22.14.0
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/database/package.json ./packages/database/

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm --filter=web build

EXPOSE 3000

CMD ["pnpm", "--filter=web", "run", "start"]
