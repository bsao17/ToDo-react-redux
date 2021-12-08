import {ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from "../action/taskAction";

let id = 0
const initialState = {
    todo: [],
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state
            }
        case ADD_TASK:
            return {
                ...state,
                todo: [...state.todo, {id: ++id, todo: action.payload.todo, complete: false}]
            }
        case DELETE_TASK:
            return {
                ...state,
                todo: state.todo.filter((t, i) => i !== action.index )
            }
        case UPDATE_TASK:
            return {
                ...state,
                todo: [{id: state.todo.id, todo: state.todo, complete: state.todo}]
            }
        default:
            return state
    }
}

