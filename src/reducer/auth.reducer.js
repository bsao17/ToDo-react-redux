const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

export const initialStateLogger = {
    type : "LOGIN"
}

export function authReducer(state = initialStateLogger, action){
    switch (action.type) {
        case LOGIN:
            return {
                LOGIN: true
            }
            break
        case LOGOUT:
            return {
                LOGOUT: false
            }
        default:
            return state
    }
}
