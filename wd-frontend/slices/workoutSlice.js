import { createSlice } from '@reduxjs/toolkit'

export const workoutSlice = createSlice({
  name: 'workouts',

  initialState: {
    workouts: [
      {
        id: 'w-1',
        name: 'Workout - 1',
        tags: ['legs', 'arms'],
        exercises: ['ex-1']
      },
      {
        id: 'w-2',
        name: 'Workout - 1',
        tags: ['legs', 'full body'],
        exercises: []
      }
    ]
  },

  reducers: {
    addWorkout: state => {
      state.workouts = [
        {
          id: `w-${state.workouts.length + 1}`,
          name: 'New workout',
          tags: [],
          exercises: []
        },
        ...state.workouts
      ]
    },
    updateWorkout: (state, action) => {
      state.workouts = [
        ...state.workouts.map(el =>
          el?.id === action.payload?.id ? { ...action.payload } : el
        )
      ]
    },
    deleteWorkout: (state, action) => {
      state.workouts = [
        ...state.workouts.filter(el => el?.id !== action.payload.id)
      ]
    }
  }
})

export const { addWorkout, updateWorkout, deleteWorkout } =
  workoutSlice.actions

export default workoutSlice.reducer
