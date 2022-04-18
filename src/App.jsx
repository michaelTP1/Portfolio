
import "./App.css";
import Header from "./components/header";
import {main, skills, experience} from "../resumeData.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Footer from "./components/footer";
import ContactMe from "./components/contact-me";


function App() {
  return (
    <>
    <CustomNavbar/>
    <Header data={main}/>
    <About main={main} />
    <hr/>
    <Experience experience={experience}/>
    <hr/>
    <Skills skills={skills}/>
    <hr/>
    <ContactMe/>
    <Footer/>
    </>
    

  );
}

export default App;
