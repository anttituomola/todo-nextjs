import { useDispatch } from "react-redux"
import { todoActions } from "../data/features/todoSlice"

const Todo = (props) => {
   const dispatch = useDispatch()

  return (
    <div id={props.todo.id}>
        <input type="checkbox" checked={props.todo.completed} onChange={() => dispatch(todoActions.toggleTodo(props.todo.id))}/>
        <p>{props.todo.text}</p>
        <button onClick={() => dispatch(todoActions.deleteTodo(props.todo.id))}>Delete</button>
    </div>
  )
}

export default Todo