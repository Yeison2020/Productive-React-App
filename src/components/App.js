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

  useEffect(() => {
    fetch("http://localhost:3000/Goals")
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
      case "filter":
        return goals;
      case "High":
        return goals.filter((card) => {
          if (card.urgency === "High") {
            return true;
          }
        });
      case "Medium":
        return goals.filter((card) => {
          if (card.urgency === "Medium") {
            return true;
          }
        });
      case "Low":
        return goals.filter((card) => {
          if (card.urgency === "Low") {
            return true;
          }
        });

      case "Completed":
        return goals.filter((card) => {
          if (card.completed === true) {
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

  const handleDataUser = () => {
    if (search.length > 0 && category === "") {
      return goals.filter((card) => {
        if (card.name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      });
    }
    if (search.length > 0 && category === "filter") {
      return goals.filter((card) => {
        if (card.name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      });
    }
    if (search.length < 0 && category !== "") {
      return filterGoals();
    }
    if (search.length > 0 && category !== "") {
      return goals.filter((card) => {
        if (card.name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      });
    }
    if (search === "" && category === "filter") {
      return goals;
    } else {
      return filterGoals();
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
      <GoalContainer goals={handleDataUser()} />
    </div>
  );
};

export default App;
