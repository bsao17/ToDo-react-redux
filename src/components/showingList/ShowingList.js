import React from "react"
import {useDispatch, useSelector} from "react-redux";
import styles from "./showingList.module.scss"
import {isDoneItem} from "../../features/toDo/toDoSlice";

function ShowingList() {
    const selector = useSelector((state) => {
        return state.toDoItems.items
    })
    const dispatch = useDispatch()

    return (
        <div className={"m-5 p-2 overflow-scroll"} id={"container"}>
            <h3
                className={"text-light fw-bold bg-dark d-flex flex-row justify-content-center mb-2 p-2 rounded align-items-center"}>
                <div className={"mx-5"}>Content</div>
            </h3>
            <div className={"d-flex flex-column justify-content-lg-around mx-5"}>{selector.map((td) => {
                return (
                    td.isDone ?
                    (<div key={td.id} className={"bg-light"} >
                        <div className={"d-flex justify-content-between align-items-center "}>
                            <div className={"h5 fw-bold mx-5 text-danger"}>Is done</div>
                            <h5 key={td.item} className={"text-muted"}>{td.task}</h5>
                            <input className={styles.remove} type="submit" value={"X"} onClick={() => {
                                dispatch(isDoneItem(td.id))
                            }}/>
                        </div>
                    </div>) : (<div key={td.id}>
                            <div className={"d-flex justify-content-between align-items-center "}>
                                <code className={"h5 fw-bold mx-5 text-success"}>{td.date} </code>
                                <h5 key={td.item}>{td.task}</h5>
                                <input className={styles.remove} type="submit" value={"X"} onClick={() => {
                                    dispatch(isDoneItem(td.id))
                                }}/>
                            </div>
                        </div>)
                )
            })}</div>
        </div>
    )
}

export default ShowingList