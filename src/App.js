import React, {useState} from "react"
import './App.scss';
import ActionBarToDo from "./components/actionBarToDo/ActionBarToDo";

function App() {


    return (
        <div className="App card card-body">
            <h1 className={
                "fw-bold text-center p-2" +
                "  w-50 mx-auto mt-2 text-dark"
            } id={"title"}>
                My List
            </h1>
            <ActionBarToDo/>
        </div>
    );
}

export default App;
