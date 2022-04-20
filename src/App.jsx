import Header from "./components/header";
import { main, skills, experience } from "../resumeData.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Footer from "./components/footer";
import ContactMe from "./components/contact-me";
import { useState } from "react";
import NavProvider from "./components/context/NavContext";
import { Nav } from "./components/nav";
import "./app.css";

function App() {
  const [navSection, setNavSection] = useState(0);

  return (
    <div className="App">
      <NavProvider>
        <Nav />
        <Header data={main} />
        <div className="gradient"/>
        <About main={main} />
        <hr />
        <Experience experience={experience} />
        <hr />
        <Skills skills={skills} />
        <hr />
        <ContactMe />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
