import ApiServices from "../../services/api.services";
import { useEffect, useRef, useState } from "react";

function FormularioProducto(){
    useEffect(() => {
     getMarcas();
     getSecciones();
    }, [])
    
    const [marcas, setMarcas] = useState([]);
    const [secciones, setSecciones] = useState([]);
    
    const  nombre = useRef(null);
    const descripcion = useRef(null);
    const precio = useRef(null);
    const stock = useRef(null);
    const marca = useRef(null);
    const seccion = useRef(null);
    
    const getMarcas = async()=>{
        const response = await ApiServices.getMarcas();
        if(response.status === 200){
            setMarcas(response.data.data);
            //console.log(response.data.data);
        }else{
            console.log('no se obtuvieron las marcas');
        }
    }
    const getSecciones = async()=>{
        const response = await ApiServices.getSecciones();
        if(response.status === 200){
            setSecciones(response.data.data);
        }else{
            console.log('no se obtuvieron las seccioens');
        }
    }
    const registrar = async(e)=>{
        e.preventDefault();
        const response = await ApiServices.registrarProducto(getData());
        console.log(marca.current);
        if(response.status === 201){
            console.log(response.data.data);
            
        }else{
            console.log('el producto no se registró');
        }
    }
    const getData = ()=>{
        return{
            nombre : nombre.current.value,
            descripcion : descripcion.current.value,
            precio : precio.current.value,
            stock : stock.current.value,
            marca_id : marca.current.id,
            seccion_id : seccion.current.id,
        }
    }
    
    return (
        <div className="w3-container w3-border w3-margin" style={{width:'500px'}}>
            <form className="w3-container" onSubmit={registrar}>
                <label className="w3-container">
                    Nombre:
                    <textarea className="w3-right" name="" id="" cols="20" rows="2" ref={nombre}></textarea>
                </label>
                <label className="w3-container">
                    Descripcion:
                    <textarea className="w3-right" name="" id="" cols="20" rows="2" ref={descripcion}></textarea>
                </label>
                <label className="w3-container">
                    Precio:
                    <input className="w3-right" type="number" ref={precio}/>
                </label>
                
                <label className="w3-container">
                    Stock: 
                    <input className="w3-right" type="number"  ref={stock}/>
                </label>
                <label className="w3-container">
                    Marca:
                    <select className="w3-right" name="Marcas" id="" ref={marca} >
                        {
                            marcas.map((m)=>{
                                return <option key={m.id} id={m.id}>{m.nombre}</option>
                            })
                        }
                    </select>
                </label>
                <label className="w3-container">
                    Seccion:
                    <select className="w3-right" name="Secciones" id="" ref={seccion}>
                        {
                            secciones.map((s)=>{
                                return <option key={s.id} id={s.id}>{s.codigo}</option>
                            })
                        }
                    </select>
                </label>
                <div className="w3-container w3-margin w3-center">
                   <input className=""  type="submit" value="Registrar" /> 
                </div>
                
                

               
            </form>
            <button onClick={registrar}>imprimir</button>
        </div>
    );
}
export default FormularioProducto;