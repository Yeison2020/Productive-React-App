function GoalList({ goal, handleDelete }) {
  return (
    <div className="goalListItem">
      <button id="deleteBttn" onClick={() => handleDelete(goal.id)} >x</button>
      <h3>{goal.name}</h3>
      <p>Urgency: {goal.urgency}</p>
      <p>Due Date: {goal.dueDate}</p>
    </div>
  );
}

export default GoalList;
