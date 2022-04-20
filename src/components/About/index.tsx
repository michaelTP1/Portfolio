import React from "react";
import Contact from "./contact";
import "./main.css";
import { useNav } from '../../customHooks/useNav';




export default function About(props) {
  if (props) {
    var name: String = props.main.name;
    var occupation: String = props.main.occupation;
    var description: String = props.main.description;
    var bio: String = props.main.bio;
    var img: string = props.main.image;
    var addressInfo = props.main.address;
     
  }
  const aboutRef= useNav("About");

  return (
    <div ref={aboutRef} id="about" >
      <div className="container d-flex flex-column">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 mx-auto text-center">
            <img
              src={img}
              className="profilepic img-fluid rounded-circle"
              alt="avatar"
            />
           <Contact id="contact_1" address= {addressInfo} email={props.main.email} phone={props.main.phone}/>
          </div>
          <div className="col-12 col-md-1"/>
          <div className="col-12 col-md-8 mx-auto ">
            <div className="row">
              <div className="about-me text-center">
                <p className="h2 fw-bold">
                  About Me
                </p>
                <p className="h4">{bio}</p>
              </div>
           
            </div>
            <Contact id="contact_2" address= {addressInfo} email={props.main.email} phone={props.main.phone}/>

          </div>
        </div>
      </div>
    </div>
  );
}
