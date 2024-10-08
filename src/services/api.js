import axios from "axios";

const API = axios.create({
  baseURL: "0.0.0.0:5000/api",
});

// Adding token to request headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// User Authentication APIs
export const createUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

// Expense APIs
export const fetchExpenses = () => API.get("/expenses");
export const createExpense = (newExpense) => API.post("/expenses", newExpense);
