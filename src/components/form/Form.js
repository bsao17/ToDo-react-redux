import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../store/action/taskAction";
import {useForm} from "react-hook-form";

function Form({activeForm}) {
    const handleTodo = useDispatch()
    const{register, handleSubmit} = useForm()
    const inputRef = useRef(null)

    const onSubmit = (data)=>{
        activeForm()
        handleTodo(addTask({ todo: data.task}))
    }

    return (
        <div className={"container"}>
            <form className={"input-group-text d-flex flex-column"} onSubmit={handleSubmit(onSubmit)}>
                <label className={"form-label h4"} htmlFor="task">Task</label>
                <input key={inputRef} className={"form-control text-center"} type="text" {...register("task")} id={"task"} required/>
                <input className={"btn btn-lg btn-success mt-2 "} type="submit"  value={"Add new task"}/>
            </form>
        </div>
    )
}

export default Form;