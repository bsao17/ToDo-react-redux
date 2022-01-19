import React, {useRef, useState} from "react"
import './App.scss';
import AddItem from "./components/actionBar/addItem/AddItem";
import {showingForm} from "./features/toDo/toDoSlice";
import {useDispatch} from "react-redux";

function App() {
    const [listTitle, setListTitle] = useState("Title List")
    const titleRef = useRef(null)
    const dispatch = useDispatch()


    function inputFocus(item) {
        item.current.focus()
    }

    function changeTitle() {
        setListTitle(titleRef.current.value)
    }


    return (
        <>
            <div id={"container"} className = "App card card-body overflow-scroll position-relative">
                <h1 className={
                    "fw-bold text-center p-2" +
                    "  w-50 mx-auto mt-2 text-dark"
                } id={"title"}>
                    {listTitle}
                </h1>
                <input ref={titleRef} className={'w-25 mx-auto bg-light'} type="text" onChange={() => {
                    changeTitle()
                }} id={'title'} placeholder={'Choose your Title List'}/>

                    <AddItem toggleDisplayForm={dispatch(showingForm)} inputRef={inputFocus}/>
            </div>
        </>
    );
}

export default App;
