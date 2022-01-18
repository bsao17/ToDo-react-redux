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
        isDoneItem: (state, action) => {
            state.items.forEach((item) => {
                if (item.id === action.payload) {
                    return item.isDone = true
                }
            })
        },
        showingForm: (state, action) => {
            state.toggleForm = action.payload
        }
    }
})

export const {addItem, isDoneItem, showingForm} = toDoSlice.actions
export default toDoSlice.reducer
