import React from "react"
import {useSelector} from "react-redux";

function DisplayToDo(props){
    const dateSelector = useSelector((state)=> state.todos[0].date)
    const taskSelector = useSelector((state)=> state.todos[0].todo)
    return(
        <div className={"m-5 card p-2 text-center"}>
            <div>{dateSelector}</div>
            <hr/>
            <div>{taskSelector}</div>
        </div>
    )
}

export default DisplayToDo