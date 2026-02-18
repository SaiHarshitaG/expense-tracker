import type { Expense } from "../types/expense.types";

interface Props {
  expenses?: Expense[];
  total?: number;
}

export default function ExpenseList({ expenses, total }: Props) {
  const safeExpenses = expenses ?? [];
  const safeTotal = total ?? 0;

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-gray-700">
        Expenses
      </h2>

      <p className="text-lg font-bold">
        Total: ₹{safeTotal}
      </p>

      {safeExpenses.length === 0 ? (
        <p className="text-gray-500">No expenses found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border text-right">Amount</th>
              </tr>
            </thead>

            <tbody>
              {safeExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="p-3 border">
                    {new Date(expense.date).toLocaleDateString()}
                  </td>
                  <td className="p-3 border">{expense.category}</td>
                  <td className="p-3 border">
                    {expense.description || "-"}
                  </td>
                  <td className="p-3 border text-right font-medium">
                    ₹{Number(expense.amount)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}
