import { GET_RES_DATA_LOADING, GET_RES_DATA_SUCCESS, GET_RES_DATA_ERR } from "./actions.js";


export const handleGetResDataLoading=()=>{
    return {
        type:GET_RES_DATA_LOADING
    }
}

export const handleGetResDataSuccess=(payload)=>{
    return {
        type:GET_RES_DATA_SUCCESS,
        payload
    }
}

export const handleGetResDataErr=()=>{
    return {
        type:GET_RES_DATA_ERR
    }
}



export const fetchResData=()=>(dispatch, state)=>{
    const userData=state().auth
    const resDataApi=`https://staging.fastor.in/v1/m/restaurant?city_id=118&&`
    dispatch(handleGetResDataLoading())
    fetch(resDataApi,{
        method:"POST",
        body:{},
        headers:{
            Authorization:userData?.token
        }
    })
    .then(res=>res.json())
    .then((data)=>{dispatch(handleGetResDataSuccess(data))})
    .catch((err)=>{dispatch(handleGetResDataErr())})
}