import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer/Timer";

function GoalCard() {
  const [goal, setGoal] = useState({});
  const [edit, setEdit] = useState(false);
  const [noteValue, setNoteValue] = useState("");
  const { name, urgency, category, completed, dueDate, notes, totalTime } =
    goal;

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

  const handleUpdateTask = () => {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoal(data);
      });
  };

  const handleEditInput = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const handleNewNote = (e) => {
    if (edit) {
      e.preventDefault();
      fetch(`http://localhost:3000/goals/${goal.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes: noteValue }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGoal(data);
        });
      setEdit(!edit);
    }
  };

  const handleInputChange = (e) => {
    setNoteValue(e.target.value);
  };

  return (
    <div className="goalCard">
      <h3 className="goalCardName">{name}</h3>
      <p className="goalCardItem">
        {completed ? "Completed  " : "Need Attention  "}
        <button
          onClick={handleUpdateTask}
          className={completed ? "btn-task-Complete" : "btn-task-Completed"}
        >
          {completed ? `Completed ` : "Complete "}{" "}
          {completed ? (
            <img
              className="image-size-btn"
              src="https://img.icons8.com/doodle/48/000000/checkmark.png"
            />
          ) : (
            <img
              className="image-size-btn"
              src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"
            />
          )}
        </button>
      </p>
      <p className="goalCardItem">Urgency: {urgency}</p>
      <p className="goalCardItem">Category: {category}</p>
      <div className="goalCardItem-date">
        <p id="center-due-date">
          {
            <img
              className="image-size-calendar"
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-calendar-calendar-amp-date-justicon-lineal-color-justicon-19.png"
            />
          }{" "}
          {dueDate}
        </p>
      </div>

      <div className="goalCardItem">
        <form>
          {edit ? (
            <textarea
              id="inputChange"
              type="text"
              name="notes"
              className="edit-input"
              value={noteValue}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          ) : (
            <p>Notes: {notes}</p>
          )}
          <button className="btn-Edit" onClick={handleEditInput}>
            <img
              className="image-size"
              src="https://img.icons8.com/bubbles/50/000000/edit-property.png"
            />{" "}
            Edit
          </button>
          <button className="btn-Edit-Submit" onClick={(e) => handleNewNote(e)}>
            <img
              className="image-size"
              src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-note-essential-collection-bearicons-gradient-bearicons.png"
            />
            Submit
          </button>
        </form>
      </div>

      {/* <p className="goalCardItem">
        Total Time: {h}h : {m}m : {s}s
      </p> */}
      <Timer className="goalCardItem" />
    </div>
  );
}

export default GoalCard;
