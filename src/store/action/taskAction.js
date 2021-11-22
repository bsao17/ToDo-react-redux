export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = "ADD_TASK"

export function getTasks(){
    return {
        type: GET_TASKS
    }
}

export function addTask(task){
    return {
        type: ADD_TASK,
        task
    }
}