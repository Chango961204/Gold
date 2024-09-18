import React, { useState, useEffect } from 'react';
import './Footer.css'; // Asegúrate de importar los estilos del pie de página
import Logo from '../assets/LogoA.png';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si el usuario está haciendo scroll hacia abajo
      if (currentScrollY > lastScrollY) {
        // Muestra el footer cuando el usuario está en la parte inferior de la página
        const scrollPosition = window.innerHeight + currentScrollY;
        const bottomPosition = document.documentElement.offsetHeight - 100; // Ajusta este valor si es necesario
        
        if (scrollPosition >= bottomPosition) {
          setShowFooter(true);
        }
      } else {
        // Oculta el footer cuando el usuario sube el scroll
        setShowFooter(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
          <a href="https://wa.me/+524921240600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
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
