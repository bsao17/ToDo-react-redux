import React from 'react';
import styleActionToDo from "./addItem.module.scss"
import Form from "../../form/Form";
import ShowingList from "../../showingList/ShowingList";
import {useDispatch, useSelector} from "react-redux";
import {showForm} from "../../../app/action/formAction";

function AddItem() {
    const showSelector = useSelector((state) => state.form.show)
    const dispatchShowForm = useDispatch()

    return (
        <div>
            {showSelector ? <Form/> : <ShowingList/>}
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={() => {
                    dispatchShowForm(showForm())
                }}> +
                </button>
                <button className={styleActionToDo.completed}>Completed</button>
            </section>
        </div>
    )
}

export default AddItem;