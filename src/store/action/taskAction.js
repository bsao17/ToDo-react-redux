
export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const INPUT_FOCUS = "INPUT_FOCUS"

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
}

export const addTask = (todo) => {
    return {
        type: ADD_TASK,
        payload: todo
    }
}

export const updateTask = (task)=>{
    return {
        type: UPDATE_TASK,
        task
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index
    }
}

export const inputFocus = (item) => {
    return {
        type: INPUT_FOCUS,
        item
    }
}

