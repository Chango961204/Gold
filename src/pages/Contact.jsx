import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Contact.css"; 

const Contact = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 200); // Cambia el tiempo de la animación si es necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-card-container">
      <Card style={{ width: '16rem' }} className={`contact-card m-3 ${showCards ? 'show' : ''}`} id="whatsapp-card">
        <Card.Body>
          <Card.Title className="contact-card-title">WhatsApp</Card.Title>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Logo" 
            style={{ width: '32px', height: '32px', marginLeft: '8px' }} 
          />
          <a 
            href="https://wa.me/+524921240600" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn-whatsapp"
          >
            Escríbenos un mensaje
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: '16rem' }} className={`contact-card m-3 ${showCards ? 'show' : ''}`} id="facebook-card">
        <Card.Body>
          <Card.Title className="contact-card-title">Facebook</Card.Title>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
            alt="Facebook Logo" 
            style={{ width: '32px', height: '32px', marginLeft: '8px' }} 
          />
          <a 
            href="https://www.facebook.com/profile.php?id=61565766957756" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn-facebook"
          >
            Visítanos en Facebook
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: '16rem' }} className={`contact-card m-3 ${showCards ? 'show' : ''}`} id="instagram-card">
        <Card.Body>
          <Card.Title className="contact-card-title">Instagram</Card.Title>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
            alt="Instagram Logo" 
            style={{ width: '32px', height: '32px', marginLeft: '8px' }} 
          />
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn-instagram"
          >
            Visítanos en Instagram
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: '16rem' }} className={`contact-card m-3 ${showCards ? 'show' : ''}`} id="email-card">
        <Card.Body>
          <Card.Title className="contact-card-title">Correo</Card.Title>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
            alt="Email Logo" 
            style={{ width: '32px', height: '32px', marginLeft: '8px' }} 
          />
          <a 
            href="mailto:aguilagoldmx@gmail.com" // Cambiado a mailto para abrir el cliente de correo
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn-email"
          >
            Envíanos un correo
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
