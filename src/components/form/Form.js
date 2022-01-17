import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTask} from "../../app/action/taskAction";
import {showForm} from "../../app/action/formAction";

function Form() {
    const {register, handleSubmit, setFocus} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(addTask(data))
        dispatch(showForm())
    }

    useEffect(() => {
        setFocus("newTask")
    }, [setFocus])
    return (
        <div>
            <div className={"card card-body"}>
                <form className={" d-flex flex-column"} onSubmit={handleSubmit(onSubmit)}>
                    <label className={"fw-bold text-center h3"} htmlFor="newTask">Complete List</label>
                    <input type="text" className={"form-control text-center my-2"} {...register("newTask")} />
                    <input className={"btn btn-success my-2"} type="submit" value={"Add New Item"}/>
                </form>
            </div>
        </div>
    )
}

export default Form;