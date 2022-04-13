import React from "react";
import "./main.css";

export default function About(props) {
  if (props.data) {
    var name: String = props.data.name;
    var occupation: String = props.data.occupation;
    var description: String = props.data.description;
    var city: String = props.data.address.city;
    var social = props.data.social;
  }

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-2 mx-auto text-center">
            <img src="https://avatars.githubusercontent.com/u/45592667?v=4" className="profilepic img-fluid rounded-circle" alt="avatar" />
          </div>
          <div className="col-10 mx-auto">

          </div>
        </div>
      </div>
    </section>
  );
}
