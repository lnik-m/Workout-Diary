import {Button, Stack} from "@mantine/core";
import {IconPlus} from "@tabler/icons";
import {WorkoutList} from "./workout-list";
import {useDispatch} from "react-redux";
import {addWorkout} from "@/slices/workoutSlice";

export const Workouts = ({workouts}) => {

    const dispatch = useDispatch()

    return (
    <Stack align="center">
        <h2>Workouts</h2>

        <Button leftIcon={<IconPlus />}
                variant='light'
                color='grape'
                onClick={() => dispatch(addWorkout())}
        >
            Add workout
        </Button>

        <WorkoutList workouts={workouts}/>
    </Stack>
    )
}
