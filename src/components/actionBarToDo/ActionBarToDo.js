import React, {useEffect, useRef, useState} from 'react';
import styleActionToDo from "./actionBarToDo.module.scss"
import Form from "../form/Form";
import DisplayToDo from "../displayToDo/DisplayToDo";

function ActionBarToDo() {
    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            {showForm ? <Form/> : <DisplayToDo/>}
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