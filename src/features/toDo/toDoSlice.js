import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    toggleForm: false,
}

export const toDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.validated = true
        },
        showingForm: (state, action) => {
            state.toggleForm = action.payload
        }
    }
})

export const {addItem, removeItem, showingForm} = toDoSlice.actions
export default toDoSlice.reducer
