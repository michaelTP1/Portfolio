import React from "react";
import "./main.css";
import WorkTimeline from "./work_timeline";
import { useNav } from '../../customHooks/useNav';




export default function Experience(props) {

  const expRef= useNav("Experience");

  return (
    <div ref={expRef} id="experience">
      <div className="container d-flex flex-column">
        <p className="h2 text-center fw-bold ">Work Experience</p>
        <hr />
        <WorkTimeline workExperience={props.experience} />
      </div>
    </div>
  );
}
