import {ADD_TASK, DELETE_TASK, GET_TASKS} from "../action/taskAction";

let id = 0
const initialState = {
    todo: [],
}

export function todoReducer(state = initialState , action) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state
            }
        case ADD_TASK:
            return {
                ...state,
                todo: [...state.todo, {id: ++id, todo: action.todo.todo, complete: false}]
            }
        case DELETE_TASK:
            return {
                ...state,
                delete: [...state, {}]
            }
        default:
            return state
    }
}

