import React from "react";
import "./main.css";

export default function Social(social) {
  var networks = social.data.map(function (network) {
    return (
      <li className="mx-1" key={network.name}>
        <a href={network.url} target="_blank">
          <i className={network.className} role={network.role}  ></i>
        </a>
      </li>
    );
  });

  return (
    <div className="row">
      <ul className="social d-flex justify-content-center">{networks}</ul>
    </div>
  );
}
