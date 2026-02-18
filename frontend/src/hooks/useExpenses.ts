import { useQuery } from "@tanstack/react-query";
import { fetchExpenses } from "../api/expense.api";

export const useExpenses = (category: string, sort: string) => {
  return useQuery({
    queryKey: ["expenses", category, sort],
    queryFn: async () => {
      const res = await fetchExpenses({
        category: category || undefined,
        sort: sort || undefined,
      });
      return res.data;
    },
  });
};
