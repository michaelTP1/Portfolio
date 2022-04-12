import React from "react";
import Social from "../Networks";
import "./main.css";

const Header = (props) => {
  if (props.data) {
    var name: String = props.data.name;
    var occupation: String = props.data.occupation;
    var description: String = props.data.description;
    var city: String = props.data.address.city;
    var social= props.data.social;
    
  }

  return (
    <>
      <section className="Header">
        <header className="container-fluid">
          <div className="row text-center">
          </div>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{name}.</h1>
              <h3>
                I'm a {city} based <span>{occupation}</span> {description}
              </h3>
              <hr />
              </div>
          </div>
          <Social data={social} />
        </header>
      </section>
    </>
  );
};
export default Header;
