const initialState = {}

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case "get":
            return true
        break
        case "post":
            return false
        break
        default:
            return state
    }

}