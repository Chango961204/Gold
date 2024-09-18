// src/pages/Contact.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-cards">
        <Card className="Contact-card">
          <div className="Contact-card-background">
            <Card.Body>
              <Card.Title className="Contact-card-title">WhatsApp</Card.Title>
              <Button
                variant="primary"
                className="Contact-card-button"
                href="https://wa.me/+524921240600"
                target="_blank"
              >
                <FaWhatsapp /> Envíanos un mensaje
              </Button>
            </Card.Body>
          </div>
        </Card>

        <Card className="Contact-card">
          <div className="Contact-card-background">
            <Card.Body>
              <Card.Title className="Contact-card-title">Facebook</Card.Title>
              <Button
                variant="primary"
                className="Contact-card-button"
                href="https://www.facebook.com/profile.php?id=61565766957756"
                target="_blank"
              >
                <FaFacebook /> Síguenos en Facebook
              </Button>
            </Card.Body>
          </div>
        </Card>

        <Card className="Contact-card">
          <div className="Contact-card-background">
            <Card.Body>
              <Card.Title className="Contact-card-title">Instagram</Card.Title>
              <Button
                variant="primary"
                className="Contact-card-button"
                href="https://instagram.com/tu-pagina"
                target="_blank"
              >
                <FaInstagram /> Síguenos en Instagram
              </Button>
            </Card.Body>
          </div>
        </Card>

        <Card className="Contact-card">
          <div className="Contact-card-background">
            <Card.Body>
              <Card.Title className="Contact-card-title">Correo Electrónico</Card.Title>
              <Button
                variant="primary"
                className="Contact-card-button"
                href="mailto:aguilagoldmx@gmail.com"
              >
                <FaEnvelope /> Escríbenos un correo
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
