import React, { useState } from "react";
import { createExpense } from "../services/api";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get token from local storage
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You need to log in first");
        return;
      }

      // Send request to backend to create new expense
      const response = await createExpense(formData);
      if (response.status === 201) {
        alert("Expense added successfully");
        setFormData({
          description: "",
          amount: "",
          category: "",
          date: "",
        });
      } else {
        alert("Failed to add expense");
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Add New Expense
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="description"
              label="Description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              name="amount"
              type="number"
              label="Amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              name="category"
              label="Category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              name="date"
              type="date"
              label="Date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              margin="normal"
              required
              InputLabelProps={{ shrink: true }}
            />
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Expense
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ExpenseForm;
