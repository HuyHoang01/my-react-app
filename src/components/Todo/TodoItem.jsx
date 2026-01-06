import { removeTodo } from "contexts/TodoContext/actions"
import useTodo from "hooks/useTodo"


function TodoItem({ index, title }){
    const [, dispatch] = useTodo()
    return (
        <li className="item">
            <div className="title">
                {title}
            </div>
            <div className="action" onClick={() => dispatch(removeTodo(index))}>
                &times;
            </div>
        </li>
    )
}

export default TodoItem