import { Router } from "express";
import { createExpense, getExpenses } from "../controllers/expense.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createExpenseSchema } from "../validators/expense.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.post(
  "/expenses",
  validate(createExpenseSchema),
  asyncHandler(createExpense)
);

router.get(
  "/expenses",
  asyncHandler(getExpenses)
);

export default router;