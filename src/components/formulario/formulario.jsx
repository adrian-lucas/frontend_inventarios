import { useState,useEffect,useRef } from "react";

function Formulario(){
 const [firstName, setFirstName] = useState('');
 const [secondName,setSecondName] = useState('');
 const [email, setEmail] = useState('');
 const [userName,setUserName] = useState('');
 const [gender,setGender] = useState('');
 const [errores,setErrores] = useState({firstName:false,secondName:false});
 const disabled = useRef(null); 

 const verDatos = (e)=>{
    e.preventDefault();
    let resError = 'ERROR valores inválidos';
    let resExito = `Nombre: ${firstName} ${secondName} \n Email: ${email} \n Username: ${userName} \n Gender: ${gender}`;
    let valido = true;
    if(firstName === ''){
        resError+=`\n First Name :${firstName}`;
        valido = false;
    }
    if(secondName === ''){
        resError+= `\n Second Name : ${secondName};`;
        valido = false;
    }
    if(userName === ''){
        resError+= `\n User Name: ${userName};`;
        valido = false;
    }
    if(gender === ''){
        resError+= `\n Gender: ${gender}`;
        valido = false;
    }

    alert(valido?resExito:resError);
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



    return (
        <div className = "w3-margin w3-border" style = {{maxWidth:'600px'}}>
            <form onSubmit = {verDatos} className="w3-container">
                <label  className="w3-container">
                    First Name: 
                    <input 
                        className = "w3-right" 
                        type = "text" 
                        value = {firstName} 
                        onChange = {
                            (e)=>{
                            setFirstName(e.target.value); 
                            setErrores(verNames(e.target.value)?{...errores,firstName:false}:{...errores,firstName:true});
                            }
                        }
                        style = {errores.firstName?{color:'red'}:{color:'green'}} 
                        
                    />
                </label>
                <br />
                <label  className = "w3-container">
                    Second Name: 
                    <input 
                        className = "w3-right" 
                        type = "text" 
                        value = {secondName}
                        onChange = {
                            (e)=>{
                                setSecondName(e.target.value); 
                                setErrores(verNames(e.target.value)?{...errores,secondName:false}:{...errores,secondName:true});
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
                            <option value=""></option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="agender">Agender</option>
                            <option value="fluid">Fluid</option>
                            <option value="other">Other</option>
                    </select>
                </label>
                <label className="w3-container">
                    <input className="w3-container" type="submit" value = "Enviar"  ref = {disabled}/>
                </label>
            </form>
        </div>
    );
}
export default Formulario;