import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {taskCompleted} from "../../store/action/taskAction";

function DisplayToDo(){
    const todoSelector = useSelector((state, i)=> state.todos)
    const dispatch = useDispatch()
    return(
        <div className={"m-5 p-2 overflow-scroll"}>
            <div className={"text-light fw-bold bg-dark d-flex flex-row justify-content-between mb-2 p-2 rounded align-items-center"}>
                <div >Date</div>
                <div>Content</div>
                <div>Completed</div>
            </div>
            <div>{todoSelector}</div>
        </div>
    )
}

export default DisplayToDo