import {useState } from "react";
import ItemProducto from "../itemProducto/ItemProducto";
function TablaProductos({listaProductos,actualizarTabla}){
    const [itemVisible, setItemVisible] = useState(false);
    const [producto, setProducto] = useState({});
    
    const mostrarItem = (p)=>{
        setItemVisible(true);
        setProducto(p);
    }
    return(
        <div className="">
            <div>
                {
                    itemVisible
                    ?<ItemProducto 
                    producto={producto} 
                    setItemVisible = {setItemVisible} 
                    actualizarTabla = {actualizarTabla}/>
                    :null
                }
            </div>
            <table className="w3-table w3-striped w3-hoverable w3-margin">
            <tbody >
                <tr className='w3-blue-grey' key={'cabecera'}>
                    <td>Nombre</td>
                    <td>Marca</td>
                    <td>Stock</td>
                    <td>Seccion</td>
                </tr>
                {
                
                }
                {listaProductos.map(
                    (p)=>{
                        return(
                            <tr onClick={()=>mostrarItem(p)} key={p.id}>
                                <td>{p.nombre}</td>
                                <td>{p.marca}</td>
                                <td>{p.stock}</td>
                                <td>{p.seccion}</td>
                            </tr>
                        );
                    }
                )
                }
            </tbody>
            </table>
        </div>
    );

}
export default TablaProductos;