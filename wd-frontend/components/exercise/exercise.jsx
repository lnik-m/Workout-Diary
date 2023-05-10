import {MultiSelect, Textarea, TextInput, Button, Stack} from "@mantine/core";
import {IconCheck, IconTrash} from "@tabler/icons";
import {BackButton} from "@/components";
import {useState} from "react";
import {deleteExercise, updateExercise} from "@/slices/exerciseSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

export const Exercise = ({exercise, tags}) => {
    const tagData = tags.map(tag => ({value: tag, label: tag}))

    const [name, setName] = useState(exercise?.name ?? '')
    const [description, setDescription] = useState(exercise?.description ?? '')
    const [relatedTags, setRelatedTags] = useState(exercise?.tags ?? [])

    const [changedEx, setChangedEx] = useState(exercise)


    const dispatch = useDispatch()

    const router = useRouter()

    return (
        <>
        <BackButton title='Exercise' link='/exercises' />

        <Stack>

            <h4>Exercise name:</h4>
            <TextInput
                value={name}
                onChange={e => {
                    setName(e.target.value)
                    setChangedEx(ex => ({...ex, name: e.target.value}))
                }}
            />

            <h4>Exercise description:</h4>
            <Textarea
                value={description}
                onChange={e => {
                    setDescription(e.target.value)
                    setChangedEx(ex => ({...ex, description: e.target.value}))
                }}
                minRows={5}
            />

            <h4>Related tags:</h4>
            <MultiSelect
                data={tagData}
                value={relatedTags}
                onChange={e => {
                    setRelatedTags(e)
                    setChangedEx(ex => ({...ex, tags: e}))
                }}
                clearable
            />

            <Button leftIcon={<IconCheck />} color="teal"
                onClick={() => dispatch(updateExercise(changedEx))}
            >
                Save
            </Button>

            <Button leftIcon={<IconTrash />} color="red"
                onClick={() => {
                    dispatch(deleteExercise(exercise))
                    router.replace('/exercises')
                }}
            >
                Delete
            </Button>

            </Stack>
        </>
    )
}
