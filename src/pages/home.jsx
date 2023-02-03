import ApiServices from "../services/api.services";
import { useEffect, useState } from "react";

function Home(){
    useEffect(() => {
        getProductos();
    }, []);

    const [productos, setProductos] = useState([]);
    
    const getProductos = async()=>{
        const response = await ApiServices.getProductos();
        if(response.status === 200){
            console.log(response.data.data);
            setProductos(response.data.data);
        }else{
            //mostrar algo
        }
    }
    const registrarProducto = async()=>{
        const response = await ApiServices.registrarProducto();
        if(response.status === 201){
            console.log(response.data.data);
        }else{
            console.log('algo fallo');
        }

    } 
    const modificarProducto = async()=>{
        const response = await ApiServices.modificarProducto();
        if(response.status === 201){
            console.log(response.data.data);
        }else{
            console.log('no se actualizaron los datos');
        }
    }
    const eliminarProducto = async()=>{
        const response = await ApiServices.eliminarProducto();
        if(response.status === 500){
            console.log(response.data.data);
        }else{
            console.log('no se elimino el producto');
        }
    }
    
    return (
        <div>
            <button onClick={eliminarProducto}> Guardar</button>
        </div>
    );
}
export default Home;