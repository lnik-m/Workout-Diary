import {Button, Stack} from "@mantine/core";
import {IconPlus} from "@tabler/icons";
import {ExerciseList} from "./exercise-list";
import {useDispatch} from "react-redux";
import {addExercise} from "@/slices/exerciseSlice";

export const Exercises = ({exercises}) => {

    const dispatch = useDispatch()

    return (
    <Stack align="center">
        <h2>Exercises</h2>

        <Button leftIcon={<IconPlus />}
                variant='light'
                color='grape'
                onClick={() => dispatch(addExercise())}
        >
            Add exercise
        </Button>

        <ExerciseList exercises={exercises}/>
    </Stack>
    )
}
