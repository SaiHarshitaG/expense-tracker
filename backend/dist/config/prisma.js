import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";
const sqlite = new Database("./prisma/dev.db");
const adapter = new PrismaBetterSqlite3({
    url: "file:./prisma/dev.db",
});
export const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"]
});
//# sourceMappingURL=prisma.js.map