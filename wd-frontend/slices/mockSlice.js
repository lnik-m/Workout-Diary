import { createSlice } from '@reduxjs/toolkit'

export const mockSlice = createSlice({
  name: 'mock',

  initialState: {
    items: []
  },

  reducers: {
    addItem: (state, action) => {
      state.items = [action.payload, ...state.items]
    },
    deleteItem: (state, action) => {
      state.items = [
        ...state.items.filter(el => el?.name !== action.payload?.name)
      ]
    },
    clearItems: state => {
      state.items = []
    }
  }
})

export const { addItem, deleteItem, clearItems } = mockSlice.actions

export default mockSlice.reducer
