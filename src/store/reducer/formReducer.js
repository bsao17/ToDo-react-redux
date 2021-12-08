import {DISPLAY_FORM} from "../action/formAction";

export const initialState = [{
    show: false
}]

export default function formReducer (state = initialState, action) {
    switch (action.type){
        case DISPLAY_FORM:
            return {
                ...state,
                show : !state.show
            }
        default:
            return state
    }
}