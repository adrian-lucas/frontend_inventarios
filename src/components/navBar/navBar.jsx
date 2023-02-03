import '../../styles/w3.css'
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div className='w3-bar' style={{backgroundColor:'coral'}}>
            <Link className='w3-bar-item w3-hover-blue-grey w3-button' to= '/'>Home</Link>
            <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='/usuarios'>Usuarios</Link>
            <Link className='w3-bar-item w3-hover-blue-grey w3-button' to='productos'>Productos</Link>
        </div>
    )
}
export default NavBar;