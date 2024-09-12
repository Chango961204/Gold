import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <div className="About-card">
        <h1 className="About-card-title">¿Quiénes Somos?</h1>
        <p className="About-card-text">
          En AguilaGold, somos una empresa mexicana especializada en la compra de oro, establecida en la histórica ciudad de Zacatecas. Nuestro enfoque es simple pero claro: “No vendemos nada, compramos”. Nos dedicamos exclusivamente a ofrecer una opción segura y confiable para quienes desean vender su oro, brindando una evaluación justa y transparente.
        </p>
        <p className="About-card-text">
          Con una sólida experiencia en el mercado de metales preciosos, en AguilaGold entendemos el valor y la importancia del oro como activo, y trabajamos con integridad para garantizar que cada transacción sea honesta y beneficiosa para nuestros clientes. Nos enorgullece ofrecer un servicio profesional, con atención personalizada y condiciones claras, lo que nos ha permitido ganar la confianza de quienes nos eligen.
        </p>
        <p className="About-card-text">
          Nuestro compromiso es ser líderes en la compra de oro en México, asegurando procesos seguros, pagos justos y un trato respetuoso. En AguilaGold, tu confianza y satisfacción son nuestra prioridad.
        </p>
      </div>
    </div>
  );
}

export default About;
