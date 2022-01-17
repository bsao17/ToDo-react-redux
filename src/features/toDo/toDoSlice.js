import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
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
        }
    }
})

export const { addItem, removeItem } = toDoSlice.actions
export default toDoSlice.reducer
