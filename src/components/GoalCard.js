import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GoalCard() {
  const [goal, setGoal] = useState({});
  const [timer, setTimer] = useState(0);

  // const [isLoaded, setIsloaded] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    console.log("hi");
    console.log(id);
    fetch(`http://localhost:3000/goals/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGoal(data);
        // setIsLoaded(true)
        window.scrollTo(0, 0);
      });
  }, [id]);

  // if(!isLoaded) return <h1>Loading</h1>
  const { name, urgency, category, completed, dueDate, notes, totalTime } =
    goal;

  const secondsToTime = (secs) => {
    if (secs > 1) {
      let hours = Math.floor(secs / (60 * 60));

      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
        h: hours,
        m: minutes,
        s: seconds,
      };
      return obj;
    } else {
      return { h: 0, m: 0, s: 0 };
    }
  };
  let seconds = totalTime * 60;

  const { h, m, s } = secondsToTime(seconds);
  secondsToTime(seconds);

  return (
    <div className="goalCard">
      <h3 className="goalCardName">{name}</h3>
      <p className="goalCardItem">Completed: {completed ? "Yes" : "No"}</p>
      <p className="goalCardItem">Urgency: {urgency}</p>
      <p className="goalCardItem">Category: {category}</p>
      <p className="goalCardItem">Due Date: {dueDate}</p>
      <p className="goalCardItem">Notes: {notes}</p>
      <p className="goalCardItem">
        Total Time: {h}h : {m}m : {s}s
      </p>
    </div>
  );
}

export default GoalCard;
