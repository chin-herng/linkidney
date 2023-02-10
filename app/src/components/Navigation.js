import React from "react";
import { useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar">
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
            {useLocation().pathname === "/login" && (
              <>
                <LinkContainer to="/individual">
                  <Nav.Link>Individual</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/business">
                  <Nav.Link>Business</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/help">
                  <Nav.Link>Help</Nav.Link>
                </LinkContainer>
              </>
            )}

            <LinkContainer to="/login">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
