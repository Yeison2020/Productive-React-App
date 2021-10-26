import { useState } from "react";

function Menu({ handleSearch, goals, handleDataCard }) {
  const [valueInput, setValueInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleSelecterCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  handleDataCard(selectedCategory);

  return (
    <div id="menu">
      <form onSubmit={(e) => handleSearch(e, valueInput)}>
        <input
          type="text"
          name="search"
          value={valueInput}
          placeholder="Search Cards"
          onChange={(e) => handleValueInput(e)}
        />
      </form>
      <select name="filter" onChange={(e) => handleSelecterCategory(e)}>
        <option value="filter">Filter</option>
        <option value="Urgency">High Urgency</option>
        <option value="NoCompleted">No Completed</option>
      </select>
    </div>
  );
}

export default Menu;
