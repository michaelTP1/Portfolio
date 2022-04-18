import React from "react";
import "./main.css";

export default function ContactMe() {
  return (
    <section className="contact-me">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="h1 text-center">Contact Me</p>
            <p>
              I am currently looking for a position in the software development field. If you are interested in working with me, please contact me.
            </p>
            <a
              className="email-link"
              href="mailto:michaeljtp1@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
