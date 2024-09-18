import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/LogoA.png";
import "./Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      expand="md" // Colapsar en pantallas medianas o más pequeñas
      className={`Navbar ${scrolling ? "dark" : "transparent"}`}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
    >
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/" className="Navbar-brand">
          <img src={Logo} alt="Logo" className="Navbar-logo-img" />
      

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar-menu">
            <Nav.Link href="/" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link href="/Venta" onClick={() => setExpanded(false)}>Venta</Nav.Link>
            <Nav.Link href="/about" onClick={() => setExpanded(false)}>¿Quiénes Somos?</Nav.Link>
            <Nav.Link href="/contact" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
            <Nav.Link href="/Funcionamiento" onClick={() => setExpanded(false)}>Cómo Funciona</Nav.Link>
            <Nav.Link href="/Preguntas" onClick={() => setExpanded(false)}>Preguntas Frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
