import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://camo-budget.onrender.com/api/auth/register",
        formData
      );
      alert("Registration successful");
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response ? error.response.data.message : error.message
      );
      alert(
        error.response ? error.response.data.message : "Registration failed"
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
