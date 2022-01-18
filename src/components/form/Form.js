import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {addItem, showingForm} from "../../features/toDo/toDoSlice";
import uniqid from "uniqid"

function Form() {
    const dispatch = useDispatch()
    const ref = useRef("")
    const onSubmit = (data) => {
        dispatch(showingForm(false))
        dispatch(addItem({
            id: uniqid(),
            date: new Date().toLocaleDateString(),
            task: data
        }))
    }
    // Field focus
    useEffect(() => {
        ref.current.focus()
    }, [])
    return (
        <div>
            <div className={"card card-body"}>
                <form className={" d-flex flex-column"} onSubmit={() => {
                    onSubmit(ref.current.value)
                }}>
                    <label className={"fw-bold text-center h3"} htmlFor="newTask">Complete List</label>
                    <input ref={ref} type="text" className={"form-control text-center my-2"}/>
                    <input className={"btn btn-success my-2"} type="submit" value={"Add New Item"}/>
                </form>
            </div>
        </div>
    )
}

export default Form;