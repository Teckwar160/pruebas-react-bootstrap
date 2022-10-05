import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./MyNavBar.css"

function MyNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="logo">PDN</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/Bandera1" className="myNavBar">Bandera 1</NavLink>
          <NavLink to="/Bandera2" className="myNavBar">Bandera 2</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;