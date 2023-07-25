import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expenses/NewExpense";
import React, {useState} from "react";

const INITIAL_EXPENSES = [
  { id:1,title: "Mutual Funds", amount: 7000, date: new Date() },
  { id:2,title: "Stocks", amount: 4000, date: new Date() },
  { id:3,title: "Dining", amount: 800, date: new Date() },
];

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const onAddNewExpenseHandler = (expenseData) => {
      console.log("App JS Called!!")
      console.log(expenseData);

      setExpenses((prevExpenses)=>{
          return [expenseData, ...prevExpenses]
      });
  }

  return (
    <div>
      <NewExpense onAddNewExpense = {onAddNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
