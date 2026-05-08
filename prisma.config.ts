import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "database/prisma/schema.prisma",
  migrations: {
    path: "database/prisma/migrations",
  },
  datasource: {
    // Conexão direta (sem Prisma Accelerate) para evitar custos adicionais.
    url: env("DATABASE_URL"),
  },
});
