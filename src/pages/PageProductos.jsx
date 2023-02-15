import { useEffect, useState } from "react";
import FormularioProducto from "../components/formularioProducto/FormularioProducto";
import TablaProductos from "../components/tablaProductos/TablaProductos";
import BarraPagination from "../components/barraPaginacion/BarraPaginacion";
import ApiServices from "../services/api.services";
import { useSelector } from "react-redux";
function PageProductos(){
    const ESPECTADOR = 'Espectador';
    const userRole = useSelector((state)=>state.loginInfo.userInfo.role);
    console.log(userRole);
    const [listaProductos, setListaProductos] = useState([]);
    const [actualizar, setActualizar] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [infoPagination, setInfoPaginacion] = useState({});

    useEffect(() => {
      obtenerProductos();
    }, [actualizar]);
    
    const actualizarTabla = ()=>{
        setActualizar(!actualizar);
    }
    

    const obtenerProductos = async ()=>{
        const response = await ApiServices.getProductos(pagina);
        if(response.status === 200){
            setListaProductos(response.data.data);
            setInfoPaginacion(response.data.pagination);
        }else{
            console.log('no se obtuvieron los productos')
        }
    }
    
    return (
        localStorage.length?
        <div>
            {
            userRole===ESPECTADOR?
            null:
            <div className="w3-third">
                <h4 className="w3-center">Registrar Nuevo Producto</h4>
                <FormularioProducto 
                    productoAModificar = {null}
                    actualizarTabla = {actualizarTabla}
                />
            </div>
            }
            
            <div className={userRole===ESPECTADOR?"":"w3-twothird"}>
                <h4 className="w3-center">Productos</h4>
                <TablaProductos 
                    listaProductos = {listaProductos} 
                    actualizarTabla = {actualizarTabla}
                />      
                <BarraPagination 
                    infoPagination = {infoPagination} 
                    setPagina = {setPagina} 
                    actualizarTabla = {actualizarTabla}
                />
            </div>
      </div>
        : <div>Primero debe iniciar sesion</div>
    )
}
export default PageProductos;