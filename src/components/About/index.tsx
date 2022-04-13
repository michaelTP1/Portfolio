import React from "react";
import "./main.css";





function mapSkillValues(stack) {
  return (
    <ul>
      {stack.skill.map(function (skill) {
        return (
          <li key={skill.name}>
            <i className={skill.className}></i>
            <span>{skill.name}</span>
          </li>
        );
      )}
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
    var backend = props.skills.backend.map(function (skill) {
      return (
        <ul>
          <li className="backend-list list-group-item" key={skill.name}>
            <p>{skill.name}</p>
          </li>
        </ul>
      );
    });
    var frontend = props.skills.frontend;
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
            <div className="row text-center">
              <div className="about-me">
                <h1>
                  <b>About Me</b>
                </h1>
                <p>{bio}</p>
              </div>
              <div className="Knowledge">
                <p className="h2">
                  <b>Knowledge</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
