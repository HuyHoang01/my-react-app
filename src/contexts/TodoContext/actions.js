import { ADD_TODO, REMOVE_TODO, UPDATE_INPUT } from "./constants"

export const updateInput = (payload) => {
    return {
        type: UPDATE_INPUT,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}