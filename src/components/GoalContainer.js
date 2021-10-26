import GoalList from "./GoalList";

function GoalContainer({ goals, handleDelete }) {
  return (
    <div id="grid-container">
      {goals.map((goal) => {
        return <GoalList key={goal.id} goal={goal} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export default GoalContainer;
