import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home-content">
        <h1>Aguila Gold</h1>
        <h2>Tu socio de Confianza</h2>
        <h3>Tasación Gratuita y al instante</h3>
        <div className="Home-cards">
          <Card className="Home-card">
            <div className="Home-card-background">
              <Card.Body>
                <Card.Title className="Home-card-title">
                  Vende tu Oro
                </Card.Title>
                <Card.Text className="Home-card-text">
                  Obtén la mejor oferta para tu oro con nuestra plataforma de
                  compra/venta.
                </Card.Text>
                <Button
                  variant="primary"
                  className="Home-card-button"
                  href="/Venta"
                >
                  Ver más
                </Button>
              </Card.Body>
            </div>
          </Card>
          <Card className="Home-card">
            <div className="Home-card-background">
              <Card.Body>
                <Card.Title className="Home-card-title">Contactanos</Card.Title>
                <Card.Text className="Home-card-text">
                  Obtén la mejor oferta para tu oro con nuestra plataforma de
                  compra/venta.
                </Card.Text>
                <Button
                  variant="primary"
                  className="Home-card-button"
                  href="/contact"
                >
                  Ver más
                </Button>
              </Card.Body>
            </div>
          </Card>
          <Card className="Home-card">
            <div className="Home-card-background">
              <Card.Body>
                <Card.Title className="Home-card-title">
                ¿Como trabajamos?
                </Card.Title>
                <Card.Text className="Home-card-text">
                  Obtén información de como puedes vender tu oro aqui con nosotros
                </Card.Text>
                <Button
                  variant="primary"
                  className="Home-card-button"
                  href="/Preguntas"
                >
                  Ver más
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
