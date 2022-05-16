import { useDispatch } from 'react-redux'
import { todoActions } from '../data/features/todoSlice'
import { useState } from 'react'

const InputElements = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const addTodo = (todo) => {
        dispatch(todoActions.addTodo(todo))
        setInputValue("")
    }

  return (
        <div id="inputElements">
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue}/>
            <button onClick={() => addTodo(inputValue)}>Save</button>
        </div>
    )
}

export default InputElements