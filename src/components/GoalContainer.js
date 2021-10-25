import GoalList from "./GoalList"

function GoalContainer ({goals}) {
    return(
        <div>
            {goals.map(goal => {
                return (
                
                <GoalList 
                
                key={goal.id} 
                goal={goal}/>
                )
            })}
        </div>
    )
}

export default GoalContainer