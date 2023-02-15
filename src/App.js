import Router from "./routes/Router";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "./app/store";
import { login,logout } from "./app/features/loginInfo";
function App() {
  const sessionInfo= useSelector((state)=>state.loginInfo);
  console.log('infoProveniente de appjs',sessionInfo.userInfo,'infosession',sessionInfo.session);
  useEffect(() => {
       verifySesion();
  }, [])
  
  const verifySesion = ()=>{
      if(localStorage.getItem('access_token')!==null){
          store.dispatch(login());
      }else{
        store.dispatch(logout());
      }
  }
  return (
    <div>
      <div> 
       <Header sessionInfo = {sessionInfo}/>
      <NavBar sessionInfo = {sessionInfo}/>
      </div>
      <div>
        <Router activeSession = {sessionInfo.session}/>
      </div>

      <div>
       <Footer/>
      </div>
     
    </div>
  );
}

export default App;
