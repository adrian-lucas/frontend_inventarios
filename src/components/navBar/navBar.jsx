import '../../styles/w3.css'
import { Link } from 'react-router-dom';
import FormularioRegistro from '../formularioRegistro/FormularioRegistro';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { logout, setUserInfo} from "../../app/features/loginInfo"
function NavBar({sessionInfo}){
    const SUPER_ADMIN= 'SuperAdmin'
    const activeSession = sessionInfo.session;
    const userRole = sessionInfo.userInfo.role;
    const dispatch = useDispatch();
    const [registroVisible, setRegistroVisible] = useState(false);
    console.log(userRole);

    const cerrarSesion =()=>{
        localStorage.clear();
       dispatch(logout());
       dispatch(setUserInfo({}));
    }
 
    return(
        <div>
            <div className='w3-bar' style={{backgroundColor:'coral'}}>
             <Link className='w3-bar-item w3-hover-blue-grey w3-button' to= '/'>Home</Link>
                {activeSession?
                <div>
                    <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='/usuarios'>Usuarios</Link>
                    <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='productos'>Productos</Link>

                    <div className='w3-dropdown-hover w3-right'>
                        <button className="w3-button">Menu</button>
                       <div className='w3-dropdown-content w3-bar-block w3-card-4 w3-border' style={{right:'0'}}>
                            {userRole=== SUPER_ADMIN?
                            <button className='w3-button w3-hover-teal w3-blue  w3-bar-item' onClick={()=>setRegistroVisible(true)}>Registrar</button>:
                            null}
                            <button className='w3-button w3-hover-teal w3-blue  w3-bar-item'>Subir Archivo</button>
                            <Link className='w3-button w3-hover-teal w3-blue  w3-bar-item' onClick={cerrarSesion} to='/'>Cerrar sesion</Link>
                       </div>
                    </div>

                </div>:
                null}
             {registroVisible?<FormularioRegistro setRegistroVisible={setRegistroVisible}/>:null}
            </div>
            
        </div>
    )
}
export default NavBar;