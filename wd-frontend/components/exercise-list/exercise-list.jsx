import {ExerciseListItem} from "@/components";

export const ExerciseList = ({exercises}) => {
    return (
        <>
            {exercises?.map(exercise => (
                    <ExerciseListItem key={exercise.id} exercise={exercise}/>
            ))}
        </>
    )
}
