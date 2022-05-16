import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../data/features/todoSlice'
import Todo from './Todo'

const TodoRendering = () => {
  const todos = useSelector(state => state.todosData.todos)
  const renderTodos = todos.map(todo => <Todo key={todo.id} todo={todo} />)

  return (
    <div>
      {renderTodos}
    </div>
  )
}

export default TodoRendering