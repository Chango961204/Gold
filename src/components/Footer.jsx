import React, { useState, useEffect } from 'react';
import './Footer.css'; // Asegúrate de importar los estilos del pie de página
import Logo from '../assets/LogoA.png';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientY } = event;
      // Detectar si el cursor está cerca de la parte inferior de la pantalla
      if (clientY >= window.innerHeight - 50) { // Ajusta el valor según lo necesites
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    const handleTouchMove = (event) => {
      const touchY = event.touches[0].clientY; // Obtiene la posición del dedo
      // Detectar si el toque está cerca de la parte inferior de la pantalla
      if (touchY >= window.innerHeight - 50) { // Ajusta el valor según lo necesites
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove); // Agregar el listener para touchmove

    // Limpia los eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove); // Limpiar touchmove
    };
  }, []);

  return (
    <footer className={`Footer ${showFooter ? 'visible' : 'hidden'}`}>
      <div className="Footer-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Footer-info">
        <div className="Footer-social">
          <a href="https://www.facebook.com/profile.php?id=61565766957756" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://wa.me/+524922009694" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:aguilagoldmx@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Correo">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
