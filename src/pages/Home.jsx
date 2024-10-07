import React from 'react';
import './Home.css'; 

function Home() {

  return (
    <div className="home-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Bienvenido</h2>
          <p className="card-description">¡Contáctanos a través de WhatsApp!</p>
          <a href="https://wa.me/+524921240600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
