import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const FilterChangeHandler = (selectedYear) => {
    // console.log("yearchange"+selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={FilterChangeHandler} />
        <ExpenseChart expenses = {filteredItems} />
        <ExpensesList filteredData = {filteredItems}/>
      </Card>
    </div>
  );
}

export default Expenses;
