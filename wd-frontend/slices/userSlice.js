import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',

    initialState: {
        isAuthorized: false,
        username: '',
        email: '',
        password: '',
        bio: '',
        goal: '',
        sex: ''
    },

    reducers: {
        signUp: (state, action) => {
            state.isAuthorized = true
            state.username = action.payload.username
            state.email = action.payload.email
            state.password = action.payload.password
        },
        signIn: (state, action) => {
            if (state.email===action.payload.email &&
                state.password===action.payload.password
            ) {
                state.isAuthorized = true
            }
        },
        logOut: state => {
            state.isAuthorized = false
        },
        updateData: (state, action) => {
            state.username = action.payload.username
            state.bio = action.payload.bio
            state.goal = action.payload.goal
            state.sex = action.payload.sex
        }
    }
})

export const { signIn, signUp, logOut, updateData } = userSlice.actions

export default userSlice.reducer
