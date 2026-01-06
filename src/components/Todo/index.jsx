import Input from "./Input"
import TodoList from "./TodoList"
import "styles/Todo/index.scss"

function Todo() {
    
    return (
        <div className="container">
            <h2>Todo list</h2>
            <Input/>
            <TodoList/>
        </div>
    )
}

export default Todo
