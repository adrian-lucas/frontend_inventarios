import '../../styles/w3.css'
import { Link } from 'react-router-dom';
import FormularioRegistro from '../formularioRegistro/FormularioRegistro';
import FormularioLogin from '../formularioLogin/FormularioLogin';
import { useEffect, useState } from 'react';
function NavBar(){
    const [registroVisible, setRegistroVisible] = useState(false);
    const [sesionIniciada, setSesionIniciada] = useState(false);
    
    useEffect(() => {
     setSesionIniciada(localStorage.getItem('acces_token')!==null);
     //console.log(localStorage.getItem('acces_token'))
    }, [])

    const cerrarSesion =()=>{
        localStorage.clear();
        setSesionIniciada(false);
    }
    console.log(sesionIniciada);
    return(
        <div>
            <div className='w3-bar' style={{backgroundColor:'coral'}}>
            <Link className='w3-bar-item w3-hover-blue-grey w3-button' to= '/'>Home</Link>
                {sesionIniciada?
                <div>
                <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='/usuarios'>Usuarios</Link>
                <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='productos'>Productos</Link>
                <div className='w3-right'>
                <button className='w3-button w3-hover-teal w3-blue w3-margin-left' onClick={()=>setRegistroVisible(true)}>Registrar</button>
                <Link className='w3-button w3-hover-teal w3-blue w3-margin-left' onClick={cerrarSesion} to='/'>Cerrar sesion</Link>
                </div>
                </div>:
                null}
             {registroVisible?<FormularioRegistro setRegistroVisible={setRegistroVisible}/>:null}
            </div>
            {!sesionIniciada?<FormularioLogin setSesionIniciada={setSesionIniciada}/>:null}
        </div>
    )
}
export default NavBar;