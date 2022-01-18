import React from "react"
import {useDispatch, useSelector} from "react-redux";
import styles from "./showingList.module.scss"
import {removeItem} from "../../features/toDo/toDoSlice";

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
            <div className={"d-flex flex-column justify-content-lg-around mx-5"}>{selector.map((todo) => {
                return (
                    <div key={todo.id}>
                        <div className={"d-flex justify-content-between align-items-center "}>
                            <code className={"h5 fw-bold mx-5"}>{todo.id} </code>
                            <h5 key={todo.item}>{todo.task}</h5>
                            <input className={styles.remove} type="submit" value={"X"} onClick={()=>{
                                dispatch(removeItem({
                                    id: todo.id,
                                }))
                            }} />
                        </div>
                    </div>
                )
            })}</div>

        </div>
    )
}

export default ShowingList