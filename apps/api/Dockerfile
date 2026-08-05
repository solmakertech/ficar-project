# ==========================================
# 1. Base / Preparação de Dependências
# ==========================================
FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# ==========================================
# 2. Instalação e Build
# ==========================================
FROM base AS build
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/
COPY packages/database/package.json ./packages/database/

# Instala TODAS as dependências necessárias para compilar (prod + dev)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

# Compila a aplicação
RUN pnpm --filter=api build

# Isola apenas a aplicação api e suas dependências de PRODUÇÃO numa pasta separada
RUN pnpm --filter=api --prod deploy /prod/api

# ==========================================
# 3. Imagem Final de Produção (Enxuta)
# ==========================================
FROM node:24-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copia apenas o que foi gerado pelo pnpm deploy (código + node_modules de prod)
COPY --from=build /prod/api/node_modules ./node_modules
COPY --from=build /prod/api/dist ./dist
COPY --from=build /prod/api/package.json ./package.json

# Segurança: Executa a aplicação como usuário sem privilégios root
USER node

EXPOSE 3001

CMD ["node", "dist/main.js"]