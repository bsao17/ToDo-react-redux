import React from "react"
import {useSelector} from "react-redux";

function DisplayToDo(props){
    const dateSelector = useSelector((state)=> state.date)
    return(
        <div className={"m-5 card p-2 text-center"}>
            <div>{dateSelector}</div>
            <hr/>
            <div>Task</div>
        </div>
    )
}

export default DisplayToDo