import { createSlice } from '@reduxjs/toolkit'

export const exerciseSlice = createSlice({
  name: 'exercises',

  initialState: {
    exercises: [
      {
        id: 'ex-1',
        name: 'Exercise - Fly as butterfly',
        tags: ['legs', 'arms']
      },
      {
        id: 'ex-2',
        name: 'Exercise - 2',
        tags: ['legs', 'full body']
      }
    ]
  },

  reducers: {
    addExercise: state => {
      state.exercises = [
        {
          id: `ex-${state.exercises.length + 1}`,
          name: 'New exercise',
          tags: []
        },
        ...state.exercises
      ]
    },
    updateExercise: (state, action) => {
      state.exercises = [
        ...state.exercises.map(el =>
          el?.id === action.payload?.id ? { ...action.payload } : el
        )
      ]
    },
    deleteExercise: (state, action) => {
      state.exercises = [
        ...state.exercises.filter(el => el?.id !== action.payload.id)
      ]
    }
  }
})

export const { addExercise, updateExercise, deleteExercise } =
  exerciseSlice.actions

export default exerciseSlice.reducer
