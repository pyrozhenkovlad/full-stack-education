import { useState } from "react";
import Filter from "../Filter/Filter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </div>
  );
};

export default Expenses;
