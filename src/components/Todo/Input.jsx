import { addTodo, updateInput } from "contexts/TodoContext/actions"
import useTodo from "hooks/useTodo"
import { useRef } from "react"

function Input() {
    const [state, dispatch] = useTodo()
    const inputRef = useRef()

    const handleAddTodo = () => {
        if(state.input){
            dispatch(addTodo(state.input))
            dispatch(updateInput(''))
        }
        inputRef.current.focus()
    }
    return (
        <div className="input">
            <input
                ref={inputRef}
                value={state.input}
                type="text"
                onChange={e => dispatch(updateInput(e.target.value))}
            />
            <button onClick={handleAddTodo}>
                Add
            </button>
        </div>
    )
}

export default Input