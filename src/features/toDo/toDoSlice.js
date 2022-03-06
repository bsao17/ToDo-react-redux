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
                return item.done = !item.done
            })

            // task.done = !task.done
        },
        showingForm: (state, action) => {
            state.toggleForm = action.payload
        },
        clearList: (state, action) => {
            state.items.forEach((st) => {
                if (st.done === action.payload) {
                    return state.items.pop(st.done)
                }
            })
        }
    }
})

export const {addItem, isDoneItem, showingForm, clearList} = toDoSlice.actions
export default toDoSlice.reducer
