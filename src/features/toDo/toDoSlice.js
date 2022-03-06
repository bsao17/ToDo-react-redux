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
            state.items.find((item) => {
                if (action.payload === item.id)
                    item.done = !item.done
            })

            // task.done = !task.done
        },
        showingForm: (state, action) => {
            state.toggleForm = action.payload
        },
        clearList: (state, action) => {
            if (state.items.done){
                state.items.pop(action.payload)
            }
        }
    }
})

export const {addItem, isDoneItem, showingForm, clearList} = toDoSlice.actions
export default toDoSlice.reducer
