//'Bearer Zr2esjVc8O58XLNKLeHDaMNZGk_vFUwV'
import GenericRequest from "./apiGenericRequest";

const ApiServices = {
    getProductos:async (pagina)=>{
        return GenericRequest.get('producto/view-pagination',{pageSize:15,page:pagina});
    },
    
    registrarProducto:async (producto)=>{
        return GenericRequest.post('producto/register',producto);
    },

    modificarProducto:async (id,cuerpo)=>{
        return GenericRequest.put('producto/change-data',cuerpo,{id:id});
    },

    eliminarProducto:async(id)=>{
        return GenericRequest.delete('producto/remove',{id:id});
    },

    getMarcas:async()=>{
       return GenericRequest.get('marca/view-all-brands')
    },
    
    getSecciones:async()=>{
        return GenericRequest.get('seccion/view-all-seccions');
    },
    
}
export default ApiServices;