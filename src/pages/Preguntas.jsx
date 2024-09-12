import React from 'react';
import './Preguntas.css'; // Asegúrate de crear este archivo CSS para los estilos

function Preguntas() {
  const preguntas = [
    {
      titulo: '¿Cuál es el mínimo de compra?',
      respuesta: 'Nosotros te compramos desde 1 gramo de Oro hasta grandes cantidades. (Puede ser de diversos quilatajes).',
    },
    {
      titulo: '¿Puedo vender mi joyería maltratada?',
      respuesta: 'Nos dedicamos a la compra de Oro, Plata Y Diamantes en cualquier cantidad y condición, por lo que nos puedes traer tus piezas de joyería vieja, rota o incompleta, así como también monedas maltratadas u oro fundido tendiendo la ventaja de que te pagamos el mejor precio sin importar la condición.',
    },
    {
      titulo: '¿Compran Diamantes y Piedras Preciosas?',
      respuesta: 'Si pero solamente compramos Diamantes, el resto de las piedras preciosas como rubís, zafiros o esmeraldas de momento no las estamos comprando.',
    },
    {
      titulo: '¿Cuál es el precio del Oro?',
      respuesta: 'Publicamos el precio del Oro Internacional en nuestra página de Internet, y estos son actualizados diariamente. También podemos proporcionarte el precio telefónicamente.',
    },
    {
      titulo: '¿Cuánto vale mi joyería?',
      respuesta: 'El valor de tu joyería lo puedes calcular con la siguiente fórmula: (Precio) X (Peso en gramos) = Valor de su joyería. *Los precios del oro cambian de acuerdo al mercado de Oro internacional.',
    },
    {
      titulo: '¿Tienen sucursales?',
      respuesta: 'Negativo, no tenemos sucursales.',
    },
    {
      titulo: '¿Qué requisitos necesito para vender mi oro?',
      respuesta: 'Para vendernos su oro, plata o diamantes solicitamos una identificación oficial como la Credencial de Elector, Pasaporte Mexicano, etc.',
    },
  ];

  return (
    <div className="Preguntas">
      {preguntas.map((pregunta, index) => (
        <div key={index} className="Preguntas-card">
          <h3 className="Preguntas-card-title">{pregunta.titulo}</h3>
          <p className="Preguntas-card-text">{pregunta.respuesta}</p>
        </div>
      ))}
    </div>
  );
}

export default Preguntas;
