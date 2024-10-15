import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://camo-budget.onrender.com/api",
});

// Adding token to request headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Handle expired tokens (or unauthorized access)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Remove invalid token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// User Authentication APIs
export const createUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

// Expense APIs
export const fetchExpenses = () => API.get("/expenses");
export const createExpense = (newExpense) => API.post("/expenses", newExpense);
