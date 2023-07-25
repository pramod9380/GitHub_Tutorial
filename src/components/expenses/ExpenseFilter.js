import "./ExpenseFilter.css";
import React, {useState} from "react";

const ExpenseFilter = (props) => {

    useState('');

    const dropdownChangeHandler = (event) =>{
        props.onChangeYear(event.target.value)  
    }


  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="color">Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;