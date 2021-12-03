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
                todo: [...state.todo, {id: ++id, todo: action.todo.todo, complete: false}]
            }
        case DELETE_TASK:
            return {
                ...state,
                delete: state.todo.filter((task) => {
                    if (state.todo !== task.todo) {
                        return task.todo
                    }
                })
            }
        case UPDATE_TASK:
            return {
                ...state,
                todo: [state.todo.filter((newState, index) => {
                    if (state.todo.complete === newState[index].todo.complete) {
                        console.log(newState[index].todo)
                        return [newState[index].todo, newState[index].todo.complete = true]
                    }
                })]
            }

        default:
            return state
    }
}

