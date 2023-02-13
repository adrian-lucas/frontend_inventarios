import store from "../app/store";
import { logout } from "../app/features/loginState";
import { API } from "./conection"
const authHeader=()=>{
    const access_token = localStorage.getItem('acces_token')===null?'':localStorage.getItem('acces_token');
    return {authorization:`Bearer ${access_token}`}
}
export const GenericRequest = { 	
    get: async (url, params={}) => {     	
        let response = {}     	
        await API.get(url, { params, headers: authHeader() })         	
        .then(res => response = res)         	
        .catch(error => response = error.response ? error.response : {})     	
        if (response.status === 401) {      
            store.dispatch(logout());   	
        console.log('no esta autorizado para ingresar')   	
        }     	
        return response 	
    }, 	

    post: async (url, data, params={}) => {     	
        let response = {}     	
        await API.post(url, data, { params, headers: authHeader() })         	
        .then(res => response = res)         	
        .catch(error => response = error.response ? error.response : {})     
            if (response.status === 401) {         	
        // Si no está autenticado hacer algo     	
        }     	
        return response 	
    },

    put: async (url, data, params={}) => {     	
        let response = {}     	
        await API.put(url, data, { params, headers: authHeader() })         	
        .then(res => response = res)         	
        .catch(error => response = error.response ? error.response : {})     
            if (response.status === 401) {         	
        // Si no está autenticado hacer algo     	
        }     	
        return response 	
    },

    delete: async (url,params={}) => {     	
        let response = {}     	
        await API.delete(url,{ params, headers: authHeader() })         	
        .then(res => response = res)         	
        .catch(error => response = error.response ? error.response : {})     
            if (response.status === 401) {         	
        // Si no está autenticado hacer algo   
            console.log('no esta autenticado');
        }     	
        return response 	
    }, 
}
export default GenericRequest;
    