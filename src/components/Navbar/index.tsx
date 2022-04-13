
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./main.css"




function CustomNavbar() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#header">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default  CustomNavbar ;