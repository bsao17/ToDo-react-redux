import {ADD_TASK, GET_TASKS} from "../action/taskAction";

let id = 0
const initialState = {
    item: [],
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
                item: [...state.item, {id: ++id, item: action.item.newTask, complete: false}]
            }
        default:
            return state
    }
}

