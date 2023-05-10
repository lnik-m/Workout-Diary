import {Exercises} from "@/components";
import {useSelector} from "react-redux";

const ExercisesPage = () => {
  //TODO: change to api request
  const exercises = useSelector(state => state.saved.exercises.exercises)

  return (
    <Exercises exercises={exercises} />
  )
}

// noinspection JSUnusedGlobalSymbols
export default ExercisesPage
