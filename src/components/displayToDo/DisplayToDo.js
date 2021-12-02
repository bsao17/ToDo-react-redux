import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {taskCompleted} from "../../store/action/taskAction";

function DisplayToDo() {
    const todoSelector = useSelector((state, i) => state.todo)
    const dispatch = useDispatch()
    return (
        <div className={"m-5 p-2 overflow-scroll"}>
            <h3
                className={"text-light fw-bold bg-dark d-flex flex-row justify-content-center mb-2 p-2 rounded align-items-center"}>
                <div className={"mx-5"}>Content</div>
            </h3>
            <div className={"d-flex flex-column justify-content-lg-around mx-5"}>{todoSelector.map((todo) => {
                return (
                    <div>
                        <div className={"d-flex justify-content-between align-items-center "}>
                            <code className={"h5 fw-bold mx-5"}>{todo.id} </code>
                            <h5>{todo.todo}</h5>
                            <input type="checkbox" value={"completed"}/>
                        </div>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default DisplayToDo