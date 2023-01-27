import Router from "./routes/Router";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <div> 
       <Header/>
       <NavBar/>
      </div>
      <div>
        <Router />
      </div>

      <div>
       <Footer/>
      </div>
     
    </div>
  );
}

export default App;
