import * as expenseService from "../services/expense.service.js";
export const createExpense = async (req, res) => {
    const idempotencyKey = req.header("Idempotency-Key");
    const expense = await expenseService.createExpense(req.body, idempotencyKey || undefined);
    res.status(201).json(expense);
};
export const getExpenses = async (req, res) => {
    const { category, sort } = req.query;
    const expenses = await expenseService.getExpenses(category, sort);
    res.json(expenses);
};
//# sourceMappingURL=expense.controller.js.map