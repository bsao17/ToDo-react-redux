import React from 'react';
import styleActionToDo from "./actionBarToDo.module.scss"

function ActionBarToDo({activeForm}) {
    return (
        <div>
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={activeForm}>+</button>
                <button className={styleActionToDo.completed}>Completed</button>
            </section>
        </div>
    )
}

export default ActionBarToDo;