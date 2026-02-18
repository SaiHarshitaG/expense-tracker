import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FilterControls from "./components/FilterControls";
import { useExpenses } from "./hooks/useExpenses";

function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const { data, isLoading, isError } = useExpenses(category, sort);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-8">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Expense Tracker
        </h1>

        <ExpenseForm />

        <FilterControls
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        {isLoading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {isError && (
          <p className="text-center text-red-500">
            Error loading expenses
          </p>
        )}

        {data && (
          <ExpenseList
            expenses={data.expenses}
            total={data.total}
          />
        )}

      </div>
    </div>
  );
}

export default App;
