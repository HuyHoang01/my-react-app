import { useContext } from "react";
import { default as TodoContext } from "contexts/TodoContext/Context"

const useTodo = () => useContext(TodoContext)

export default useTodo