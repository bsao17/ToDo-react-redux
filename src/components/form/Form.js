import React from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../store/action/taskAction";
import {useForm} from "react-hook-form";
import uniqid from "uniqid";

function Form(props) {
    const handleTodo = useDispatch()
    const{register, handleSubmit} = useForm()
    const onSubmit = (data)=>{
        console.log(props.todos)
        props.activeForm()
        handleTodo(addTask({id: uniqid(), date: data.date, todo: data.task, completed: false}))
    }
    return (
        <div className={"container"}>
            <form className={"input-group-text d-flex flex-column"} onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("id")} id={"id"} value={`${uniqid()}`}/>
                <label className={"form-label h4"} htmlFor="date">Date</label>
                <input className={"form-control text-center"} type="text" {...register("date")} id={"date"}/>
                <label className={"form-label h4"} htmlFor="task">Task</label>
                <input className={"form-control text-center"} type="text" {...register("task")} id={"task"}/>
                <input className={"btn btn-lg btn-success mt-2 "} type="submit"  value={"Add new task"}/>
            </form>
        </div>
    )
}

export default Form;