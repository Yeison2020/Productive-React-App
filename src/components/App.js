import { useEffect, useState } from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import GoalContainer from "./GoalContainer";
import Menu from "./Menu";
import Form from "./Form";

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
    //this will route to the new form page
  }

  function handleAddGoal(newGoalFormData) {
    console.log(newGoalFormData);
    // console.log(cake);
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoalFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals([data, ...goals]);
      });
  }

  function handleDelete(id) {
    console.log(id);
    let result = window.confirm("are you sure you want to delete?");
    if (result) {
      handleDeleteConfirmed(id);
    }
  }

  function handleDeleteConfirmed(id) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    }).then(() => {
      const filteredGoals = goals.filter((goal) => goal.id !== id);
      setGoals(filteredGoals);
    });
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
          if (card.urgency === "high") {
            return true;
          }
        });
      case "Medium":
        return goals.filter((card) => {
          if (card.urgency === "medium") {
            return true;
          }
        });
      case "Low":
        return goals.filter((card) => {
          if (card.urgency === "low") {
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
          {/* Create a New Goal */}
          <NavLink id="navlinkNew" to="/new">
            {" "}
            Create a New Goal
          </NavLink>
        </button>
      </div>
      <Switch>
        <Route exact path="/new">
          <Form handleAddGoal={handleAddGoal}/>
        </Route>
        {/* <Route path="/:id">
          <GoalCard />
        </Route> */}
      </Switch>
      <Menu
        handleSearch={handleSearch}
        goals={goals}
        handleDataCard={handleDataCard}
      />
      <GoalContainer handleDelete={handleDelete} goals={handleDataUser()} />
    </div>
  );
};

export default App;
