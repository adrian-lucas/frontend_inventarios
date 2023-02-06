import { API } from "./conection";
const ApiServices = {
    getProductos:async ()=>{
        let response ={};
        await API.get('producto/view-pagination')
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
        await API.post('producto/register',producto)
            .then((res)=>{response=res})
            .catch((error)=>{
                response=error.response?error.response:{};
                console.log(error);
            });
        //console.log(response);
        return response;
    },

    modificarProducto:async ()=>{
        let response = {};
        await API.put('producto/change-data?id=1011',{nombre:'sockets'})
        .then((res)=>{response=res})
        .catch((error)=>{
            response=error.response?error.response:{};
            console.log(error);
        });
        return response;
    },
    eliminarProducto:async()=>{
        let response = {};
        await API.delete('producto/remove?id=1011')
        .then((res)=>{response=res})
        .catch((error)=>{
            response=error.response?error.response:{};
            console.log(error);
        })
        return response;
    },
    getMarcas:async()=>{
        let response = {};
        await API.get('marca/view-all-brands')
        .then((res)=>{response=res})
        .catch((error)=>{
            response = error.response?error.response:{};
            console.log(error);
        });
        return response;
    },
    getSecciones:async()=>{
        let response = {};
        await API.get('seccion/view-all-seccions')
        .then((res)=>{response=res})
        .catch((error)=>{
            response = error.response?error.response:{};
            console.log(error);
        });
        return response;
    },
    
}
export default ApiServices;