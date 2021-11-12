import React from "react"
import './App.scss';
import Header from "./components/header/Header";
import {currentState} from "./index";

function App() {
  return (
    <div className="App">
       <h1 className={"fw-bold text-center p-2 border border-3 border-dark rounded-pill w-50 m-auto bg-secondary text-light"}>React redux working</h1>
        <p>The currentState is {currentState}</p>
        <Header/>
    </div>
  );
}

export default App;
