import {ADD_TASK, GET_TASKS} from "../action/taskAction";
import {initialState} from "../store";

export function tasksReducer(state = initialState, action){
    switch (action.type){
        case GET_TASKS:
            return {
                ...state,
            }
        case ADD_TASK:
            return {
                ...state,
                task: [...state, state.task]
            }
        default:
            return state
    }
}