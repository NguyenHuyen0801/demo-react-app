import "./components/Expense/Expense.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense/Expense";
import React, { useState } from "react";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Toilet paper",
    amount: "200.34",
    date: new Date(2019, 2, 3),
  },
  {
    id: "2",
    title: "Car Insurance",
    amount: "90.34",
    date: new Date(2020, 3, 3),
  },
  {
    id: "3",
    title: "New TV",
    amount: "300.34",
    date: new Date(2021, 4, 3),
  },
  {
    id: "4",
    title: "Road tax",
    amount: "100.34",
    date: new Date(2020, 5, 3),
  },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    setExpense((preExpense) => {
      return [expense, ...preExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expense} />
    </div>
  );
};

export default App;
