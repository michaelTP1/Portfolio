import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import {main,portfolio,resume,testimonials} from "../resumeData.json";

function App() {
  return (
    <Header data={main}/>
  );
}

export default App;
