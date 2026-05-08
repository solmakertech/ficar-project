import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not set.");
    }

    const url = new URL(databaseUrl);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const adapter = new PrismaMariaDb({
      host: url.hostname,
      port: Number(url.port || 3306),
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname.replace("/", ""),
      connectionLimit: 5,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
