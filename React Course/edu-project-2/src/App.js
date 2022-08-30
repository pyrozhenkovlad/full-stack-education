import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import ListItems from "./components/ListItems";

function App() {
  const [items, setItems] = useState("");

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };
  return (
    <div>
      <AddForm onAddItem={addItemHandler} />
      <ListItems users={items} />
    </div>
  );
}

export default App;
