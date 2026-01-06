import { ADD_TODO, REMOVE_TODO, UPDATE_INPUT } from "./constants"

export const initState = {
    input: "",
    todos: []
}

const reducer = (state, action) => {
    switch(action.type){
        case UPDATE_INPUT:
            return {...state, input: action.payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {...state, todos: state.todos.toSpliced(action.payload, 1)}
        default:
            throw new Error("The action.type doesn't match any declared case")
    }
}

export default reducer