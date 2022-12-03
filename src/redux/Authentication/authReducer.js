
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERR } from "./actionTypes.js";

const initialState={
    loginLoading:false,
    loginErr:false,
    info : ""
}

export const authReducer = (store=initialState, {type, payload})=>{
switch (type) {
    case LOGIN_LOADING:
        return {
            ...store,
            loginLoading:true,
            loginErr:false,
        }
    case LOGIN_SUCCESS:
            return {
                ...store,
                loginLoading:false,
                loginErr:false,
                info:payload
            }
    case LOGIN_ERR:
                return {
                    ...store,
                    loginLoading:false,
                    loginErr:true,
                }
    default:
        return{
            ...store
        }
}
}