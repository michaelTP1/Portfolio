import React from "react";
import "./main.css";

export default function About(props) {
  if (props) {
    var name: String = props.main.name;
    var occupation: String = props.main.occupation;
    var description: String = props.main.description;
    var city: String = props.main.address.city;
    var bio: String = props.main.bio;
    var img: string = props.main.image;
    var skills = props.skills.map((skill) => {
      return (
        <ul>
          <li>
            <p>{skill.name}</p>
            <ul>
              {skill.frameworks.map((framework) => {
                return(<li>{framework.name}</li>);
              })};
            </ul>
            
          </li>
        </ul>
      );
    });
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

                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
