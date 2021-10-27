import { useState } from "react";


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
    <div>
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
        <label>completed?</label>
        <select
          value={formData.completed}
          onChange={handleChange}
          name="completed"
        >
          <option value="false">no</option>
          <option value="true">it's done</option>
        </select>

        <input
          type="text"
          name="totalTime"
          aria-label="Total Time"
          value={formData.totalTime}
          onChange={handleChange}
          placeholder="total time"
        ></input>
        <input
          type="text"
          name="dueDate"
          aria-label="Due Date"
          value={formData.dueDate}
          onChange={handleChange}
          placeholder="due date"
        ></input>
        <label> Urgency</label>
        <select value={formData.urgency} onChange={handleChange} name="urgency">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <textarea
          type="text"
          name="notes"
          aria-label="Notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="notes"
        ></textarea>
        <label> Category </label>
        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
        >
          <option value="work">work</option>
          <option value="leisure">leisure</option>
          <option value="fitness">fitness</option>
          <option value="hobbies">hobbies</option>
          <option value="wellness">wellness</option>
        </select>

        <br />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Form;
