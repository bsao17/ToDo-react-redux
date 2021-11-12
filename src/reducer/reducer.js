const LOGIN = "login"
const LOGOUT = "logout"
export const authReducer = (initialState, action) => {
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
            return initialState
    }
}