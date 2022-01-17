import React from 'react';
import styleActionToDo from "./addItem.module.scss"
import Form from "../../form/Form";
import ShowingList from "../../showingList/ShowingList";
import {useDispatch, useSelector} from "react-redux";
import { addItem, removeItem, showingForm } from "../../../features/toDo/toDoSlice";

function AddItem() {
    const selector = useSelector((state) => {
        return state.toDoItems.toggleForm
    })
    const dispatch = useDispatch()
    console.log(selector)
    return (
        <div>
            {selector ? <Form/> : <ShowingList/>}
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={() => {
                    dispatch(showingForm(true))
                }}> +
                </button>
                <button className={styleActionToDo.completed}>Completed</button>
            </section>
        </div>
    )
}

export default AddItem;