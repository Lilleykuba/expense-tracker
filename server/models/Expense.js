const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  user: {
    // Change user_id to user for consistency
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
