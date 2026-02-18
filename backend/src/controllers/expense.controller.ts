import { Request, Response } from "express";
import * as expenseService from "../services/expense.service.js";

export const createExpense = async (req: Request, res: Response) => {
    const idempotencyKey = req.header("Idempotency-Key");

    const expense = await expenseService.createExpense(
        req.body,
        idempotencyKey || undefined
    );

    res.status(201).json(expense);
};

export const getExpenses = async (req: Request, res: Response) => {
    const { category, sort } = req.query;
    const expenses = await expenseService.getExpenses(category as string, sort as string);
    res.json(expenses);
};
