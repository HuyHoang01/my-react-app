import useTodo from "hooks/useTodo"
import TodoItem from "./TodoItem"

function TodoList() {
    const [{todos, _input}, _dispatch] = useTodo()
    
    return (
        <ul className="list">
            {todos.map((item, index) => (
                <TodoItem key={index} index={index} title={item}/>
            ))}
            {/* <TodoItem title="giặt quần áogiặt quần áogiặt quần áogiặt quần áogiặt quần áogiặt quần áo"/>
            <TodoItem title="giặt quần áo"/>
            <TodoItem title="giặt quần áo"/> */}
        </ul>
    )
}

export default TodoList