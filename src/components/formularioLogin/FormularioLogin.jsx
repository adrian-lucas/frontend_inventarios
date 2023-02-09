import { useState } from "react";
import ApiServicesUser from "../../services/api.servicesUser";
function FormularioLogin({setLoginVisible}){
    const dataUserEmpty = {username:'',password:''};
    const [dataUser, setDataUser] = useState(dataUserEmpty);

    const LogIn= async(e)=>{
        e.preventDefault();
        const response = await ApiServicesUser.inicioSesion(dataUser);
        console.log(dataUser);
        if(response.status === 200){
            console.log(response.data);
        }else{
            console.log('credenciales incorrectos')
        }
    }
    
    return (
        <div className="w3-modal" style={{display:'block'}}>
            <div className="w3-modal-content w3-card w3-animate-left w3-display-content w3-padding">
            <form onSubmit={LogIn}>
                <label>
                    Username: 
                    <input 
                    type="text"
                    value={dataUser.username}
                    onChange={(e)=>setDataUser({...dataUser,username:e.target.value})} 
                    className="w3-right" 
                    required/>
                </label><br /><br />
                <label>
                    Password: 
                    <input 
                    type="text" 
                    value={dataUser.password}
                    onChange={(e)=>setDataUser({...dataUser,password:e.target.value})}
                    className="w3-right" 
                    required/>
                </label><br /><br />
                <input type="submit" value="Iniciar"/>
                <input type="button" value="Cancelar"  onClick={()=>setLoginVisible(false)}/>
            </form>
            </div>
        </div>
    );
}
export default FormularioLogin;