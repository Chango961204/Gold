import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home-content">
        <div className="Home-cards">
          <Card className="Home-card">
            <div className="Home-card-background">
              <Card.Body>
                <Card.Title className="Home-card-title">Contáctanos</Card.Title>
                <Button
                  variant="primary"
                  className="Home-card-button"
                  href="https://wa.me/+524921240600"
                  target="_blank"
                >
                  <FaWhatsapp /> Envíanos un mensaje
                </Button>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
