function GoalCard({ goal }) {
  return (
    <>
      <h3>{goal.name}</h3>
      <p>Urgency: {goal.urgency}</p>
      <p>Category: {goal.category}</p>
      <p>Completed: {goal.completed ? "Yes" : "No"}</p>
      <p>Due Date: {goal.dueDate}</p>
      <p>Notes: {goal.notes}</p>
      <p>Total Time: {goal.totalTime}</p>
    </>
  );
}

export default GoalCard;
