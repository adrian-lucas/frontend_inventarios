import { useSelector } from "react-redux";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
import VistaPrincipal from "../components/vistaPrincipal/VistaPrincipal";
function Home(){
    const activeSession = useSelector((state)=>state.loginInfo.session);
    const viewWithLogin = ()=>{
        return(
        <div className="w3-row">
            <div className="w3-twothird">
                <VistaPrincipal/>
            </div>
            <div className="w3-third">
                
                <FormularioLogin/>
            </div>
        </div>
        )
    }
    return (

        <div>
            {activeSession?'este es el hombre': viewWithLogin()}
        </div>
    )
}
export default Home;