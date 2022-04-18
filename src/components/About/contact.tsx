import React from "react";
import "./main.css";
function Contact(props){
    var addressInfo = props.address;
    var phone=props.phone;
    var email=props.email;

    return(
        <div  id={props.id} className="contact row text-center">
              <div className="col-12">
                
                <p className="h2 mt-3">
                  <b>Contact</b>
                </p>
                <hr/>
                <dl className="row">
                  <dt className="col-sm-4">Email</dt>
                  <dd className="col-sm-8">{email}</dd>
                  <dt className="col-sm-4">Phone</dt>
                  <dd className="col-sm-8">{phone}</dd>
                  <dt className="col-sm-4">Address</dt>
                  <dd className="col-sm-8">
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
    )
}

export default Contact;