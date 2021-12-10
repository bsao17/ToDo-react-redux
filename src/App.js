import React, {useRef, useState} from "react"
import './App.scss';
import AddItem from "./components/actionBar/addItem/AddItem";

function App() {
    const [displayForm, setDisplayForm] = useState(false)
    const [listTitle, setListTitle] = useState("Title List")
    const titleRef = useRef(null)

    function toggleDisplayForm() {
        setDisplayForm(!displayForm)
    }

    function inputFocus(item) {
        item.current.focus()
    }

    function changeTitle() {
        setListTitle(titleRef.current.value)
        console.log(titleRef, listTitle)
    }


    return (
        <div className="App card card-body">
            <h1 className={
                "fw-bold text-center p-2" +
                "  w-50 mx-auto mt-2 text-dark"
            } id={"title"}>
                {listTitle}
            </h1>
            <input ref={titleRef} className={'w-25 mx-auto bg-light'} type="text" onChange={() => {
                changeTitle()
            }} id={'title'} placeholder={'Choose your Title List'}/>

            <AddItem toggleDisplayForm={toggleDisplayForm} inputRef={inputFocus}/>
        </div>
    );
}

export default App;
