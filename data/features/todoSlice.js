import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import dayjs from "dayjs"

export const todoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: [],
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                text: action.payload,
                completed: false,
                created: dayjs().unix(),
                id: uuid(),
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const todoActions = todoSlice.actions
export default todoSlice.reducer