import data from '../../mockdata_usuarios.json';
import '../../styles/tabla.css'
import Tarjeta from '../tarjeta/tarjeta';
import { useRef,useState} from 'react';
import Formulario from '../formulario/formulario';

//let cantUsuarios = 10;
function Lista(){
    const divRef = useRef(); 
   
    
    //const usuarios = data.slice(0,10);
    const [usuarios,setUsuarios] = useState(data.slice(0,10));
    const [tarjetaVisible,setTarjetaVisible] = useState(false);
    const [user,setUser] = useState(null);
   // const [cantUsuarios,setCantUsuarios] = useState(10);
    //table w3-table w3-striped w3-border
    
    const agregarUsuario = ()=>{
        //console.log(cantUsuarios);
        setUsuarios([...usuarios,data[usuarios.length]]);
    }
    const mostrarTarjeta = (u)=>{
        setTarjetaVisible(true);
        setUser(u);
    }   
    
    return(
        <div className='w3-container w3-margin w3-row' ref={divRef}>
            <div className='w3-third'>
                <Formulario usuarios = {usuarios} setUsuarios = {setUsuarios}/>
            </div>
            <div>
                {tarjetaVisible?<Tarjeta user={user} setTarjetaVisible={setTarjetaVisible}/>:undefined}
            </div>
            <div className='w3-container w3-twothird w3-right'>
                <div className=''>
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
                </div>
                <div className='w3-center w3-container w3-margin'>
                    <button className='w3-container' onClick={agregarUsuario}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}
export default Lista;
