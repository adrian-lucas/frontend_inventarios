//'Bearer Zr2esjVc8O58XLNKLeHDaMNZGk_vFUwV'
import { API } from "./conection";
const getAuthorization =()=>{
    const access_token = localStorage.length>0?localStorage.getItem('acces_token'):'';
    return {authorization:`Bearer ${access_token}`}
}
const ApiServices = {
    getProductos:async (pagina)=>{
        let response ={};
        await API.get('producto/view-pagination',{params:{pageSize:15,page:pagina},headers:getAuthorization()})
            .then((res)=>{response=res})
            .catch((error)=>{
                response = error.response?error.response:{};
               // console.log(error);
            });
        //console.log(response);
        return response;
    },
    
    registrarProducto:async (producto)=>{
        let response ={};
        await API.post('producto/register',producto,{headers:getAuthorization()})
            .then((res)=>{response=res})
            .catch((error)=>{
                response=error.response?error.response:{};
                console.log(error);
            });
        //console.log(response);
        return response;
    },

    modificarProducto:async (id,cuerpo)=>{
        let response = {};
        await API.put('producto/change-data?id='+id,cuerpo,{headers:getAuthorization()})
        .then((res)=>{response=res})
        .catch((error)=>{
            response=error.response?error.response:{};
            console.log(error);
        });
        return response;
    },
    eliminarProducto:async(id)=>{
        let response = {};
        await API.delete('producto/remove?id='+id,{headers:getAuthorization()})
        .then((res)=>{response=res})
        .catch((error)=>{
            response=error.response?error.response:{};
            console.log(error);
        })
        return response;
    },
    getMarcas:async()=>{
        let response = {};
        await API.get('marca/view-all-brands',{headers:getAuthorization()})
        .then((res)=>{response=res})
        .catch((error)=>{
            response = error.response?error.response:{};
            console.log(error);
        });
        return response;
    },
    getSecciones:async()=>{
        let response = {};
        await API.get('seccion/view-all-seccions',{headers:getAuthorization()})
        .then((res)=>{response=res})
        .catch((error)=>{
            response = error.response?error.response:{};
            console.log(error);
        });
        return response;
    },
    
}
export default ApiServices;