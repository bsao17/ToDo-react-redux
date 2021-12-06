import React, {useState} from "react"
import './App.scss';
import ActionBarToDo from "./components/actionBarToDo/ActionBarToDo";
import Form from "./components/form/Form.js";
import DisplayToDo from "./components/displayToDo/DisplayToDo";

function App() {
    const [displayForm, setDisplayForm] = useState(false)

    function toggleDisplayForm() {
        setDisplayForm(!displayForm)
    }


    return (
        <div className="App card card-body">
            <h1 className={
                "fw-bold text-center p-2" +
                "  w-50 mx-auto mt-2 text-dark"
            } id={"title"}>
                My List
            </h1>
            { displayForm ?
                <Form activeForm={toggleDisplayForm}>
                    {<input type="text" placeholder={"test input"}/>}
            </Form> : <DisplayToDo/>}
            <ActionBarToDo toggleDisplayForm={toggleDisplayForm}/>
        </div>
    );
}

export default App;
