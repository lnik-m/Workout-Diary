import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'count',

  initialState: {
    count: 0
  },

  reducers: {
    add: state => {
      state.count += 1
    },
    subtract: state => {
      state.count -= 1
    },
    clear: state => {
      state.count = 0
    }
  }
})

export const { add, subtract, clear } = countSlice.actions

export default countSlice.reducer
