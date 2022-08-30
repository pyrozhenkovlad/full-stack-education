import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import "../Styles/ExpenseForm.css";
import { useState } from "react";

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const [show, setShow] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: uuidv4(),
    };
    onAddExpense(expenseData);
    setShow(false);
  };

  const clickHandler = () => {
    setShow(true);
  };

  if (show === false)
    return (
      <div className="new-expense">
        <button onClick={clickHandler}>Add expense</button>
      </div>
    );
    
  return (
    <div className="new-expense">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
