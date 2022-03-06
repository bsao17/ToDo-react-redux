import React from "react"
import {useDispatch, useSelector} from "react-redux";
import styles from "./showingList.module.scss"
import {isDoneItem} from "../../features/toDo/toDoSlice";

function DisplayedTask() {
    const selectorItems = useSelector((state) => {
        return state.toDoItems.items
    })

    const dispatch = useDispatch()

    return (
        <div className={"m-5 p-2"} id={styles.container}>
            <h3
                className={"text-light fw-bold bg-dark d-flex flex-row justify-content-center mb-2 p-2 rounded align-items-center"}>
                <div className={"mx-5"}>Content</div>
            </h3>
            <div className={"d-flex flex-column justify-content-lg-around mx-5"}>{selectorItems.map((td) => {
                return (
                    td.done ?
                    (<div key={td.id} className={"bg-light"} >
                        <div className={"d-flex justify-content-between align-items-center"}>
                            <h5 key={td.item} className={"text-muted text-decoration-line-through"}>{td.task}</h5>
                            <input className={styles.toggleTaskIsDone} type="submit" value={"is done"} onClick={() => {
                                dispatch(isDoneItem(td.id))
                            }}/>
                        </div>
                    </div>) : (<div key={td.id}>
                            <div className={"col w-100 text d-flex justify-content-between align-items-center "}>
                                <p className={"col"} id={styles.date}><span className={"text-dark fw-light h6"}>Date:</span> {td.date}</p>
                                <p className={"col"}><span className={"text-dark fw-light h6"}>Time:</span> {td.time}</p>
                                <h5 className={"col"} key={td.item}>{td.task}</h5>
                                <input className={styles.toggleTaskToDo} type="submit" value={"to do"} onClick={() => {
                                    dispatch(isDoneItem(td.id))
                                }}/>
                            </div>
                        </div>)
                )
            })}</div>
        </div>
    )
}

export default DisplayedTask