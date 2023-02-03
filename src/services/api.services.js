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
    
    registrarProducto:async ()=>{
        let response ={};
        await API.post('producto/register',
            {
                nombre:'monitor',
                descripcion:'23 pulgadas',
                precio:'200',
                stock:'100',
                marca_id:'383',
                seccion_id:'8',
            })
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
    }
    
}
export default ApiServices;