import { useState,useRef } from "react";

function FormularioUsuario({usuarios,setUsuarios}){
 const [firstName, setFirstName] = useState('');
 const [secondName,setSecondName] = useState('');
 const [email, setEmail] = useState('');
 const [userName,setUserName] = useState('');
 const [gender,setGender] = useState('');
 const [errores,setErrores] = useState({firstName:false,secondName:false});
 const disabled = useRef(null); 
 
 const input= useRef();
 const agregar = (e)=>{
    e.preventDefault();
    let resError = 'ERROR valores inválidos';
    // let resExito = `Nombre: ${firstName} ${secondName} \n Email: ${email} \n Username: ${userName} \n Gender: ${gender}`;
    let valido = true;
    if(firstName === ''){
        resError+=`\n First Name :${firstName}`;
        valido = false;
    }
    if(secondName === ''){
        resError+= `\n Last Name : ${secondName}`;
        valido = false;
    }
    if(userName === ''){
        resError+= `\n User Name: ${userName}`;
        valido = false;
    }
    if(gender === ''){
        resError+= `\n Gender: ${gender}`;
        valido = false;
    }
    if(email === ''){
        resError+= `\n Email: ${email}`;
        valido = false;
    }
    
    if(valido){
        const nuevoUsuarios = {
            id: Math.floor(Math.random())*150,
            first_name:firstName,
            last_name:secondName,
            email:email,
            gender:gender,
            username:userName,
        }
        setUsuarios([...usuarios,nuevoUsuarios]);
        limpiarInputs();
    }else{
        alert(resError);
    }
 }


 const verNames = (name)=>{
    let res = true;
    let cont = 0; 
    while(res && cont < name.length){
        res = name.charAt(cont) <= 'z' && name.charAt(cont) >= 'a'
        cont++;
    }
    if(disabled.current){
     disabled.current.disabled = !res;
     console.log(disabled.current);
    }

    return res;
 }
 const limpiarInputs = ()=>{
    setFirstName('');
    setSecondName('');
    setEmail('');
    setUserName('');
    setGender('');
 }



    return (
        <div className = "w3-margin w3-border" style = {{maxWidth:'400px'}}>
            <form onSubmit = {agregar} className="w3-container">
                <label  className="w3-container">
                    First Name: 
                    <input 
                        className = "w3-right" 
                        type = "text" 
                        value = {firstName} 
                        placeholder = "Enter your first name"
                        onChange = {
                            (e)=>{
                                setFirstName(e.target.value); 
                                setErrores(
                                    verNames(e.target.value)?
                                    {...errores,firstName:false}:
                                    {...errores,firstName:true}
                                );
                            }
                        }
                        style = {errores.firstName?{color:'red'}:{color:'green'}} 
                        ref = {input}
                        
                    />
                </label>
                <br />
                <label  className = "w3-container">
                    Last Name: 
                    <input 
                        className = "w3-right" 
                        type = "text" 
                        value = {secondName}
                        placeholder = "Enter your last name"
                        onChange = {
                            (e)=>{
                                setSecondName(e.target.value); 
                                setErrores(
                                    verNames(e.target.value)?
                                    {...errores,secondName:false}:
                                    {...errores,secondName:true}
                                );
                            }
                        }
                        style = {errores.secondName?{color:'red'}:{color:'green'}}
                        
                        
                    />
                </label>
                <br />
                <label className="w3-container" >
                    Email: 
                    <input 
                        className = "w3-right" 
                        type = "email"
                        value = {email}
                        placeholder = "Enter your email"
                        onChange = {(e)=>setEmail(e.target.value)} 
                    />
                </label>
                <br />
                <label  className="w3-container">
                    Username: 
                    <input 
                        className = "w3-right" 
                        type = "text"
                        value = {userName}
                        placeholder = "Enter a user name"
                        onChange = {(e)=>setUserName(e.target.value)} 
                    />
                </label>
                <br />
                <label className="w3-container" >
                    Gender:
                    <select 
                        className = "w3-right"
                        type = "text"
                        value = {gender}
                        onChange = {(e)=>setGender(e.target.value)}
                        >
                            <option value="female" key='1'>Female</option>
                            <option value="male" key='2'>Male</option>
                            <option value="agender" key='3'>Agender</option>
                            <option value="fluid" key='4'>Fluid</option>
                            <option value="other" key='5'>Other</option>
                    </select>
                </label>
                <label className="w3-container">
                    <input className="w3-container" type="submit" value = "Agregar"  ref = {disabled}/>
                </label>
            </form>
        </div>
    );
}
export default FormularioUsuario;