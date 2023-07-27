import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpenseList";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

import "./Expense.css";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
