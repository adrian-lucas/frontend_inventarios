import { useEffect, useState } from "react";
import ItemProducto from "../itemProducto/ItemProducto";
import ApiServices from "../../services/api.services";
function TablaProductos(){
    
    const [productos,setProductos] = useState([]);
    const [itemVisible, setItemVisible] = useState(false);
    const [producto, setProducto] = useState({});
    const [seElimino, setSeElimino] = useState(false);

    useEffect(() => {
        obtenerProductos();
    }, []);
    useEffect(() => {
        obtenerProductos();
    }, [seElimino]);
    
    const obtenerProductos = async()=>{
        const response = await ApiServices.getProductos();
        if(response.status === 200){
            console.log(response.data.data);
            setProductos(response.data.data);
            //console.log(productos);
        }else{
            console.log('no se obtuvieron los productos')
        }
    }
    const mostrarItem = (p)=>{
        setItemVisible(p);
        setProducto(p);
    }
    return(
        <div className="">
            <div>
                {itemVisible?<ItemProducto producto={producto} setItemVisible = {setItemVisible} setSeElimino = {setSeElimino} seElimino = {seElimino}/>:null}
            </div>
            <table className="w3-table w3-striped w3-hoverable">
            <tbody >
                <tr className='w3-blue-grey' key={'cabecera'}>
                    <td>Nombre</td>
                    <td>Marca</td>
                    <td>Stock</td>
                    <td>Seccion</td>
                </tr>
                {productos.map(
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