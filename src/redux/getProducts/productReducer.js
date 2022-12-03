import { GET_RES_DATA_LOADING, GET_RES_DATA_SUCCESS, GET_RES_DATA_ERR } from "./actions.js"

const initialState={
    getResDataLoading:false,
    getResDataErr:false,
    resData:[]
}

export const productsReducer=(store=initialState, {type, payload})=>{
    switch (type) {
        case GET_RES_DATA_LOADING:
            return{
                ...store,
                getResDataLoading:true,
                getResDataErr:false
            }
        case GET_RES_DATA_SUCCESS:
            return {
                ...store,
                getResDataLoading:false,
                getResDataErr:false,
                resData:payload
            }
        case GET_RES_DATA_ERR:
            return{
                ...store,
                getResDataLoading:false,
                getResDataErr:true
            }
    
            default:
                return{
                    ...store
            }
    }
}
