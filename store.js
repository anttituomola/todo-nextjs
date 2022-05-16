import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./data/features/todoSlice"

export default configureStore(  {
    reducer: {
        todosData: todoSlice
    }
})