
import "./App.css";
import Header from "./components/header";
import {main,portfolio,resume, skills} from "../resumeData.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar";
import About from "./components/About";


function App() {
  return (
    <>
    <CustomNavbar/>
    <Header data={main}/>
    <About main={main} skills={skills}/>
    
    </>
    

  );
}

export default App;
