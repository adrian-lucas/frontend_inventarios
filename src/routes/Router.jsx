import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/>
        </Routes>
    );
}
export default Router;