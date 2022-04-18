import React from "react";
import "./main.css";

function mapWorkExperience(workExperience) {
  var workKey: number = 0;
  return (
       <ul className="list-unstyled work-timeline">
      {workExperience.map(function (work) {
       
        return (
          <li key={workKey++} className="work-experience-item" data-date={work.date}>
            <div className="row work-experience-item-row">
              <div className="col-2 time ">
                {work.date}
              </div>
              <div className="col-10  work-info">
              <p className="h4 workplace">
                {work.company} - {work.location}
              </p>

              <p className="h5 title">
                {work.title} 
              </p>
              <p>{work.description}</p>
              </div>
            </div>
              
          </li>
        );
      })}
    </ul>
  );
}

export default function WorkTimeline(props) {
  return (
    <>
      <section className="Header">
        {mapWorkExperience(props.workExperience)}
      </section>
    </>
  );
}
