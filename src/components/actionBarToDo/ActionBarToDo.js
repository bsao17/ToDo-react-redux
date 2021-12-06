import React, {useState} from 'react';
import styleActionToDo from "./actionBarToDo.module.scss"
import Form from "../form/Form";
import {useForm} from "react-hook-form";
import DisplayToDo from "../displayToDo/DisplayToDo";

function ActionBarToDo() {
    const [showForm, setShowForm] = useState(false)
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            {showForm ? (
                <Form>
                    <div className={"card card-body"}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className={"fw-bold text-center h3"} htmlFor="task">New Task</label>
                            <input type="text" {...register("newTask")} />
                            <input className={"btn btn-success my-2"} type="submit" value={"Add New Item"}/>
                        </form>
                    </div>
                </Form>
            ) : <DisplayToDo/>}
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={() => {
                    setShowForm(!showForm)
                }}>+
                </button>
                <button className={styleActionToDo.completed}>Completed</button>
            </section>
        </div>
    )
}

export default ActionBarToDo;