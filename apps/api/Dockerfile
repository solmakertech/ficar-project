FROM node:22.14.0 AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/
COPY packages/database/package.json ./packages/database/

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm --filter=api build

FROM node:22.14.0
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3001

CMD ["node", "dist/main.js"]
