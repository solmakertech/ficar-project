# Fase 1: Construção
# Usa uma imagem do Node.js LTS
FROM node:22.14.0 AS build

# Define o diretório de trabalho
WORKDIR /app

COPY package*.json ./
# Instala as dependências
RUN npm install --only=production
# Copia o restante dos arquivos
COPY . .

RUN npm run lint
# Copia os arquivos de dependências e instala
RUN npm run build

# Fase 2: Execução (Runtime) - Usa imagem menor
# Usa uma imagem do Node.js LTS
FROM node:22.14.0

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

EXPOSE 3001

CMD ["node", "dist/main.js"]