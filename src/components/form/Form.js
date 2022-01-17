import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {addItem, showingForm} from "../../features/toDo/toDoSlice";

// Init Id
let id = 0

function Form() {
    const dispatch = useDispatch()
    const ref = useRef("")
    const onSubmit = (data) => {
        dispatch(showingForm(false))
        dispatch(addItem({
            id: ++id,
            date: new Date().toLocaleString(),
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