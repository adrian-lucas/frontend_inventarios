import '../../styles/w3.css'
import { Link } from 'react-router-dom';
import FormularioRegistro from '../formularioRegistro/FormularioRegistro';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout} from "../../app/features/loginInfo"
function NavBar(){
    const activeSession = useSelector((state)=>state.loginInfo.session);
    const dispatch = useDispatch();
    const [registroVisible, setRegistroVisible] = useState(false);

  
    const cerrarSesion =()=>{
        localStorage.clear();
       dispatch(logout());
    }
 
    return(
        <div>
            <div className='w3-bar' style={{backgroundColor:'coral'}}>
            <Link className='w3-bar-item w3-hover-blue-grey w3-button' to= '/'>Home</Link>
                {activeSession?
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
            
        </div>
    )
}
export default NavBar;