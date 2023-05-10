import {DrawerMenu, Workouts} from "@/components";
import {useSelector} from "react-redux";

const WorkoutsPage = () => {
  //TODO: change to api request
  const workouts = useSelector(state => state.saved.workouts.workouts)

  return (
      <>
        <Workouts workouts={workouts} />
        <DrawerMenu />
      </>
  )
}

// noinspection JSUnusedGlobalSymbols
export default WorkoutsPage
