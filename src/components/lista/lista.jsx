import data from '../../mockdata_usuarios.json';
import Tarjeta from '../tarjeta/tarjeta';
import { useRef,useState} from 'react';

let cantUsuarios = 10;
function Lista(){
    const divRef = useRef(); 
   
    
    //const usuarios = data.slice(0,10);
    const [usuarios,setUsuarios] = useState(data.slice(0,cantUsuarios));
    const [color,setColor] = useState(["rojo"]);

    const agregarUsuario = ()=>{
        console.log(cantUsuarios);
        setUsuarios(data.slice(0,++cantUsuarios));
    }
   
      
    const cambiarColor = ()=>{
        setColor("verde");
    }
    
    return(
        <div ref={divRef}>
            <div >{color}</div>
            <ul className='w3-ul'>{usuarios.map((usuario)=>{return <li key={usuario.id} onClick={mostrar}>{usuario.first_name}</li>})}</ul>
            <button onClick={agregarUsuario}>Siguiente</button>
        </div>
    );
}
export default Lista;
