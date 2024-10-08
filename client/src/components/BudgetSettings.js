import React, { useState } from "react";

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
    <div>
      <h2>Set Your Budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Budget Amount"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Save Budget</button>
      </form>
    </div>
  );
};

export default BudgetSettings;
