import { useEffect } from 'react';
import {useParams} from 'react-router-dom'

function GoalCard({ goal }) {

  const id = useParams().id

  useEffect(()=> {
    console.log('hi')
    console.log(id)
    fetch(`http://localhost:3000/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCake(data)
        setIsLoaded(true)
    });
},[]);




  return (
    <div class="goalCard">
      <h3>{goal.name}</h3>
      <p>Urgency: {goal.urgency}</p>
      <p>Category: {goal.category}</p>
      <p>Completed: {goal.completed ? "Yes" : "No"}</p>
      <p>Due Date: {goal.dueDate}</p>
      <p>Notes: {goal.notes}</p>
      <p>Total Time: {goal.totalTime}</p>
    </div>
  );
}

export default GoalCard;
