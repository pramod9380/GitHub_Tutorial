import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);
    props.onAddNewExpense(expenseData);
    setEditing(false);
  };

  const startEditHandler = () => {
    setEditing(true);
  };

  const stopEditHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelExpenseData={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
