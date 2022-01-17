import {createSlice} from "@reduxjs/toolkit";

let id = 0

const initialState = {
    items: [{
        id: id,
        date: new Date().toLocaleTimeString(),
        task: ""
    }],
    toggleForm: false
}

export const toDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.filter((st) => {
                return st.items !== action.payload
            })
        },
        showingForm: (state, action)=>{
            state.toggleForm = action.payload
        }
    }
})

export const { addItem, removeItem, showingForm } = toDoSlice.actions
export default toDoSlice.reducer
