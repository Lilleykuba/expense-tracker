# Expense Tracker Web Application

## Overview

This project is a full-stack web application for managing and tracking personal expenses. It allows users to add expenses, set budget limits, and visualize their spending trends through interactive charts. The application is built using **React** on the front-end and **Node.js/Express** for the back-end, with **MongoDB** as the database to store expense records and budget data.

## Features

- **User Authentication**: Secure login system for managing multiple user accounts.
- **Expense Management**: Add, edit, and delete expense entries, each with a description, amount, category, and date.
- **Budget Settings**: Set and adjust budgets for various categories to keep your finances on track.
- **Data Visualization**:
  - **Expense Distribution Chart**: Visual representation of expenses by category.
  - **Expense Trend Chart**: Track expenses over time.
- **Responsive Design**: Designed to work on both desktop and mobile devices for easy access anywhere.

## Tech Stack

- **Front-end**: React, Material-UI for styling
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB
- **Charts**: Chart.js for visualizing expense data
- **State Management**: React hooks and context

## Installation

To set up and run the project locally, follow the steps below:

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies for both the server and client**

   ```bash
   # Install back-end dependencies
   cd server
   npm install

   # Install front-end dependencies
   cd ../client
   npm install
   ```

3. **Create a \*\***`.env`\***\* file** in the `server` directory with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server**

   ```bash
   cd server
   npm start
   ```

5. **Run the client**

   ```bash
   cd ../client
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000` to start using the Expense Tracker.

## Project Structure

- **client/**: Contains all the front-end code, including React components, pages, and styling.
- **server/**: Contains all the back-end code, including API routes, authentication, and database models.
- **components/**:
  - **ExpenseForm**: Form to add new expenses.
  - **BudgetSettings**: Component to set budget limits.
  - **Charts**: Components to visualize expense data.

## Usage

1. **Register/Login**: Start by registering a new account or logging in with existing credentials.
2. **Add Expenses**: Navigate to the dashboard and add your daily expenses.
3. **Set Budgets**: Define budgets for different spending categories.
4. **View Reports**: Visualize your spending with the provided charts to track where your money is going.

## Screenshots

- **Dashboard**: Shows overall spending, budget settings, and visual expense charts.
- **Expense Form**: Easily add new expenses by filling in the form fields.

## Styling and UI

The UI has been designed using **Material-UI** for a modern and responsive design. Cards, grids, and charts are styled to provide a clear overview of your financial health. Key colors are used to differentiate sections and emphasize important information.

## Future Enhancements

- **Recurring Expenses**: Add support for tracking recurring expenses automatically.
- **Export Data**: Allow users to export expense data as CSV or Excel files.
- **Notifications**: Notify users when they are nearing or exceeding their budget limits.
- **Mobile App**: Develop a mobile version using React Native for easier access on mobile devices.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is open-source and available under the **MIT License**.

## Contact

For questions, suggestions, or issues, feel free to contact:

- **Name**: Your Name
- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **GitHub**: [your-username](https://github.com/your-username)
