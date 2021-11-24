import {createStore} from "redux";
import {tasksReducer} from "./reducer/tasksReducer";
import uniqid from "uniqid";

export const initialState = {
    todos: [{
        id: uniqid(),
        date: "",
        todo: "",
        completed: false
    }]
}

export default function configureStore(state = initialState){
    return createStore(
        tasksReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}
