import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };

  const hideExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
