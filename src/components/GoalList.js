function GoalList({ goal }) {
  return (
    <div className="goalListItem">
      <h3>{goal.name}</h3>
      <p>Urgency: {goal.urgency}</p>
      <p>Due Date: {goal.dueDate}</p>
    </div>
  );
}

export default GoalList;
