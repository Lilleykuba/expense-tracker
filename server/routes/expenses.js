const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

// Add new expense (Protected)
router.post("/", auth, async (req, res) => {
  const { description, amount, category, date } = req.body;

  try {
    const newExpense = new Expense({
      user: req.user,
      description,
      amount,
      category,
      date,
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get all expenses (Protected)
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
