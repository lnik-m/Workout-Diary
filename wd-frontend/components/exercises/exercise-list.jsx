import {ExerciseListItem} from "./exercise-list-item"

export const ExerciseList = ({exercises}) => {
    return (
        <>
            {exercises?.map(exercise => (
                    <ExerciseListItem key={exercise.id} exercise={exercise}/>
            ))}
        </>
    )
}
