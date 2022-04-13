import React from "react";
import "./main.css";





function mapSkillValues(stack) {
  console.log(stack);
  return (
    <ul>
      {stack.skills.map(function (skill) {
        return (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <ul>
              {skill.frameworks.map(function (frameworks) {
                return (
                  <li key={frameworks.name}>
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

export default function About(props) {
  if (props) {
    var name: String = props.main.name;
    var occupation: String = props.main.occupation;
    var description: String = props.main.description;
    var city: String = props.main.address.city;
    var bio: String = props.main.bio;
    var img: string = props.main.image;
    var backend = props.skills[0];
    var frontend = props.skills[1];
  
  }

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mx-auto text-center">
            <img
              src={img}
              className="profilepic img-fluid rounded-circle"
              alt="avatar"
            />
            <div className="contact row">
              <div className="col-12">
                <p className="h2 mt-3">
                  <b>Contact</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 mx-auto">
            <div className="row">
              <div className="about-me text-center">
                <h1>
                  <b>About Me</b>
                </h1>
                <p>{bio}</p>
              </div>
              <div className="Knowledge">
                <p className="h2 text-center">
                  <b>Knowledge</b>
                </p>
                <div className="skills row">
                  <div className="backend col-12 col-md-6">
                    <p className="h3 text-center"><b>Backend</b></p>
                    <div className="skill-list mx-auto">{mapSkillValues(backend)}</div>
                  </div>
                  <div className="frontend col-12 col-md-6">
                    <p className="h3 text-center"><b>Frontend</b></p>
                    <div className="skill-list mx-auto">{mapSkillValues(frontend)}</div>
                    
                  </div>  
                </div>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
