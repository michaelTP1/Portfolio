import React from "react";
import Social from "../Networks";
import "./main.css";

const Header = (props) => {
  if (props.data) {
    var name: String = props.data.name;
    var occupation: String = props.data.occupation;
    var description: String = props.data.description;
    var city: String = props.data.address.city;
    var social = props.data.social;
  }

  return (
    <>
      <section id="header">
        <header className="container-fluid vh-100 d-flex bg-dark">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
            <h1 className="name responsive-headline text-center">{name}.</h1>
            <h3 className="bio">
              I'm a {city} based <span>{occupation}</span> {description}
            </h3>
            <hr />
            <Social data={social} />
            </div>
          </div>
        </header>
      </section>
    </>
  );
};
export default Header;
