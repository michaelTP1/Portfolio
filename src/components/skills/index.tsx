import React from "react";
import "./main.css";
import { useNav } from '../../customHooks/useNav';


function mapSkillValues(stack) {
  

  return (
    <ul  className="list-group">
      {stack.skills.map(function (skill) {
        return (
          <li key={skill.name} className="skill list-group-item">
            <span className="fw-bold">{skill.name}</span>
            <ul className="list-group">
              {skill.frameworks.map(function (frameworks) {
                return (
                  <li key={frameworks.name} className="sub-skill list-group-item text-center">
                    <span>{frameworks.name}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default function Skills(props) {
  var backend = props.skills[0];
  var frontend = props.skills[1];

  const skillsRef= useNav("Skills");

  return (
    <div ref={skillsRef} id="skills" className="section">
      <div className="Knowledge">
        <p className="h2 text-center">
          <b>Skills</b>
        </p>
        <div className="skills row">
          <div className="col-12 col-md-2" />
          <div className="backend col-12 col-md-3">
            <p className="h3 text-center">
              <b>Backend</b>
            </p>
            <div className="skill-list mx-auto">{mapSkillValues(backend)}</div>
          </div>
          <div className="col-12 col-md-2" />
          <div className="frontend col-12 col-md-3">
            <p className="h3 text-center">
              <b>Frontend</b>
            </p>
            <div className="skill-list mx-auto">{mapSkillValues(frontend)}</div>
          </div>
          <div className="col-12 col-md-2" />
        </div>
      </div>
    </div>
  );
}
