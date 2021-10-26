import { useState } from "react";

function Menu({ handleSearch, goals }) {
  const [valueInput, setValueInput] = useState("");

  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };

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
      <select name="filter" onChange={() => console.log("hello")}>
        <option value="All">Current Cards</option>
        <option value="Produce">Urgency</option>
        <option value="Dairy">Total Time</option>
        <option value="Dessert">Completed</option>
        <option value="Dessert">No Completed</option>
      </select>
    </div>
  );
}

export default Menu;
