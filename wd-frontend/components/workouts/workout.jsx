import {MultiSelect, Textarea, TextInput, Button, Stack} from "@mantine/core";
import {IconCheck, IconTrash} from "@tabler/icons";
import {BackButton} from "@/components";
import {useState} from "react";
import {deleteWorkout, updateWorkout} from "@/slices/workoutSlice";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

export const Workout = ({workout, tags}) => {
    const exercises = useSelector(state => state.saved.exercises.exercises)

    const tagData = tags.map(tag => ({value: tag, label: tag}))
    const exerciseData = exercises.map(ex => ({value: ex.id, label: ex.name}))

    const [name, setName] = useState(workout?.name ?? '')
    const [description, setDescription] = useState(workout?.description ?? '')
    const [relatedTags, setRelatedTags] = useState(workout?.tags ?? [])
    const [relatedEx, setRelatedEx] = useState(workout?.exercises ?? [])

    const [changedWorkout, setChangedWorkout] = useState(workout)

    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <>
        <BackButton title='Workout' link='/workouts' />
        <Stack>
            <h4>Workout name:</h4>
            <TextInput
                value={name}
                onChange={e => {
                    setName(e.target.value)
                    setChangedWorkout(w => ({...w, name: e.target.value}))
                }}
            />

            <h4>Workout description:</h4>
            <Textarea
                value={description}
                onChange={e => {
                    setDescription(e.target.value)
                    setChangedWorkout(w => ({...w, description: e.target.value}))
                }}
                minRows={5}
            />

            <h4>Related tags:</h4>
            <MultiSelect
                data={tagData}
                value={relatedTags}
                onChange={e => {
                    setRelatedTags(e)
                    setChangedWorkout(w => ({...w, tags: e}))
                }}
                clearable
            />

            <h4>Related exercises:</h4>
            <MultiSelect
                data={exerciseData}
                value={relatedEx}
                onChange={e => {
                    setRelatedEx(e)
                    setChangedWorkout(w => ({...w, exercises: e}))
                }}
                clearable
            />

            <Button leftIcon={<IconCheck />} color="teal"
                onClick={() => dispatch(updateWorkout(changedWorkout))}
            >
                Save
            </Button>

            <Button leftIcon={<IconTrash />} color="red"
                onClick={() => {
                    dispatch(deleteWorkout(workout))
                    router.replace('/workouts')
                }}
            >
                Delete
            </Button>
            </Stack>
        </>
    )
}
