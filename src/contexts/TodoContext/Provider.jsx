import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import logger from "contexts/logger";

function Provider({children}) {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return (
        <Context value={[state, dispatch]}>
            {children}
        </Context>
    )
}

export default Provider