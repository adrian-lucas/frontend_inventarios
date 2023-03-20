import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageUsuarios from "../pages/PageUsuarios";
import PageProductos from "../pages/PageProductos";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
import FormikForm from "../components/formikForm/FormikForm";
import FormularioUsuario2 from "../components/formularioUsuario2/FormularioUsuario2";
import SalaChat from "../pages/SalaChat";
function Router({activeSession}){
    
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/info" element = {<Info/>}/>
            <Route path="/usuarios" element = {activeSession?<PageUsuarios/>:<FormularioLogin/>} />
            <Route path="/productos" element =  {activeSession?<PageProductos/>:<FormularioLogin/>}/>
            <Route path="/formikForm" element = {<FormularioUsuario2/>}/>
            <Route path="/salaChat" element = {<SalaChat/>}/>
        </Routes>
    );
}
export default Router;