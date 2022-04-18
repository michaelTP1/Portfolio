import React from "react";
import "./main.css";
import WorkTimeline from "./work_timeline";

export default function Experience(props) {
  return (
    <section className="Experience">
      <div className="container d-flex flex-column">
        <h1 className="text-center fw-bold ">Work Experience</h1>
        <hr />
        <WorkTimeline workExperience={props.experience} />
      </div>
    </section>
  );
}
