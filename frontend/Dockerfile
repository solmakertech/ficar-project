# Usa uma imagem do Node.js LTS
FROM node:22.14.0

# Define o diretório dew trabalho
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install --production

# Copia o restante dos arquivos
COPY . .

# Build do frontend
RUN npm run build

# Expõe a porta usada pelo Next.js
EXPOSE 3000

# Comando para iniciar o frontend
CMD ["npm", "run", "start"]
