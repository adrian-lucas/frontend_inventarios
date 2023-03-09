import ApiServices from "../../services/api.services";
import { useEffect,useState,useRef } from "react";



function FormularioProducto({productoAModificar,actualizarTabla,setItemVisible}){
    
    useEffect(() => {
     getMarcas();
     getSecciones();
    }, []);
    const valoresVacios = {nombre:'',descripcion:'',precio:'',stock:'',marca_id:'',seccion_id:''};
    const iniciales = productoAModificar==null?valoresVacios:productoAModificar
    const [producto, setProducto] = useState(iniciales);
    const [marcas, setMarcas] = useState([]);
    const [secciones, setSecciones] = useState([]);
    
    const archivo = useRef();

    
    const getMarcas = async()=>{
        const response = await ApiServices.getMarcas();
        if(response.status === 200){
            setMarcas(response.data.data);
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

    const registrarProducto = async(e)=>{
        e.preventDefault();
        const response = await ApiServices.registrarProducto(producto);
        if(response.status === 201){
            console.log(response.data.data);
            actualizarTabla();
            limpiarCampos();
            
        }else{
            console.log('el producto no se registró');
        }
    }

    const modificarProducto = async(e)=>{
        e.preventDefault();
        const response = await ApiServices.modificarProducto(producto.id,producto);
        if(response.status === 201) {
            console.log(response.data.data);
            actualizarTabla();
            setItemVisible(false);
            
        }else{
            console.log('no se modifico el producto');
        }
        
    }
   
    const guardarArchivo = async(e)=>{
        e.preventDefault();
        //console.log('metodos de Event',e.target.files[0]);
        //console.log('metodos de href',archivo.current)
        console.log(archivo.current.files[0]);
        const response = await ApiServices.guardarArchivo({imageFile:archivo.current.files[0]});
        if(response.status === 201){
            console.log(response.data.link);
        }else{
            console.log('error al subir el archivo');
        }

    }
    const limpiarCampos =()=>{
        setProducto(valoresVacios);
    }

    const handlerSubmit = (e)=>{
        console.log('producto a modificar:',productoAModificar);
        if(productoAModificar===null){ 
            registrarProducto(e);
        }else{
            modificarProducto(e);
        }
    }

    
    return (
        <div className="w3-container w3-border w3-margin" style={{maxWidth:'500px'}}>
            <form className="w3-container" onSubmit={guardarArchivo}>
                <label className="w3-container">
                    Nombre:
                    <textarea 
                    className="w3-right" 
                    cols="20" 
                    rows="2" 
                    value={producto.nombre}
                    onChange ={(e)=>setProducto({...producto,nombre:e.target.value})} 
                    required>
                    </textarea>
                </label>
                <label className="w3-container">
                    Descripcion:
                    <textarea 
                    className="w3-right" 
                    cols="20" 
                    rows="2" 
                    value={producto.descripcion}
                    onChange ={(e)=>setProducto({...producto,descripcion:e.target.value})}
                    required>
                    </textarea>
                </label>
                <label className="w3-container">
                    Precio:
                    <input 
                    className="w3-right" 
                    type="number" 
                    value={producto.precio}
                    onChange ={(e)=>setProducto({...producto,precio:e.target.value})}
                    required/>
                </label>
                
                <label className="w3-container">
                    Stock: 
                    <input 
                    className="w3-right" 
                    type="number"  
                    value={producto.stock}
                    onChange ={(e)=>setProducto({...producto,stock:e.target.value})}
                    required/>
                </label>
                <label className="w3-container">
                    Marca:
                    <select 
                    className="w3-right" 
                    name="Marcas" 
                    value={producto.marca_id}
                    onChange ={(e)=>setProducto({...producto,marca_id:e.target.value})}
                    required>
                        <option value="">Elija una marca</option>
                        {
                            marcas.map((m)=>{
                                return <option key={m.id} value = {m.id}>{m.nombre}</option>
                            })
                        }
                    </select>
                </label>
                <label className="w3-container">
                    Seccion:
                    <select 
                    className="w3-right" 
                    name="Secciones" 
                    value={producto.seccion_id}
                    onChange ={(e)=>setProducto({...producto,seccion_id:e.target.value})}
                    required>
                        <option value="">Elija un seccion</option>
                        {
                            secciones.map((s)=>{
                                return <option key={s.id} value = {s.id}>{s.codigo}</option>
                            })
                        }
                    </select>
                </label>
                <label className="w3-container">
                    Hoja de Datos:
                    <input 
                    className="w3-right" 
                    type="file"
                    accept=".pdf, jpeg, png"
                    ref={archivo}
                    />
                </label>
                
                <div className="w3-container w3-margin w3-center">
                   <input className=""  type="submit" value="Enviar" /> 
                </div>
               
            </form>
            
        </div>
    );
}
export default FormularioProducto;