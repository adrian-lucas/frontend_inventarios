import { useState } from "react";
import ApiServices from "../../services/api.services";
import Pregunta from "../aviso/aviso";
function ItemProducto({producto,setItemVisible,seElimino,setSeElimino}){
    const [preguntar, setPreguntar] = useState(false);
    const eliminar = async()=>{
        const response = await ApiServices.eliminarProducto(producto.id);
        if(response.status === 200){
            console.log('se elimino');
            setSeElimino(!seElimino);
        }else{
            console.log('no se eliminoooooo');
        }

    }
    return(
        
        <div className="w3-modal" style={{display:'block'}}>
            <div className="w3-modal-content w3-card w3-animate-zoom w3-display-content w3-padding">
                <div>{preguntar?<Pregunta eliminar = {eliminar} setPreguntar = {setPreguntar} setItemVisible = {setItemVisible}/>:null}</div>
                <span onClick={()=>setItemVisible(false)} className="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
                <h5>Producto: {producto.nombre}</h5>
                <div>Descripcion: {producto.descripcion}</div>
                <span>Precio: {producto.precio}</span>
                <span>Stock: {producto.stock}</span><br />
                <span>Fecha creacion: {producto.fecha_creacion}</span>
                <span>Fecha actualizacion: {producto.fecha_actualizacion}</span><br />
                <span>Marca: {producto.marca_id}</span>
                <span>Seccion: {producto.seccion_id}</span>
                <br />
                <div className="w3-margin w3-center">
                    <button className="w3-margin w3-green w3-round">Modificar</button>
                    <button className="w3-margin w3-red  w3-round" onClick={()=>setPreguntar(true)}>Eliminar</button>
                    
                </div>
            </div>
        </div>
    );

}
export default ItemProducto;