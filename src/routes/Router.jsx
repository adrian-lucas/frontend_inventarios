import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageUsuarios from "../pages/PageUsuarios";
import PageProductos from "../pages/PageProductos";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
import FormikForm from "../components/formikForm/FormikForm";
function Router({activeSession}){
    
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/info" element = {<Info/>}/>
            <Route path="/usuarios" element = {activeSession?<PageUsuarios/>:<FormularioLogin/>} />
            <Route path="/productos" element =  {activeSession?<PageProductos/>:<FormularioLogin/>}/>
            <Route path="/formikForm" element = {<FormikForm/>}/>
        </Routes>
    );
}
export default Router;