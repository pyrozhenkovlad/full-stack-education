import { useState } from "react";
import Filter from "../Filter/Filter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses.map((e, i) => (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.id}
          id={e.id}
        />
      ))}{" "}
    </div>
  );
};

export default Expenses;
