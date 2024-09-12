import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/LogoA.png';
import './Navbar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0 && scrolling === true) {
      setScrolling(false);
    } else if (window.scrollY !== 0 && scrolling !== true) {
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolling]);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`Navbar ${scrolling ? 'dark' : 'transparent'}`}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/" className="Navbar-brand">
          <img src={Logo} alt="Logo" className="Navbar-logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto Navbar-menu">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Precios">Precios</Nav.Link>
            <Nav.Link href="/Venta">Venta</Nav.Link>
            <Nav.Link href="/about">¿Quiénes Somos?</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <Nav.Link href="/Funcionamiento">Como Funciona</Nav.Link>
            <Nav.Link href="/Preguntas">Preguntas Frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
