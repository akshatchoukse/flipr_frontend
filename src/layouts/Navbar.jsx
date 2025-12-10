import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const logo = new URL("../assets/logo.svg", import.meta.url);

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" bg="white" className="navbar-custom shadow-sm py-2">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Site Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center navLink">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/facilities">
              <Nav.Link>SERVICES</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/activities">
              <Nav.Link>ABOUT PROJECT</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/careers">
              <Nav.Link>CAREERS</Nav.Link>
            </LinkContainer>

            <Button className="contact mx-2">CONTACT</Button>

            <Button 
              onClick={() => navigate("/login")} 
              className="login-btn"
            >
              ADMIN LOGIN
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
