import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageUsuarios from "../pages/PageUsuarios";
import PageProductos from "../pages/PageProductos";
import ItemProducto from "../components/itemProducto/ItemProducto";
import TablaProductos from "../components/tablaProductos/TablaProductos";
import TableSolicitantes from "../components/tablaSolicitante/TableSolicitante";
import FormularioSolicitante from "../components/formularioSolicitante/FormularioSolicitante";
import FormularioAutoAsignation from "../components/formularioAutoasignation/FormularioAutoAsignation";
//import Tarjeta from "../components/tarjeta/tarjeta";
function Router(){
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/info" element = {<Info/>}/>
            <Route path="/usuarios" element = {<PageUsuarios/>} />
            <Route path="/productos" element = {<PageProductos/>}/>
            <Route path="/prueba" element = {<TablaProductos/>}/>
            <Route path="/tableSolicitantes" element = {<TableSolicitantes/>}/>
            <Route path="/formSolicitantes" element = {<FormularioSolicitante/>}/>
            <Route path="/formAutoAsignation" element = {<FormularioAutoAsignation/>}/>
        </Routes>
    );
}
export default Router;