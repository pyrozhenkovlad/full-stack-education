import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const { filteredExpenses } = props;
  if (filteredExpenses.length === 0)
    return (
      <div style={{ textAlign: "center", color: "white" }}>
        <h2>No expenses found</h2>
      </div>
    );
  return (
    <div>
      {filteredExpenses.map((e) => (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.id}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
