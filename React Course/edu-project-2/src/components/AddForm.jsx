import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/Form.css";

const AddForm = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const { onAddItem } = props;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (enteredAge < 1) return;
    const item = {
      username: enteredUsername,
      age: enteredAge,
      id: uuidv4(),
    };
    onAddItem(item);
    setUsername("");
    setAge("");
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="add-container">
      <form>
        <div className="add-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={changeUsernameHandler}
          />
        </div>
        <div className="add-input">
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          />
        </div>
        <div className="add-button">
          <button onClick={onSubmitHandler}>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
