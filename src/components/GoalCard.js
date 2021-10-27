import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

function GoalCard() {

  const [goal, setGoal] = useState({})
  // const [isLoaded, setIsloaded] = useState(false);

  const id = useParams().id

  useEffect(()=> {
    console.log('hi')
    console.log(id)
    fetch(`http://localhost:3000/goals/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setGoal(data)
        // setIsLoaded(true)
        window.scrollTo(0, 0)
    });
},[id]);


// if(!isLoaded) return <h1>Loading</h1>
const {name, urgency, category, completed, dueDate, notes, totalTime} = goal
  return (
    <div class="goalCard">
      <h3>{name}</h3>
      <p>Urgency: {urgency}</p>
      <p>Category: {category}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
      <p>Due Date: {dueDate}</p>
      <p>Notes: {notes}</p>
      <p>Total Time: {totalTime}</p>
      <h1>testing</h1>
    </div>
  );
}

export default GoalCard;
