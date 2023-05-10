import {Workout} from "@/components";
import { useRouter } from 'next/router'
import {useSelector} from "react-redux";

export default function WorkoutPage() {
    //TODO: change to api request
    const workouts = useSelector(state => state.saved.workouts.workouts)

    const router = useRouter()
    const { slug } = router.query

    const tags = ['legs', 'full body', 'arms']

    return <Workout workout={workouts.find(w => w.id===slug)} tags={tags} />
}
