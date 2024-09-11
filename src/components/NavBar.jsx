import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import Logo from '../assets/LogoA.png';
import './Navbar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="Navbar"
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand href="/" className="Navbar-brand">
          <img src={Logo} alt="Logo" className="Navbar-logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto Navbar-menu">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">¿Quienes Somos?</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
