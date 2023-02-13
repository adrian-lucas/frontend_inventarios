import { useSelector } from "react-redux";
import FormularioLogin from "../components/formularioLogin/FormularioLogin";
function Home(){
    const handlerLogin = useSelector((state)=>state.loginState.value);
    const viewWithLogin = ()=>{
        return(<div>
            este es el home
            <FormularioLogin/>
        </div>)
    }
    return (

        <div>
            {handlerLogin?'este es el hombre': viewWithLogin()}
        </div>
    )
}
export default Home;