import React from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../store/action/taskAction";
import {useForm} from "react-hook-form";
import uniqid from "uniqid";

function Form(props) {
    const handleTodo = useDispatch()
    const{register, handleSubmit} = useForm()
    const onSubmit = (data)=>{
        props.activeForm()
        handleTodo(addTask({ todo: data.task}))
    }
    return (
        <div className={"container"}>
            <form className={"input-group-text d-flex flex-column"} onSubmit={handleSubmit(onSubmit)}>
                <label className={"form-label h4"} htmlFor="task">Task</label>
                <input className={"form-control text-center"} type="text" {...register("task")} id={"task"} required/>
                <input className={"btn btn-lg btn-success mt-2 "} type="submit"  value={"Add new task"}/>
            </form>
        </div>
    )
}

export default Form;