import React, {useState} from 'react';
import styleActionToDo from "./actionToDo.module.scss"

function ActionToDo({activeForm}){
    return(
        <div>
            <section className={styleActionToDo.container}>
                <button className={styleActionToDo.more} onClick={activeForm}>+</button>
                <button className={styleActionToDo.completed}>Completed</button>
                <button className={styleActionToDo.search}>search</button>
            </section>
        </div>
    )
}

export default ActionToDo;