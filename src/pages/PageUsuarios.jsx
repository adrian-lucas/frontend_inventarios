import data from "../mockdata_usuarios.json"
import { useState } from "react";
import TablaUsuarios from "../components/tablaUsuarios/TablaUsuarios";
import FormularioUsuario from "../components/formularioUsuario/FormularioUsuario";

function PageUsuarios(){
    const [usuarios,setUsuarios] = useState(data.slice(0,10));
    
    return(
        <div className="w3-container w3-row w3-margin">
            <div className="w3-third">
                <FormularioUsuario usuarios={usuarios} setUsuarios = {setUsuarios}/>
            </div>
            <div className="w3-twothird w3-container w3-right">
                <TablaUsuarios usuarios = {usuarios} setUsuarios = {setUsuarios}/>
            </div>
        </div>
    );
}
export default PageUsuarios;