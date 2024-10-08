import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'wouter';
import Logo from "../assets/LogoA.png";
import "./NavBar.css"; 

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
      expand="md"
      className={`Navbar ${scrolling ? "dark" : "transparent"}`}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="Navbar-brand orbitron-light">
          <img src={Logo} alt="Logo" className="Navbar-logo-img" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`Navbar-menu ${expanded ? 'show' : ''}`}>
        <Nav>
        <Link href="/" onClick={() => setExpanded(false)} className="nav-link">Inicio</Link>
        <Link href="/Venta" onClick={() => setExpanded(false)} className="nav-link">GoldPrice</Link>
        <Link href="/About" onClick={() => setExpanded(false)} className="nav-link">¿Quiénes Somos?</Link>
        <Link href="/Contact" onClick={() => setExpanded(false)} className="nav-link">Contacto</Link>
        <Link href="/Funcionamiento" onClick={() => setExpanded(false)} className="nav-link">Cómo Funciona</Link>
        <Link href="/Preguntas" onClick={() => setExpanded(false)} className="nav-link">Preguntas Frecuentes</Link>
        </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
