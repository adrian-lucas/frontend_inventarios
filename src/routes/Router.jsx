import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageUsuarios from "../pages/PageUsuarios";
import PageProductos from "../pages/PageProductos";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
function Router({handlerLogin}){
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/info" element = {<Info/>}/>
            <Route path="/usuarios" element = {handlerLogin?<PageUsuarios/>:<FormularioLogin/>} />
            <Route path="/productos" element =  {handlerLogin?<PageProductos/>:<FormularioLogin/>}/>
        </Routes>
    );
}
export default Router;