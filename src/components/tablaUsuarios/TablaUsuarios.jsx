import data from '../../mockdata_usuarios.json';
import '../../styles/tabla.css'
import Tarjeta from '../tarjeta/tarjeta';
import { useRef,useState} from 'react';

function TablaUsuarios({usuarios,setUsuarios}){
    const divRef = useRef(); 
    
    const [tarjetaVisible,setTarjetaVisible] = useState(false);
    const [user,setUser] = useState(null);

    const agregarUsuario = ()=>{
        setUsuarios([...usuarios,data[usuarios.length]]);
    }
    const mostrarTarjeta = (u)=>{
        setTarjetaVisible(true);
        setUser(u);
    }   
    
    return(
        <div className='w3-center w3-margin' ref={divRef}>
            <div>
                {tarjetaVisible?<Tarjeta user={user} setTarjetaVisible={setTarjetaVisible}/>:undefined}
            </div>
            <div className='container '>
                <table className='data w3-table w3-striped  w3-hoverable' >
                    <tbody >
                        <tr className='w3-blue-grey' key={'cabecera'}>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Gender</td>
                            <td>User Name</td>
                        </tr>
                        {usuarios.map(
                            (usuario)=>{
                                return(
                                    <tr onClick={()=>mostrarTarjeta(usuario)} key={usuario.id}>
                                        <td>{`${usuario.first_name} ${usuario.last_name}`}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.gender}</td>
                                        <td>{usuario.username}</td>
                                    </tr>
                                );
                            }
                        )
                        }
                    </tbody>
                </table>
            </div>
            <button className='w3-container w3-margin' onClick={agregarUsuario}>Siguiente</button>   
        </div>
    );
}
export default TablaUsuarios;
