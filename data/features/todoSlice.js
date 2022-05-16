import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "counter",

    initialState: {
        todos: [],
    },

    reducers: {
     
    }
})

export const { increment, decrement, incrementByAmount } = todoSlice.actions
export default todoSlice.reducer