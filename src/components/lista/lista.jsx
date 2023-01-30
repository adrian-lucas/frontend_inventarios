import data from '../../mockdata_usuarios.json';
import { useRef,useState} from 'react';
function Lista(){
    const divRef = useRef(); 
   
    let cantUsuarios = 10;
    //const usuarios = data.slice(0,10);
    const [usuarios,setUsuarios] = useState(["adrian","lucas"]);
    const [color,setColor] = useState(["rojo"]);

    const agregarUsuario = ()=>{
          setUsuarios(["sdf"]);
        }
    const cambiarColor = ()=>{
            setColor("verde");
    }
    



    return(
        <div ref={divRef}>
            <div >{color}</div>
            <ul className='w3-ul'>{usuarios.map((usuario)=>{return <li >{usuario}</li>})}</ul>
            <button onClick={agregarUsuario}>Siguiente</button>
        </div>
    );
}
export default Lista;
