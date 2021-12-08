import React, {useState} from 'react';
import styleActionToDo from "./actionBarToDo.module.scss"
import Form from "../form/Form";
import ShowList from "../displayToDo/ShowList";
import {useDispatch, useSelector} from "react-redux";
import {showForm} from "../../store/action/formAction";

function AddItem() {
    const showSelector = useSelector((state)=>state.form.show)
    const dispatchShowForm = useDispatch()

    return (
        <div>
            {showSelector ? <Form/> : <ShowList/>}
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={()=>{
                    dispatchShowForm(showForm())
                }}> + </button>
                <button className={styleActionToDo.completed}>Completed</button>
            </section>
        </div>
    )
}

export default AddItem;