import { useEffect, useState } from "react";
import GoalContainer from "./GoalContainer";
import Menu from "./Menu";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const handleSearch = (e, value) => {
    e.preventDefault();
    setSearch(value);
  };

  console.log(search);

  useEffect(() => {
    fetch("http://localhost:6001/Goals")
      .then((r) => r.json())
      .then((goals) => setGoals(goals));
  }, []);

  function createNewGoal() {
    console.log("create new goal");
  }

  const handleDataCard = (data) => {
    setCategory(data);
  };
  const filterGoals = () => {
    switch (category) {
      case "Urgency":
        return goals.filter((card) => {
          if (card.urgency === "high") {
            return true;
          }
        });

      case "NoCompleted":
        return goals.filter((card) => {
          if (card.completed === false) {
            return true;
          }
        });
      default:
        return goals;
    }
  };

  return (
    <div id="BG">
      <div id="header">
        <h1>Productive</h1>
        <h3>Making you more productive</h3>
        <button id="newGoalBttn" onClick={createNewGoal}>
          Create a New Goal
        </button>
      </div>

      <Menu
        handleSearch={handleSearch}
        goals={goals}
        handleDataCard={handleDataCard}
      />
      <GoalContainer goals={filterGoals()} />
    </div>
  );
};

export default App;
