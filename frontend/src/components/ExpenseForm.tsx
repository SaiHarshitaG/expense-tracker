import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpense } from "../api/expense.api";

export default function ExpenseForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const mutation = useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      setForm({ amount: "", category: "", description: "", date: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      ...form,
      amount: Number(form.amount),
      date: new Date(form.date).toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">
        Add Expense
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="number"
          placeholder="Amount"
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Category"
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Description"
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="date"
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Saving..." : "Add Expense"}
      </button>

      {mutation.isError && (
        <p className="text-red-500">Error submitting expense</p>
      )}
    </form>
  );
}
