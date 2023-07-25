import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const inputTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      }

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredDate('');
      setEnteredAmount('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            type="text"
            value={enteredTitle}
            onChange={inputTitleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control input">Date</label>
          <input
            className="new-expense__control input"
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control input">Amount</label>
          <input
            className="new-expense__control input"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div>
        <button onClick={props.onCancelExpenseData}>Cancel</button>
        <button className="new-expense__actions">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
