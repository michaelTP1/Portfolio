
import "./App.css";
import Header from "./components/header";
import {main,portfolio,resume,testimonials} from "../resumeData.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Header data={main}/>
  );
}

export default App;
