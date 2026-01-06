
const logger = (reducer) => {
    return (state, action) => {

        console.group(action.type)
        console.log(state)

        const newState = reducer(state, action)

        console.log(newState)
        console.groupEnd()

        return newState
    }
}

export default logger