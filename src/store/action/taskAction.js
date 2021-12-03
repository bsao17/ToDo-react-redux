
export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
}

export const addTask = (todo) => {
    return {
        type: ADD_TASK,
        todo
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        index
    }
}

export const updateTask = (index)=>{
    return {
        type: UPDATE_TASK,
        index
    }
}