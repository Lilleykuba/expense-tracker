import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const BudgetSettings = () => {
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Budget for ${category}: $${budget}`);
    // You can add logic here to save the budget to the back-end
    setBudget(0);
    setCategory("");
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Set Your Budget
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="number"
              label="Budget Amount"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="text"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              margin="normal"
              required
            />
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Budget
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BudgetSettings;
