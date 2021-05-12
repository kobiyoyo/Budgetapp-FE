import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Balance from "./components/Balance";
import ExpenseTotal from "./components/Expense/ExpenseTotal";
import ExpenseList from "./components/Expense/ExpenseList";
import AddExpenseForm from "./components/Expense/AddExpenseForm";
import {AppProvider} from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>

          <div className="col-sm">
            <Balance />
          </div>

          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
