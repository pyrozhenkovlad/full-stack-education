import "../Styles/Filter.css";

const Filter = (props) => {
  const years = [2019, 2020, 2021, 2022];
  const {onChangeFilter,selected} = props;
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  }
  return (
    <div className="filter-container">
      <h3>Filter by year</h3>
      <div className="filter-input">
        <select value={selected} onChange={dropdownChangeHandler}>
          {years.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
