import React from 'react';
import styleActionToDo from "./actionFooter.module.scss"
import Form from "../../form/Form";
import DisplayedTask from "../../showingList/DisplayedTask";
import {useDispatch, useSelector} from "react-redux";
import {showingForm, clearList} from "../../../features/toDo/toDoSlice";

function ActionFooter() {
    const selector = useSelector((state) => {
        return state.toDoItems.toggleForm
    })
    const selectorItem = useSelector((state)=>{
        return state.toDoItems.items
    })
    const dispatch = useDispatch()
    return (
        <div>
            {selector ? <Form/> : <DisplayedTask/>}
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={() => {
                    dispatch(showingForm(true))
                }}> +
                </button>
                <button className={styleActionToDo.completed} onClick={() => {
                    dispatch(clearList(selectorItem))
                }} >clear done tasks</button>
            </section>
        </div>
    )
}

export default ActionFooter;