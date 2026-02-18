import { Prisma } from "@prisma/client";
import { prisma } from "../config/prisma.js";

export const createExpense = async (data: any, idempotencyKey?: string) => {
  if (idempotencyKey) {
    const existing = await prisma.expense.findUnique({
      where: { idempotency_key: idempotencyKey }
    });

    if (existing) return existing;
  }

  return prisma.expense.create({
    data:{
      amount: new Prisma.Decimal(data.amount),
      category: data.category,
      description: data.description ?? "",
      date: new Date(data.date),
      idempotency_key: idempotencyKey
    }
  });
};

export const getExpenses = async (category?: string,  sort?: string) => {
  return prisma.expense.findMany({
    where: category ? { category } : {},
    orderBy: sort === "date_desc"
        ? { date: "desc" }
        : undefined
  });
};
