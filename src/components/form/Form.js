import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

function Form({}) {
    const {register, handleSubmit, setFocus} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    useEffect(() => {
        setFocus("newTask")
    }, [setFocus])
    return (
        <div>
            <div className={"card card-body"}>
                <form className={" d-flex flex-column"} onSubmit={handleSubmit(onSubmit)}>
                    <label className={"fw-bold text-center h3"} htmlFor="newTask">New Task</label>
                    <input type="text" className={"form-control text-center my-2"} {...register("newTask")} />
                    <input className={"btn btn-success my-2"} type="submit" value={"Add New Item"}/>
                </form>
            </div>
        </div>
    )
}

export default Form;