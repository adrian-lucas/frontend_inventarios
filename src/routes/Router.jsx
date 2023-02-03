import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageUsuarios from "../pages/PageUsuarios";
import PageProductos from "../pages/PageProductos";
//import Tarjeta from "../components/tarjeta/tarjeta";
function Router(){
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/info" element = {<Info/>}/>
            <Route path="/usuarios" element = {<PageUsuarios/>} />
            <Route path="/productos" element = {<PageProductos/>}/>
        </Routes>
    );
}
export default Router;