import React from 'react';
import {useDispatch} from "react-redux";
import {getTasks} from "../../store/action/taskAction";

function Form({activeForm}) {
    const dispatch = useDispatch()
    return (
        <div className={"container"}>
            <form className={"input-group-text d-flex flex-column"}>
                <label className={"form-label h4"} htmlFor="date">Date</label>
                <input className={"form-control text-center"} type="text" name={"date"} id={"date"}/>
                <label className={"form-label h4"} htmlFor="task">Task</label>
                <input className={"form-control text-center"} type="text" name={"task"} id={"task"}/>
                <input className={"btn btn-lg btn-success mt-2 "} type="submit" onClick={()=>{
                    activeForm()
                    dispatch(getTasks())
                }} value={"Add new task"}/>
            </form>
        </div>
    )
}

export default Form;