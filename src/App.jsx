
import "./App.css";
import Header from "./components/header";
import {main,portfolio,resume} from "../resumeData.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar";
import About from "./components/About";
function App() {
  return (
    <>
    <CustomNavbar/>
    <Header data={main}/>
    <About data={main}/>
    
    </>
    

  );
}

export default App;
