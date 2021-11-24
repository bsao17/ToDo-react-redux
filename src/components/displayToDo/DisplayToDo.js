import React from "react"
import {useSelector} from "react-redux";

function DisplayToDo(props){
    const todoSelector = useSelector((state)=> state.todos)
    let index = 0
    return(
        <div className={"m-5 p-2 overflow-scroll"}>
            <h3 className={"text-center"}>Task</h3>
            <div>{todoSelector.map((todo)=>{
                return (
                    <div className={"card card-body d-flex flex-row justify-content-evenly"}>
                        <div >{todo.date}</div>
                        <div className={""}>{todo.todo}</div>
                    </div>)
            })} </div>
        </div>
    )
}

export default DisplayToDo