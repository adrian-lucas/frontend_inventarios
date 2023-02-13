import Router from "./routes/Router";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useSelector } from "react-redux";
function App() {
  const handlerLogin = useSelector((state)=>state.loginState.value);
  return (
    <div>
      <div> 
       <Header/>
       <NavBar/>
      </div>
      <div>
        <Router handlerLogin = {handlerLogin}/>
      </div>

      <div>
       <Footer/>
      </div>
     
    </div>
  );
}

export default App;
