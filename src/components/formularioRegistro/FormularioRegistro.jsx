import { useState } from "react";
import ApiServicesUser from "../../services/api.servicesUser";
function FormularioRegistro({setRegistroVisible}){
    const userEmpty = {nombres:'',username:'',password:''};
    const [dataUser, setDataUser] = useState(userEmpty);
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const registrarUsuario = async(e)=>{
        e.preventDefault();
        if(passwordConfirmation===dataUser.password){
            const response = await ApiServicesUser.registerUser(dataUser)
            console.log(dataUser);
            if(response.status===201){
                console.log('usuario registrado');
                setDataUser(userEmpty);
                setPasswordConfirmation('');
            }else{
                console.log('usuario no registrado');
               
            }
        }else{
            console.log('paswword no coiciden')
        }
    }

    return (
        <div className="w3-modal" style={{display:'block',}}>
            <div className="w3-modal-content w3-card w3-animate-left w3-display-content w3-padding" style={{maxWidth:'600px'}}>

            <form onSubmit={registrarUsuario}>
                <label>
                    Name: 
                    <input 
                    type="text" 
                    className="w3-right"
                    value={dataUser.nombres}
                    onChange={(e)=>setDataUser({...dataUser,nombres:e.target.value})} 
                    required
                    />
                </label><br /><br />
                <label>
                    Username: 
                    <input 
                    type="text" 
                    className="w3-right"
                    value={dataUser.username}
                    onChange={(e)=>setDataUser({...dataUser,username:e.target.value})}
                    required/>
                </label><br /><br />
                <label>
                    Password: 
                    <input 
                    type="text" 
                    className="w3-right" 
                    value={dataUser.password}
                    onChange={(e)=>setDataUser({...dataUser,password:e.target.value})}
                    required/>
                </label><br /><br />
                <label>
                    Repeat Password:
                    <input 
                    type="text" 
                    className="w3-right" 
                    value={passwordConfirmation}
                    onChange={(e=>setPasswordConfirmation(e.target.value))}
                    required/>
                </label><br /><br />
                <input type="submit" value="Registrar"/>
                <input type="button" value="Cancelar"  onClick={()=>setRegistroVisible(false)}/>
            </form>
            </div>
        </div>
    )
}
export default FormularioRegistro;