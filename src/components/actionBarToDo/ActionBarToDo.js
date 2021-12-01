import React from 'react';
import styleActionToDo from "./actionBarToDo.module.scss"
import {useSelector} from "react-redux";

function ActionBarToDo({activeForm}){
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

export default ActionBarToDo;