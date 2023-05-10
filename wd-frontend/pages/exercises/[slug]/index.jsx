import {Exercise} from "@/components";
import { useRouter } from 'next/router'
import {useSelector} from "react-redux";


export default function ExercisePage() {
    //TODO: change to api request
    const exercises = useSelector(state => state.saved.exercises.exercises)

    const router = useRouter()
    const { slug } = router.query

    const tags = ['legs', 'full body', 'arms']

    return <Exercise exercise={exercises.find(ex => ex.id===slug)} tags={tags} />
}
