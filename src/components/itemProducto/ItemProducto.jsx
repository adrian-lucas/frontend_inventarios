import { useState } from "react";
import ApiServices from "../../services/api.services";
import Pregunta from "../pregunta/Pregunta";
import FormularioProducto from "../formularioProducto/FormularioProducto";
function ItemProducto({producto,setItemVisible,actualizarTabla}){
    const [preguntar, setPreguntar] = useState(false);
    const [modificar, setModificar] = useState(false);

    const eliminarProducto = async()=>{
        const response = await ApiServices.eliminarProducto(producto.id);
        if(response.status === 200){
            console.log('se elimino');
            actualizarTabla();
        }else{
            console.log('no se eliminoooooo');
        }

    }
    return(
        
        <div className="w3-modal" style={{display:'block'}}>
            <div className="w3-modal-content w3-card w3-animate-zoom w3-display-content w3-padding">
                <div>
                    {preguntar?<Pregunta 
                    eliminar       = {eliminarProducto} 
                    setPreguntar   = {setPreguntar} 
                    setItemVisible = {setItemVisible}
                    />:null}

                    {modificar?<FormularioProducto 
                    productoAModificar = {producto} 
                    modificar          = {true} 
                    actualizarTabla    = {actualizarTabla} 
                    setItemVisible     = {setItemVisible}
                    />:null}
                </div>
                <span onClick={()=>setItemVisible(false)} className="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
                <h5><b>Producto: </b> {producto.nombre}</h5>
                <div><b>Descripcion: </b>{producto.descripcion}</div>
                <div className="w3-row" >
                <span className="w3-half"><b>Precio: </b>{producto.precio}</span>
                <span className="w3-half"><b>Stock: </b> {producto.stock}</span><br />
                
                <span className="w3-half"><b>Fecha creacion: </b> {producto.fecha_creacion.slice(0,10)}</span>
                <span className="w3-half"><b>Fecha actualizacion: </b> {producto.fecha_actualizacion?producto.fecha_actualizacion.slice(0,10):''}</span><br />
                <span className="w3-half"><b>Marca: </b>{producto.marca}</span>
                <span className="w3-half"><b>Seccion: </b> {producto.seccion}</span>
                </div>
                <br />
                <div className="w3-margin w3-center">
                    <button 
                        className="w3-margin w3-green w3-round" 
                        onClick={()=>setModificar(true)}>
                        Modificar
                    </button>
                    <button 
                        className="w3-margin w3-red  w3-round" 
                        onClick={()=>setPreguntar(true)}>
                        Eliminar
                    </button>
                    
                </div>
            </div>
        </div>
    );

}
export default ItemProducto;