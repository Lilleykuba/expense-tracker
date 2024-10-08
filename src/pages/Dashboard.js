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
  CircularProgress,
} from "@mui/material";
import "../styles/Dashboard.css";

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
    <Container maxWidth="lg" className="dashboard-container">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        className="dashboard-title"
      >
        Expense Tracker Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card className="dashboard-card no-background">
            <CardContent>
              <Typography variant="h5" component="div" className="card-title">
                Add a New Expense
              </Typography>
              <ExpenseForm />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className="dashboard-card no-background">
            <CardContent>
              <Typography variant="h5" component="div" className="card-title">
                Set Your Budget
              </Typography>
              <BudgetSettings />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <>
              <Card className="dashboard-card no-background">
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    align="center"
                    gutterBottom
                    className="card-title"
                  >
                    Your Expenses
                  </Typography>
                  <ul className="expense-list">
                    {expenses.map((expense) => (
                      <li key={expense._id} className="expense-item">
                        <Typography variant="body1" className="expense-text">
                          {expense.description} - ${expense.amount} (
                          {expense.category})
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Grid container spacing={4} mt={4}>
                <Grid item xs={12} md={6}>
                  <Card className="dashboard-card no-background">
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        className="card-title"
                      >
                        Expense Distribution by Category
                      </Typography>
                      <Box mt={2}>
                        <ExpenseDistributionChart expenses={expenses} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card className="dashboard-card no-background">
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        className="card-title"
                      >
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
