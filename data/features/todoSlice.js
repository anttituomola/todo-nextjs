import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import dayjs from "dayjs"


export const todoSlice = createSlice({
    name: "todo",

    initialState: {
        // How to hydrate the initial state from the server?        
        todos: [],
    },

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                text: action.payload,
                completed: false,
                created: dayjs().unix(),
                id: uuid(),
            }
            state.todos.push(todo)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(todo);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/todo", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
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