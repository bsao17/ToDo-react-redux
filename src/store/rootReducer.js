import {combineReducers} from "redux";
import {authReducer} from "../reducer/reducer";

export const rootReducer = combineReducers({
    auth: authReducer
})