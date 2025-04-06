# Banco de Dados - Projeto FICAT

Este diretório contém os arquivos de configuração e inicialização do banco de dados MariaDB usado no projeto.

## Estrutura

- `init/init.sql`: Script SQL executado automaticamente na primeira inicialização do banco de dados.
- `prisma/`: Contém o schema e as migrations utilizadas pelo Prisma.

## Comandos úteis

Para gerar nova migration com Prisma:

```bash
npx prisma migrate dev --name nome-da-migration
