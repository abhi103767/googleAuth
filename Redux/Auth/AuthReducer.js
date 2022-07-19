import { AUTH_SUCCESS } from "./AuthAction";

const init  = {
    isLoading : false,
    isError : false,
    newUser : false,
    userData : {}
}

export const AuthReducer = (state = init, action) => {
    console.log(action.type)
    console.log( {...state, isError: false, isLoading:false, userData : action.payload})
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state, isError: false, isLoading:false, userData : action.payload}
        default:
        return state
    }
}