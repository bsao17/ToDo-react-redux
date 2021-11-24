
export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = "ADD_TASK"

export const getTasks = () => {
    return {
        type: GET_TASKS,
    }
}

export const addTask = (todos) => {
    return {
        type: ADD_TASK,
        todos
    }
}