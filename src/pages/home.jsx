import { useSelector } from "react-redux";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
function Home(){
    const activeSession = useSelector((state)=>state.loginInfo.session);
    const viewWithLogin = ()=>{
        return(<div>
            este es el home
            <FormularioLogin/>
        </div>)
    }
    return (

        <div>
            {activeSession?'este es el hombre': viewWithLogin()}
        </div>
    )
}
export default Home;