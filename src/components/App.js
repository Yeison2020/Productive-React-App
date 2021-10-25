import {useEffect, useState} from "react";
import GoalContainer from "./GoalContainer";
import Menu from "./Menu";


const App = () => {

  const [goals, setGoals] = useState([])

  useEffect( () => {
    fetch('http://localhost:3000/Goals')
      .then(r => r.json())
      .then(goals => setGoals(goals))

  },[])

  function createNewGoal(){
    console.log('create new goal');
  }

  return (
    <div id="BG">
      <div id="header">
        <h1>Productive</h1>
        <h3>Making you more productive</h3>
      <button onClick={createNewGoal}>Create a New Goal</button>
      </div>

      <Menu />
      <GoalContainer goals={goals}/>
    </div>
  );
};

export default App;
