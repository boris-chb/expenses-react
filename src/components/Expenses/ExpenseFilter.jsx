import React from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  // Call the function from the props whenever the event occurs.
  const dropDownChangeHandler = (event) => {
    // The function will change the state (setFilteredYear)
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* Set the default year value as the one from parent's state. Call the change handler whenever a change occurs (user selects other year => state gets updated in the parent) */}
        <select value={props.selectedYear} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
