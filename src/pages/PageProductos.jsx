import { useEffect, useState } from "react";
import FormularioProducto from "../components/formularioProducto/FormularioProducto";
import TablaProductos from "../components/tablaProductos/TablaProductos";
import BarraPagination from "../components/barraPaginacion/BarraPaginacion";
import ApiServices from "../services/api.services";
function PageProductos(){
    
    const [infoPagination, setInfoPaginacion] = useState({});
    const [listaProductos, setListaProductos] = useState([]);
    const [actualizar, setActualizar] = useState(false);
    const [pagina, setPagina] = useState(1);

   
    useEffect(() => {
        obtenerProductos();
    }, [actualizar,pagina])
    

    const obtenerProductos = async()=>{
        const response = await ApiServices.getProductos();
        if(response.status === 200){
            //console.log(response.data.data);
            //console.log(response.data.pagination)
            setListaProductos(response.data.data);
            setInfoPaginacion(response.data.pagination);
            
        }else{
            console.log('no se obtuvieron los productos')
        }
    }
    
    

    return (
        <div>
            <div className="w3-third">
                <FormularioProducto modificar = {false} productoAModificar = {{}}/>
            </div>
            <div className="w3-twothird">
                <TablaProductos listaProductos={listaProductos} actualizar ={actualizar} setActualizar = {setActualizar}/>
                <BarraPagination infoPagination = {infoPagination} />
            </div>
        </div>
    )
}
export default PageProductos;