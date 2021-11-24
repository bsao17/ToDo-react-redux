import {ADD_TASK, GET_TASKS} from "../action/taskAction";
import uniqid from "uniqid";

export function tasksReducer(state, action) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state
            }
        case ADD_TASK:
            return {
                ...state,
                todos: [...state.todos, action.todos]
            }
        default:
            return state
    }
}