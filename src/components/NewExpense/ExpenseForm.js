import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  const onChangeHandler = (key, value) => {
    if (key === "title") {
      setTitle(value);
    } else if (key === "amount") {
      setAmount(value);
    } else setDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { title: title, amount: +amount, date: new Date(date) };

    props.onSaveExpenseData(expenseData);
    props.onCancel(false);

    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* form */}
      <div className="new-expense__controls">
        {/* title */}
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              onChangeHandler("title", event.target.value);
            }}
          />
        </div>

        {/* amount */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => {
              onChangeHandler("amount", event.target.value);
            }}
          />
        </div>

        {/* date */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            value={date}
            onChange={(event) => {
              onChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>

      {/* action */}
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
