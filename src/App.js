import React, {useState} from "react"
import './App.scss';
import ActionToDo from "./components/actionToDo/ActionToDo";
import Form from "./components/form/Form.js";
import DisplayToDo from "./components/displayToDo/DisplayToDo";

function App(props) {
    const[displayForm, setDisplayForm] = useState(false)
    function setDisplayTrue(){
        setDisplayForm(true)
        console.log(displayForm)
    }
    function setDisplayFalse(){
        setDisplayForm(false)
        console.log(displayForm)
    }
  return (
    <div className="App card card-body">
       <h1 className={
           "fw-bold text-center p-2" +
           "  w-50 mx-auto mt-2 text-dark"
       } id={"title"}>
           My ToDo
       </h1>
        { displayForm ? <Form activeForm={setDisplayFalse}/> : <DisplayToDo/>}
        <ActionToDo activeForm={setDisplayTrue}/>
    </div>
  );
}

export default App;
