import {WorkoutListItem} from "./workout-list-item";

export const WorkoutList = ({workouts}) => {
    return (
        <>
            {workouts?.map(workout => (
                    <WorkoutListItem key={workout.id} workout={workout}/>
            ))}
        </>
    )
}
