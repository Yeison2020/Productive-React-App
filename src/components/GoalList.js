import {Link} from 'react-router-dom'

function GoalList({ goal, handleDelete }) {
  return (
    <Link className="goalListItem" to={`/${goal.id}`}>
    <div >
      <button id="deleteBttn" onClick={() => handleDelete(goal.id)} >x</button>
      <h3>{goal.name}</h3>
      <p>Urgency: {goal.urgency}</p>
      <p>Due Date: {goal.dueDate}</p>
    </div>
    </Link>
  );
}

export default GoalList;
