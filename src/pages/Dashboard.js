import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchExpenses } from "../services/api";
import ExpenseForm from "../components/ExpenseForm";
import BudgetSettings from "../components/BudgetSettings";
import ExpenseDistributionChart from "../components/charts/ExpenseDistributionChart";
import ExpenseTrendChart from "../components/charts/ExpenseTrendChart";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const getExpenses = async () => {
      try {
        setLoading(true);
        const { data } = await fetchExpenses();
        setExpenses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        setLoading(false);
      }
    };

    getExpenses();
  }, [navigate]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Expense Tracker Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Add a New Expense
              </Typography>
              <ExpenseForm />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Set Your Budget
              </Typography>
              <BudgetSettings />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          {loading ? (
            <Typography align="center" variant="h6">
              Loading expenses...
            </Typography>
          ) : (
            <>
              <Card>
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    align="center"
                    gutterBottom
                  >
                    Your Expenses
                  </Typography>
                  <ul>
                    {expenses.map((expense) => (
                      <li key={expense._id}>
                        {expense.description} - ${expense.amount} (
                        {expense.category})
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Grid container spacing={4} mt={4}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        Expense Distribution by Category
                      </Typography>
                      <Box mt={2}>
                        <ExpenseDistributionChart expenses={expenses} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        Expense Trend Over Time
                      </Typography>
                      <Box mt={2}>
                        <ExpenseTrendChart expenses={expenses} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
