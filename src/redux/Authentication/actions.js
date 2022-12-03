import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERR } from "./actionTypes.js";



export const handleLoginLoading = () =>{

    return {
        type : LOGIN_LOADING
    }
 }

 export const handleLoginSuccess = (payload) =>{

    return {
        type : LOGIN_SUCCESS,
        payload
    }
 }

 export const handleLoginErr = () =>{

    return {
        type : LOGIN_ERR
    }
 }


 export const fetchRegisterUser=(phoneNumber, dial_code)=>(dispatch)=>{
    const regApi=`https://staging.fastor.in/v1/pwa/user/register`;
    fetch(regApi,{
        method:"POST",
        body:{
            phone:phoneNumber,
            dial_code:dial_code
        },
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    .catch((err)=>console.log(err))
 }

 export const fetchUserAuthentication=(phoneNumber,otp,dial_code)=>(dispatch)=>{
    const otpApi=`https://staging.fastor.in/v1/pwa/user/login`;
    dispatch(handleLoginLoading)
    fetch(otpApi,{
        method:"POST",
        body:{
            phone:phoneNumber,
            otp:otp,
            dial_code:dial_code
        },
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then((data)=>dispatch(handleLoginSuccess(data)))
    .catch((err)=>dispatch(handleLoginErr()))
}