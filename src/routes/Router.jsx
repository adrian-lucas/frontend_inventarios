import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import PageLista from "../pages/pageLista";
function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/lista" element= {<PageLista/>}/>
        </Routes>
    );
}
export default Router;