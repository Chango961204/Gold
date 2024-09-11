// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Asegúrate de importar los estilos del pie de página
import Logo from '../assets/LogoGold.jpg'

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Footer-info">
        <div className="Footer-contact">
          <p><i className="fas fa-map-marker-alt"></i>Zacatecas,Zacatecas</p>
          <p><i className="fas fa-envelope"></i>Correo: info@example.com</p>
          <p><i className="fas fa-phone"></i>Teléfono: 4925597474</p>
        </div>
        <div className="Footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
