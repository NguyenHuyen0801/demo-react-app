import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseData = (inputData) => {
    const expenseData = { ...inputData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
