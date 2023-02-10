import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar expand="lg" class="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={require("../logo.png")}
            width="113.5625"
            height="45.6875"
            className="d-inline-block align-top"
            alt="Linkidney Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#individual">Individual</Nav.Link>
            <Nav.Link href="#business">Business</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
