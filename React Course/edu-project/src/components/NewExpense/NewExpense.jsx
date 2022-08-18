import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import "../Styles/ExpenseForm.css";

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: uuidv4(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
