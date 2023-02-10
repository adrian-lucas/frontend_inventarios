import { API } from "./conection";
const getAuthorization =()=>{
    const access_token = localStorage.length>0?localStorage.getItem('acces_token'):'';
    return {authorization:`Bearer ${access_token}`}
}
const ApiServicesUser = {
    registerUser:async(userData)=>{
        let response = {};
        await API.post('user/register',userData,{headers:getAuthorization()})
        .then((res)=>{response=res})
        .catch((error)=>{
            response = error.response?error.response:{};
        });
        return response;
    },

    inicioSesion:async(userData)=>{
        let response = {};
        await API.post('user/login',userData)
        .then((res)=>{response=res})
        .catch((error)=>{
            response = error.response?error.response:{};
        });
        return response;
    }
}
export default ApiServicesUser;