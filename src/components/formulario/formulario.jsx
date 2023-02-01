import { useState } from "react";

function Formulario(){
 const [firstName, setFirstName] = useState('');
 const [secondName,setSecondName] = useState('');
 const [email, setEmail] = useState('');
 const [userName,setUserName] = useState('');
 const [gender,setGender] = useState('');
 const verFirstName = (e)=>{
    setFirstName(e.target.value);
    console.log(firstName);
 }
 const mostrarDatos = (e)=>{
    alert(`Nombre: ${firstName} ${secondName} \n Email: ${email} \n Username: ${userName} \n Gender: ${gender}`);
    e.preventDefault();
 }



    return (
        <div className = "w3-margin w3-border" style = {{maxWidth:'600px'}}>
            <form onSubmit = {mostrarDatos} className="w3-container">
                <label  className="w3-container">
                    First Name: 
                    <input 
                        className = "w3-right" 
                        type = "text" 
                        value = {firstName} 
                        onChange = {(e)=>setFirstName(e.target.value)} 
                    />
                </label>
                <br />
                <label  className = "w3-container">
                    Second Name: 
                    <input 
                        className = "w3-right" 
                        type = "text" 
                        value = {secondName}
                        onChange = {(e)=>setSecondName(e.target.value)}
                    />
                </label>
                <br />
                <label className="w3-container" >
                    Email: 
                    <input 
                        className = "w3-right" 
                        type = "text"
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
                <input type="submit" value="Mostrar"/>
            </form>
        </div>
    );
}
export default Formulario;