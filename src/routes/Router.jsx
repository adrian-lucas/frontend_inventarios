import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageUsuarios from "../pages/PageUsuarios";
import PageProductos from "../pages/PageProductos";
import TablaProductos from "../components/tablaProductos/TablaProductos";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
import FormularioRegistro from "../components/formularioRegistro/FormularioRegistro";
function Router(){
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/info" element = {<Info/>}/>
            <Route path="/usuarios" element = {<PageUsuarios/>} />
            <Route path="/productos" element = {<PageProductos/>}/>
            <Route path="/prueba" element = {<TablaProductos/>}/>
            <Route path="/login" element = {<FormularioLogin/>}/> 
            <Route path="/registrar" element = {<FormularioRegistro/>}/>
        </Routes>
    );
}
export default Router;