import React from "react";
import "./main.css";
import WorkTimeline from "./work_timeline";

export default function Experience(props) {
  return (
    <div id="experience">
      <div className="container d-flex flex-column">
        <p className="h2 text-center fw-bold ">Work Experience</p>
        <hr />
        <WorkTimeline workExperience={props.experience} />
      </div>
    </div>
  );
}
