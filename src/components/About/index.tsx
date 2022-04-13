import React from "react";
import "./main.css";

function mapSkillValues(stack) {
  console.log(stack);
  return (
    <ul className="list-group">
      {stack.skills.map(function (skill) {
        return (
          <li key={skill.name} className="list-goup-item">
            <span>{skill.name}</span>
            <ul className="list-group">
              {skill.frameworks.map(function (frameworks) {
                return (
                  <li key={frameworks.name} className="list-group-item">
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
    var addressInfo = props.main.address;
  }

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mx-auto">
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
                <dl className="row">
                  <dt className="col-sm-3">Email</dt>
                  <dd className="col-sm-9">{props.main.email}</dd>
                  <dt className="col-sm-3">Phone</dt>
                  <dd className="col-sm-9">{props.main.phone}</dd>
                  <dt className="col-sm-3">Address</dt>
                  <dd className="col-sm-9">
                    <ul className="list-unstyled">
                      <li>{addressInfo.street}</li>
                      <li>{addressInfo.city}</li>
                      <li>{addressInfo.state}</li>
                      <li>{addressInfo.zip}</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 mx-auto">
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
                  <div className="col-12 col-md-2" />
                  <div className="backend col-12 col-md-3">
                    <p className="h3 text-center">
                      <b>Backend</b>
                    </p>
                    <div className="skill-list mx-auto">
                      {mapSkillValues(backend)}
                    </div>
                  </div>
                  <div className="col-12 col-md-2" />
                  <div className="frontend col-12 col-md-3">
                    <p className="h3 text-center">
                      <b>Frontend</b>
                    </p>
                    <div className="skill-list mx-auto">
                      {mapSkillValues(frontend)}
                    </div>
                  </div>
                  <div className="col-12 col-md-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
