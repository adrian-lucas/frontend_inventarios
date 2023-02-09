import '../../styles/w3.css'
import { Link } from 'react-router-dom';
import FormularioRegistro from '../formularioRegistro/FormularioRegistro';
import FormularioLogin from '../formularioLogin/FormularioLogin';
import { useState } from 'react';
function NavBar(){
    const [registroVisible, setRegistroVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    return(
        <div>
            <div className='w3-bar' style={{backgroundColor:'coral'}}>
                <Link className='w3-bar-item w3-hover-blue-grey w3-button' to= '/'>Home</Link>
                <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='/usuarios'>Usuarios</Link>
                <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='productos'>Productos</Link>
                <div className='w3-right'>
                    <button className='w3-button w3-hover-teal w3-blue w3-margin-rigth' onClick={()=>setLoginVisible(true)}>Inicio Sesion</button>
                    <button className='w3-button w3-hover-teal w3-blue w3-margin-left' onClick={()=>setRegistroVisible(true)}>Registrar</button>
                </div>
                    {registroVisible?<FormularioRegistro setRegistroVisible={setRegistroVisible}/>:null}
                    {loginVisible?<FormularioLogin setLoginVisible={setLoginVisible}/>:null}
                </div>
        </div>
    )
}
export default NavBar;