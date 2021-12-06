import React, {createRef, useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../store/action/taskAction";
import {useForm} from "react-hook-form";



function Form({toggleDisplayForm, children}) {
    /*const handleTodo = useDispatch()
    const{register, handleSubmit} = useForm()
    const inputRef = useRef(null)

    const onSubmit = (data)=>{
        toggleDisplayForm()
        handleTodo(addTask({ todo: data.task}))
    }*/

    return (
        <div>{children}</div>
    )
}

export default Form;