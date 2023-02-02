import { API } from "./conection";
const ApiServices = {
    getProductos:async ()=>{
        let response ={};
        await API.get('producto/view-pagination')
            .then((res)=>{response=res})
            .catch((error)=>{
                response=error.response?error.response:{};
               // console.log(error);
            });
        //console.log(response);
        return response;
    },
    geProductos:async ()=>{
        let response ={};
        await API.post('producto/view-pagination',)
            .then((res)=>{response=res})
            .catch((error)=>{
                response=error.response?error.response:{};
               // console.log(error);
            });
        //console.log(response);
        return response;
    }
}
export default ApiServices;