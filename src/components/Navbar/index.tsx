import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./main.css";

function CustomNavbar() {
  return (

 
  <Navbar id="navbar"  className="navbar d-flex justify-content-center" bg="dark" variant="dark"  fixed="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto d-flex justify-content-center m-auto">
      <Nav.Link className="text-center" href="#header">Home</Nav.Link>
      <Nav.Link className="text-center" href="#about">About</Nav.Link>
      <Nav.Link className="text-center" href="#experience">Experience</Nav.Link>
      <Nav.Link className="text-center" href="#skills">Skills</Nav.Link>
    </Nav>
  </Navbar>



//   <nav id="navbar" className="navbar navbar-light bg-light px-3">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <ul className="nav nav-pills">
//     <li className="nav-item">
//       <a className="nav-link" href="#about">First</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#experience">Second</a>
//     </li>
//     <li className="nav-item dropdown">
//       <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
//       <ul className="dropdown-menu">
//         <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
//         <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
//         <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
//       </ul>
//     </li>
//   </ul>
// </nav>
  );
}
export default CustomNavbar;
