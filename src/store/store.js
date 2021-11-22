import {createStore} from "redux";
import {rootReducer} from "./reducer";

export const initialState = {
    id: 1,
    date: "today",
    task: "First Task"
}

export default function configureStore(state = initialState){
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}
