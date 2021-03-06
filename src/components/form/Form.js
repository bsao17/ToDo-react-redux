import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {addItem, showingForm} from "../../features/toDo/toDoSlice";
import styles from "./form.module.scss"
import uniqid from "uniqid"

let id = 0;

function Form() {
    const dispatch = useDispatch()
    const refDate = useRef("")
    const refTime = useRef("")
    const refData = useRef("")
    const onSubmit = (date, time, data) => {
        dispatch(showingForm(false))
        dispatch(addItem({
            id: ++id,
            date: date,
            time: time,
            task: data,
            done: false
        }))
    }
    // Field focus
    useEffect(() => {
        refData.current.focus()
    }, [])
    return (
        <div>
            <div className={"card card-body my-2"} id={styles.container}>
                <form className={" d-flex flex-column"}>
                    <label className={"fw-bold text-center text-light h3"} htmlFor="newTask">New task</label>
                    <input ref={refDate} type="date" className={"form-control text-center my-2"}/>
                    <input ref={refTime} type="time" className={"form-control text-center my-2"}/>
                    <input ref={refData} className={"form-control text-center my-2"}/>
                    <div className={"d-flex justify-content-center align-items-center my-3"}>
                        <input className={"btn btn-success border shadow-lg mx-2"} onClick={() => {
                            onSubmit(refDate.current.value, refTime.current.value, refData.current.value)
                        }} type="submit" value={"Add task"}/>
                        <button className={"btn btn-danger border mx-2"} onClick={(event) => {
                            event.preventDefault()
                            dispatch(showingForm(false))
                        }}>Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;