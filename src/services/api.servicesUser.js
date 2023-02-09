import { API } from "./conection";
const ApiServicesUser = {
    registerUser:async(userData)=>{
        let response = {};
        await API.post('user/register',userData)
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