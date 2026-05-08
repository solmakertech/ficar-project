# 📚 FICAT - Sistema de Geração de Fichas Catalográficas

Projeto para geração e futuramente gerenciamento de fichas catalográficas acadêmicas.

## 🧱 Estrutura do Projeto

ficat-project/
│── backend/                # Pasta do NestJS
│   ├── src/                # Código-fonte
│   ├── prisma/             # Migrations e schema do Prisma (se usar)
│   ├── Dockerfile          # Dockerfile do Backend
│   ├── .env                # Variáveis de ambiente do Backend
│   ├── package.json        # Dependências do Backend
│   ├── tsconfig.json       # Configuração do TypeScript
│── frontend/               # Pasta do Next.js
│   ├── src/                # Código-fonte
│   ├── public/             # Assets públicos
│   ├── Dockerfile          # Dockerfile do Frontend
│   ├── .env.local          # Variáveis de ambiente do Frontend
│   ├── package.json        # Dependências do Frontend
│   ├── next.config.js      # Configuração do Next.js
│── database/               # Configuração do Banco de Dados
│   ├── init.sql            # Script de inicialização (opcional)
│── proxy/                  # Configuração do proxy reverso (se necessário)
│   ├── nginx.conf          # Configuração do NGINX (se usado)
│── .gitignore              # Arquivos ignorados no Git
│── docker-compose.yml      # Orquestração dos serviços
│── README.md               # Documentação do projeto

---

## 🚀 Subindo o projeto localmente

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Node.js (para rodar comandos diretamente, se necessário)
- Yarn ou npm

### 🔧 Passos

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ficat-project.git
cd ficat-project

2. Crie um arquivo .env na raiz com o seguinte conteúdo:

# .env (exemplo para desenvolvimento)
# .env (exemplo para desenvolvimento)
DATABASE_URL="mysql://user:password@localhost:3306/fichas_db"
NEXT_PUBLIC_API_URL="http://localhost:3001"
Suba os serviços com Docker Compose


npm run docker:dev
Acesse:

Frontend: http://localhost:3000

Backend (API): http://localhost:3001

🗃️ Banco de Dados
Banco: MariaDB

Gerenciado com Prisma

Arquivo do schema: database/prisma/schema.prisma

Comando para aplicar migrations:

bash
Copiar
Editar
npm run prisma:migrate
📦 Scripts úteis
Na pasta backend:

bash
Copiar
Editar
# Gera cliente Prisma
npm run prisma:generate

# Aplica migrações
npm run prisma:migrate

# Sobe apenas o backend
npm run start:dev
Na pasta frontend:

bash
Copiar
Editar
# Sobe frontend localmente sem Docker
npm run dev
✅ Funcionalidades atuais
 Geração de ficha catalográfica com campos básicos

 API e Frontend funcionando via Docker

 Banco de dados com Prisma

📌 Próximos passos
Autenticação de usuários

Dashboard com estatísticas (por curso, tipo, ano, etc)

Exportação em PDF

Upload de documentos

Administração de registros

👨‍💻 Autor
Desenvolvido por [Jerônimo Ferreira]
Email: [solmakertech@gmail.com]
Empresa: solmakertech.com.br


