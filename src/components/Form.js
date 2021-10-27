import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Form({ handleAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    completed: "",
    totalTime: "",
    dueDate: "",
    urgency: "",
    notes: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleAddGoal(formData);
  }

  return (
    <div id="newGoalForm">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="name"
          aria-label="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
        ></input>
        <select
          value={formData.completed}
          onChange={handleChange}
          name="completed"
        >
          <option value="false">completed: no</option>
          <option value="true">completed: yes</option>
        </select>
        <input
          type="text"
          name="totalTime"
          aria-label="Total Time"
          value={formData.totalTime}
          onChange={handleChange}
          placeholder="total time so far"
        ></input>
        <input
          type="text"
          name="dueDate"
          aria-label="Due Date"
          value={formData.dueDate}
          onChange={handleChange}
          placeholder="due date"
        ></input>
        <select value={formData.urgency} onChange={handleChange} name="urgency">
          <option value="high">urgency: high</option>
          <option value="medium">urgency: medium</option>
          <option value="low">urgency: low</option>
        </select>

        <textarea
          type="text"
          name="notes"
          aria-label="Notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="notes"
        ></textarea>
        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
        >
          <option value="work">category: work</option>
          <option value="leisure">category: leisure</option>
          <option value="fitness">category: fitness</option>
          <option value="hobbies">category: hobbies</option>
          <option value="wellness">category: wellness</option>
        </select>

        <br />

        <input class="submitBttn" type="submit"></input>
      </form>
      <Link to="/" className="remove-decoration">
        <button id="btn-goBack">Go Back</button>
      </Link>
    </div>
  );
}

export default Form;
