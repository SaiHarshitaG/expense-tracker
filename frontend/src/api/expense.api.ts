import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const createExpense = async (data: any) => {
  return api.post("/expenses", data, {
    headers: {
      "Idempotency-Key": crypto.randomUUID(),
    },
  });
};

export const fetchExpenses = async (params: any) => {
  return api.get("/expenses", { params });
};
