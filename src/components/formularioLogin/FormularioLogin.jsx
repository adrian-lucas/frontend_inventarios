import { useState } from "react";
import ApiServicesUser from "../../services/api.servicesUser";
import { useDispatch } from "react-redux";
import {login,setUserInfo} from "../../app/features/loginInfo"

function FormularioLogin(){
    const dispatch = useDispatch();

    const dataUserEmpty = {username:'',password:''};
    const [dataUser, setDataUser] = useState(dataUserEmpty);
    

    const LogIn= async(e)=>{
        e.preventDefault();
        const response = await ApiServicesUser.inicioSesion(dataUser);
        console.log(dataUser);
        if(response.status === 200){
            console.log(response.data.data);
            localStorage.setItem("access_token",response.data.data.access_token);
            dispatch(setUserInfo(response.data.data.userInfo));
            dispatch(login());
        }else{
            console.log('credenciales incorrectos');           
        }
    }
    
    return (
        <div className="w3-container w3-right w3-margin" style={{display:'block',with:'100'}}>
            <div className="w3-card w3-display-content w3-padding">
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
            </form>
            </div>
        </div>
    );
}
export default FormularioLogin;