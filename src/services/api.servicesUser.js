import GenericRequest from "./apiGenericRequest";

const ApiServicesUser = {
    registerUser:async(userData)=>{
        return GenericRequest.post('user/register',userData);
    },

    inicioSesion:async(userData)=>{
        return GenericRequest.post('user/login',userData);
    }
}
export default ApiServicesUser;