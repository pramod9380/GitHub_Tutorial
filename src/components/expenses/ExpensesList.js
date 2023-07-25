import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredItems = props.filteredData;

  if(filteredItems.length === 0){
    return <h2 className="expenses-list__fallback">Items Not Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </ul>
  );
};

export default ExpensesList;
