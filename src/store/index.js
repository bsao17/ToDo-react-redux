import {combineReducers} from "redux";
import {todoReducer} from "./reducer/todoReducer";
import formReducer from "./reducer/formReducer";

export const rootReducer = combineReducers({
    list: todoReducer,
    form: formReducer
})