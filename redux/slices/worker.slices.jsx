import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'worker',
    initialState: {
        user: {},
        token: ''
    },
    reducers: {
        getUserData: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload.data;
            state.token = action.payload.token
        },
        getUserFailure: (state) => {
            state.user = {};
            state.token = ''
        }
    }
})

export const { getUserData, getUserSuccess, getUserFailure } = userSlice.actions

export default userSlice.reducer